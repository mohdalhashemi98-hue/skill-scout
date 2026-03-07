"use client";

import { motion } from "framer-motion";
import { Scale, Home, Activity, Truck, ShoppingCart, Check } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

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
    icon: <Scale size={24} strokeWidth={2} />,
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
    icon: <Home size={24} strokeWidth={2} />,
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
    icon: <Activity size={24} strokeWidth={2} />,
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
    icon: <Truck size={24} strokeWidth={2} />,
    gradient: "from-warning/20 to-warning/5",
  },
  {
    name: "E-commerce",
    description:
      "Automate order tracking, inventory management, and customer support across your online storefronts.",
    useCases: [
      "Real-time order status via chat",
      "Inventory alerts & restock triggers",
      "Customer return & refund processing",
    ],
    icon: <ShoppingCart size={24} strokeWidth={2} />,
    gradient: "from-primary/20 to-[#4F46E5]/5",
  },
];

export default function Industries() {
  const gridRef = useScrollReveal<HTMLDivElement>({ childSelector: ".glass" });

  return (
    <section id="industries" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
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
        </motion.div>

        {/* Industry Cards */}
        <div ref={gridRef} role="list" className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {industries.map((industry) => (
            <div
              key={industry.name}
              role="listitem"
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
                        <Check size={14} strokeWidth={2.5} className="text-success shrink-0" />
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
