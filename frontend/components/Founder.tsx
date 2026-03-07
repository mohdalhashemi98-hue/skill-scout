"use client";

import { motion } from "framer-motion";
import { User } from "lucide-react";

export default function Founder() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl p-8 sm:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 md:gap-12 items-center">
            {/* Photo Placeholder */}
            <div className="flex justify-center md:justify-start">
              <div className="h-48 w-48 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 border border-white/10 flex items-center justify-center">
                <User
                  size={64}
                  strokeWidth={1}
                  className="text-muted/30"
                />
              </div>
            </div>

            {/* Text */}
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-4">
                Who&apos;s Building This
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Building the future of{" "}
                <span className="text-gradient">business automation</span>
              </h2>
              <p className="text-muted/50 text-base leading-relaxed mb-6">
                I believe every business deserves AI tools that actually
                integrate with their existing systems — not just another
                chatbot that answers FAQs. SkillScout gives teams real
                superpowers: file access, terminal commands, and workflow
                automation, all through the messaging apps they already use.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
