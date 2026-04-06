"use client";

import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const timelineNodes = [
  {
    date: "Jan 2026",
    title: "The Ban",
    description: "Meta bans general-purpose AI chatbots from WhatsApp",
    dotColor: "bg-accent",
    borderColor: "border-accent/30",
  },
  {
    date: "The Gap",
    title: "Businesses Left Behind",
    description: "Companies lose their AI assistants overnight",
    dotColor: "bg-warning",
    borderColor: "border-warning/30",
  },
  {
    date: "SkillScout",
    title: "Purpose-Built & Compliant",
    description: "Bots designed for specific business tasks — fully compliant",
    dotColor: "bg-success",
    borderColor: "border-success/30",
  },
];

export default function WhyNow() {
  const timelineRef = useScrollReveal<HTMLDivElement>({
    childSelector: ".glass",
  });

  return (
    <section id="why-now" className="relative py-24 sm:py-32">
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
            Why Now
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            The WhatsApp AI ban{" "}
            <span className="text-gradient">changes everything</span>
          </h2>
          <p className="mx-auto max-w-xl text-muted/50 text-base sm:text-lg">
            Meta banned general-purpose AI chatbots from WhatsApp in January
            2026. Only purpose-built business bots survive.
          </p>
        </motion.div>

        {/* Timeline */}
        <div
          ref={timelineRef}
          role="list"
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {timelineNodes.map((node, i) => (
            <div key={node.date} role="listitem" className="glass glass-hover p-6 relative">
              {/* Connector line (desktop) */}
              {i < timelineNodes.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-px bg-gradient-to-r from-primary/30 to-transparent" />
              )}
              <div className="flex items-center gap-3 mb-4">
                <span
                  className={`h-3 w-3 rounded-full ${node.dotColor} shrink-0`}
                />
                <span className="text-xs font-bold uppercase tracking-wider text-muted/40">
                  {node.date}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {node.title}
              </h3>
              <p className="text-sm text-muted/50 leading-relaxed">
                {node.description}
              </p>
            </div>
          ))}
        </div>

        {/* Callout Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass rounded-2xl p-6 sm:p-8 border-accent/20 flex items-start gap-4 max-w-2xl mx-auto"
        >
          <div className="h-10 w-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
            <AlertTriangle size={20} strokeWidth={2} className="text-accent" />
          </div>
          <div>
            <p className="text-white font-medium mb-1">
              Your old AI chatbot was banned.
            </p>
            <p className="text-sm text-muted/50">
              Ours is purpose-built and compliant. Every SkillScout bot is
              designed for specific business tasks, meeting Meta&apos;s new
              requirements while delivering more value than generic chatbots
              ever could.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
