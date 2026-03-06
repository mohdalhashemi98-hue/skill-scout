"use client";

interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted: boolean;
  cta: string;
  badge?: string;
}

const tiers: PricingTier[] = [
  {
    name: "Starter",
    price: "$200",
    period: "/mo",
    description: "Perfect for small teams testing AI automation.",
    features: [
      "1 WhatsApp or Telegram bot",
      "File access (read-only)",
      "500 messages/month",
      "Basic analytics dashboard",
      "Email support",
    ],
    highlighted: false,
    cta: "Start Free Trial",
  },
  {
    name: "Professional",
    price: "$500",
    period: "/mo",
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
    price: "$1,500",
    period: "/mo",
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
  return (
    <section id="pricing" className="relative py-24 sm:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface/20 to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
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
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
          {tiers.map((tier) => (
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
                <span className="text-4xl sm:text-5xl font-extrabold text-white">
                  {tier.price}
                </span>
                <span className="text-muted/40 text-sm">{tier.period}</span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-muted/60"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-success shrink-0 mt-0.5"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <a
                href="#contact"
                className={`block text-center rounded-xl py-3.5 px-6 text-sm font-semibold transition-all duration-200 ${
                  tier.highlighted
                    ? "glow-button"
                    : "bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20"
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
