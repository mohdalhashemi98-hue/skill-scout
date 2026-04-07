"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";

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

function getConfigStatus(config: ClientConfig): {
  label: string;
  dotClass: string;
} {
  const fields = [
    config.whatsappAccountId,
    config.whatsappPhoneId,
    config.whatsappToken,
    config.telegramBotToken,
    config.webhookUrl,
  ];
  const configured = fields.filter(Boolean).length;
  if (configured === 0) return { label: "No Keys", dotClass: "bg-accent" };
  if (configured < 3) return { label: "Partial", dotClass: "bg-warning" };
  return { label: "Configured", dotClass: "bg-success" };
}

export default function AdminClientsPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(searchParams.get("new") === "true");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    plan: "starter" as "starter" | "professional" | "business",
  });
  const [formError, setFormError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const fetchClients = useCallback(async () => {
    try {
      const res = await fetch("/api/admin/clients");
      if (res.ok) {
        const data = await res.json();
        setClients(data);
      }
    } catch {
      // silently fail
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchClients();
  }, [fetchClients]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFormError("");
    setSubmitting(true);

    try {
      const res = await fetch("/api/admin/clients", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setShowForm(false);
        setFormData({ name: "", email: "", company: "", plan: "starter" });
        fetchClients();
      } else {
        const data = await res.json();
        setFormError(data.error || "Failed to create client");
      }
    } catch {
      setFormError("Network error");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Clients</h1>
          <p className="text-muted/60 text-sm mt-1">
            Manage client API integrations
          </p>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="rounded-lg bg-gradient-to-r from-primary to-primary/80 px-4 py-2 text-sm text-white font-medium hover:from-primary/90 hover:to-primary/70 transition-all"
        >
          {showForm ? "Cancel" : "Add Client"}
        </button>
      </div>

      {/* Add Client Form */}
      {showForm && (
        <div className="rounded-xl border border-white/10 bg-surface/40 backdrop-blur-xl p-6">
          <h2 className="text-lg font-semibold text-white mb-4">
            New Client
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-muted/70 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full rounded-lg border border-white/10 bg-background/80 px-4 py-2.5 text-white text-sm placeholder:text-muted/40 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="Client name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-muted/70 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full rounded-lg border border-white/10 bg-background/80 px-4 py-2.5 text-white text-sm placeholder:text-muted/40 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="client@example.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-muted/70 mb-1">
                  Company
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  className="w-full rounded-lg border border-white/10 bg-background/80 px-4 py-2.5 text-white text-sm placeholder:text-muted/40 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="Company name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-muted/70 mb-1">
                  Plan
                </label>
                <select
                  value={formData.plan}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      plan: e.target.value as
                        | "starter"
                        | "professional"
                        | "business",
                    })
                  }
                  className="w-full rounded-lg border border-white/10 bg-background/80 px-4 py-2.5 text-white text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                >
                  <option value="starter">Starter</option>
                  <option value="professional">Professional</option>
                  <option value="business">Business</option>
                </select>
              </div>
            </div>

            {formError && (
              <div className="rounded-lg bg-accent/10 border border-accent/20 px-4 py-3 text-accent text-sm">
                {formError}
              </div>
            )}

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={submitting}
                className="rounded-lg bg-gradient-to-r from-primary to-primary/80 px-6 py-2.5 text-sm text-white font-medium hover:from-primary/90 hover:to-primary/70 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                {submitting ? "Creating..." : "Create Client"}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Clients Table */}
      <div className="rounded-xl border border-white/10 bg-surface/40 backdrop-blur-xl overflow-hidden">
        {loading ? (
          <div className="p-8 text-center text-muted/50 text-sm">
            Loading clients...
          </div>
        ) : clients.length === 0 ? (
          <div className="p-8 text-center text-muted/50 text-sm">
            No clients yet. Click &quot;Add Client&quot; to get started.
          </div>
        ) : (
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/5">
                <th className="text-left text-xs font-medium text-muted/50 uppercase tracking-wider px-6 py-3">
                  Name
                </th>
                <th className="text-left text-xs font-medium text-muted/50 uppercase tracking-wider px-6 py-3">
                  Company
                </th>
                <th className="text-left text-xs font-medium text-muted/50 uppercase tracking-wider px-6 py-3">
                  Plan
                </th>
                <th className="text-left text-xs font-medium text-muted/50 uppercase tracking-wider px-6 py-3">
                  Status
                </th>
                <th className="text-left text-xs font-medium text-muted/50 uppercase tracking-wider px-6 py-3">
                  Last Updated
                </th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client) => {
                const status = getConfigStatus(client.config);
                return (
                  <tr
                    key={client.id}
                    onClick={() => router.push(`/admin/clients/${client.id}`)}
                    className="border-b border-white/5 last:border-0 hover:bg-white/5 cursor-pointer transition-colors"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <span className="text-primary text-sm font-medium">
                            {client.name.charAt(0).toUpperCase()}
                          </span>
                        </div>
                        <div>
                          <p className="text-white text-sm font-medium">
                            {client.name}
                          </p>
                          <p className="text-muted/50 text-xs">
                            {client.email}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-muted/70 text-sm">
                      {client.company}
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary capitalize">
                        {client.plan}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1.5">
                        <div
                          className={`h-2 w-2 rounded-full ${status.dotClass}`}
                        />
                        <span className="text-muted/60 text-xs">
                          {status.label}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-muted/50 text-xs">
                      {new Date(client.updatedAt).toLocaleDateString()}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
