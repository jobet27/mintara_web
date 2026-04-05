"use client";

import React from "react";

/**
 * Mintara Professional and Advance Feature Components
 * Designed for High-Fidelity Landing Pages.
 * Zero 'any' types, full responsiveness, and premium aesthetics.
 */

export interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  link?: string;
  span?: "normal" | "large" | "wide";
}

export interface FeaturesProps {
  badge?: string;
  title: string;
  subtitle: string;
  items: FeatureItem[];
  className?: string;
}

/**
 * ProfessionalFeatures: Minimalist, authoritative 3-column grid.
 * Best for conveying stability, security, and enterprise-grade reliability.
 */
export const ProfessionalFeatures: React.FC<FeaturesProps> = ({
  badge,
  title,
  subtitle,
  items,
  className = "",
}) => {
  return (
    <section className={`py-20 lg:py-32 bg-white dark:bg-black ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-24">
          {badge && (
            <span className="inline-flex items-center rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-900 ring-1 ring-zinc-200 dark:bg-zinc-900 dark:text-zinc-100 dark:ring-zinc-800 mb-6 uppercase tracking-wider">
              {badge}
            </span>
          )}
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-5xl dark:text-white mb-6">
            {title}
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <div
              key={index}
              className="relative group p-8 rounded-2xl bg-zinc-50 border border-zinc-100 dark:bg-zinc-900/50 dark:border-zinc-800 transition-all duration-300 hover:bg-white dark:hover:bg-zinc-900 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="h-12 w-12 rounded-xl bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 flex items-center justify-center mb-6 shadow-lg transition-transform group-hover:scale-110">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">
                {item.title}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {item.description}
              </p>
              {item.link && (
                <a
                  href={item.link}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-zinc-900 dark:text-white hover:underline underline-offset-4"
                >
                  Learn more
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/**
 * AdvanceFeatures: Dynamic bento-style grid with glassmorphism.
 * Best for innovation, innovation-driven growth, and high-impact data visualization.
 */
export const AdvanceFeatures: React.FC<FeaturesProps> = ({
  badge,
  title,
  subtitle,
  items,
  className = "",
}) => {
  return (
    <section
      className={`relative py-20 lg:py-32 bg-zinc-50 dark:bg-zinc-950 overflow-hidden ${className}`}
    >
      {/* Texture Layer */}
      <div className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Background Gradients */}
        <div className="absolute -top-24 -right-24 w-[40rem] h-[40rem] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 -left-24 w-[30rem] h-[30rem] bg-teal-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="mb-16 lg:mb-24 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12 text-center lg:text-left transition-all duration-700">
          <div className="max-w-2xl">
            {badge && (
              <span className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-400/20 dark:bg-emerald-500/10 dark:text-emerald-400 dark:ring-emerald-500/20 mb-6 animate-fade-in">
                {badge}
              </span>
            )}
            <h2 className="text-4xl font-extrabold tracking-tighter text-zinc-900 sm:text-6xl dark:text-white mb-6 leading-[0.9]">
              {title}
            </h2>
            <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 font-medium">
              {subtitle}
            </p>
          </div>
          <div className="hidden lg:block h-px flex-1 bg-gradient-to-r from-emerald-500/50 via-zinc-200 dark:via-zinc-800 to-transparent mb-4 mx-8" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-fr">
          {items.map((item, index) => {
            const isLarge = item.span === "large";
            const isWide = item.span === "wide";

            return (
              <div
                key={index}
                className={`relative group p-8 rounded-[2.5rem] bg-white/40 dark:bg-zinc-900/40 backdrop-blur-2xl border border-white/20 dark:border-zinc-800/50 flex flex-col justify-between transition-all duration-500 hover:shadow-[0_0_40px_-10px_rgba(16,185,129,0.2)] hover:bg-white/60 dark:hover:bg-zinc-900/60 hover:-translate-y-1 ${
                  isLarge
                    ? "lg:col-span-2 lg:row-span-2"
                    : isWide
                      ? "lg:col-span-2"
                      : ""
                }`}
              >
                <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none transition-transform duration-700 group-hover:scale-150 group-hover:rotate-12 group-hover:opacity-10 dark:invert">
                  {item.icon}
                </div>

                <div className="relative">
                  <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 text-white flex items-center justify-center mb-8 shadow-xl shadow-emerald-500/10 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                    <div className="h-8 w-8 flex items-center justify-center">
                      {item.icon}
                    </div>
                  </div>

                  <h3
                    className={`font-bold text-zinc-900 dark:text-white tracking-tight mb-4 ${isLarge ? "text-3xl" : "text-xl"}`}
                  >
                    {item.title}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 flex items-center justify-between">
                  <div className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="ml-4 h-10 w-10 rounded-full border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-400 transition-all duration-500 group-hover:border-emerald-500 group-hover:text-emerald-500 group-hover:bg-emerald-500/10">
                    <svg
                      className="h-5 w-5 translate-x-px"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
