"use client";

import React from "react";
import { Button } from "./Button";
import { ArrowRight, Sparkles } from "lucide-react";

/**
 * Mintara Professional and Advance CTA Components
 * Designed for High-Fidelity Landing Pages.
 * Zero 'any' types, full responsiveness, and premium conversion aesthetics.
 */

export interface CTAProps {
  title: string;
  description: string;
  primaryText: string;
  secondaryText?: string;
  className?: string;
}

/**
 * ProfessionalCTA: Authoritative, centered final invitation.
 * Best for conveying stability, trustworthiness, and precision.
 */
export const ProfessionalCTA: React.FC<CTAProps> = ({
  title,
  description,
  primaryText,
  secondaryText,
  className = "",
}) => {
  return (
    <section
      className={`py-20 lg:py-32 bg-white dark:bg-black border-t border-zinc-100 dark:border-zinc-900 ${className}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-6xl dark:text-white mb-8">
            {title}
          </h2>
          <p className="text-xl leading-relaxed text-zinc-600 dark:text-zinc-400 mb-12">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="professional"
              size="lg"
              className="w-full sm:w-auto"
            >
              {primaryText}
            </Button>
            {secondaryText && (
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                {secondaryText}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

/**
 * AdvanceCTA: Dynamic, gradient-focused split-layout or background-banner.
 * Best for innovation, rapid growth tracking, and modern finance.
 */
export const AdvanceCTA: React.FC<CTAProps> = ({
  title,
  description,
  primaryText,
  secondaryText,
  className = "",
}) => {
  return (
    <section
      className={`relative py-20 lg:py-32 bg-zinc-950 overflow-hidden ${className}`}
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 via-zinc-950 to-teal-600/10 pointer-events-none" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[40rem] h-[40rem] bg-teal-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="relative inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-1.5 text-sm font-semibold text-emerald-400 ring-1 ring-emerald-500/20 mb-10">
          <Sparkles className="h-4 w-4" />
          Join 50,000+ Planners
        </div>

        <h2 className="text-4xl font-black tracking-tighter text-white sm:text-7xl mb-8 leading-[0.9]">
          {title}
        </h2>
        <p className="max-w-2xl mx-auto text-xl leading-relaxed text-zinc-400 mb-12 font-medium">
          {description}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Button
            variant="advance"
            size="lg"
            className="w-full sm:w-auto group"
          >
            {primaryText}
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
          {secondaryText && (
            <button className="text-sm font-bold text-zinc-400 uppercase tracking-widest hover:text-white transition-colors">
              {secondaryText}
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
