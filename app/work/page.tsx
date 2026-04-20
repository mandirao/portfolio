import Link from "next/link";
import type { Metadata } from "next";
import { getCaseStudies } from "@/lib/content";

export const metadata: Metadata = {
  title: "Work — Mandi O'Brien",
};

export default function WorkPage() {
  const studies = getCaseStudies();

  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <div className="mb-20">
        <p className="font-mono text-xs uppercase tracking-widest text-stone-400 mb-3">
          Work
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-stone-900 mb-5">
          Case Studies
        </h1>
        <p className="text-stone-500 max-w-xl leading-relaxed">
          Each one shows a different thing — AI product judgment, growth
          execution, UX instinct, technical leadership. The through-line is the
          same in all of them.
        </p>
      </div>

      <div>
        {studies.map((study, index) => (
          <Link
            key={study.slug}
            href={`/work/${study.slug}`}
            className="group block py-12 border-t border-stone-100 hover:border-stone-300 transition-colors first:border-t-0"
          >
            {/* Meta row */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-4 font-mono text-xs text-stone-400">
                <span className="text-stone-200">0{index + 1}</span>
                <span>·</span>
                <span>{study.year}</span>
                <span>·</span>
                <span>{study.company}</span>
              </div>
              {study.status === "in-progress" && (
                <span className="font-mono text-xs text-terracotta-500 border border-terracotta-200 px-2 py-0.5 rounded-full">
                  In progress
                </span>
              )}
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 group-hover:text-stone-600 transition-colors leading-snug mb-3 max-w-2xl">
              {study.title}
            </h2>

            {/* Summary */}
            <p className="text-stone-500 leading-relaxed max-w-2xl mb-6">
              {study.summary}
            </p>

            {/* Metrics */}
            {study.metrics.length > 0 && (
              <div className="flex flex-wrap gap-3">
                {study.metrics.map((m) => (
                  <span
                    key={m}
                    className="font-mono text-xs text-terracotta-600 bg-terracotta-50 px-3 py-1 rounded-full"
                  >
                    {m}
                  </span>
                ))}
              </div>
            )}

            {/* Tags */}
            {study.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-3">
                {study.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs text-stone-400 bg-stone-50 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
