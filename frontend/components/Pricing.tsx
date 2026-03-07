"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface PricingTier {
  name: string;
  monthlyPrice: number;
  annualPrice: number;
  description: string;
  features: string[];
  highlighted: boolean;
  cta: string;
  badge?: string;
}

const tiers: PricingTier[] = [
  {
    name: "Starter",
    monthlyPrice: 200,
    annualPrice: 160,
    description: "Perfect for small teams testing AI automation.",
    features: [
      "1 WhatsApp or Telegram bot",
      "File access (read-only)",
      "500 messages/month",
      "Basic analytics dashboard",
      "Email support",
    ],
    highlighted: false,
    cta: "Get Started",
  },
  {
    name: "Professional",
    monthlyPrice: 500,
    annualPrice: 400,
    description: "For growing teams that need full system access.",
    features: [
      "3 bots across any channel",
      "Full file & terminal access",
      "5,000 messages/month",
      "Custom AI training on your data",
      "Priority Slack support",
      "Webhook integrations",
    ],
    highlighted: true,
    cta: "Get Started",
    badge: "Most Popular",
  },
  {
    name: "Business",
    monthlyPrice: 1500,
    annualPrice: 1200,
    description: "Enterprise-grade automation with dedicated support.",
    features: [
      "Unlimited bots & channels",
      "Unlimited messages",
      "Full infrastructure access",
      "Custom model fine-tuning",
      "Dedicated account manager",
      "SLA & uptime guarantee",
      "SSO & SAML integration",
    ],
    highlighted: false,
    cta: "Contact Sales",
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(false);
  const gridRef = useScrollReveal<HTMLDivElement>({ childSelector: ".glass" });

  return (
    <section id="pricing" className="relative py-24 sm:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface/20 to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-4">
            Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Simple, transparent{" "}
            <span className="text-gradient">pricing</span>
          </h2>
          <p className="mx-auto max-w-xl text-muted/50 text-base sm:text-lg">
            No hidden fees. No per-user charges. Pick the plan that fits
            your automation needs.
          </p>
        </motion.div>

        {/* Billing Toggle */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <span className={`text-sm transition-colors ${!annual ? "text-white" : "text-muted/40"}`}>Monthly</span>
          <button
            onClick={() => setAnnual(!annual)}
            className="relative h-7 w-14 rounded-full bg-white/10 border border-white/10 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50"
            role="switch"
            aria-checked={annual}
            aria-label="Toggle annual billing"
          >
            <span
              className={`absolute top-0.5 left-0.5 h-6 w-6 rounded-full bg-primary transition-transform duration-300 ${annual ? "translate-x-7" : ""}`}
            />
          </button>
          <span className={`text-sm transition-colors ${annual ? "text-white" : "text-muted/40"}`}>
            Annual <span className="text-success text-xs font-medium">Save 20%</span>
          </span>
        </div>

        {/* Pricing Cards */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
          {tiers.map((tier) => {
            const price = annual ? tier.annualPrice : tier.monthlyPrice;
            return (
              <div
                key={tier.name}
                className={`relative glass p-8 flex flex-col transition-all duration-300 hover:-translate-y-2 ${
                  tier.highlighted
                    ? "border-primary/40 shadow-lg shadow-primary/10 md:scale-105"
                    : "hover:border-white/20"
                }`}
              >
                {/* Badge */}
                {tier.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center rounded-full bg-gradient-to-r from-primary to-accent px-4 py-1 text-xs font-bold text-white shadow-lg">
                      {tier.badge}
                    </span>
                  </div>
                )}

                {/* Tier Name */}
                <h3 className="text-lg font-semibold text-white mb-1">
                  {tier.name}
                </h3>
                <p className="text-sm text-muted/40 mb-6">{tier.description}</p>

                {/* Price */}
                <div className="flex items-baseline gap-1 mb-8">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={price}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="text-4xl sm:text-5xl font-extrabold text-white"
                    >
                      ${price.toLocaleString()}
                    </motion.span>
                  </AnimatePresence>
                  <span className="text-muted/40 text-sm">/mo</span>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-muted/60"
                    >
                      <Check size={16} strokeWidth={2.5} className="text-success shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a
                  href="#contact"
                  className={`block text-center rounded-xl py-3.5 px-6 text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background ${
                    tier.highlighted
                      ? "glow-button"
                      : "bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20"
                  }`}
                  aria-label={`${tier.cta} - ${tier.name} plan`}
                >
                  {tier.cta}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
