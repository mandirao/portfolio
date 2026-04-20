import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getCaseStudies, getCaseStudy } from "@/lib/content";
import type { ReactNode } from "react";

// Generate a static page for each case study at build time
export async function generateStaticParams() {
  return getCaseStudies().map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  return { title: `${study.title} — Mandi O'Brien` };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      {/* Back link */}
      <Link
        href="/work"
        className="font-mono text-xs text-stone-400 hover:text-stone-600 transition-colors mb-12 inline-block"
      >
        ← Work
      </Link>

      {/* Header */}
      <div className="mb-12">
        <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-stone-400 mb-5">
          <span>{study.year}</span>
          <span>·</span>
          <span>{study.company}</span>
          <span>·</span>
          <span>{study.category}</span>
          {study.status === "in-progress" && (
            <>
              <span>·</span>
              <span className="text-terracotta-500 border border-terracotta-200 px-2 py-0.5 rounded-full">
                In progress
              </span>
            </>
          )}
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-stone-900 leading-[1.1] mb-6">
          {study.title}
        </h1>

        <p className="text-xl text-stone-500 leading-relaxed">{study.summary}</p>
      </div>

      {/* Metrics */}
      {study.metrics.length > 0 && (
        <div className="flex flex-wrap gap-8 mb-14 pb-14 border-b border-stone-100">
          {study.metrics.map((m) => (
            <div key={m}>
              <p className="text-3xl font-bold text-terracotta-500 leading-none">
                {m}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Body */}
      <div className="prose-stone space-y-0">{renderBody(study.body)}</div>

      {/* Tags */}
      {study.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-16 pt-8 border-t border-stone-100">
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
    </div>
  );
}

// ─── Minimal markdown renderer ────────────────────────────────────────────────
// Handles the subset of markdown used in case study bodies:
// ## headings, **bold**, and paragraphs separated by blank lines.

function renderBody(markdown: string): ReactNode[] {
  return markdown.split("\n\n").map((block, i) => {
    const trimmed = block.trim();
    if (trimmed.startsWith("## ")) {
      return (
        <h2
          key={i}
          className="text-xl font-bold text-stone-900 mt-12 mb-4 first:mt-0"
        >
          {trimmed.slice(3)}
        </h2>
      );
    }
    if (trimmed.startsWith("### ")) {
      return (
        <h3
          key={i}
          className="text-base font-semibold text-stone-900 mt-8 mb-3"
        >
          {trimmed.slice(4)}
        </h3>
      );
    }
    return (
      <p key={i} className="text-stone-600 leading-relaxed mb-5">
        {renderInline(trimmed)}
      </p>
    );
  });
}

function renderInline(text: string): ReactNode[] {
  return text.split(/(\*\*[^*]+\*\*)/).map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}
