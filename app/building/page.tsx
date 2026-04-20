import type { Metadata } from "next";
import { getBuildingProjects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Building — Mandi O'Brien",
};

export default function BuildingPage() {
  const projects = getBuildingProjects();

  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <div className="mb-20">
        <p className="font-mono text-xs uppercase tracking-widest text-stone-400 mb-3">
          Building
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-stone-900 mb-5">
          Things I&apos;ve built
        </h1>
        <p className="text-stone-500 max-w-xl leading-relaxed">
          Side projects, tools, and experiments. Mostly built to solve my own
          problems — which is the right reason to build anything.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.slug}
            className="border border-stone-100 rounded-xl p-7 hover:border-stone-200 transition-colors"
          >
            {/* Status badge */}
            <div className="flex items-center justify-between mb-5">
              <span className="font-mono text-xs text-stone-300">
                {project.year}
              </span>
              <span
                className={`font-mono text-xs px-2 py-0.5 rounded-full ${
                  project.status === "live"
                    ? "text-stone-500 border border-stone-200"
                    : project.status === "in progress"
                    ? "text-terracotta-500 border border-terracotta-200"
                    : "text-stone-400 border border-stone-100"
                }`}
              >
                {project.status}
              </span>
            </div>

            <h2 className="text-lg font-bold text-stone-900 mb-2">
              {project.title}
            </h2>

            <p className="text-sm text-stone-500 leading-relaxed mb-5">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-xs text-stone-400 bg-stone-50 px-2.5 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Live link */}
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-stone-400 hover:text-stone-700 transition-colors"
              >
                {project.url.replace(/^https?:\/\//, "")} →
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
