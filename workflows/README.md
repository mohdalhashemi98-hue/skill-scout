# Skill Scout - n8n Workflow Templates

Pre-built n8n workflow templates for the Skill Scout AI automation platform. Each workflow is a standalone JSON file that can be imported directly into any n8n instance.

---

## Workflows

### 1. Telegram Bot (AI Agent) - `telegram-bot-basic.json`

**What it does:**
A complete AI-powered Telegram bot workflow that receives messages, authenticates the client, retrieves conversation history, processes the message through a Claude-based AI agent with tool access, sends the reply, and logs everything to Supabase.

**Flow:**
```
Telegram Webhook
  -> Extract message data (chat ID, user, text)
  -> Authenticate client via Supabase API key
  -> Fetch conversation history for context
  -> Build system prompt with client config
  -> AI Agent (Claude) processes with tools:
     - File Search Tool (search client files)
     - HTTP Request Tool (external API calls)
  -> Format response (truncate to 4096 chars)
  -> Send reply via Telegram
  -> Log user message + AI response to Supabase
  -> Increment usage counters
```

**Required Credentials:**
| Credential | Type | Where to Get It |
|---|---|---|
| Telegram Bot Token | Telegram API | [@BotFather](https://t.me/BotFather) on Telegram |
| Anthropic API Key | Anthropic API | [console.anthropic.com](https://console.anthropic.com) |
| Supabase URL | Environment Variable | Your Supabase project settings |
| Supabase Service Role Key | Environment Variable | Supabase project settings > API |

---

### 2. File Delivery - `file-delivery.json`

**What it does:**
Handles `/file <filename>` commands in Telegram. Searches for the file in Supabase Storage, downloads it, and sends it as a document attachment. If the file is not found, an AI assistant generates a helpful response suggesting alternatives.

**Flow:**
```
Telegram Webhook
  -> Parse /file command, sanitize filename
  -> Validate command format
  -> Search file metadata in Supabase (fuzzy match)
  -> If found:
     -> Download from Supabase Storage
     -> Send as Telegram document
     -> Log file transfer + audit entry
  -> If not found:
     -> AI generates helpful suggestions
     -> Send help message via Telegram
     -> Log audit entry
```

**Required Credentials:**
| Credential | Type | Where to Get It |
|---|---|---|
| Telegram Bot Token | Telegram API | [@BotFather](https://t.me/BotFather) on Telegram |
| Anthropic API Key | Anthropic API | [console.anthropic.com](https://console.anthropic.com) |
| Supabase URL | Environment Variable | Your Supabase project settings |
| Supabase Service Role Key | Environment Variable | Supabase project settings > API |

---

## How to Import into n8n

### Method 1: UI Import
1. Open your n8n instance in a browser
2. Go to **Workflows** in the left sidebar
3. Click the **+** button or **Add Workflow**
4. Click the **...** menu (top right) and select **Import from File**
5. Select the `.json` file from this directory
6. The workflow will load with all nodes pre-configured

### Method 2: n8n CLI
```bash
# Import a single workflow
n8n import:workflow --input=telegram-bot-basic.json

# Import all workflows in the directory
n8n import:workflow --input=workflows/
```

### Method 3: REST API
```bash
curl -X POST "https://your-n8n-instance.com/api/v1/workflows" \
  -H "X-N8N-API-KEY: your-api-key" \
  -H "Content-Type: application/json" \
  -d @telegram-bot-basic.json
```

---

## Configuration Steps

### Step 1: Set Up Credentials in n8n

1. **Telegram Bot:**
   - Go to **Settings > Credentials > Add Credential**
   - Select **Telegram API**
   - Paste your bot token from BotFather
   - Save and note the credential ID

2. **Anthropic (Claude):**
   - Go to **Settings > Credentials > Add Credential**
   - Select **Anthropic API**
   - Paste your API key
   - Save and note the credential ID

3. **Update Credential IDs in Workflows:**
   - After importing, open each workflow
   - Click on nodes that show credential errors
   - Select the correct credential from the dropdown

### Step 2: Set Environment Variables

Add the following environment variables to your n8n instance (via `.env` file or Docker environment):

```env
# Supabase connection
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# Client configuration
CLIENT_API_KEY=your-client-api-key
CLIENT_ID=your-client-uuid
CLIENT_FILES_DIR=/data/client-files
```

### Step 3: Set Up Telegram Webhook

After activating the workflow, n8n will automatically register the webhook with Telegram. Verify it:

```bash
curl "https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getWebhookInfo"
```

You should see your n8n webhook URL in the response.

### Step 4: Run the Supabase Schema

Before the workflows can log data, run the SQL schema:

```bash
# Using Supabase CLI
supabase db push

# Or paste the SQL from docs/technical/SUPABASE_SCHEMA.sql
# into your Supabase SQL Editor
```

### Step 5: Activate and Test

1. Toggle the workflow to **Active**
2. Send a test message to your Telegram bot
3. Check the n8n execution log for any errors
4. Verify data appears in your Supabase tables

---

## Troubleshooting

| Issue | Solution |
|---|---|
| Webhook not receiving messages | Check n8n is publicly accessible; verify webhook URL with Telegram API |
| Authentication fails | Verify `CLIENT_API_KEY` matches a row in the `clients` table |
| AI Agent returns empty response | Check Anthropic API key is valid and has credit |
| File not found when it exists | Ensure file metadata is in the `files` table and matches the Storage path |
| Usage not incrementing | Verify `SUPABASE_SERVICE_ROLE_KEY` has permission to call RPC functions |

---

## Extending These Workflows

- **Add WhatsApp support:** Duplicate the Telegram trigger and replace with a WhatsApp Business webhook trigger. Adjust the response formatting node for WhatsApp's message format.
- **Add Slack support:** Use the Slack trigger node and adapt message parsing for Slack's event payload structure.
- **Custom tools:** Add more `toolCode` nodes to the AI Agent for domain-specific capabilities (database queries, API integrations, etc.).
- **Error handling:** Add error trigger workflows that notify admins via email or Slack when a workflow execution fails.
