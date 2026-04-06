"use client";

import React, { useState } from "react";
import { Check, HelpCircle } from "lucide-react";

export interface PricingTier {
  id: string;
  name: string;
  priceMonthly: number;
  priceAnnual: number;
  description: string;
  features: string[];
  ctaText: string;
  highlight?: boolean;
  tag: string;
}

const pricingTiers: PricingTier[] = [
  {
    id: "starter",
    name: "Starter",
    priceMonthly: 0,
    priceAnnual: 0,
    description:
      "Essential tools for personal finance management and student budgeting.",
    features: [
      "Real-time expense tracking",
      "Single-persona modeling",
      "Mobile access (PWA)",
      "Basic debt tracker",
      "Monthly performance reports",
    ],
    ctaText: "Get Started Free",
    tag: "Individual Use",
  },
  {
    id: "pro",
    name: "Pro",
    priceMonthly: 699,
    priceAnnual: 559,
    description:
      "Advanced analytical toolkit for founders and high-growth professionals.",
    features: [
      "Everything in Starter",
      "Precision Runway Modeling",
      "AI-driven tax optimization",
      "Multi-asset class tracking",
      "Priority strategy support",
      "Custom objective alerts",
    ],
    ctaText: "Upgrade to Pro",
    highlight: true,
    tag: "Most Popular",
  },
  {
    id: "advance",
    name: "Elite",
    priceMonthly: 2499,
    priceAnnual: 1999,
    description: "Enterprise-grade asset management for wealth builders.",
    features: [
      "Everything in Pro",
      "Personal Asset Custody",
      "Estate & Legacy modeling",
      "Global risk mitigation",
      "Concierge financial AI",
      "Unlimited persona layers",
    ],
    ctaText: "Contact Sales",
    tag: "Wealth Leaders",
  },
];

const faqs = [
  {
    question: "How does the PHP conversion work?",
    answer:
      "Mintara's pricing is native to the Philippines, avoiding exchange fees and volatility.",
  },
  {
    question: "Can I switch plans later?",
    answer: "Yes, upgrade or downgrade anytime via your dashboard.",
  },
  {
    question: "What is Strategy Support?",
    answer:
      "Pro and Elite members receive direct access to our AI Strategic Engine for portfolio adjustments.",
  },
];

export const PricingTabber: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <div className="w-full">
      <section className="py-24 bg-black relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center justify-center gap-6 mb-24 animate-in fade-in duration-1000">
            <span
              className={`text-sm font-black uppercase tracking-[0.2em] transition-all duration-300 ${!isAnnual ? "text-emerald-400 drop-shadow-[0_0_8px_rgba(16,185,129,0.4)]" : "text-zinc-600"}`}
            >
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-20 h-10 rounded-full bg-zinc-900 border border-zinc-800 p-1.5 transition-all duration-500 hover:border-emerald-500/30 group"
              aria-label="Toggle annual pricing"
            >
              <div
                className={`h-full aspect-square rounded-full bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.6)] transition-all duration-500 transform ${isAnnual ? "translate-x-10" : "translate-x-0"} group-hover:scale-110`}
              />
            </button>
            <div className="flex flex-col items-start gap-1">
              <span
                className={`text-sm font-black uppercase tracking-[0.2em] transition-all duration-300 ${isAnnual ? "text-emerald-400 drop-shadow-[0_0_8px_rgba(16,185,129,0.4)]" : "text-zinc-600"}`}
              >
                Annual
              </span>
              <span className="text-[10px] font-black bg-emerald-500 text-black px-3 py-1 rounded-full uppercase tracking-widest shadow-lg shadow-emerald-500/20">
                Save 20%
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {pricingTiers.map((tier) => (
              <div
                key={tier.id}
                className={`relative flex flex-col p-10 lg:p-14 rounded-[4rem] bg-zinc-900/30 border transition-all duration-700 group overflow-hidden backdrop-blur-2xl ${
                  tier.highlight
                    ? "border-emerald-500/40 scale-105 shadow-[0_40px_100px_-20px_rgba(16,185,129,0.15)] z-20"
                    : "border-zinc-800/80 hover:border-zinc-600/50 z-10"
                }`}
              >
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                {tier.highlight && (
                  <div className="absolute top-0 right-0 p-10">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] bg-emerald-500 text-black px-5 py-2.5 rounded-full shadow-2xl">
                      Recommended
                    </span>
                  </div>
                )}

                <div className="mb-10">
                  <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-4">
                    {tier.name}
                  </h3>
                  <p className="text-zinc-100 font-bold leading-tight mb-8 h-12">
                    {tier.description}
                  </p>

                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-black text-white tracking-tighter">
                      ₱{isAnnual ? tier.priceAnnual : tier.priceMonthly}
                    </span>
                    <span className="text-zinc-500 font-black uppercase tracking-widest text-xs">
                      / {isAnnual ? "Yearly" : "Month"}
                    </span>
                  </div>
                </div>

                <ul className="flex-1 space-y-5 mb-12">
                  {tier.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 text-zinc-100 font-bold tracking-tight"
                    >
                      <div className="h-5 w-5 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                        <Check size={12} strokeWidth={4} />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-6 rounded-3xl font-black uppercase tracking-[0.2em] text-[11px] transition-all duration-500 transform hover:-translate-y-1.5 ${
                    tier.highlight
                      ? "bg-white text-black shadow-[0_20px_40px_-5px_rgba(16,185,129,0.3)] hover:bg-emerald-500"
                      : "bg-zinc-800 text-zinc-100 hover:bg-zinc-700 hover:border-zinc-500 border border-zinc-700"
                  }`}
                >
                  {tier.ctaText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Comparison Matrix Extension */}
      <section className="py-32 bg-zinc-950 border-t border-zinc-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-4xl font-black tracking-tighter text-white sm:text-6xl mb-8 uppercase leading-[0.9]">
                Strategic <br />
                <span className="text-emerald-500">Clarification</span>
              </h2>
              <p className="text-xl text-zinc-100 font-bold leading-relaxed max-w-xl mb-12">
                We believe in absolute transparency. Every PHP invested in your
                strategy is optimized for immediate local ROI.
              </p>
              <div className="flex items-center gap-10">
                <div className="flex flex-col">
                  <span className="text-4xl font-black text-white tracking-tighter">
                    100%
                  </span>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-600">
                    Uptime Reliability
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-4xl font-black text-white tracking-tighter">
                    SEC
                  </span>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-600">
                    Global Compliance
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800 hover:border-emerald-500/20 transition-all group"
                >
                  <h4 className="text-lg font-black text-white uppercase tracking-tighter mb-4 flex items-center justify-between">
                    {faq.question}
                    <HelpCircle
                      className="text-zinc-600 group-hover:text-emerald-400 transition-colors"
                      size={20}
                    />
                  </h4>
                  <p className="text-zinc-100 font-bold leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
