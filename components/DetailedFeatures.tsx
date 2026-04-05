import Image from "next/image";
import { Sparkles, Check, Rocket } from "lucide-react";
import { Button } from "./Button";

/**
 * Mintara Detailed Features Components
 * Designed for specialized product exploration.
 * Zero 'any' types, full responsiveness, and premium 'Advance' aesthetic.
 */

export interface FeatureRowProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  points: string[];
  image?: string;
  reversed?: boolean;
  className?: string;
}

export interface GridItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

/**
 * DetailedHero: A high-impact hero for the Features page.
 * Focuses on efficiency and precision power tools.
 */
export const DetailedHero: React.FC<{
  title: string;
  subtitle: string;
  badge?: string;
  icon?: React.ReactNode;
  image?: string;
}> = ({ title, subtitle, badge, icon, image }) => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-zinc-950 overflow-hidden">
      {/* Premium Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60rem] h-[60rem] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[20%] right-[10%] w-[40rem] h-[40rem] bg-teal-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="flex justify-center mb-10">
          <div className="h-24 w-24 rounded-3xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 shadow-2xl shadow-emerald-500/10 relative overflow-hidden group">
            <div className="h-12 w-12 transform group-hover:rotate-12 transition-transform duration-500 flex items-center justify-center">
              {image ? (
                <Image src={image} alt={title} fill className="object-cover" />
              ) : (
                icon || <Rocket strokeWidth={1.5} className="w-full h-full" />
              )}
            </div>
          </div>
        </div>
        {badge && (
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-1.5 text-sm font-semibold text-emerald-400 ring-1 ring-emerald-500/20 mb-8">
            <Sparkles className="h-4 w-4" />
            {badge}
          </div>
        )}
        <h1 className="text-5xl font-black tracking-tighter text-white sm:text-8xl mb-8 leading-[0.85]">
          {title}
        </h1>
        <p className="max-w-2xl mx-auto text-xl leading-relaxed text-zinc-400 font-medium mb-12">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="advance" size="lg" className="w-full sm:w-auto">
            Get Started Free
          </Button>
          <button className="text-sm font-bold text-zinc-400 uppercase tracking-widest hover:text-white transition-colors">
            See All Power Tools
          </button>
        </div>
      </div>
    </section>
  );
};

/**
 * FeatureDetailRow: Side-by-side feature highlight with detailed points.
 * Alternates layouts by default for improved readability.
 */
export const FeatureDetailRow: React.FC<FeatureRowProps> = ({
  icon,
  title,
  description,
  points,
  image,
  reversed = false,
  className = "",
}) => {
  return (
    <div
      className={`py-20 lg:py-32 border-b border-zinc-100 dark:border-zinc-900 last:border-0 ${className}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-24 ${reversed ? "lg:flex-row-reverse" : ""}`}
        >
          <div className="flex-1 w-full relative">
            <div className="absolute -inset-4 bg-emerald-500/5 blur-2xl rounded-3xl -z-10" />
            <div className="mb-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 text-white shadow-xl shadow-emerald-500/20">
              <div className="h-8 w-8 flex items-center justify-center">
                {icon}
              </div>
            </div>
            <h2 className="text-3xl font-black tracking-tighter text-zinc-900 sm:text-5xl dark:text-white mb-6">
              {title}
            </h2>
            <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 font-medium mb-10">
              {description}
            </p>
            <ul className="space-y-4">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <div className="mt-1 h-5 w-5 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0 text-emerald-500">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </div>
                  <span className="text-zinc-700 dark:text-zinc-300 font-medium">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 w-full">
            <div className="aspect-[4/3] rounded-[2.5rem] bg-zinc-100 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="h-full w-full flex items-center justify-center transition-transform duration-500 group-hover:scale-[1.02] relative">
                {image ? (
                  <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="h-32 w-32 flex items-center justify-center text-zinc-200 dark:text-zinc-800 transition-colors duration-500 group-hover:text-emerald-500/20">
                    {icon}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * AllFeaturesGrid: A comprehensive layout for minor but essential tools.
 */
export const AllFeaturesGrid: React.FC<{
  items: GridItem[];
  title?: string;
}> = ({ items, title }) => {
  return (
    <section className="py-24 lg:py-32 bg-white dark:bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        {title && (
          <h2 className="text-3xl font-black tracking-tighter text-zinc-900 sm:text-5xl dark:text-white mb-20">
            {title}
          </h2>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="p-8 rounded-3xl bg-zinc-50 border border-zinc-100 dark:bg-zinc-900/40 dark:border-zinc-800 text-left transition-all duration-300 hover:bg-white dark:hover:bg-zinc-900 hover:shadow-xl group"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 shadow-lg group-hover:scale-110 transition-transform">
                <div className="h-6 w-6">{item.icon}</div>
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">
                {item.title}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 font-medium leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
