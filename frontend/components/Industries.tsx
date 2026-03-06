"use client";

interface Industry {
  name: string;
  description: string;
  useCases: string[];
  icon: React.ReactNode;
  gradient: string;
}

const industries: Industry[] = [
  {
    name: "Legal",
    description:
      "Automate document retrieval, case research, and contract analysis through simple chat commands.",
    useCases: [
      "Pull case files from document management",
      "Summarize contracts and flag risks",
      "Auto-generate compliance checklists",
    ],
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
        <path d="M4 7V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3" />
        <polyline points="14 2 14 8 20 8" />
        <path d="M5 12h10" />
        <path d="M5 16h7" />
      </svg>
    ),
    gradient: "from-primary/20 to-primary/5",
  },
  {
    name: "Real Estate",
    description:
      "Access property data, generate market reports, and manage listings from your messaging app.",
    useCases: [
      "Instant CMA reports from MLS data",
      "Schedule showings via chat",
      "Auto-update listing descriptions",
    ],
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
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    gradient: "from-accent/20 to-accent/5",
  },
  {
    name: "Healthcare",
    description:
      "Streamline patient scheduling, records lookup, and clinical workflow automation with HIPAA-compliant bots.",
    useCases: [
      "Patient record lookups (HIPAA compliant)",
      "Appointment scheduling & reminders",
      "Lab result delivery & triage",
    ],
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
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    gradient: "from-success/20 to-success/5",
  },
  {
    name: "Logistics",
    description:
      "Track shipments, manage inventory, and coordinate fleet operations through conversational AI.",
    useCases: [
      "Real-time shipment tracking via chat",
      "Inventory level alerts & reorder",
      "Driver dispatch & route optimization",
    ],
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
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
    gradient: "from-warning/20 to-warning/5",
  },
];

export default function Industries() {
  return (
    <section id="industries" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-4">
            Industries
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Built for <span className="text-gradient">your industry</span>
          </h2>
          <p className="mx-auto max-w-xl text-muted/50 text-base sm:text-lg">
            Pre-built templates and integrations tailored for the industries
            that need automation most.
          </p>
        </div>

        {/* Industry Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {industries.map((industry) => (
            <div
              key={industry.name}
              className="glass glass-hover p-8 group"
            >
              <div className="flex items-start gap-5">
                {/* Icon */}
                <div
                  className={`shrink-0 h-14 w-14 rounded-2xl bg-gradient-to-br ${industry.gradient} border border-white/10 flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110`}
                >
                  {industry.icon}
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {industry.name}
                  </h3>
                  <p className="text-sm text-muted/50 leading-relaxed mb-4">
                    {industry.description}
                  </p>

                  {/* Use Cases */}
                  <ul className="space-y-2">
                    {industry.useCases.map((useCase) => (
                      <li
                        key={useCase}
                        className="flex items-center gap-2 text-sm text-muted/40"
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-success shrink-0"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {useCase}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
