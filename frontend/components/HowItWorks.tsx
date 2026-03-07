"use client";

import { motion } from "framer-motion";
import { Link, Settings, Zap } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface Step {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  accent: string;
}

const steps: Step[] = [
  {
    number: "01",
    title: "Connect",
    description:
      "Link your WhatsApp or Telegram account in under 2 minutes. We handle the API setup, authentication, and webhook configuration automatically.",
    icon: <Link size={28} strokeWidth={2} />,
    accent: "from-primary to-primary/40",
  },
  {
    number: "02",
    title: "Configure",
    description:
      "Define what your bot can access: file systems, databases, APIs, or terminal commands. Set permissions and safety boundaries with our intuitive dashboard.",
    icon: <Settings size={28} strokeWidth={2} />,
    accent: "from-accent to-accent/40",
  },
  {
    number: "03",
    title: "Automate",
    description:
      "Your team starts chatting with the bot naturally. It reads files, runs commands, and completes tasks \u2014 all with full audit logging and security.",
    icon: <Zap size={28} strokeWidth={2} />,
    accent: "from-success to-success/40",
  },
];

export default function HowItWorks() {
  const gridRef = useScrollReveal<HTMLDivElement>({ childSelector: ".group" });

  return (
    <section id="how-it-works" className="relative py-24 sm:py-32">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface/30 to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-4">
            Process
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Up and running in{" "}
            <span className="text-gradient">three steps</span>
          </h2>
          <p className="mx-auto max-w-xl text-muted/50 text-base sm:text-lg">
            No complex integrations. No months of development. Go from
            zero to automated in under an hour.
          </p>
        </motion.div>

        {/* Steps */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={step.number} className="relative group">
              {/* Connector line (desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[calc(50%+60px)] w-[calc(100%-60px)] h-px">
                  <div className="h-full bg-gradient-to-r from-white/10 to-transparent" />
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rotate-45 border-t border-r border-white/10" />
                </div>
              )}

              <div className="glass glass-hover p-8 text-center h-full">
                {/* Step Number */}
                <div className="inline-flex items-center justify-center mb-6">
                  <div
                    className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${step.accent} flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110`}
                  >
                    {step.icon}
                  </div>
                </div>

                {/* Step Label */}
                <div className="font-mono text-xs text-muted/30 tracking-widest uppercase mb-2">
                  Step {step.number}
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-muted/50 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
