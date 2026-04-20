import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Mandi O'Brien",
};

export default function ContactPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <div className="mb-16">
        <p className="font-mono text-xs uppercase tracking-widest text-stone-400 mb-3">
          Contact
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-stone-900">
          Get in touch
        </h1>
      </div>

      <div className="space-y-4 text-lg">
        <div>
          <a
            href="mailto:mandirao@gmail.com"
            className="text-stone-900 hover:text-terracotta-600 transition-colors"
          >
            mandirao@gmail.com
          </a>
        </div>
        <div>
          <a
            href="https://linkedin.com/in/mandirao"
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-900 hover:text-terracotta-600 transition-colors"
          >
            linkedin.com/in/mandirao
          </a>
        </div>
        <div>
          <a
            href="https://github.com/mandirao"
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-900 hover:text-terracotta-600 transition-colors"
          >
            github.com/mandirao
          </a>
        </div>
      </div>
    </div>
  );
}
