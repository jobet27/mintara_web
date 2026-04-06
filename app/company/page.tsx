"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AdvanceCTA } from "@/components/CTA";
import {
  CompanyHero,
  ValueMatrix,
  TeamArchitecture,
  CareersStats,
} from "@/components/CompanySections";

/**
 * Company Page - Mintara Strategic Infrastructure
 * High-fidelity 'Advance' Tier branding.
 */

export default function CompanyPage() {
  return (
    <main className="min-h-screen bg-black antialiased selection:bg-emerald-500/30 selection:text-emerald-400">
      <Navbar />

      <CompanyHero />

      <div className="relative">
        {/* Visual Continuity Spacers */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent opacity-50" />

        <ValueMatrix />
        <TeamArchitecture />
        <CareersStats />
      </div>

      <AdvanceCTA
        title="Fuel the Architecture"
        description="We are architecting the future of wealth navigation. If you believe in precision, join us on the frontline."
        primaryText="View Open Roles"
        secondaryText="Strategic Inquiries"
      />

      <Footer />
    </main>
  );
}
