"use client";

import { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import SplineFallback from "./SplineFallback";
import ParticleBackground from "./ParticleBackground";
import { useTypewriter, TypewriterLine } from "@/hooks/useTypewriter";

const splineUrl = process.env.NEXT_PUBLIC_SPLINE_SCENE_URL;

const terminalLines: TypewriterLine[] = [
  { speaker: "user", text: "Show me the latest sales report from /reports/q4" },
  {
    speaker: "bot",
    text: 'Found 3 files in /reports/q4. Here\'s the summary from sales_q4_2025.csv: Total Revenue: $2.4M (+18% QoQ) | Top Channel: Enterprise Direct (42%) | Sending full report to your email now...',
  },
];

function TerminalPreview() {
  const lines = useMemo(() => terminalLines, []);
  const { displayedLines, isTyping, currentSpeaker } = useTypewriter(lines);

  return (
    <div className="glass rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-primary/5">
      {/* Terminal Header */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-surface/50">
        <span className="h-3 w-3 rounded-full bg-accent/80" aria-hidden="true" />
        <span className="h-3 w-3 rounded-full bg-warning/80" aria-hidden="true" />
        <span className="h-3 w-3 rounded-full bg-success/80" aria-hidden="true" />
        <span className="ml-3 text-xs text-muted/30 font-mono">
          skillscout-bot &mdash; WhatsApp
        </span>
      </div>
      {/* Terminal Body */}
      <div className="px-6 py-5 space-y-3 text-left font-mono text-sm min-h-[120px]">
        {displayedLines.map((line, i) => (
          <div key={i} className="flex items-start gap-3">
            <span
              className={`font-semibold shrink-0 ${
                line.speaker === "user" ? "text-primary" : "text-success"
              }`}
            >
              {line.speaker === "user" ? "You:" : "Bot:"}
            </span>
            <span className="text-muted/80">
              {line.text}
              {!line.complete && (
                <span className="cursor-blink text-white">|</span>
              )}
            </span>
          </div>
        ))}
        {isTyping && currentSpeaker === "bot" && displayedLines.length > 0 && !displayedLines[displayedLines.length - 1]?.complete && null}
        {isTyping && currentSpeaker === "bot" && (displayedLines.length === 0 || displayedLines[displayedLines.length - 1]?.complete) && (
          <div className="flex items-center gap-2 pt-1">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs text-muted/30">Bot is typing...</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const initial = shouldReduceMotion ? {} : { opacity: 0, y: 20 };
  const animate = { opacity: 1, y: 0 };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Particle background */}
      <ParticleBackground />

      {/* Gradient mesh background */}
      <div className="hero-gradient" aria-hidden="true" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(106,91,205,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(106,91,205,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      {/* Mesh gradient blur orbs */}
      <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-[100px] animate-float" aria-hidden="true" />
      <div className="absolute bottom-1/3 left-1/4 w-60 h-60 bg-accent/10 rounded-full blur-[80px] animate-float" style={{ animationDelay: "3s" }} aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={initial}
          animate={animate}
          transition={{ delay: 0, duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 mb-8"
        >
          <span className="h-2 w-2 rounded-full bg-success animate-pulse" />
          <span className="text-xs font-medium text-primary tracking-wide uppercase">
            Now accepting new clients
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={initial}
          animate={animate}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight mb-6"
        >
          <span className="text-white">AI Chatbots That</span>
          <br />
          <span className="text-gradient">Access Your Systems</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={initial}
          animate={animate}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mx-auto max-w-2xl text-base sm:text-lg md:text-xl text-muted/60 leading-relaxed mb-10"
        >
          Deploy intelligent chatbots on{" "}
          <span className="text-white font-medium">WhatsApp</span> &{" "}
          <span className="text-white font-medium">Telegram</span> that read
          files, execute terminal commands, and automate complex workflows
          &mdash; all through natural conversation.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={initial}
          animate={animate}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href="#pricing"
            className="glow-button text-base px-8 py-4 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background"
            aria-label="View plans and pricing"
          >
            View Plans &amp; Pricing
          </a>
          <a
            href="#how-it-works"
            className="rounded-xl border border-white/10 bg-white/5 px-8 py-4 text-base font-medium text-muted hover:bg-white/10 hover:border-white/20 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background"
            aria-label="See how it works"
          >
            See How It Works
          </a>
        </motion.div>

        {/* Terminal Preview or 3D Scene */}
        <motion.div
          initial={initial}
          animate={animate}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mx-auto max-w-2xl"
        >
          {splineUrl ? <SplineFallback /> : <TerminalPreview />}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" aria-hidden="true" />
    </section>
  );
}
