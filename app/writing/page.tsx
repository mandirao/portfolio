import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Writing — Mandi O'Brien",
};

export default function WritingPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <div className="mb-16">
        <p className="font-mono text-xs uppercase tracking-widest text-stone-400 mb-3">
          Writing
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-stone-900 mb-5">
          Essays and notes
        </h1>
      </div>

      {/* Placeholder — intentional, not broken */}
      <div className="border border-stone-100 rounded-xl p-12 text-center max-w-xl">
        <p className="text-stone-400 text-sm leading-relaxed mb-2">
          Writing is coming. The workshop is already running.
        </p>
        <p className="text-stone-300 text-xs font-mono">
          Check back soon.
        </p>
      </div>
    </div>
  );
}
