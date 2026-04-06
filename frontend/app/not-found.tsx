"use client";

import { motion } from "framer-motion";
import { CloudOff } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="hero-gradient" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-xl px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl p-10 sm:p-16"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex items-center justify-center h-20 w-20 rounded-2xl bg-white/5 border border-white/10 mb-8"
          >
            <CloudOff size={40} strokeWidth={1.5} className="text-primary" />
          </motion.div>

          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-gradient">Lost in the cloud</span>
          </h1>

          <p className="text-muted/50 text-base sm:text-lg mb-10 leading-relaxed">
            The page you&apos;re looking for has drifted into the void. Let&apos;s get you back on track.
          </p>

          <Link
            href="/"
            className="glow-button inline-block text-base px-8 py-4 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background"
            aria-label="Return to homepage"
          >
            Return Home
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
