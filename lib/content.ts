import fs from "fs";
import path from "path";

// ─── Types ───────────────────────────────────────────────────────────────────

export type CaseStudy = {
  slug: string;
  title: string;
  company: string;
  year: number;
  category: string;
  status: "published" | "draft" | "in-progress";
  tags: string[];
  summary: string;
  metrics: string[];
  body: string;
};

export type BuildingProject = {
  slug: string;
  title: string;
  description: string;
  status: "live" | "in progress" | "paused";
  url: string;
  tags: string[];
  year: number;
};

// ─── Frontmatter parser ───────────────────────────────────────────────────────
// Handles the simple YAML subset used by this project:
// strings (quoted or bare), numbers, and inline arrays like ["a", "b"].

function parseFrontmatter(raw: string): {
  data: Record<string, unknown>;
  body: string;
} {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) return { data: {}, body: raw };

  const [, yaml, body] = match;
  const data: Record<string, unknown> = {};

  for (const line of yaml.split("\n")) {
    const colonIdx = line.indexOf(":");
    if (colonIdx === -1) continue;

    const key = line.slice(0, colonIdx).trim();
    const val = line.slice(colonIdx + 1).trim();

    if (val.startsWith("[") && val.endsWith("]")) {
      // Inline array: [] or ["a", "b"]
      const inner = val.slice(1, -1).trim();
      data[key] = inner
        ? inner.split(",").map((s) => s.trim().replace(/^["']|["']$/g, ""))
        : [];
    } else if (val !== "" && !isNaN(Number(val))) {
      data[key] = Number(val);
    } else {
      data[key] = val.replace(/^["']|["']$/g, "");
    }
  }

  return { data, body: body.trim() };
}

// ─── Readers ─────────────────────────────────────────────────────────────────

const contentRoot = path.join(process.cwd(), "content");

export function getCaseStudies(): CaseStudy[] {
  const dir = path.join(contentRoot, "case-studies");
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((filename) => {
      const slug = filename.replace(".md", "");
      const raw = fs.readFileSync(path.join(dir, filename), "utf-8");
      const { data, body } = parseFrontmatter(raw);
      return {
        slug,
        title: data.title as string,
        company: data.company as string,
        year: data.year as number,
        category: data.category as string,
        status: data.status as CaseStudy["status"],
        tags: data.tags as string[],
        summary: data.summary as string,
        metrics: data.metrics as string[],
        body,
      };
    })
    .filter((s) => s.status !== "draft")
    .sort((a, b) => b.year - a.year);
}

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return getCaseStudies().find((s) => s.slug === slug);
}

export function getBuildingProjects(): BuildingProject[] {
  const dir = path.join(contentRoot, "building");
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((filename) => {
      const slug = filename.replace(".md", "");
      const raw = fs.readFileSync(path.join(dir, filename), "utf-8");
      const { data } = parseFrontmatter(raw);
      return {
        slug,
        title: data.title as string,
        description: data.description as string,
        status: data.status as BuildingProject["status"],
        url: data.url as string,
        tags: data.tags as string[],
        year: data.year as number,
      };
    })
    .sort((a, b) => b.year - a.year);
}
