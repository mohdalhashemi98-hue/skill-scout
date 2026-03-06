"use client";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  tag: string;
  tagColor: string;
}

const features: Feature[] = [
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    title: "File Access",
    description:
      "Read, write, and manage files on your systems directly through chat. Access reports, documents, and data without opening a single app.",
    tag: "Core",
    tagColor: "bg-primary/20 text-primary",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="4 17 10 11 4 5" />
        <line x1="12" y1="19" x2="20" y2="19" />
      </svg>
    ),
    title: "Terminal Commands",
    description:
      "Execute server commands, run scripts, and manage infrastructure from WhatsApp or Telegram. Full CLI access, securely permissioned.",
    tag: "Power",
    tagColor: "bg-accent/20 text-accent",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <path d="M8 10h.01" />
        <path d="M12 10h.01" />
        <path d="M16 10h.01" />
      </svg>
    ),
    title: "Multi-Channel",
    description:
      "Deploy across WhatsApp, Telegram, Slack, and more. One bot, unified experience everywhere your team communicates.",
    tag: "Reach",
    tagColor: "bg-success/20 text-success",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2a4 4 0 0 0-4 4v2H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2h-2V6a4 4 0 0 0-4-4z" />
        <circle cx="12" cy="15" r="1" />
      </svg>
    ),
    title: "AI-Powered Security",
    description:
      "Enterprise-grade permissions, audit logs, and role-based access. Every action is authenticated, encrypted, and traceable.",
    tag: "Secure",
    tagColor: "bg-warning/20 text-warning",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-4">
            Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Everything you need to{" "}
            <span className="text-gradient">automate</span>
          </h2>
          <p className="mx-auto max-w-xl text-muted/50 text-base sm:text-lg">
            Our AI chatbots go beyond simple Q&A. They integrate with your
            infrastructure to deliver real operational value.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="glass glass-hover p-6 flex flex-col"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon + Tag */}
              <div className="flex items-center justify-between mb-5">
                <div className="h-12 w-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary">
                  {feature.icon}
                </div>
                <span
                  className={`text-[10px] font-bold uppercase tracking-wider rounded-full px-2.5 py-1 ${feature.tagColor}`}
                >
                  {feature.tag}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted/50 leading-relaxed flex-1">
                {feature.description}
              </p>

              {/* Bottom accent line */}
              <div className="mt-5 h-px bg-gradient-to-r from-primary/30 to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
