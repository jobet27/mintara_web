import React from "react";

/**
 * Mintara Professional and Advance Solutions Components
 * Designed for High-Fidelity Landing Pages.
 * Zero 'any' types, full responsiveness, and premium aesthetics.
 */

export interface SolutionItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  persona: string;
}

export interface SolutionsProps {
  badge?: string;
  title: string;
  subtitle: string;
  items: SolutionItem[];
  className?: string;
}

/**
 * ProfessionalSolutions: Minimalist, authoritative 3-column grid.
 * Best for conveying stability, security, and long-term budgeting.
 */
export const ProfessionalSolutions: React.FC<SolutionsProps> = ({
  badge,
  title,
  subtitle,
  items,
  className = "",
}) => {
  return (
    <section
      className={`py-20 lg:py-32 bg-white dark:bg-black ${className}`}
      id="solutions"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-24">
          {badge && (
            <span className="inline-flex items-center rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-900 ring-1 ring-zinc-200 dark:bg-zinc-900 dark:text-zinc-100 dark:ring-zinc-800 mb-6 uppercase tracking-wider">
              {badge}
            </span>
          )}
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-5xl dark:text-white mb-6">
            {title}
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => {
            return (
              <div
                key={index}
                className="group relative flex flex-col items-start p-8 rounded-2xl bg-zinc-50 border border-zinc-100 dark:bg-zinc-900/50 dark:border-zinc-800 transition-all duration-300 hover:bg-white dark:hover:bg-zinc-900 hover:shadow-xl"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 shadow-lg group-hover:scale-110 transition-transform">
                  <div className="h-6 w-6">{item.icon}</div>
                </div>
                <span className="mb-2 text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
                  {item.persona}
                </span>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/**
 * AdvanceSolutions: Dynamic, layered cards with emerald-teal gradients.
 * Best for innovation, innovation-driven growth, and high-impact budgeting.
 */
export const AdvanceSolutions: React.FC<SolutionsProps> = ({
  badge,
  title,
  subtitle,
  items,
  className = "",
}) => {
  return (
    <section
      className={`relative py-20 lg:py-32 bg-zinc-50 dark:bg-zinc-950 overflow-hidden ${className}`}
    >
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-teal-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16 lg:mb-24 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12 text-center lg:text-left">
          <div className="max-w-2xl">
            {badge && (
              <span className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-400/20 dark:bg-emerald-500/10 dark:text-emerald-400 dark:ring-emerald-500/20 mb-6">
                {badge}
              </span>
            )}
            <h2 className="text-4xl font-extrabold tracking-tighter text-zinc-900 sm:text-6xl dark:text-white mb-6 leading-none">
              {title}
            </h2>
            <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 font-medium">
              {subtitle}
            </p>
          </div>
          <div className="hidden lg:block h-px flex-1 bg-gradient-to-r from-emerald-500/50 via-zinc-200 dark:via-zinc-800 to-transparent mb-4 mx-8" />
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => {
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-[2.5rem] bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 p-1 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative rounded-[2.25rem] bg-zinc-50 dark:bg-zinc-950 p-8 h-full flex flex-col">
                  <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 text-white shadow-xl shadow-emerald-500/20 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                    <div className="h-7 w-7">{item.icon}</div>
                  </div>
                  <span className="mb-3 text-sm font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
                    {item.persona}
                  </span>
                  <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium">
                    {item.description}
                  </p>
                  <div className="mt-auto pt-8 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="text-sm font-bold text-zinc-900 dark:text-white underline underline-offset-4 decoration-emerald-500/50">
                      View details
                    </span>
                    <div className="h-10 w-10 rounded-full border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:border-emerald-500 group-hover:text-emerald-500 group-hover:bg-emerald-500/10 transition-all">
                      <svg
                        className="h-5 w-5"
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
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
