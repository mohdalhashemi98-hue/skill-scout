"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, TrendingUp } from "lucide-react";

const PROFESSIONAL_MONTHLY_COST = 500;

export default function ROICalculator() {
  const [teamSize, setTeamSize] = useState(5);
  const [hoursPerWeek, setHoursPerWeek] = useState(10);
  const [hourlyRate, setHourlyRate] = useState(50);

  const monthlyCost = teamSize * hoursPerWeek * 4.33 * hourlyRate;
  const monthlySavings = monthlyCost * 0.7;
  const annualSavings = monthlySavings * 12;
  const skillscoutCost = PROFESSIONAL_MONTHLY_COST * 12;
  const netROI = annualSavings - skillscoutCost;

  return (
    <section id="roi-calculator" className="relative py-24 sm:py-32">
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
            ROI Calculator
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Calculate your{" "}
            <span className="text-gradient">savings</span>
          </h2>
          <p className="mx-auto max-w-xl text-muted/50 text-base sm:text-lg">
            See how much your team could save by automating manual tasks with
            SkillScout.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Inputs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass rounded-2xl p-6 sm:p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Calculator size={20} strokeWidth={2} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-white">Your Numbers</h3>
            </div>

            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <label htmlFor="team-size" className="text-muted/60">
                    Team size
                  </label>
                  <span className="text-white font-medium">{teamSize}</span>
                </div>
                <input
                  id="team-size"
                  type="range"
                  min={1}
                  max={50}
                  value={teamSize}
                  onChange={(e) => setTeamSize(Number(e.target.value))}
                  aria-label="Team size"
                  aria-valuemin={1}
                  aria-valuemax={50}
                  aria-valuenow={teamSize}
                />
                <div className="flex justify-between text-xs text-muted/30 mt-1">
                  <span>1</span>
                  <span>50</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <label htmlFor="hours-week" className="text-muted/60">
                    Manual hours / week
                  </label>
                  <span className="text-white font-medium">{hoursPerWeek}h</span>
                </div>
                <input
                  id="hours-week"
                  type="range"
                  min={1}
                  max={40}
                  value={hoursPerWeek}
                  onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                  aria-label="Hours spent on manual tasks per week"
                  aria-valuemin={1}
                  aria-valuemax={40}
                  aria-valuenow={hoursPerWeek}
                />
                <div className="flex justify-between text-xs text-muted/30 mt-1">
                  <span>1</span>
                  <span>40</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <label htmlFor="hourly-rate" className="text-muted/60">
                    Avg. hourly rate
                  </label>
                  <span className="text-white font-medium">
                    ${hourlyRate}
                  </span>
                </div>
                <input
                  id="hourly-rate"
                  type="range"
                  min={20}
                  max={200}
                  step={5}
                  value={hourlyRate}
                  onChange={(e) => setHourlyRate(Number(e.target.value))}
                  aria-label="Average hourly rate"
                  aria-valuemin={20}
                  aria-valuemax={200}
                  aria-valuenow={hourlyRate}
                />
                <div className="flex justify-between text-xs text-muted/30 mt-1">
                  <span>20</span>
                  <span>200</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass rounded-2xl p-6 sm:p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-xl bg-success/10 border border-success/20 flex items-center justify-center">
                <TrendingUp size={20} strokeWidth={2} className="text-success" />
              </div>
              <h3 className="text-lg font-semibold text-white">Your Savings</h3>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-white/5">
                <span className="text-sm text-muted/50">Monthly manual cost</span>
                <span className="text-white font-medium">
                  ${monthlyCost.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                </span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-white/5">
                <span className="text-sm text-muted/50">
                  Est. monthly savings (70%)
                </span>
                <span className="text-success font-medium">
                  ${monthlySavings.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                </span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-white/5">
                <span className="text-sm text-muted/50">Annual savings</span>
                <span className="text-success font-medium">
                  ${annualSavings.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                </span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-white/5">
                <span className="text-sm text-muted/50">
                  SkillScout cost (Pro plan)
                </span>
                <span className="text-muted/70 font-medium">
                  -${skillscoutCost.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-base font-semibold text-white">
                  Net annual ROI
                </span>
                <span
                  className={`text-xl font-bold ${netROI >= 0 ? "text-success" : "text-accent"}`}
                >
                  ${netROI.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                </span>
              </div>
            </div>

            <a
              href="#contact"
              className="glow-button block text-center mt-6 text-sm px-6 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background"
              aria-label="Start saving today"
            >
              Start Saving Today
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
