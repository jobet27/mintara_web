"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AdvanceCTA } from "@/components/CTA";
import { PricingTabber } from "@/components/PricingTabber";
import { Zap } from "lucide-react";

export default function PricingPage() {
  return (
    <div className="flex flex-col gap-0 w-full min-h-screen bg-black overflow-x-hidden">
      <Navbar />

      <section className="relative pt-32 pb-16 lg:pt-56 lg:pb-40 bg-black overflow-hidden border-b border-zinc-900">
        <div className="absolute top-0 right-0 w-[80rem] h-[80rem] bg-emerald-500/10 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute -bottom-48 -left-48 w-[60rem] h-[60rem] bg-teal-500/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-3 rounded-full bg-zinc-900 border border-zinc-800 px-5 py-2.5 text-[10px] font-black uppercase tracking-[0.3em] text-emerald-400 mb-14 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-1000">
            <Zap className="h-4 w-4" />
            Pricing Strategy 2.0
          </div>
          <h1 className="text-8xl font-black tracking-tight text-white sm:text-[10rem] mb-12 leading-[0.75] uppercase drop-shadow-2xl animate-in fade-in slide-in-from-bottom-8 duration-700">
            Elite <br />
            <span className="text-emerald-500">Value</span>
          </h1>
          <p className="text-2xl lg:text-3xl leading-relaxed text-zinc-400 font-bold max-w-3xl mx-auto mb-12 tracking-tight animate-in fade-in duration-1000">
            A localized precision framework designed for the Philippine market.
            Select your trajectory with absolute clinical clarity.
          </p>
        </div>
      </section>

      <PricingTabber />

      <AdvanceCTA
        title="Ready to Secure Your Strategy?"
        description="Select your localized PHP plan and join the future of precision wealth management."
        primaryText="Select My Plan"
        secondaryText="Enterprise Access"
      />

      <Footer />
    </div>
  );
}
