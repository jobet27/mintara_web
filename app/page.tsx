import { AdvanceHero } from "@/components/Hero";
import { AdvanceFeatures, FeatureItem } from "@/components/Features";
import { AdvanceSolutions, SolutionItem } from "@/components/Solutions";
import { AdvanceCTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import {
  PieChart,
  Zap,
  Globe,
  Fingerprint,
  GraduationCap,
  Rocket,
  Coins,
} from "lucide-react";

export default function Home() {
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

  const advanceSolutionsItems: SolutionItem[] = [
    {
      icon: <Rocket strokeWidth={1.5} />,
      title: "Startup Growth",
      description:
        "Dynamic budgeting for entrepreneurs scaling their business and personal wealth.",
      persona: "Entrepreneurs",
    },
    {
      icon: <GraduationCap strokeWidth={1.5} />,
      title: "Modern Education",
      description:
        "Innovative AI savings tools for students managing tuition and lifestyle costs.",
      persona: "Students",
    },
    {
      icon: <Coins strokeWidth={1.5} />,
      title: "Dynamic Investing",
      description:
        "Real-time budgeting insights for the modern, tech-forward investor.",
      persona: "Investors",
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

      {/* Advance Solutions Section */}
      <AdvanceSolutions
        badge="Tailored Innovations"
        title="Solutions for Your Lifestyle"
        subtitle="Experience specialized budgeting tools designed for the modern, innovative career and lifestyle."
        items={advanceSolutionsItems}
      />

      {/* Advance CTA Section (Conversion) */}
      <AdvanceCTA
        title="Ready to Master Your Budget?"
        description="Join thousands of planners who have already transformed their financial lives with Mintara's Advance tools."
        primaryText="Get Started Now"
        secondaryText="View Plan Details"
      />

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
