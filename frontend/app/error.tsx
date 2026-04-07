"use client";

import { useEffect } from "react";
import { AlertTriangle } from "lucide-react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Route error:", error);
  }, [error]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="hero-gradient" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-xl px-4 text-center">
        <div className="glass rounded-2xl p-10 sm:p-16">
          <div className="inline-flex items-center justify-center h-20 w-20 rounded-2xl bg-white/5 border border-white/10 mb-8">
            <AlertTriangle size={40} strokeWidth={1.5} className="text-accent" />
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-gradient">Something broke</span>
          </h1>

          <p className="text-muted/50 text-base sm:text-lg mb-10 leading-relaxed">
            An unexpected error occurred. You can try again or head back to the
            homepage.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={reset}
              className="glow-button text-base px-8 py-4 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background"
            >
              Try Again
            </button>
            <Link
              href="/"
              className="rounded-xl border border-white/10 bg-white/5 px-8 py-4 text-base font-medium text-muted hover:bg-white/10 hover:border-white/20 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background"
            >
              Return Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
