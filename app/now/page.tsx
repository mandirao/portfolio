import fs from "fs";
import path from "path";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Now — Mandi O'Brien",
};

export default function NowPage() {
  const raw = fs.readFileSync(
    path.join(process.cwd(), "content/now.md"),
    "utf-8"
  );

  // Each line is a paragraph; skip blanks
  const lines = raw.split("\n").filter((l) => l.trim().length > 0);

  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <div className="mb-16">
        <p className="font-mono text-xs uppercase tracking-widest text-stone-400 mb-3">
          Now
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-stone-900 mb-5">
          What I&apos;m up to
        </h1>
        <p className="text-stone-400 text-sm font-mono">
          A snapshot, not a résumé.
        </p>
      </div>

      <div className="space-y-6">
        {lines.map((line, i) => (
          <p key={i} className="text-stone-600 leading-relaxed text-lg">
            {renderInline(line)}
          </p>
        ))}
      </div>

      <p className="mt-16 text-xs text-stone-300 font-mono">
        This is a{" "}
        <a
          href="https://nownownow.com/about"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:text-stone-500 transition-colors"
        >
          /now page
        </a>
        . If you have a website, you should make one too.
      </p>
    </div>
  );
}

// Convert **bold** and [text](url) markers to elements without dangerouslySetInnerHTML
function renderInline(text: string): ReactNode[] {
  return text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/).map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (linkMatch) {
      return (
        <a
          key={i}
          href={linkMatch[2]}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:text-stone-900 transition-colors"
        >
          {linkMatch[1]}
        </a>
      );
    }
    return part;
  });
}
