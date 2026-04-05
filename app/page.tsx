import Image from "next/image";
import { ProfessionalHero, AdvanceHero } from "@/components/Hero";

export default function Home() {
  return (
    <div className="flex flex-col gap-0 w-full min-h-screen">
      {/* Advance Hero Showcase (Leading with the Dynamic/Growth variant) */}
      <AdvanceHero
        badge="Trusted by over 50,000 users"
        title={
          <>
            Finance{" "}
            <span className="text-emerald-600 dark:text-emerald-400">
              Reimagined.
            </span>
          </>
        }
        description="Take control of your budget with Mintara. Start building your financial legacy today with our advance growth tools and real-time market insights."
        primaryCtaText="Invest Now"
        secondaryCtaText="See Pricing"
      />

      {/* Professional Hero Showcase (High-trust, Authority variant) */}
      <ProfessionalHero
        badge="Enterprise Stability"
        title="Manage Your Wealth with Precision"
        description="A minimalist, high-authority budgeting tool designed for professionals. Secure your future with Mintara's enterprise-grade financial management."
        primaryCtaText="Professional Login"
        secondaryCtaText="Contact Sales"
        className="border-t border-zinc-100 dark:border-zinc-900"
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
