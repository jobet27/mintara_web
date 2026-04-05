"use client";

import React from "react";
import { Button } from "./Button";

/**
 * Mintara Professional and Advance Hero Components
 * Designed for High-Fidelity Landing Pages.
 * Zero 'any' types, full responsiveness, and premium aesthetics.
 */

interface HeroProps {
  badge?: string;
  title: React.ReactNode;
  description: string;
  primaryCtaText: string;
  secondaryCtaText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  className?: string;
}

/**
 * ProfessionalHero: Minimalist, centered, high-trust.
 * Best for authoritative budgeting and established financial tools.
 */
export const ProfessionalHero: React.FC<HeroProps> = ({
  badge,
  title,
  description,
  primaryCtaText,
  secondaryCtaText,
  onPrimaryClick,
  onSecondaryClick,
  className = "",
}) => {
  return (
    <section
      className={`relative w-full py-20 lg:py-32 overflow-hidden bg-white dark:bg-black ${className}`}
    >
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-30 dark:opacity-20">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-zinc-100 dark:bg-zinc-900 blur-3xl animate-pulse" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[30%] h-[30%] rounded-full bg-zinc-50 dark:bg-zinc-900 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        {badge && (
          <span className="inline-flex items-center rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-900 ring-1 ring-zinc-200 dark:bg-zinc-900 dark:text-zinc-100 dark:ring-zinc-800 mb-8 transition-transform hover:scale-105 cursor-default">
            {badge}
          </span>
        )}
        <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-6xl dark:text-white mb-6 leading-[1.1]">
          {title}
        </h1>
        <p className="mx-auto max-w-2xl text-lg sm:text-xl leading-8 text-zinc-600 dark:text-zinc-400 mb-10">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            variant="professional"
            size="xl"
            className="w-full sm:w-auto"
            onClick={onPrimaryClick}
          >
            {primaryCtaText}
          </Button>
          {secondaryCtaText && (
            <Button
              variant="outline"
              size="xl"
              className="w-full sm:w-auto"
              onClick={onSecondaryClick}
            >
              {secondaryCtaText}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

/**
 * AdvanceHero: Dynamic, split-layout, emerald-teal gradients.
 * Best for innovative, growth-focused fintech applications.
 */
export const AdvanceHero: React.FC<HeroProps> = ({
  badge,
  title,
  description,
  primaryCtaText,
  secondaryCtaText,
  onPrimaryClick,
  onSecondaryClick,
  className = "",
}) => {
  return (
    <section
      className={`relative w-full py-20 lg:py-32 overflow-hidden bg-zinc-50 dark:bg-zinc-950 ${className}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
          <div className="lg:col-span-7 xl:col-span-6 text-center lg:text-left relative z-10">
            {badge && (
              <span className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-400/20 dark:bg-emerald-500/10 dark:text-emerald-400 dark:ring-emerald-500/20 mb-8">
                {badge}
              </span>
            )}
            <h1 className="text-4xl font-black tracking-tighter text-zinc-900 sm:text-6xl lg:text-7xl dark:text-white mb-6 leading-none">
              {title}
            </h1>
            <p className="text-lg sm:text-xl leading-relaxed text-zinc-600 dark:text-zinc-400 mb-10 lg:pr-12">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button
                variant="advance"
                size="xl"
                className="w-full sm:w-auto"
                onClick={onPrimaryClick}
              >
                {primaryCtaText}
              </Button>
              {secondaryCtaText && (
                <Button
                  variant="ghost"
                  size="xl"
                  className="w-full sm:w-auto ring-1 ring-zinc-200 dark:ring-zinc-800"
                  onClick={onSecondaryClick}
                >
                  {secondaryCtaText}
                </Button>
              )}
            </div>
          </div>

          <div className="mt-16 lg:mt-0 lg:col-span-5 xl:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-4 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 blur-2xl rounded-[3rem] animate-pulse pointer-events-none" />
              <div className="relative bg-white/40 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 p-8 rounded-[2rem] shadow-2xl overflow-hidden group">
                <div className="aspect-square bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-2xl flex items-center justify-center relative overflow-hidden transition-transform duration-500 group-hover:scale-[1.02]">
                  <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
                  <svg
                    className="w-32 h-32 text-emerald-600 dark:text-emerald-400 transition-transform duration-700 group-hover:rotate-12"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                  <div className="absolute bottom-8 left-8 right-8 h-24 bg-white/60 dark:bg-zinc-900/40 backdrop-blur-lg rounded-xl border border-white/20 p-4 shadow-lg transition-all duration-300 group-hover:-translate-y-2">
                    <div className="flex gap-2 items-center mb-2">
                      <div className="h-2 w-2 rounded-full bg-emerald-500" />
                      <div className="h-2 w-12 rounded-full bg-zinc-200 dark:bg-zinc-800" />
                    </div>
                    <div className="h-4 w-full rounded-lg bg-zinc-100 dark:bg-zinc-800/50" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
