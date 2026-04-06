"use client";

import { motion } from "framer-motion";
import { FileText, Terminal, MessageCircleMore, Lock } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  tag: string;
  tagColor: string;
}

const features: Feature[] = [
  {
    icon: <FileText size={24} strokeWidth={2} />,
    title: "File Access",
    description:
      "Read, write, and manage files on your systems directly through chat. Access reports, documents, and data without opening a single app.",
    tag: "Core",
    tagColor: "bg-primary/20 text-primary",
  },
  {
    icon: <Terminal size={24} strokeWidth={2} />,
    title: "Terminal Commands",
    description:
      "Execute server commands, run scripts, and manage infrastructure from WhatsApp or Telegram. Full CLI access, securely permissioned.",
    tag: "Power",
    tagColor: "bg-accent/20 text-accent",
  },
  {
    icon: <MessageCircleMore size={24} strokeWidth={2} />,
    title: "Multi-Channel",
    description:
      "Deploy across WhatsApp, Telegram, Slack, and more. One bot, unified experience everywhere your team communicates.",
    tag: "Reach",
    tagColor: "bg-success/20 text-success",
  },
  {
    icon: <Lock size={24} strokeWidth={2} />,
    title: "AI-Powered Security",
    description:
      "Enterprise-grade permissions, audit logs, and role-based access. Every action is authenticated, encrypted, and traceable.",
    tag: "Secure",
    tagColor: "bg-warning/20 text-warning",
  },
];

export default function Features() {
  const gridRef = useScrollReveal<HTMLDivElement>({ childSelector: ".glass" });

  return (
    <section id="features" className="relative py-24 sm:py-32">
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
        </motion.div>

        {/* Feature Cards Grid */}
        <div ref={gridRef} role="list" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              role="listitem"
              className="glass glass-hover p-6 flex flex-col"
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
              <div className="mt-5 h-px bg-gradient-to-r from-primary/30 to-transparent" aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
