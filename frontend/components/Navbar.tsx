"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Layers } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Industries", href: "#industries" },
  { label: "Pricing", href: "#pricing" },
] as const;

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileOpen) closeMobile();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [mobileOpen, closeMobile]);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5 rounded-none"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background rounded-lg">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <Layers size={18} strokeWidth={2.5} className="text-white" />
            </div>
            <span className="text-lg font-bold text-white tracking-tight">
              Skill<span className="text-primary">Scout</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted/70 hover:text-white transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-sm"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#contact"
              className="rounded-lg bg-primary/10 border border-primary/30 px-4 py-2 text-sm font-medium text-primary hover:bg-primary/20 hover:border-primary/50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-lg"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <span
              className={`block h-0.5 w-6 bg-muted transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 bg-muted transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 bg-muted transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${mobileOpen ? "max-h-64 border-t border-white/5" : "max-h-0"}`}
      >
        <div className="px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMobile}
              className="block text-sm text-muted/70 hover:text-white transition-colors duration-200 py-1 focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-sm"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={closeMobile}
            className="block rounded-lg bg-primary/10 border border-primary/30 px-4 py-2 text-sm font-medium text-primary text-center hover:bg-primary/20 transition-all duration-200 mt-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
          >
            Get Started
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
