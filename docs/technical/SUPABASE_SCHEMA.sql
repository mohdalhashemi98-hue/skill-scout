-- =============================================================================
-- Skill Scout - Supabase Database Schema
-- Production-ready schema for AI automation platform
-- =============================================================================
-- This schema supports multi-tenant client management with:
--   - Row Level Security (RLS) for data isolation
--   - Usage tracking and billing support
--   - Audit logging for compliance
--   - File management via Supabase Storage
--   - Conversation history with JSONB flexibility
-- =============================================================================

-- Enable required extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- =============================================================================
-- 1. CLIENTS TABLE
-- Core table for tenant management. Each client represents a business
-- using the platform with their own API key, messaging config, and plan.
-- =============================================================================

CREATE TABLE clients (
    id              UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name            TEXT NOT NULL,
    email           TEXT NOT NULL UNIQUE,
    company         TEXT,
    plan            TEXT NOT NULL DEFAULT 'starter'
                        CHECK (plan IN ('starter', 'professional', 'business', 'enterprise')),
    api_key         TEXT NOT NULL UNIQUE DEFAULT encode(gen_random_bytes(32), 'hex'),
    whatsapp_phone  TEXT,
    telegram_bot_token TEXT,
    allowed_commands TEXT[] DEFAULT '{}',
    max_monthly_messages INT NOT NULL DEFAULT 1000,
    created_at      TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at      TIMESTAMPTZ NOT NULL DEFAULT now()
);

COMMENT ON TABLE clients IS 'Multi-tenant client accounts. Each client is an independent business using the platform.';
COMMENT ON COLUMN clients.api_key IS 'Auto-generated hex API key for authenticating webhook and API requests.';
COMMENT ON COLUMN clients.allowed_commands IS 'Legacy array field; prefer the allowed_commands table for granular control.';
COMMENT ON COLUMN clients.max_monthly_messages IS 'Plan-based message cap. Starter=1000, Professional=5000, Business=25000, Enterprise=unlimited(-1).';

CREATE INDEX idx_clients_email ON clients (email);
CREATE INDEX idx_clients_api_key ON clients (api_key);
CREATE INDEX idx_clients_plan ON clients (plan);

-- RLS: clients can only read and update their own row
ALTER TABLE clients ENABLE ROW LEVEL SECURITY;

CREATE POLICY clients_select_own ON clients
    FOR SELECT
    USING (auth.uid() = id);

CREATE POLICY clients_update_own ON clients
    FOR UPDATE
    USING (auth.uid() = id)
    WITH CHECK (auth.uid() = id);

-- Service role bypasses RLS for admin operations
CREATE POLICY clients_service_role ON clients
    FOR ALL
    USING (auth.role() = 'service_role');

-- =============================================================================
-- 2. CONVERSATIONS TABLE
-- Stores conversation threads across platforms. Each conversation ties to
-- a client and an external user on a specific platform.
-- Messages are stored as a JSONB array for schema flexibility.
-- =============================================================================

CREATE TABLE conversations (
    id                  UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    client_id           UUID NOT NULL REFERENCES clients(id) ON DELETE CASCADE,
    platform            TEXT NOT NULL CHECK (platform IN ('whatsapp', 'telegram', 'slack')),
    external_user_id    TEXT NOT NULL,
    messages            JSONB[] DEFAULT '{}',
    context             JSONB DEFAULT '{}',
    status              TEXT NOT NULL DEFAULT 'active'
                            CHECK (status IN ('active', 'archived')),
    created_at          TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at          TIMESTAMPTZ NOT NULL DEFAULT now()
);

COMMENT ON TABLE conversations IS 'Conversation threads per client per platform user.';
COMMENT ON COLUMN conversations.messages IS 'Array of JSONB message objects: {role, content, timestamp, metadata}.';
COMMENT ON COLUMN conversations.context IS 'Arbitrary context passed to the AI agent (user preferences, session state, etc).';

-- Composite index for fast lookups by client + platform + user
CREATE INDEX idx_conversations_client_platform_user
    ON conversations (client_id, platform, external_user_id);

CREATE INDEX idx_conversations_status ON conversations (status) WHERE status = 'active';
CREATE INDEX idx_conversations_updated ON conversations (updated_at DESC);

-- RLS: clients can only access their own conversations
ALTER TABLE conversations ENABLE ROW LEVEL SECURITY;

CREATE POLICY conversations_select_own ON conversations
    FOR SELECT
    USING (client_id = auth.uid());

CREATE POLICY conversations_insert_own ON conversations
    FOR INSERT
    WITH CHECK (client_id = auth.uid());

CREATE POLICY conversations_update_own ON conversations
    FOR UPDATE
    USING (client_id = auth.uid())
    WITH CHECK (client_id = auth.uid());

CREATE POLICY conversations_delete_own ON conversations
    FOR DELETE
    USING (client_id = auth.uid());

CREATE POLICY conversations_service_role ON conversations
    FOR ALL
    USING (auth.role() = 'service_role');

-- =============================================================================
-- 3. FILES TABLE
-- Tracks files uploaded or generated within the platform.
-- Actual file content lives in Supabase Storage; this table holds metadata.
-- =============================================================================

CREATE TABLE files (
    id                  UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    client_id           UUID NOT NULL REFERENCES clients(id) ON DELETE CASCADE,
    conversation_id     UUID REFERENCES conversations(id) ON DELETE SET NULL,
    filename            TEXT NOT NULL,
    file_path           TEXT NOT NULL,
    file_size           BIGINT NOT NULL DEFAULT 0,
    mime_type           TEXT NOT NULL DEFAULT 'application/octet-stream',
    upload_source       TEXT NOT NULL DEFAULT 'user'
                            CHECK (upload_source IN ('user', 'system', 'terminal')),
    created_at          TIMESTAMPTZ NOT NULL DEFAULT now()
);

COMMENT ON TABLE files IS 'Metadata for files stored in Supabase Storage bucket "client-files".';
COMMENT ON COLUMN files.file_path IS 'Path within the Supabase Storage bucket, e.g. "{client_id}/reports/report.pdf".';
COMMENT ON COLUMN files.upload_source IS 'Origin of file: user upload, system-generated, or terminal command output.';

CREATE INDEX idx_files_client ON files (client_id);
CREATE INDEX idx_files_conversation ON files (conversation_id) WHERE conversation_id IS NOT NULL;
CREATE INDEX idx_files_created ON files (created_at DESC);

-- RLS: clients can only access their own files
ALTER TABLE files ENABLE ROW LEVEL SECURITY;

CREATE POLICY files_select_own ON files
    FOR SELECT
    USING (client_id = auth.uid());

CREATE POLICY files_insert_own ON files
    FOR INSERT
    WITH CHECK (client_id = auth.uid());

CREATE POLICY files_delete_own ON files
    FOR DELETE
    USING (client_id = auth.uid());

CREATE POLICY files_service_role ON files
    FOR ALL
    USING (auth.role() = 'service_role');

-- =============================================================================
-- 4. USAGE TABLE
-- Monthly aggregated usage metrics per client for billing and monitoring.
-- One row per client per month; upserted via database functions.
-- =============================================================================

CREATE TABLE usage (
    id                  UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    client_id           UUID NOT NULL REFERENCES clients(id) ON DELETE CASCADE,
    month               DATE NOT NULL,
    messages_sent       INT NOT NULL DEFAULT 0,
    messages_received   INT NOT NULL DEFAULT 0,
    commands_executed   INT NOT NULL DEFAULT 0,
    files_transferred   INT NOT NULL DEFAULT 0,
    ai_tokens_used      BIGINT NOT NULL DEFAULT 0,
    cost_usd            DECIMAL(12, 4) NOT NULL DEFAULT 0.0,
    created_at          TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at          TIMESTAMPTZ NOT NULL DEFAULT now(),

    CONSTRAINT usage_client_month_unique UNIQUE (client_id, month)
);

COMMENT ON TABLE usage IS 'Monthly usage aggregates per client. One row per client per calendar month.';
COMMENT ON COLUMN usage.month IS 'First day of the billing month, e.g. 2026-03-01.';
COMMENT ON COLUMN usage.ai_tokens_used IS 'Total AI tokens (input + output) consumed across all conversations.';
COMMENT ON COLUMN usage.cost_usd IS 'Computed cost in USD based on token pricing and plan rates.';

CREATE INDEX idx_usage_client_month ON usage (client_id, month DESC);

-- RLS: clients can only read their own usage
ALTER TABLE usage ENABLE ROW LEVEL SECURITY;

CREATE POLICY usage_select_own ON usage
    FOR SELECT
    USING (client_id = auth.uid());

CREATE POLICY usage_service_role ON usage
    FOR ALL
    USING (auth.role() = 'service_role');

-- =============================================================================
-- 5. ALLOWED COMMANDS TABLE
-- Granular command whitelisting per client. Each row defines a command
-- pattern (supports wildcards) that the client's bot users can execute.
-- =============================================================================

CREATE TABLE allowed_commands (
    id              UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    client_id       UUID NOT NULL REFERENCES clients(id) ON DELETE CASCADE,
    command_pattern TEXT NOT NULL,
    description     TEXT,
    is_enabled      BOOLEAN NOT NULL DEFAULT true,
    created_at      TIMESTAMPTZ NOT NULL DEFAULT now()
);

COMMENT ON TABLE allowed_commands IS 'Per-client command whitelist. Patterns support wildcards, e.g. "/file *" or "/report *".';
COMMENT ON COLUMN allowed_commands.command_pattern IS 'Glob-style pattern matched against incoming commands.';

CREATE INDEX idx_allowed_commands_client ON allowed_commands (client_id);
CREATE INDEX idx_allowed_commands_enabled ON allowed_commands (client_id, is_enabled) WHERE is_enabled = true;

-- RLS: clients can manage their own commands
ALTER TABLE allowed_commands ENABLE ROW LEVEL SECURITY;

CREATE POLICY allowed_commands_select_own ON allowed_commands
    FOR SELECT
    USING (client_id = auth.uid());

CREATE POLICY allowed_commands_insert_own ON allowed_commands
    FOR INSERT
    WITH CHECK (client_id = auth.uid());

CREATE POLICY allowed_commands_update_own ON allowed_commands
    FOR UPDATE
    USING (client_id = auth.uid())
    WITH CHECK (client_id = auth.uid());

CREATE POLICY allowed_commands_delete_own ON allowed_commands
    FOR DELETE
    USING (client_id = auth.uid());

CREATE POLICY allowed_commands_service_role ON allowed_commands
    FOR ALL
    USING (auth.role() = 'service_role');

-- =============================================================================
-- 6. AUDIT LOG TABLE
-- Immutable log of all significant actions. No RLS -- admin-only access
-- enforced at the application layer via service_role key.
-- =============================================================================

CREATE TABLE audit_log (
    id          UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    client_id   UUID NOT NULL REFERENCES clients(id) ON DELETE CASCADE,
    action      TEXT NOT NULL,
    details     JSONB DEFAULT '{}',
    ip_address  INET,
    user_agent  TEXT,
    created_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);

COMMENT ON TABLE audit_log IS 'Immutable audit trail. No RLS -- accessed only via service_role. Do not expose to client-facing APIs.';

CREATE INDEX idx_audit_log_client_created ON audit_log (client_id, created_at DESC);
CREATE INDEX idx_audit_log_action ON audit_log (action);

-- Audit log intentionally has NO RLS; access is restricted to service_role
-- at the application level. We still enable RLS but only grant service_role.
ALTER TABLE audit_log ENABLE ROW LEVEL SECURITY;

CREATE POLICY audit_log_service_role ON audit_log
    FOR ALL
    USING (auth.role() = 'service_role');

-- =============================================================================
-- SUPABASE STORAGE - Client Files Bucket
-- =============================================================================

-- Create the storage bucket for client files
-- In Supabase, this is done via the dashboard or the storage API.
-- The SQL below uses the storage schema directly.
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
    'client-files',
    'client-files',
    false,
    52428800, -- 50 MB max file size
    ARRAY[
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'application/vnd.ms-excel',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'application/zip',
        'text/plain',
        'text/csv',
        'image/png',
        'image/jpeg',
        'image/gif',
        'image/webp',
        'video/mp4',
        'audio/mpeg'
    ]
)
ON CONFLICT (id) DO NOTHING;

-- Storage RLS: clients can only access files in their own folder ({client_id}/*)
CREATE POLICY storage_client_files_select ON storage.objects
    FOR SELECT
    USING (
        bucket_id = 'client-files'
        AND (storage.foldername(name))[1] = auth.uid()::text
    );

CREATE POLICY storage_client_files_insert ON storage.objects
    FOR INSERT
    WITH CHECK (
        bucket_id = 'client-files'
        AND (storage.foldername(name))[1] = auth.uid()::text
    );

CREATE POLICY storage_client_files_delete ON storage.objects
    FOR DELETE
    USING (
        bucket_id = 'client-files'
        AND (storage.foldername(name))[1] = auth.uid()::text
    );

-- =============================================================================
-- DATABASE FUNCTIONS
-- =============================================================================

-- Function: Increment usage counters (upsert pattern)
-- Called from n8n workflows or Edge Functions after each interaction.
CREATE OR REPLACE FUNCTION increment_usage(
    p_client_id     UUID,
    p_messages_sent INT DEFAULT 0,
    p_messages_recv INT DEFAULT 0,
    p_commands_exec INT DEFAULT 0,
    p_files_trans   INT DEFAULT 0,
    p_tokens_used   BIGINT DEFAULT 0,
    p_cost          DECIMAL DEFAULT 0.0
)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
    v_month DATE := date_trunc('month', now())::date;
BEGIN
    INSERT INTO usage (client_id, month, messages_sent, messages_received,
                       commands_executed, files_transferred, ai_tokens_used, cost_usd)
    VALUES (p_client_id, v_month, p_messages_sent, p_messages_recv,
            p_commands_exec, p_files_trans, p_tokens_used, p_cost)
    ON CONFLICT (client_id, month) DO UPDATE SET
        messages_sent     = usage.messages_sent + EXCLUDED.messages_sent,
        messages_received = usage.messages_received + EXCLUDED.messages_received,
        commands_executed = usage.commands_executed + EXCLUDED.commands_executed,
        files_transferred = usage.files_transferred + EXCLUDED.files_transferred,
        ai_tokens_used    = usage.ai_tokens_used + EXCLUDED.ai_tokens_used,
        cost_usd          = usage.cost_usd + EXCLUDED.cost_usd,
        updated_at        = now();
END;
$$;

COMMENT ON FUNCTION increment_usage IS 'Atomically increments monthly usage counters for a client. Uses upsert to create the month row if it does not exist.';

-- Function: Check if a client has exceeded their monthly message limit
CREATE OR REPLACE FUNCTION check_message_limit(p_client_id UUID)
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
STABLE
AS $$
DECLARE
    v_max_messages INT;
    v_current_total INT;
    v_month DATE := date_trunc('month', now())::date;
BEGIN
    SELECT max_monthly_messages INTO v_max_messages
    FROM clients
    WHERE id = p_client_id;

    -- -1 means unlimited (enterprise plan)
    IF v_max_messages = -1 THEN
        RETURN false;
    END IF;

    SELECT COALESCE(messages_sent + messages_received, 0) INTO v_current_total
    FROM usage
    WHERE client_id = p_client_id AND month = v_month;

    IF v_current_total IS NULL THEN
        RETURN false; -- No usage yet this month
    END IF;

    RETURN v_current_total >= v_max_messages;
END;
$$;

COMMENT ON FUNCTION check_message_limit IS 'Returns true if the client has hit or exceeded their monthly message cap.';

-- Function: Look up a client by API key (used by webhook auth)
CREATE OR REPLACE FUNCTION get_client_by_api_key(p_api_key TEXT)
RETURNS SETOF clients
LANGUAGE sql
SECURITY DEFINER
STABLE
AS $$
    SELECT * FROM clients WHERE api_key = p_api_key LIMIT 1;
$$;

COMMENT ON FUNCTION get_client_by_api_key IS 'Authenticates an incoming request by API key. Returns the client row or empty set.';

-- Function: Append a message to a conversation
CREATE OR REPLACE FUNCTION append_message(
    p_conversation_id UUID,
    p_message JSONB
)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
    UPDATE conversations
    SET messages = array_append(messages, p_message),
        updated_at = now()
    WHERE id = p_conversation_id;
END;
$$;

COMMENT ON FUNCTION append_message IS 'Appends a single JSONB message to a conversation thread and updates the timestamp.';

-- Function: Log an audit event
CREATE OR REPLACE FUNCTION log_audit_event(
    p_client_id  UUID,
    p_action     TEXT,
    p_details    JSONB DEFAULT '{}',
    p_ip_address INET DEFAULT NULL,
    p_user_agent TEXT DEFAULT NULL
)
RETURNS UUID
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
    v_id UUID;
BEGIN
    INSERT INTO audit_log (client_id, action, details, ip_address, user_agent)
    VALUES (p_client_id, p_action, p_details, p_ip_address, p_user_agent)
    RETURNING id INTO v_id;

    RETURN v_id;
END;
$$;

COMMENT ON FUNCTION log_audit_event IS 'Creates an immutable audit log entry. Returns the generated UUID.';

-- =============================================================================
-- TRIGGERS - Automatic updated_at timestamps
-- =============================================================================

-- Generic trigger function for updating the updated_at column
CREATE OR REPLACE FUNCTION trigger_set_updated_at()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$;

CREATE TRIGGER set_updated_at_clients
    BEFORE UPDATE ON clients
    FOR EACH ROW
    EXECUTE FUNCTION trigger_set_updated_at();

CREATE TRIGGER set_updated_at_conversations
    BEFORE UPDATE ON conversations
    FOR EACH ROW
    EXECUTE FUNCTION trigger_set_updated_at();

CREATE TRIGGER set_updated_at_usage
    BEFORE UPDATE ON usage
    FOR EACH ROW
    EXECUTE FUNCTION trigger_set_updated_at();

-- =============================================================================
-- SEED DATA (optional, for development)
-- =============================================================================

-- Default allowed commands for new clients (example)
-- INSERT INTO allowed_commands (client_id, command_pattern, description) VALUES
--     ('<client-uuid>', '/help', 'Show available commands'),
--     ('<client-uuid>', '/file *', 'Request a file by name'),
--     ('<client-uuid>', '/status', 'Check bot status'),
--     ('<client-uuid>', '/report *', 'Generate a report');

-- Plan limits reference:
-- starter:       1,000 messages/month
-- professional:  5,000 messages/month
-- business:     25,000 messages/month
-- enterprise:       -1 (unlimited)
