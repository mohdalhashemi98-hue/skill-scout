"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function CTA() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative glass overflow-hidden rounded-3xl p-10 sm:p-16 text-center"
        >
          {/* Background gradient orbs */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-accent/10 rounded-full blur-[80px] pointer-events-none" aria-hidden="true" />

          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Ready to{" "}
              <span className="text-gradient">automate</span>?
            </h2>
            <p className="mx-auto max-w-lg text-muted/50 text-base sm:text-lg mb-10">
              Get a custom AI chatbot deployed on your channels in under 48
              hours. Book a free strategy call with our team.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:hello@skillscout.ai"
                className="glow-button text-base px-8 py-4 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background"
                aria-label="Book a free strategy call"
              >
                Book a Free Call
              </a>
              <a
                href="mailto:hello@skillscout.ai"
                className="rounded-xl border border-white/10 bg-white/5 px-8 py-4 text-base font-medium text-muted hover:bg-white/10 hover:border-white/20 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background"
                aria-label="Send email to hello@skillscout.ai"
              >
                hello@skillscout.ai
              </a>
            </div>

            {/* Trust signals */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-xs text-muted/30 uppercase tracking-widest font-medium">
              <div className="flex items-center gap-2">
                <Check size={14} strokeWidth={2.5} className="text-success" />
                No credit card required
              </div>
              <div className="flex items-center gap-2">
                <Check size={14} strokeWidth={2.5} className="text-success" />
                Free 14-day trial
              </div>
              <div className="flex items-center gap-2">
                <Check size={14} strokeWidth={2.5} className="text-success" />
                Cancel anytime
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
