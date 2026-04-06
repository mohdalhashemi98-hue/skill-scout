"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
const faqs = [
  {
    question: "How is SkillScout different from ChatGPT or other AI chatbots?",
    answer: "Unlike general-purpose chatbots, SkillScout bots have direct access to your business systems. They can read files, execute terminal commands, query databases, and trigger workflows — all through WhatsApp or Telegram. Think of it as giving your team an AI assistant that actually does the work, not just talks about it.",
  },
  {
    question: "What happened with WhatsApp's AI chatbot ban?",
    answer: "In January 2026, Meta banned general-purpose AI chatbots from WhatsApp. However, purpose-built business bots — like SkillScout — are still fully allowed. Our bots are designed for specific business tasks (file retrieval, report generation, workflow automation), making them compliant with Meta's updated policies.",
  },
  {
    question: "How long does it take to set up?",
    answer: "Most bots are operational within 48 hours. Our onboarding process includes system integration, workflow configuration, and team training. Complex enterprise deployments with custom integrations typically take 1-2 weeks.",
  },
  {
    question: "Is my data secure?",
    answer: "Absolutely. All bot interactions run in sandboxed environments with end-to-end encryption. File access is restricted to directories you explicitly authorize. Terminal commands are whitelisted — no arbitrary execution. We use Supabase with row-level security for data storage.",
  },
  {
    question: "Can I try it before committing?",
    answer: "Yes! All plans include a 30-day free trial with full features. No credit card required to start. You'll get a dedicated onboarding session to configure your bot and see real results before making any commitment.",
  },
  {
    question: "Do you support industries beyond the ones listed?",
    answer: "Absolutely. While we highlight Legal, Real Estate, Healthcare, Logistics, and E-commerce as our core verticals, our platform is flexible enough for any industry that needs file access, system queries, or workflow automation through messaging apps.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 sm:py-32 relative">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-accent mb-4">
            Got Questions?
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full glass rounded-xl p-5 text-left flex items-center justify-between gap-4 hover:border-primary/30 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background"
                aria-expanded={openIndex === index}
              >
                <span className="text-sm font-medium text-white">
                  {faq.question}
                </span>
                <ChevronDown
                  size={18}
                  className={`shrink-0 text-muted/40 transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 py-4 text-sm text-muted/50 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
