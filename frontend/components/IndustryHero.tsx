"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface IndustryHeroProps {
  industry: string;
  headline: string;
  description: string;
  icon: React.ReactNode;
  useCases: string[];
}

export default function IndustryHero({
  industry,
  headline,
  description,
  icon,
  useCases,
}: IndustryHeroProps) {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden pt-24">
      <div className="hero-gradient" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-12 w-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
              {icon}
            </div>
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              {industry}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight mb-6 max-w-3xl">
            <span className="text-white">{headline.split(" ").slice(0, -2).join(" ")}{" "}</span>
            <span className="text-gradient">{headline.split(" ").slice(-2).join(" ")}</span>
          </h1>

          <p className="max-w-2xl text-base sm:text-lg text-muted/60 leading-relaxed mb-10">
            {description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg mb-10">
            {useCases.map((uc) => (
              <div key={uc} className="flex items-center gap-2">
                <Check
                  size={16}
                  strokeWidth={2.5}
                  className="text-success shrink-0"
                />
                <span className="text-sm text-muted/70">{uc}</span>
              </div>
            ))}
          </div>

          <a
            href="#contact"
            className="glow-button inline-block text-base px-8 py-4 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background"
            aria-label="Get started"
          >
            Get Started
          </a>
        </motion.div>
      </div>
    </section>
  );
}
