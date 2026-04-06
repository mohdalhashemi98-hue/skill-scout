"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Clock, Zap } from "lucide-react";
const badges = [
  { icon: Shield, label: "SOC 2 Compliant", sublabel: "Enterprise Security" },
  { icon: Lock, label: "End-to-End Encrypted", sublabel: "AES-256" },
  { icon: Clock, label: "99.5% Uptime", sublabel: "SLA Guaranteed" },
  { icon: Zap, label: "48hr Setup", sublabel: "Quick Onboarding" },
];

export default function TrustBadges() {
  return (
    <section className="py-12 border-y border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          role="list"
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {badges.map((badge, index) => (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              role="listitem"
              className="flex items-center gap-3 justify-center"
            >
              <div className="h-10 w-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                <badge.icon size={18} className="text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-white">{badge.label}</p>
                <p className="text-xs text-muted/30">{badge.sublabel}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
