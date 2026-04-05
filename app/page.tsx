import Image from "next/image";
import { ProfessionalHero, AdvanceHero } from "@/components/Hero";
import {
  ProfessionalFeatures,
  AdvanceFeatures,
  FeatureItem,
} from "@/components/Features";
import {
  ShieldCheck,
  LayoutDashboard,
  PieChart,
  Zap,
  Globe,
  Fingerprint,
} from "lucide-react";

export default function Home() {
  const professionalFeaturesItems: FeatureItem[] = [
    {
      icon: <ShieldCheck strokeWidth={2} />,
      title: "Secure Savings",
      description:
        "Secure your financial future with enterprise-grade encryption and multi-layer savings protection.",
      link: "#security",
    },
    {
      icon: <LayoutDashboard strokeWidth={2} />,
      title: "Real-time Budgeting",
      description:
        "Track every penny across multiple accounts with absolute precision and authoritative data.",
    },
    {
      icon: <PieChart strokeWidth={2} />,
      title: "Budget Analysis",
      description:
        "Comprehensive personal finance reports and data analysis to help you make informed spending decisions.",
      link: "#analysis",
    },
  ];

  const advanceFeaturesItems: FeatureItem[] = [
    {
      icon: <Zap strokeWidth={1.5} />,
      title: "AI Savings Optimizer",
      description:
        "Our machine learning algorithms identify patterns in your spending to maximize your monthly savings automatically.",
      span: "large",
    },
    {
      icon: <Globe strokeWidth={1.5} />,
      title: "Finance Pulse",
      description: "Real-time tracking of subscription costs.",
      span: "normal",
    },
    {
      icon: <Fingerprint strokeWidth={1.5} />,
      title: "Smart Insights",
      description: "Personalized financial health reports.",
      span: "normal",
    },
    {
      icon: <PieChart strokeWidth={1.5} />,
      title: "Daily Expense Tracking",
      description:
        "Automatically categorize and track every transaction across all connected accounts.",
      span: "wide",
    },
  ];

  return (
    <div className="flex flex-col gap-0 w-full min-h-screen">
      {/* Advance Hero Showcase (Leading with the Dynamic/Growth variant) */}
      <AdvanceHero
        badge="Trusted by over 50,000 users"
        title={
          <>
            Budgeting{" "}
            <span className="text-emerald-600 dark:text-emerald-400">
              Reimagined.
            </span>
          </>
        }
        description="Take control of your budget with Mintara. Start building your financial legacy today with our advanced budgeting tools and real-time spending insights."
        primaryCtaText="Start Planning"
        secondaryCtaText="See Pricing"
      />

      {/* Advance Features Section */}
      <AdvanceFeatures
        badge="Innovative Intelligence"
        title="Modern Budgeting Tools"
        subtitle="Experience the future of personal finance with our dynamic insights and savings-focused features."
        items={advanceFeaturesItems}
      />

      {/* Professional Hero Showcase (High-trust, Authority variant) */}
      <ProfessionalHero
        badge="Enterprise Stability"
        title="Master Your Budget with Precision"
        description="A minimalist, high-authority budgeting tool designed for professionals. Secure your future with Mintara's enterprise-grade personal finance management."
        primaryCtaText="Professional Login"
        secondaryCtaText="Contact Sales"
        className="border-t border-zinc-100 dark:border-zinc-900"
      />

      {/* Professional Features Section */}
      <ProfessionalFeatures
        badge="Foundational Reliability"
        title="Authoritative Budget Tracking"
        subtitle="Stability and absolute precision when managing your daily expenses and long-term budget targets."
        items={professionalFeaturesItems}
      />

      <div className="mx-auto max-w-7xl px-8 pb-20 pt-10">
        <div className="flex flex-col gap-6 w-full pt-8 border-t border-zinc-100 dark:border-zinc-900 sm:flex-row items-center justify-between">
          <Image
            className="dark:invert mb-4 sm:mb-0"
            src="/next.svg"
            alt="Next.js logo"
            width={100}
            height={20}
            priority
          />
          <a
            className="flex h-12 items-center gap-2 font-medium text-emerald-600 hover:text-emerald-700 transition-colors"
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
            <svg
              className="w-4 h-4"
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
          </a>
        </div>
      </div>
    </div>
  );
}
