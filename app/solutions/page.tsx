import { SolutionsTabber, PersonaData } from "@/components/SolutionsTabber";
import { AdvanceCTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ShieldCheck, TrendingUp, Target, Zap } from "lucide-react";

export default function SolutionsPage() {
  const personas: PersonaData[] = [
    {
      id: "startup",
      name: "Startups",
      tagline: "Fuel Your Vision with Dynamic Growth",
      description:
        "Scale your business without sacrificing personal stability. Mintara's Startup Growth toolkit provides real-time runway modeling and automated expense mapping specifically for founders.",
      metrics: [
        { label: "Runway Insight", value: "24 Mo+" },
        { label: "Efficiency Gain", value: "32%" },
      ],
      features: [
        "Automated personal-to-business expense mapping",
        "AI-driven burn rate and runway projections",
        "Strategic capital allocation blueprints",
        "Tax optimization and compliance alerts",
      ],
      ctaText: "Explore Growth Tools",
      colorClass: "bg-emerald-500",
      textColorClass: "text-emerald-400",
    },
    {
      id: "academic",
      name: "Students",
      tagline: "Master Your Financial Future Today",
      description:
        "For the modern student, managing tuition and life shouldn't be a gamble. Mintara turns debt management into wealth creation through intelligent loan modeling and budget optimization.",
      metrics: [
        { label: "Debt Reduction", value: "18% Avg" },
        { label: "Monthly Savings", value: "$450+" },
      ],
      features: [
        "Dynamic student loan repayment modeling",
        "Lifestyle budgeting for part-time income",
        "Scholarship and grant tracking dashboard",
        "Future-income projection visualizations",
      ],
      ctaText: "Start Learning Path",
      colorClass: "bg-teal-500",
      textColorClass: "text-teal-400",
    },
    {
      id: "legacy",
      name: "Investors",
      tagline: "Preserve Your Wealth and Legacy",
      description:
        "For the high-net-worth individual, Mintara provides fractional asset tracking and risk-focused budgeting that scales with your global portfolio.",
      metrics: [
        { label: "Asset Coverage", value: "100%" },
        { label: "Risk Mitigation", value: "High" },
      ],
      features: [
        "Real-time multi-asset class performance tracking",
        "Risk-adjusted budgeting recommendations",
        "Passive income and dividend distribution dashboard",
        "Automatic volatility and market alerts",
      ],
      ctaText: "Secure Your Future",
      colorClass: "bg-emerald-600",
      textColorClass: "text-emerald-400",
    },
  ];

  return (
    <div className="flex flex-col gap-0 w-full min-h-screen bg-black overflow-x-hidden">
      <Navbar />

      {/* Solutions Header: Different from Home */}
      <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-32 bg-black overflow-hidden border-b border-zinc-900">
        <div className="absolute top-0 right-0 w-[60rem] h-[60rem] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-[40rem] h-[40rem] bg-teal-500/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-zinc-900 border border-zinc-800 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-emerald-400 mb-10 shadow-2xl">
              <Zap className="h-4 w-4" />
              Strategic Optimization 2.0
            </div>
            <h1 className="text-7xl font-black tracking-tight text-white sm:text-9xl mb-10 leading-[0.8] uppercase drop-shadow-2xl">
              Precision <br />
              <span className="text-emerald-500">Solutions</span>
            </h1>
            <p className="text-2xl lg:text-3xl leading-relaxed text-zinc-100 font-bold max-w-3xl mb-12 tracking-tight">
              Mintara&apos;s Advance platform adapts with clinical precision to
              your life stage, identifying growth levers across any financial
              ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* Main Interactive Showcase: The Switcher UX */}
      <SolutionsTabber personas={personas} />

      {/* Strategy Breakdown: Local Comparison Matrix (Analytical Depth) */}
      <section className="py-24 bg-black border-t border-zinc-900 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center lg:text-left">
            <h2 className="text-3xl font-black text-white uppercase tracking-tighter mb-4">
              Strategic Matrix
            </h2>
            <p className="text-zinc-500 font-bold text-sm uppercase tracking-widest">
              Cross-Persona Benchmark Analysis
            </p>
          </div>

          <div className="overflow-x-auto rounded-[2rem] border border-zinc-800 bg-zinc-950">
            <table className="w-full text-left">
              <thead className="border-b border-zinc-800 bg-zinc-900/50">
                <tr>
                  <th className="p-8 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">
                    Component
                  </th>
                  <th className="p-8 text-[10px] font-black uppercase tracking-[0.2em] text-emerald-400">
                    Startups
                  </th>
                  <th className="p-8 text-[10px] font-black uppercase tracking-[0.2em] text-emerald-400">
                    Students
                  </th>
                  <th className="p-8 text-[10px] font-black uppercase tracking-[0.2em] text-emerald-400">
                    Investors
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-900">
                {[
                  {
                    label: "Cap Table Synergy",
                    s: "Advanced",
                    st: "N/A",
                    inv: "Partial",
                  },
                  {
                    label: "Risk Tolerance",
                    s: "High",
                    st: "Moderate",
                    inv: "Dynamic",
                  },
                  {
                    label: "Asset Liquidity",
                    s: "Low",
                    st: "High",
                    inv: "Variable",
                  },
                  {
                    label: "AI Projection",
                    s: "24-Mo",
                    st: "Term-based",
                    inv: "Real-time",
                  },
                ].map((row) => (
                  <tr
                    key={row.label}
                    className="group hover:bg-zinc-900/30 transition-colors"
                  >
                    <td className="p-8 font-bold text-white tracking-tight">
                      {row.label}
                    </td>
                    <td className="p-8 font-medium text-zinc-400">{row.s}</td>
                    <td className="p-8 font-medium text-zinc-400">{row.st}</td>
                    <td className="p-8 font-medium text-zinc-400">{row.inv}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Strategy Highlights: Glass Bento redesign */}
      <section className="py-32 bg-zinc-950 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-10 rounded-[3rem] bg-zinc-900/40 border border-zinc-800 backdrop-blur-xl group hover:border-emerald-500/50 transition-all duration-500">
              <TrendingUp
                className="text-emerald-500 mb-8 transition-transform group-hover:scale-110"
                size={40}
              />
              <h3 className="text-3xl font-black text-white mb-6 uppercase tracking-tighter">
                Growth Focused
              </h3>
              <p className="text-zinc-100 leading-relaxed font-bold tracking-tight">
                Every solution is built to maximize individual growth potential,
                identifying high-yield levers others miss.
              </p>
            </div>

            <div className="p-10 rounded-[3rem] bg-zinc-900 border border-zinc-800 group hover:border-emerald-500/50 transition-all duration-500">
              <ShieldCheck
                className="text-emerald-500 mb-8 transition-transform group-hover:scale-110"
                size={40}
              />
              <h3 className="text-3xl font-black text-white mb-6 uppercase tracking-tighter">
                Security 100
              </h3>
              <p className="text-zinc-100 leading-relaxed font-bold tracking-tight">
                Financial data remains protected with absolute encryption across
                all stage transitions.
              </p>
            </div>

            <div className="p-10 rounded-[2.5rem] bg-gradient-to-br from-emerald-500 to-teal-600 border border-emerald-400/20 group shadow-2xl shadow-emerald-500/20">
              <Target className="text-white mb-8" size={40} />
              <h3 className="text-3xl font-black text-white mb-6 uppercase tracking-tighter">
                Goal Matrix
              </h3>
              <p className="text-emerald-50 font-black leading-relaxed tracking-tight group-hover:translate-x-1 transition-transform">
                Real-time progress course correction that ensures your specific
                milestones are hit with precision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Conversion CTA */}
      <AdvanceCTA
        title="Ready to Start Your Strategy?"
        description="Join thousands who have already customized their financial future with Mintara's persona-first Advance solutions."
        primaryText="Get Started Now"
        secondaryText="View Full Plans"
      />

      <Footer />
    </div>
  );
}
