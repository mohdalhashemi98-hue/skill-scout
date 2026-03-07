"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, CheckCircle } from "lucide-react";

export default function CTA() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass =
    "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-muted/30 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/30 transition-all duration-200";

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative glass overflow-hidden rounded-3xl p-10 sm:p-16"
        >
          {/* Background gradient orbs */}
          <div
            className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-[100px] pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-0 left-0 w-60 h-60 bg-accent/10 rounded-full blur-[80px] pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10">
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                Ready to{" "}
                <span className="text-gradient">automate</span>?
              </h2>
              <p className="mx-auto max-w-lg text-muted/50 text-base sm:text-lg">
                Get a custom AI chatbot deployed on your channels in under 48
                hours. Send us a message to get started.
              </p>
            </div>

            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  onSubmit={handleSubmit}
                  className="mx-auto max-w-lg space-y-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="cta-name" className="sr-only">
                        Name
                      </label>
                      <input
                        id="cta-name"
                        type="text"
                        required
                        placeholder="Your name"
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                        className={inputClass}
                        aria-label="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="cta-email" className="sr-only">
                        Email
                      </label>
                      <input
                        id="cta-email"
                        type="email"
                        required
                        placeholder="Email address"
                        value={form.email}
                        onChange={(e) =>
                          setForm({ ...form, email: e.target.value })
                        }
                        className={inputClass}
                        aria-label="Email address"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="cta-company" className="sr-only">
                      Company
                    </label>
                    <input
                      id="cta-company"
                      type="text"
                      placeholder="Company (optional)"
                      value={form.company}
                      onChange={(e) =>
                        setForm({ ...form, company: e.target.value })
                      }
                      className={inputClass}
                      aria-label="Company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="cta-message" className="sr-only">
                      Message
                    </label>
                    <textarea
                      id="cta-message"
                      rows={4}
                      required
                      placeholder="Tell us about your automation needs..."
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      className={inputClass + " resize-none"}
                      aria-label="Your message"
                    />
                  </div>
                  <button
                    type="submit"
                    className="glow-button w-full text-base px-8 py-4 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background"
                    aria-label="Send message"
                  >
                    Send Message
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-center py-8"
                >
                  <CheckCircle
                    size={48}
                    strokeWidth={1.5}
                    className="text-success mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Message sent!
                  </h3>
                  <p className="text-muted/50">
                    We&apos;ll be in touch within 24 hours.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Trust signals */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-xs text-muted/30 uppercase tracking-widest font-medium">
              <div className="flex items-center gap-2">
                <Check size={14} strokeWidth={2.5} className="text-success" />
                No credit card required
              </div>
              <div className="flex items-center gap-2">
                <Check size={14} strokeWidth={2.5} className="text-success" />
                Free 14-day trial
              </div>
              <div className="flex items-center gap-2">
                <Check size={14} strokeWidth={2.5} className="text-success" />
                Cancel anytime
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
