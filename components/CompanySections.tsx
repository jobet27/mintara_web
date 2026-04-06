"use client";
import React from "react";
import Image from "next/image";
import { Target, Shield, Cpu, Globe, Zap } from "lucide-react";

/**
 * Mintara Company Page Sections
 * Aligned with 'Advance' tier design: Clinical, High-Performance, Wealth-Focused.
 */

// --- Hero Section ---
export const CompanyHero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-16 lg:pt-56 lg:pb-40 bg-black overflow-hidden border-b border-zinc-900">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100rem] h-[100rem] bg-emerald-500/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-3 rounded-full bg-zinc-900 border border-zinc-800 px-5 py-2.5 text-[10px] font-black uppercase tracking-[0.3em] text-emerald-400 mb-14 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-1000">
          <Globe className="h-4 w-4" />
          Established 2024 • Global Operations
        </div>

        <h1 className="text-8xl font-black tracking-tight text-white sm:text-[10rem] mb-12 leading-[0.75] uppercase drop-shadow-2xl animate-in fade-in slide-in-from-bottom-8 duration-700">
          Mission <br />
          <span className="text-emerald-500">Precision</span>
        </h1>

        <p className="text-2xl lg:text-3xl leading-relaxed text-zinc-400 font-bold max-w-4xl mx-auto tracking-tight animate-in fade-in duration-1000">
          We are the architects of the next-generation financial landscape.
          Mintara provides the clinical infrastructure required for
          high-velocity wealth management.
        </p>
      </div>
    </section>
  );
};

// --- Value Matrix ---
const values = [
  {
    icon: Shield,
    title: "Absolute Integrity",
    description:
      "Every byte of financial data is encrypted and multi-vaulted with zero-trust architecture.",
  },
  {
    icon: Cpu,
    title: "Clinical Innovation",
    description:
      "We don't just track budgets; we model future trajectories with high-performance AI engines.",
  },
  {
    icon: Target,
    title: "Persona-First",
    description:
      "Whether you are a founder or a student, our platform adapts to your specific strategic DNA.",
  },
];

export const ValueMatrix: React.FC = () => {
  return (
    <section className="py-32 bg-zinc-950 border-b border-zinc-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-24">
          <h2 className="text-4xl font-black tracking-tighter text-white sm:text-6xl mb-8 uppercase leading-[0.9]">
            Strategic <br />
            <span className="text-emerald-500">DNA</span>
          </h2>
          <p className="text-xl text-zinc-100 font-bold max-w-xl">
            Our foundations are built on data-centric honesty and technical
            excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {values.map((v, idx) => (
            <div
              key={idx}
              className="group p-10 lg:p-14 rounded-[3rem] bg-zinc-900/30 border border-zinc-800/80 hover:border-emerald-500/20 transition-all duration-700 backdrop-blur-2xl"
            >
              <div className="h-14 w-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-10 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-black transition-all duration-500">
                <v.icon size={28} strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-6">
                {v.title}
              </h3>
              <p className="text-zinc-400 font-bold leading-relaxed">
                {v.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Team Architecture ---
const team = [
  {
    name: "Dr. Elena Vance",
    role: "Chief Strategy Architect",
    specialty: "High-Frequency Risk Modeling",
    image: "https://avatar.vercel.sh/elena",
  },
  {
    name: "Marcus Thorne",
    role: "Head of AI Infrastructure",
    specialty: "Persona-Driven Neural Nets",
    image: "https://avatar.vercel.sh/marcus",
  },
  {
    name: "Sienna Rodriguez",
    role: "Director of Global Compliance",
    specialty: "Multilateral Asset Custody",
    image: "https://avatar.vercel.sh/sienna",
  },
];

export const TeamArchitecture: React.FC = () => {
  return (
    <section className="py-32 bg-black border-b border-zinc-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-4xl font-black tracking-tighter text-white sm:text-6xl mb-8 uppercase">
            The <span className="text-emerald-500">Architects</span>
          </h2>
          <p className="text-xl text-zinc-400 font-bold max-w-2xl mx-auto">
            A specialized collective derived from the fields of quantitative
            finance, AI research, and global security.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {team.map((member, idx) => (
            <div
              key={idx}
              className="group flex flex-col items-center text-center"
            >
              <div className="relative mb-10">
                <div className="absolute -inset-4 rounded-full bg-emerald-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="h-48 w-48 rounded-full border-2 border-zinc-800 p-2 group-hover:border-emerald-500/50 transition-all duration-700">
                  <Image
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full rounded-full grayscale group-hover:grayscale-0 transition-all duration-700 object-cover bg-zinc-900"
                    width={192}
                    height={192}
                  />
                </div>
              </div>
              <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-2">
                {member.name}
              </h3>
              <p className="text-emerald-400 text-xs font-black uppercase tracking-[0.2em] mb-4">
                {member.role}
              </p>
              <div className="h-0.5 w-12 bg-zinc-800 mb-4 group-hover:w-24 group-hover:bg-emerald-500 transition-all duration-700" />
              <p className="text-zinc-500 text-sm font-bold">
                {member.specialty}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Careers/Stats Overview ---
export const CareersStats: React.FC = () => {
  return (
    <section className="py-32 bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="text-4xl font-black tracking-tighter text-white sm:text-6xl mb-8 uppercase leading-[0.9]">
              Join the <br />
              <span className="text-emerald-400">Frontline</span>
            </h2>
            <p className="text-xl text-zinc-100 font-bold leading-relaxed mb-12">
              We are scaling rapidly and seeking engineers who thrive at the
              intersection of high-trust data and radical innovation.
            </p>
            <div className="grid grid-cols-2 gap-8 mb-12">
              <div className="p-8 rounded-[2rem] bg-zinc-900/50 border border-zinc-800/80">
                <span className="text-4xl font-black text-white block mb-2 tracking-tighter">
                  12+
                </span>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">
                  Global Offices
                </span>
              </div>
              <div className="p-8 rounded-[2rem] bg-emerald-500 text-black">
                <span className="text-4xl font-black block mb-2 tracking-tighter">
                  48h
                </span>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-black">
                  Mean Response Time
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {[
              "Core Infrastructure Engineer",
              "Quantitative UI/UX Architect",
              "Global Risk Analyst",
            ].map((job, idx) => (
              <div
                key={idx}
                className="group p-8 rounded-3xl bg-zinc-900/30 border border-zinc-800 hover:border-emerald-500/40 hover:bg-zinc-900/50 transition-all flex items-center justify-between cursor-pointer"
              >
                <div>
                  <h4 className="text-lg font-black text-white uppercase tracking-tighter mb-1">
                    {job}
                  </h4>
                  <span className="text-xs font-bold text-emerald-400/60 uppercase tracking-widest">
                    Remote Option • High Equity
                  </span>
                </div>
                <div className="h-10 w-10 flex items-center justify-center rounded-full bg-zinc-800 group-hover:bg-emerald-500 group-hover:text-black transition-colors">
                  <Zap size={16} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
