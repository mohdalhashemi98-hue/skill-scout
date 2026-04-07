import { readClients, Client } from "@/lib/clients";
import Link from "next/link";

export default function AdminDashboardPage() {
  const clients = readClients();

  const totalClients = clients.length;
  const starterCount = clients.filter((c) => c.plan === "starter").length;
  const proCount = clients.filter((c) => c.plan === "professional").length;
  const businessCount = clients.filter((c) => c.plan === "business").length;

  const recentClients = [...clients]
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    )
    .slice(0, 5);

  function getConfigStatus(client: Client): {
    label: string;
    color: string;
  } {
    const cfg = client.config;
    const fields = [
      cfg.whatsappAccountId,
      cfg.whatsappPhoneId,
      cfg.whatsappToken,
      cfg.telegramBotToken,
      cfg.webhookUrl,
    ];
    const configured = fields.filter(Boolean).length;
    if (configured === 0) return { label: "No Keys", color: "bg-accent" };
    if (configured < 3) return { label: "Partial", color: "bg-warning" };
    return { label: "Configured", color: "bg-success" };
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Dashboard</h1>
          <p className="text-muted/60 text-sm mt-1">
            Overview of your client integrations
          </p>
        </div>
        <Link
          href="/admin/clients?new=true"
          className="rounded-lg bg-gradient-to-r from-primary to-primary/80 px-4 py-2 text-sm text-white font-medium hover:from-primary/90 hover:to-primary/70 transition-all"
        >
          Add Client
        </Link>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="rounded-xl border border-white/10 bg-surface/40 backdrop-blur-xl p-6">
          <p className="text-muted/60 text-sm">Total Clients</p>
          <p className="text-3xl font-bold text-white mt-2">{totalClients}</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-surface/40 backdrop-blur-xl p-6">
          <p className="text-muted/60 text-sm">Starter</p>
          <p className="text-3xl font-bold text-white mt-2">{starterCount}</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-surface/40 backdrop-blur-xl p-6">
          <p className="text-muted/60 text-sm">Professional</p>
          <p className="text-3xl font-bold text-white mt-2">{proCount}</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-surface/40 backdrop-blur-xl p-6">
          <p className="text-muted/60 text-sm">Business</p>
          <p className="text-3xl font-bold text-white mt-2">{businessCount}</p>
        </div>
      </div>

      {/* Recent Clients */}
      <div className="rounded-xl border border-white/10 bg-surface/40 backdrop-blur-xl p-6">
        <h2 className="text-lg font-semibold text-white mb-4">
          Recent Clients
        </h2>
        {recentClients.length === 0 ? (
          <p className="text-muted/50 text-sm">
            No clients yet.{" "}
            <Link href="/admin/clients?new=true" className="text-primary hover:underline">
              Add your first client
            </Link>
          </p>
        ) : (
          <div className="space-y-3">
            {recentClients.map((client) => {
              const status = getConfigStatus(client);
              return (
                <Link
                  key={client.id}
                  href={`/admin/clients/${client.id}`}
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-primary text-sm font-medium">
                        {client.name.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">
                        {client.name}
                      </p>
                      <p className="text-muted/50 text-xs">{client.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-muted/50 capitalize">
                      {client.plan}
                    </span>
                    <div className="flex items-center gap-1.5">
                      <div
                        className={`h-2 w-2 rounded-full ${status.color}`}
                      />
                      <span className="text-xs text-muted/50">
                        {status.label}
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
