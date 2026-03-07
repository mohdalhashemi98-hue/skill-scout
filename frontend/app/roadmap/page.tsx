"use client";

import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import PageTransition from "@/components/providers/PageTransition";
import Footer from "@/components/Footer";

const phases = [
  {
    title: "Foundation",
    quarter: "Q1 2026",
    status: "In Progress",
    statusColor: "bg-success/20 text-success",
    dotColor: "bg-success",
    items: [
      "Portfolio website & design system",
      "n8n automation engine setup",
      "Brand identity & messaging",
      "Documentation & playbooks",
    ],
  },
  {
    title: "MVP Bot",
    quarter: "Q2 2026",
    status: "Planned",
    statusColor: "bg-primary/20 text-primary",
    dotColor: "bg-primary",
    items: [
      "First Telegram bot deployment",
      "Supabase integration for data",
      "Client onboarding flow",
      "File access & terminal commands",
    ],
  },
  {
    title: "Dashboard",
    quarter: "Q3 2026",
    status: "Planned",
    statusColor: "bg-muted/20 text-muted/60",
    dotColor: "bg-muted/40",
    items: [
      "Client dashboard for bot management",
      "Usage analytics & reporting",
      "Bot configuration UI",
      "Billing & subscription management",
    ],
  },
  {
    title: "Scaling",
    quarter: "Q4 2026",
    status: "Future",
    statusColor: "bg-muted/10 text-muted/40",
    dotColor: "bg-muted/20",
    items: [
      "WhatsApp Business API integration",
      "Multi-tenant architecture",
      "Team collaboration features",
      "Enterprise security & SSO",
    ],
  },
];

export default function RoadmapPage() {
  const timelineRef = useScrollReveal<HTMLDivElement>({
    childSelector: ".glass",
  });

  return (
    <PageTransition>
      <div className="pt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-4">
              Roadmap
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Public{" "}
              <span className="text-gradient">Roadmap</span>
            </h1>
            <p className="mx-auto max-w-xl text-muted/50 text-base sm:text-lg">
              Transparency is part of our DNA. Here&apos;s where we&apos;re
              headed.
            </p>
          </motion.div>

          {/* Timeline */}
          <div ref={timelineRef} className="relative max-w-2xl mx-auto">
            {/* Vertical connector line */}
            <div
              className="absolute left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-success via-primary to-muted/20"
              aria-hidden="true"
            />

            <div className="space-y-8">
              {phases.map((phase) => (
                <div key={phase.title} className="glass rounded-2xl p-6 ml-12 relative">
                  {/* Timeline dot */}
                  <div
                    className={`absolute -left-12 top-6 h-[10px] w-[10px] rounded-full ${phase.dotColor} ring-4 ring-background`}
                  />

                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-lg font-semibold text-white">
                      {phase.title}
                    </h3>
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider rounded-full px-2.5 py-1 ${phase.statusColor}`}
                    >
                      {phase.status}
                    </span>
                  </div>

                  <p className="text-xs text-muted/40 uppercase tracking-wider mb-3">
                    {phase.quarter}
                  </p>

                  <ul className="space-y-2">
                    {phase.items.map((item) => (
                      <li
                        key={item}
                        className="text-sm text-muted/60 flex items-start gap-2"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-primary/40 mt-1.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </PageTransition>
  );
}
