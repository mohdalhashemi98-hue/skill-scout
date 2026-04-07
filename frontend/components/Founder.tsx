"use client";

import { motion } from "framer-motion";
import { User } from "lucide-react";
import Link from "next/link";

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
                I watched businesses get{" "}
                <span className="text-gradient">locked out overnight</span>
              </h2>
              <p className="text-muted/50 text-base leading-relaxed mb-4">
                In January 2026, Meta flipped a switch and thousands of
                businesses lost their AI chatbots on WhatsApp. I&apos;d been
                building automation tools for years, and I saw the same story
                play out everywhere — teams that had finally started working
                smarter were suddenly back to manual processes, scrambling to
                find compliant alternatives that didn&apos;t exist yet.
              </p>
              <p className="text-muted/50 text-base leading-relaxed mb-6">
                That&apos;s when I started building SkillScout. Not another
                generic chatbot — a purpose-built system that actually connects
                to your files, your databases, your infrastructure. The kind of
                tool I wished existed when I was helping businesses automate
                their operations. I&apos;m building this in public because I
                think transparency builds better products.
              </p>
              <Link
                href="/blog"
                className="text-sm text-primary hover:text-primary/80 transition-colors"
              >
                Follow the journey &rarr;
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
