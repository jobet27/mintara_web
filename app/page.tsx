import Image from "next/image";
import { Button } from "@/components/Button";

export default function Home() {
  return (
    <div className="flex flex-1 items-center justify-center bg-zinc-50 dark:bg-black py-20 px-8">
      <div className="w-full max-w-3xl flex flex-col items-center sm:items-start gap-12 bg-white dark:bg-zinc-950 p-12 rounded-3xl shadow-xl ring-1 ring-zinc-200 dark:ring-zinc-800 transition-all duration-500 hover:shadow-2xl">
        <Image
          className="dark:invert mb-4"
          src="/next.svg"
          alt="Next.js logo"
          width={120}
          height={24}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-md text-4xl font-bold leading-tight tracking-tight text-zinc-900 dark:text-zinc-50">
            Welcome to Mintara.
            <span className="block text-emerald-600 bg-emerald-50 dark:bg-emerald-950/30 px-2 mt-2 -ml-2 rounded-lg inline-block">
              Finance reimagined.
            </span>
          </h1>
          <p className="max-w-md text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            Take control of your budget with Mintara. Start building your
            financial legacy today with our professional and advance tools.
          </p>
        </div>

        <div className="flex flex-col gap-4 w-full sm:flex-row sm:w-auto">
          <Button variant="professional" size="lg">
            Professional Login
          </Button>
          <Button variant="advance" size="lg">
            Invest Now
          </Button>
        </div>

        <div className="flex flex-col gap-6 w-full pt-8 border-t border-zinc-100 dark:border-zinc-900 sm:flex-row">
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
