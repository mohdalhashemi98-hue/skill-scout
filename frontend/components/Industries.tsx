"use client";

import { motion } from "framer-motion";
import { Scale, Home, Activity, Truck, ShoppingCart, Check } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { getAllIndustries } from "@/lib/industries";
import Link from "next/link";

const industries = getAllIndustries();

const iconMap: Record<string, React.ReactNode> = {
  Scale: <Scale size={24} strokeWidth={2} />,
  Home: <Home size={24} strokeWidth={2} />,
  Activity: <Activity size={24} strokeWidth={2} />,
  Truck: <Truck size={24} strokeWidth={2} />,
  ShoppingCart: <ShoppingCart size={24} strokeWidth={2} />,
};

export default function Industries() {
  const gridRef = useScrollReveal<HTMLDivElement>({ childSelector: ".glass" });

  return (
    <section id="industries" className="relative py-24 sm:py-32">
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
            Industries
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Built for <span className="text-gradient">your industry</span>
          </h2>
          <p className="mx-auto max-w-xl text-muted/50 text-base sm:text-lg">
            Pre-built templates and integrations tailored for the industries
            that need automation most.
          </p>
        </motion.div>

        {/* Industry Cards */}
        <div ref={gridRef} role="list" className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {industries.map((industry) => (
            <Link
              key={industry.name}
              href={industry.href}
              className="block"
            >
              <div
                role="listitem"
                className="glass glass-hover p-8 group h-full"
              >
                <div className="flex items-start gap-5">
                  {/* Icon */}
                  <div
                    className={`shrink-0 h-14 w-14 rounded-2xl bg-gradient-to-br ${industry.gradient} border border-white/10 flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110`}
                  >
                    {iconMap[industry.iconName]}
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {industry.name}
                    </h3>
                    <p className="text-sm text-muted/50 leading-relaxed mb-4">
                      {industry.description}
                    </p>

                    {/* Use Cases */}
                    <ul className="space-y-2">
                      {industry.useCases.map((useCase) => (
                        <li
                          key={useCase}
                          className="flex items-center gap-2 text-sm text-muted/40"
                        >
                          <Check size={14} strokeWidth={2.5} className="text-success shrink-0" />
                          {useCase}
                        </li>
                      ))}
                    </ul>

                    {/* Learn more - visible on hover */}
                    <p className="mt-4 text-xs font-medium text-primary opacity-0 translate-y-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0">
                      Learn more &rarr;
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
