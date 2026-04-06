"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const testimonials = [
  {
    quote:
      "We used to spend hours digging through folders for client documents. Now our team just asks the bot and gets the file in seconds — right in WhatsApp.",
    name: "Sarah Chen",
    title: "Managing Partner",
    company: "Chen & Associates Legal",
    initials: "SC",
  },
  {
    quote:
      "Our agents generate CMA reports through a simple chat message. It pulls market data, formats it, and sends the PDF. Clients love the speed.",
    name: "Marcus Rivera",
    title: "Senior Agent",
    company: "Pacific Realty Group",
    initials: "MR",
  },
  {
    quote:
      "Shipment tracking queries that took 15 minutes now take 15 seconds. The bot checks our systems and responds instantly. It&apos;s transformed our ops.",
    name: "Priya Patel",
    title: "Operations Director",
    company: "SwiftShip Logistics",
    initials: "PP",
  },
];

export default function Testimonials() {
  const gridRef = useScrollReveal<HTMLDivElement>({ childSelector: ".glass" });

  return (
    <section id="testimonials" className="relative py-24 sm:py-32">
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
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Trusted by{" "}
            <span className="text-gradient">industry leaders</span>
          </h2>
          <p className="mx-auto max-w-xl text-muted/50 text-base sm:text-lg">
            See what our clients say about transforming their workflows with
            AI-powered automation.
          </p>
        </motion.div>

        {/* Testimonial Cards */}
        <div
          ref={gridRef}
          role="list"
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {testimonials.map((t) => (
            <div
              key={t.name}
              role="listitem"
              className="glass glass-hover p-6 flex flex-col"
            >
              <Quote
                size={24}
                strokeWidth={1.5}
                className="text-primary/40 mb-4"
              />
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-warning text-warning" />
                ))}
              </div>
              <p className="text-sm text-muted/60 leading-relaxed italic flex-1 mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center text-xs font-bold text-white shrink-0">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-medium text-white">{t.name}</p>
                  <p className="text-xs text-muted/40">
                    {t.title}, {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
