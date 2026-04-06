"use client";

import React, { useState } from "react";
import {
  Rocket,
  GraduationCap,
  Coins,
  CheckCircle2,
  ChevronRight,
  ArrowUpRight,
} from "lucide-react";

/**
 * Mintara Dedicated Solutions Components
 * Designed to provide a distinct identity for the Solutions page.
 * Uses a 'Persona-First' switcher and unique showcase layouts.
 */

export interface PersonaData {
  id: "startup" | "academic" | "legacy";
  name: string;
  tagline: string;
  description: string;
  metrics: { label: string; value: string }[];
  features: string[];
  ctaText: string;
  image?: string;
  colorClass: string;
  textColorClass: string;
}

/**
 * SolutionsTabber: High-fidelity interactive selector for the Solutions page.
 * Distinguishes the page from the homepage by focusing on a 'Switcher' UX.
 */
export const SolutionsTabber: React.FC<{ personas: PersonaData[] }> = ({
  personas,
}) => {
  const [activeTab, setActiveTab] = useState(0);
  const activePersona = personas[activeTab];

  // Map IDs to local imports to ensure they are used
  const IconMap = {
    startup: Rocket,
    academic: GraduationCap,
    legacy: Coins,
  };

  const ActiveIcon = IconMap[activePersona.id];

  return (
    <section className="py-20 lg:py-32 bg-black overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Tab Selector: Premium Navigation */}
        <div className="relative mb-20 lg:mb-28">
          <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-8">
            {personas.map((persona, index) => (
              <button
                key={persona.id}
                onClick={() => setActiveTab(index)}
                className={`group relative px-6 py-4 rounded-2xl border transition-all duration-500 overflow-hidden ${
                  activeTab === index
                    ? "bg-emerald-500/10 border-emerald-500/50 text-white"
                    : "bg-zinc-950 border-zinc-800 text-zinc-500 hover:border-zinc-700"
                }`}
              >
                {/* Active Indicator Glow */}
                {activeTab === index && (
                  <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
                )}

                <div className="flex items-center gap-3 relative z-10 transition-transform duration-300 group-hover:translate-x-1">
                  <div
                    className={`transition-all duration-300 ${activeTab === index ? "text-emerald-400 scale-110 drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]" : "group-hover:text-zinc-300"}`}
                  >
                    {React.createElement(IconMap[persona.id], {
                      size: 20,
                      strokeWidth: 2,
                    })}
                  </div>
                  <span className="font-bold tracking-tight uppercase text-xs lg:text-sm">
                    {persona.name}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Subtle connecting line */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-px h-10 bg-gradient-to-b from-zinc-800 to-transparent" />
        </div>

        {/* Content Showcase: Unique Layout vs Homepage */}
        <div className="relative group/showcase animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            {/* Strategy Content Column */}
            <div className="order-2 lg:order-1">
              {/* Persona Icon Showcase: High-Fidelity Badge */}
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-zinc-900 border border-zinc-800 shadow-2xl shadow-emerald-500/10 text-emerald-500 transform -rotate-6 transition-transform group-hover/showcase:rotate-0 duration-700">
                <ActiveIcon size={32} strokeWidth={1.5} />
              </div>

              <div className="inline-flex items-center gap-2 rounded-full bg-zinc-900 border border-zinc-800 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] mb-6 shadow-xl shadow-black/50">
                <div
                  className={`h-1.5 w-1.5 rounded-full ${activePersona.colorClass}`}
                />
                <span className={activePersona.textColorClass}>
                  {activePersona.name} Strategy
                </span>
              </div>
              <h2 className="text-4xl lg:text-7xl font-black text-white tracking-tighter mb-8 leading-[0.95] drop-shadow-sm">
                {activePersona.tagline}
              </h2>
              <p className="text-xl lg:text-2xl text-zinc-100 font-medium mb-12 leading-relaxed max-w-xl">
                {activePersona.description}
              </p>

              {/* Technical Breakdown: Advanced Analytical Detail */}
              <div className="mb-12 p-1 rounded-3xl bg-zinc-900/80 border border-zinc-800 backdrop-blur-xl overflow-hidden group/matrix transition-all hover:border-emerald-500/30">
                <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-zinc-800 border-b border-zinc-800 bg-zinc-950/50">
                  <div className="p-4 text-[10px] font-black uppercase tracking-widest text-zinc-500">
                    Stability
                  </div>
                  <div className="p-4 text-[10px] font-black uppercase tracking-widest text-zinc-500">
                    Growth
                  </div>
                  <div className="p-4 text-[10px] font-black uppercase tracking-widest text-zinc-500">
                    Risk
                  </div>
                  <div className="p-4 text-[10px] font-black uppercase tracking-widest text-zinc-500">
                    Timeline
                  </div>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-zinc-800">
                  {["High", "Exponential", "Managed", "2-5 Yrs"].map(
                    (val, idx) => (
                      <div
                        key={idx}
                        className="p-4 text-sm font-bold text-white tracking-tight"
                      >
                        {val}
                      </div>
                    ),
                  )}
                </div>
              </div>

              {/* Data Metrics: Analytical Differentiation */}
              <div className="grid grid-cols-2 gap-6 mb-12">
                {activePersona.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-emerald-500/40 transition-all group/metric"
                  >
                    <div className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em] mb-2">
                      {metric.label}
                    </div>
                    <div className="text-3xl font-black text-emerald-400 tracking-tighter group-hover/metric:translate-x-1 transition-transform">
                      {metric.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Action */}
              <button className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-xl font-black uppercase text-sm hover:bg-emerald-500 hover:text-white transition-all transform hover:-translate-y-1">
                {activePersona.ctaText}
                <ChevronRight size={18} />
              </button>
            </div>

            {/* Strategic Proof Column */}
            <div className="order-1 lg:order-2">
              <div className="relative aspect-square rounded-[3rem] bg-zinc-900 border border-zinc-800 p-8 lg:p-12 overflow-hidden group/proof">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent opacity-50" />

                {/* Checkpoint Registry */}
                <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3 tracking-tight">
                  <ArrowUpRight className="text-emerald-500" />
                  Strategic Objectives
                </h3>

                <ul className="space-y-6 relative z-10">
                  {activePersona.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-4 group/item">
                      <div className="mt-1 flex-shrink-0 text-emerald-500 transition-transform group-hover/item:scale-110">
                        <CheckCircle2 size={24} strokeWidth={3} />
                      </div>
                      <div className="text-lg text-zinc-100 font-bold leading-tight tracking-tight">
                        {feature}
                      </div>
                    </li>
                  ))}
                </ul>

                {/* Floating Abstract Element for Premium Feel */}
                <div className="absolute -bottom-10 -right-10 w-48 h-48 text-emerald-500/5 transition-transform duration-1000 group-hover/proof:scale-110 group-hover/proof:rotate-12 pointer-events-none">
                  <ActiveIcon size="100%" strokeWidth={0.5} />
                </div>
                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
