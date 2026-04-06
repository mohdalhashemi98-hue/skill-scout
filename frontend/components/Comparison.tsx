"use client";

import { motion } from "framer-motion";
import { Check, X, HelpCircle } from "lucide-react";

const features = [
  {
    name: "File Access",
    skillscout: "check",
    botpress: "cross",
    landbot: "cross",
    custom: "check",
  },
  {
    name: "Terminal Commands",
    skillscout: "check",
    botpress: "cross",
    landbot: "cross",
    custom: "check",
  },
  {
    name: "WhatsApp Compliant (2026)",
    skillscout: "check",
    botpress: "maybe",
    landbot: "maybe",
    custom: "maybe",
  },
  {
    name: "Self-Hosted Option",
    skillscout: "check",
    botpress: "check",
    landbot: "cross",
    custom: "check",
  },
  {
    name: "Pricing",
    skillscout: "$200–1,500/mo",
    botpress: "$0–500/mo",
    landbot: "$0–400/mo",
    custom: "$25K+",
  },
  {
    name: "Setup Time",
    skillscout: "< 1 hour",
    botpress: "Days",
    landbot: "Hours",
    custom: "Months",
  },
];

function CellIcon({ value }: { value: string }) {
  if (value === "check")
    return <Check size={18} strokeWidth={2.5} className="text-success mx-auto" />;
  if (value === "cross")
    return <X size={18} strokeWidth={2.5} className="text-accent mx-auto" />;
  if (value === "maybe")
    return <HelpCircle size={18} strokeWidth={2} className="text-warning mx-auto" />;
  return <span className="text-sm text-muted/70">{value}</span>;
}

export default function Comparison() {
  return (
    <section id="comparison" className="relative py-24 sm:py-32">
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
            Compare
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            See how we{" "}
            <span className="text-gradient">stack up</span>
          </h2>
          <p className="mx-auto max-w-xl text-muted/50 text-base sm:text-lg">
            SkillScout fills the gap between basic chatbot tools and expensive
            custom development.
          </p>
        </motion.div>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass rounded-2xl overflow-hidden"
        >
          <div className="overflow-x-auto" role="region" aria-label="Scrollable comparison table" tabIndex={0}>
            <table className="w-full text-sm" aria-label="Product feature comparison">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left px-6 py-4 text-xs font-semibold uppercase tracking-wider text-muted/40">
                    Feature
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 border-t-2 border-primary">
                    SkillScout
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-muted/40">
                    Botpress
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-muted/40">
                    Landbot
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-muted/40">
                    Custom Dev
                  </th>
                </tr>
              </thead>
              <tbody>
                {features.map((f, i) => (
                  <tr
                    key={f.name}
                    className={
                      i < features.length - 1 ? "border-b border-white/5" : ""
                    }
                  >
                    <td className="px-6 py-4 text-muted/70 font-medium">
                      {f.name}
                    </td>
                    <td className="px-6 py-4 text-center bg-primary/5">
                      <CellIcon value={f.skillscout} />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <CellIcon value={f.botpress} />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <CellIcon value={f.landbot} />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <CellIcon value={f.custom} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted/30 text-center mt-2 md:hidden">
            Swipe to see all features →
          </p>
        </motion.div>
      </div>
    </section>
  );
}
