"use client";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Gradient mesh background */}
      <div className="hero-gradient" aria-hidden="true" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(106,91,205,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(106,91,205,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 mb-8 animate-fade-in-up">
          <span className="h-2 w-2 rounded-full bg-success animate-pulse" />
          <span className="text-xs font-medium text-primary tracking-wide uppercase">
            Now accepting new clients
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight mb-6 animate-fade-in-up animate-delay-100">
          <span className="text-white">AI Chatbots That</span>
          <br />
          <span className="text-gradient">Access Your Systems</span>
        </h1>

        {/* Subtitle */}
        <p className="mx-auto max-w-2xl text-base sm:text-lg md:text-xl text-muted/60 leading-relaxed mb-10 animate-fade-in-up animate-delay-200">
          Deploy intelligent chatbots on{" "}
          <span className="text-white font-medium">WhatsApp</span> &{" "}
          <span className="text-white font-medium">Telegram</span> that read
          files, execute terminal commands, and automate complex workflows
          &mdash; all through natural conversation.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up animate-delay-300">
          <a href="#pricing" className="glow-button text-base px-8 py-4">
            View Plans &amp; Pricing
          </a>
          <a
            href="#how-it-works"
            className="rounded-xl border border-white/10 bg-white/5 px-8 py-4 text-base font-medium text-muted hover:bg-white/10 hover:border-white/20 transition-all duration-200"
          >
            See How It Works
          </a>
        </div>

        {/* Terminal Preview */}
        <div className="mx-auto max-w-2xl animate-fade-in-up animate-delay-400">
          <div className="glass rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-primary/5">
            {/* Terminal Header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-surface/50">
              <span className="h-3 w-3 rounded-full bg-accent/80" />
              <span className="h-3 w-3 rounded-full bg-warning/80" />
              <span className="h-3 w-3 rounded-full bg-success/80" />
              <span className="ml-3 text-xs text-muted/30 font-mono">
                skillscout-bot &mdash; WhatsApp
              </span>
            </div>
            {/* Terminal Body */}
            <div className="px-6 py-5 space-y-3 text-left font-mono text-sm">
              <div className="flex items-start gap-3">
                <span className="text-primary font-semibold shrink-0">You:</span>
                <span className="text-muted/80">
                  Show me the latest sales report from /reports/q4
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-success font-semibold shrink-0">Bot:</span>
                <span className="text-muted/80">
                  Found 3 files in{" "}
                  <span className="text-warning">/reports/q4</span>. Here&apos;s
                  the summary from{" "}
                  <span className="text-accent">sales_q4_2025.csv</span>:
                  <br />
                  <span className="text-muted/50 block mt-1">
                    Total Revenue: $2.4M (+18% QoQ)
                    <br />
                    Top Channel: Enterprise Direct (42%)
                    <br />
                    Sending full report to your email now...
                  </span>
                </span>
              </div>
              <div className="flex items-center gap-2 pt-1">
                <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                <span className="text-xs text-muted/30">Bot is typing...</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
}
