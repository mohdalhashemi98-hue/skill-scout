"use client";

import { motion } from "framer-motion";
import { Layers } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Product: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "Industries", href: "#industries" },
      { label: "Roadmap", href: "/roadmap" },
    ],
    Company: [
      { label: "About", href: "#about" },
      { label: "Blog", href: "/blog" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "#contact" },
    ],
    Legal: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Security", href: "/terms#security" },
    ],
  };

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="border-t border-white/5 bg-surface/20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Layers size={18} strokeWidth={2.5} className="text-white" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                Skill<span className="text-primary">Scout</span>
              </span>
            </div>
            <p className="text-sm text-muted/40 leading-relaxed max-w-xs mb-6">
              AI chatbots that go beyond conversation. Access files, run
              commands, and automate workflows through WhatsApp & Telegram.
            </p>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold text-white mb-4">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted/40 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="section-divider mt-12 mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted/30">
          <p>&copy; {currentYear} SkillScout. All rights reserved.</p>
          <p>
            Built with{" "}
            <span className="font-mono text-primary/60">Next.js</span> &{" "}
            <span className="font-mono text-accent/60">AI</span>
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
