import { Navbar } from "@/components/Navbar";
import {
  DetailedHero,
  FeatureDetailRow,
  AllFeaturesGrid,
  GridItem,
} from "@/components/DetailedFeatures";
import { AdvanceCTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import {
  Zap,
  Globe,
  ShieldCheck,
  FileText,
  Download,
  Cpu,
  Bell,
  Smartphone,
  Fingerprint,
} from "lucide-react";

/**
 * Mintara Features Page
 * A high-fidelity deep-dive into the platform's budgeting power tools.
 */

export default function FeaturesPage() {
  const allFeatures: GridItem[] = [
    {
      icon: <ShieldCheck strokeWidth={1.5} />,
      title: "Bank-Grade Security",
      description:
        "Enterprise-grade encryption for all your financial data and transaction strings.",
    },
    {
      icon: <FileText strokeWidth={1.5} />,
      title: "Dynamic Reports",
      description:
        "Visual financial health reports generated monthly with actionable savings advice.",
    },
    {
      icon: <Download strokeWidth={1.5} />,
      title: "CSV Exports",
      description:
        "Export your budget data to spreadsheet software for custom offline analysis.",
    },
    {
      icon: <Cpu strokeWidth={1.5} />,
      title: "Open API",
      description:
        "Integrate your Mintara budget data with your own custom tools and applications.",
    },
    {
      icon: <Bell strokeWidth={1.5} />,
      title: "Smart Alerts",
      description:
        "Real-time notifications when you approach your budget limits or hit goals.",
    },
    {
      icon: <Smartphone strokeWidth={1.5} />,
      title: "Mobile App",
      description:
        "Seamless budgeting on the go with our cross-platform mobile experience.",
    },
  ];

  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />

      {/* Page Hero */}
      <DetailedHero
        badge="New: AI Insights 2.0"
        title="Precision Power Tools"
        subtitle="Unleash the full potential of your personal finance with our advanced budgeting infrastructure and AI-driven insights."
        image="/images/hero_dashboard.png"
      />

      {/* Feature Deep Dives */}
      <section className="bg-white dark:bg-black">
        <FeatureDetailRow
          icon={<Zap className="h-full w-full" />}
          title="AI Savings Optimizer"
          description="Our machine learning algorithms identify patterns in your spending to maximize your monthly savings automatically."
          points={[
            "Automated savings rules",
            "Predictive spending analysis",
            "Wealth protection alerts",
          ]}
          image="/images/feature_ai.png"
        />

        <FeatureDetailRow
          icon={<Globe className="h-full w-full" />}
          title="Global Account Sync"
          description="Connect all your financial institutions in one secure location. Experience real-time synchronization across 10,000+ banks."
          points={[
            "Bank-grade security (256-bit AES)",
            "Real-time transaction fetch",
            "International account support",
          ]}
          reversed
          image="/images/feature_sync.png"
        />

        <FeatureDetailRow
          icon={<Fingerprint className="h-full w-full" />}
          title="Custom Budget Goals"
          description="Define and track your financial milestones with precision. Whether it's a new home or early retirement, Mintara keeps you on target."
          points={[
            "Multi-stage goal tracking",
            "Visual progress milestones",
            "Dynamic budget adjustments",
          ]}
          image="/images/feature_goals.png"
        />
      </section>

      {/* Full Suite Grid */}
      <AllFeaturesGrid title="Every Tool You Need" items={allFeatures} />

      {/* Final Conversion CTA */}
      <AdvanceCTA
        title="Transform Your Finances Ready?"
        description="Join thousands of elite planners using Mintara to build their financial legacy with precision."
        primaryText="Get Started Now"
        secondaryText="View Full Comparison"
      />

      <Footer />
    </main>
  );
}
