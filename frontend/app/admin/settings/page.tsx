export default function AdminSettingsPage() {
  const envVars = [
    {
      name: "ADMIN_PASSPHRASE",
      description: "Passphrase for admin login authentication",
      configured: !!process.env.ADMIN_PASSPHRASE,
    },
    {
      name: "ADMIN_SESSION_SECRET",
      description: "Secret key for signing session tokens",
      configured: !!process.env.ADMIN_SESSION_SECRET,
    },
    {
      name: "NEXT_PUBLIC_SITE_URL",
      description: "Public site URL for OG tags and sitemap",
      configured: !!process.env.NEXT_PUBLIC_SITE_URL,
    },
    {
      name: "NEXT_PUBLIC_PLAUSIBLE_DOMAIN",
      description: "Domain for Plausible analytics tracking",
      configured: !!process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN,
    },
  ];

  const configuredCount = envVars.filter((v) => v.configured).length;

  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <h1 className="text-2xl font-bold text-white">Settings</h1>
        <p className="text-muted/60 text-sm mt-1">
          Environment configuration status
        </p>
      </div>

      {/* Environment Variables */}
      <div className="rounded-xl border border-white/10 bg-surface/40 backdrop-blur-xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-white">
            Environment Variables
          </h2>
          <span className="text-xs text-muted/50">
            {configuredCount}/{envVars.length} configured
          </span>
        </div>
        <div className="space-y-4">
          {envVars.map((envVar) => (
            <div
              key={envVar.name}
              className="flex items-center justify-between p-3 rounded-lg bg-background/40"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`h-2.5 w-2.5 rounded-full ${
                    envVar.configured ? "bg-success" : "bg-accent"
                  }`}
                />
                <div>
                  <p className="text-white text-sm font-mono">{envVar.name}</p>
                  <p className="text-muted/40 text-xs mt-0.5">
                    {envVar.description}
                  </p>
                </div>
              </div>
              <span
                className={`text-xs ${
                  envVar.configured ? "text-success" : "text-accent"
                }`}
              >
                {envVar.configured ? "Configured" : "Not Set"}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Info Note */}
      <div className="rounded-xl border border-white/10 bg-surface/40 backdrop-blur-xl p-6">
        <h2 className="text-lg font-semibold text-white mb-3">Note</h2>
        <p className="text-muted/60 text-sm leading-relaxed">
          Environment variables must be configured in your deployment
          environment (e.g., <code className="text-primary/80 font-mono text-xs">.env.local</code> for
          development, or your hosting provider&apos;s environment settings for
          production). They cannot be modified from this interface for security
          reasons.
        </p>
      </div>
    </div>
  );
}
