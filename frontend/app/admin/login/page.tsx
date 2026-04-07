"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const [passphrase, setPassphrase] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/admin/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ passphrase }),
      });

      if (res.ok) {
        router.push("/admin");
      } else {
        const data = await res.json();
        setError(data.error || "Authentication failed");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="rounded-2xl border border-white/10 bg-surface/40 backdrop-blur-xl p-8">
          <div className="flex justify-center mb-6">
            <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-white text-xl font-bold">S</span>
            </div>
          </div>

          <h1 className="text-2xl font-bold text-white text-center mb-2">
            Admin Access
          </h1>
          <p className="text-muted/60 text-center text-sm mb-8">
            Enter your passphrase to continue
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="password"
                value={passphrase}
                onChange={(e) => setPassphrase(e.target.value)}
                placeholder="Passphrase"
                className="w-full rounded-lg border border-white/10 bg-background/80 px-4 py-3 text-white placeholder:text-muted/40 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                autoFocus
                required
              />
            </div>

            {error && (
              <div className="rounded-lg bg-accent/10 border border-accent/20 px-4 py-3 text-accent text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading || !passphrase}
              className="w-full rounded-lg bg-gradient-to-r from-primary to-primary/80 px-4 py-3 text-white font-medium hover:from-primary/90 hover:to-primary/70 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
