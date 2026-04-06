"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { motion } from "framer-motion";

interface UseCase {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function IndustryUseCases({
  useCases,
}: {
  useCases: UseCase[];
}) {
  const gridRef = useScrollReveal<HTMLDivElement>({ childSelector: ".glass" });

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-4">
            Use Cases
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Built for your{" "}
            <span className="text-gradient">workflow</span>
          </h2>
        </motion.div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {useCases.map((uc) => (
            <div key={uc.title} className="glass glass-hover p-6">
              <div className="h-12 w-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary mb-5">
                {uc.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {uc.title}
              </h3>
              <p className="text-sm text-muted/50 leading-relaxed">
                {uc.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
