"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter, useParams } from "next/navigation";

interface ClientConfig {
  whatsappAccountId?: string;
  whatsappPhoneId?: string;
  whatsappToken?: string;
  telegramBotToken?: string;
  webhookUrl?: string;
}

interface Client {
  id: string;
  name: string;
  email: string;
  company: string;
  plan: "starter" | "professional" | "business";
  apiKey: string;
  config: ClientConfig;
  createdAt: string;
  updatedAt: string;
}

function SecretInput({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
}) {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <label className="block text-sm text-muted/70 mb-1">{label}</label>
      <div className="relative">
        <input
          type={visible ? "text" : "password"}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full rounded-lg border border-white/10 bg-background/80 px-4 py-2.5 pr-12 text-white text-sm placeholder:text-muted/40 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
        />
        <button
          type="button"
          onClick={() => setVisible(!visible)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-muted/50 hover:text-white transition-colors text-xs"
        >
          {visible ? "Hide" : "Show"}
        </button>
      </div>
    </div>
  );
}

export default function AdminClientDetailPage() {
  const router = useRouter();
  const params = useParams();
  const clientId = params.id as string;

  const [client, setClient] = useState<Client | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);
  const [copied, setCopied] = useState(false);

  // Editable form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [plan, setPlan] = useState<"starter" | "professional" | "business">(
    "starter"
  );
  const [config, setConfig] = useState<ClientConfig>({});

  const fetchClient = useCallback(async () => {
    try {
      const res = await fetch(`/api/admin/clients/${clientId}`);
      if (res.ok) {
        const data: Client = await res.json();
        setClient(data);
        setName(data.name);
        setEmail(data.email);
        setCompany(data.company);
        setPlan(data.plan);
        // Config values are masked from the server, so initialize with empty
        // unless user has typed something
        setConfig({
          whatsappAccountId: data.config.whatsappAccountId || "",
          whatsappPhoneId: data.config.whatsappPhoneId || "",
          whatsappToken: data.config.whatsappToken || "",
          telegramBotToken: data.config.telegramBotToken || "",
          webhookUrl: data.config.webhookUrl || "",
        });
      } else {
        setMessage({ type: "error", text: "Client not found" });
      }
    } catch {
      setMessage({ type: "error", text: "Failed to load client" });
    } finally {
      setLoading(false);
    }
  }, [clientId]);

  useEffect(() => {
    fetchClient();
  }, [fetchClient]);

  async function handleSave() {
    setSaving(true);
    setMessage(null);

    // Only send config fields that have been changed from the masked value
    const configToSend: Record<string, string> = {};
    const configFields: (keyof ClientConfig)[] = [
      "whatsappAccountId",
      "whatsappPhoneId",
      "whatsappToken",
      "telegramBotToken",
      "webhookUrl",
    ];

    for (const field of configFields) {
      const val = config[field] || "";
      // Only send if user typed a new value (not the masked one from server)
      if (val && !val.startsWith("****")) {
        configToSend[field] = val;
      }
    }

    try {
      const res = await fetch(`/api/admin/clients/${clientId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          company,
          plan,
          config: Object.keys(configToSend).length > 0 ? configToSend : undefined,
        }),
      });

      if (res.ok) {
        setMessage({ type: "success", text: "Client updated successfully" });
        fetchClient();
      } else {
        const data = await res.json();
        setMessage({ type: "error", text: data.error || "Failed to update" });
      }
    } catch {
      setMessage({ type: "error", text: "Network error" });
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete() {
    setDeleting(true);
    try {
      const res = await fetch(`/api/admin/clients/${clientId}`, {
        method: "DELETE",
      });
      if (res.ok) {
        router.push("/admin/clients");
      } else {
        setMessage({ type: "error", text: "Failed to delete client" });
      }
    } catch {
      setMessage({ type: "error", text: "Network error" });
    } finally {
      setDeleting(false);
    }
  }

  function handleCopyApiKey() {
    if (client?.apiKey) {
      navigator.clipboard.writeText(client.apiKey);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }

  if (loading) {
    return (
      <div className="text-center text-muted/50 text-sm py-12">
        Loading client...
      </div>
    );
  }

  if (!client) {
    return (
      <div className="text-center py-12">
        <p className="text-muted/50 text-sm">Client not found</p>
        <button
          onClick={() => router.push("/admin/clients")}
          className="mt-4 text-primary text-sm hover:underline"
        >
          Back to clients
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-3xl">
      <div className="flex items-center gap-4">
        <button
          onClick={() => router.push("/admin/clients")}
          className="text-muted/50 hover:text-white transition-colors text-sm"
        >
          &larr; Back
        </button>
        <h1 className="text-2xl font-bold text-white">{client.name}</h1>
      </div>

      {message && (
        <div
          className={`rounded-lg px-4 py-3 text-sm ${
            message.type === "success"
              ? "bg-success/10 border border-success/20 text-success"
              : "bg-accent/10 border border-accent/20 text-accent"
          }`}
        >
          {message.text}
        </div>
      )}

      {/* Client Info */}
      <div className="rounded-xl border border-white/10 bg-surface/40 backdrop-blur-xl p-6">
        <h2 className="text-lg font-semibold text-white mb-4">
          Client Information
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-muted/70 mb-1">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-lg border border-white/10 bg-background/80 px-4 py-2.5 text-white text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm text-muted/70 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border border-white/10 bg-background/80 px-4 py-2.5 text-white text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm text-muted/70 mb-1">
              Company
            </label>
            <input
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="w-full rounded-lg border border-white/10 bg-background/80 px-4 py-2.5 text-white text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm text-muted/70 mb-1">Plan</label>
            <select
              value={plan}
              onChange={(e) =>
                setPlan(
                  e.target.value as "starter" | "professional" | "business"
                )
              }
              className="w-full rounded-lg border border-white/10 bg-background/80 px-4 py-2.5 text-white text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
            >
              <option value="starter">Starter</option>
              <option value="professional">Professional</option>
              <option value="business">Business</option>
            </select>
          </div>
        </div>
      </div>

      {/* API Configuration */}
      <div className="rounded-xl border border-white/10 bg-surface/40 backdrop-blur-xl p-6">
        <h2 className="text-lg font-semibold text-white mb-4">
          API Configuration
        </h2>
        <div className="space-y-4">
          <SecretInput
            label="WhatsApp Business Account ID"
            value={config.whatsappAccountId || ""}
            onChange={(val) =>
              setConfig({ ...config, whatsappAccountId: val })
            }
            placeholder="Enter account ID"
          />
          <SecretInput
            label="WhatsApp Phone Number ID"
            value={config.whatsappPhoneId || ""}
            onChange={(val) =>
              setConfig({ ...config, whatsappPhoneId: val })
            }
            placeholder="Enter phone number ID"
          />
          <SecretInput
            label="WhatsApp Access Token"
            value={config.whatsappToken || ""}
            onChange={(val) =>
              setConfig({ ...config, whatsappToken: val })
            }
            placeholder="Enter access token"
          />
          <SecretInput
            label="Telegram Bot Token"
            value={config.telegramBotToken || ""}
            onChange={(val) =>
              setConfig({ ...config, telegramBotToken: val })
            }
            placeholder="Enter bot token"
          />
          <SecretInput
            label="Webhook URL"
            value={config.webhookUrl || ""}
            onChange={(val) => setConfig({ ...config, webhookUrl: val })}
            placeholder="https://example.com/webhook"
          />
        </div>
      </div>

      {/* Client API Key */}
      <div className="rounded-xl border border-white/10 bg-surface/40 backdrop-blur-xl p-6">
        <h2 className="text-lg font-semibold text-white mb-4">
          Client API Key
        </h2>
        <div className="flex items-center gap-3">
          <input
            type="text"
            value={client.apiKey}
            readOnly
            className="flex-1 rounded-lg border border-white/10 bg-background/80 px-4 py-2.5 text-muted/60 text-sm font-mono"
          />
          <button
            onClick={handleCopyApiKey}
            className="rounded-lg border border-white/10 bg-background/80 px-4 py-2.5 text-sm text-muted/70 hover:text-white hover:border-primary/50 transition-colors"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
        <p className="text-muted/40 text-xs mt-2">
          This key is masked for security. The full key was provided at creation
          time.
        </p>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between">
        <div>
          {confirmDelete ? (
            <div className="flex items-center gap-3">
              <span className="text-accent text-sm">
                Are you sure? This cannot be undone.
              </span>
              <button
                onClick={handleDelete}
                disabled={deleting}
                className="rounded-lg bg-accent/20 border border-accent/30 px-4 py-2 text-sm text-accent hover:bg-accent/30 disabled:opacity-50 transition-colors"
              >
                {deleting ? "Deleting..." : "Yes, Delete"}
              </button>
              <button
                onClick={() => setConfirmDelete(false)}
                className="rounded-lg border border-white/10 px-4 py-2 text-sm text-muted/70 hover:text-white transition-colors"
              >
                Cancel
              </button>
            </div>
          ) : (
            <button
              onClick={() => setConfirmDelete(true)}
              className="rounded-lg border border-accent/20 px-4 py-2 text-sm text-accent/70 hover:text-accent hover:border-accent/40 transition-colors"
            >
              Delete Client
            </button>
          )}
        </div>
        <button
          onClick={handleSave}
          disabled={saving}
          className="rounded-lg bg-gradient-to-r from-primary to-primary/80 px-6 py-2.5 text-sm text-white font-medium hover:from-primary/90 hover:to-primary/70 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        >
          {saving ? "Saving..." : "Save Changes"}
        </button>
      </div>
    </div>
  );
}
