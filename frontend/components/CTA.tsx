"use client";

export default function CTA() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative glass overflow-hidden rounded-3xl p-10 sm:p-16 text-center">
          {/* Background gradient orbs */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-accent/10 rounded-full blur-[80px] pointer-events-none" />

          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Ready to{" "}
              <span className="text-gradient">automate</span>?
            </h2>
            <p className="mx-auto max-w-lg text-muted/50 text-base sm:text-lg mb-10">
              Get a custom AI chatbot deployed on your channels in under 48
              hours. Book a free strategy call with our team.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="mailto:hello@skillscout.ai" className="glow-button text-base px-8 py-4">
                Book a Free Call
              </a>
              <a
                href="mailto:hello@skillscout.ai"
                className="rounded-xl border border-white/10 bg-white/5 px-8 py-4 text-base font-medium text-muted hover:bg-white/10 hover:border-white/20 transition-all duration-200"
              >
                hello@skillscout.ai
              </a>
            </div>

            {/* Trust signals */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-xs text-muted/30 uppercase tracking-widest font-medium">
              <div className="flex items-center gap-2">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-success"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                No credit card required
              </div>
              <div className="flex items-center gap-2">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-success"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Free 14-day trial
              </div>
              <div className="flex items-center gap-2">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-success"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Cancel anytime
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
