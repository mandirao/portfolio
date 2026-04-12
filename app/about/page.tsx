import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — Portfolio",
};

export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        {/* Left column — name + photo placeholder */}
        <div className="md:col-span-1">
          <div className="w-full aspect-square rounded-2xl bg-stone-100 flex items-center justify-center text-stone-300 text-sm font-mono mb-6">
            photo
          </div>
          <h1 className="text-xl font-semibold text-stone-900">Your Name</h1>
          <p className="text-sm text-stone-500 mt-1">
            Product Designer & Developer
          </p>
          <div className="flex flex-col gap-2 mt-6">
            <a
              href="mailto:hello@example.com"
              className="text-sm text-stone-500 hover:text-stone-900 transition-colors"
            >
              hello@example.com
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-stone-500 hover:text-stone-900 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-stone-500 hover:text-stone-900 transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Right column — bio + experience */}
        <div className="md:col-span-2 space-y-12">
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-stone-400 mb-4">
              Background
            </h2>
            <div className="space-y-4 text-stone-600 leading-relaxed">
              <p>
                I'm a product designer and developer with a focus on building
                clear, well-crafted digital products. I work at the intersection
                of design and engineering — comfortable with Figma and equally
                comfortable in a codebase.
              </p>
              <p>
                Before going independent, I spent several years at early-stage
                startups where I owned product and design end-to-end. I care
                deeply about the details: the micro-interaction, the edge case,
                the thing users notice even when they can't articulate why.
              </p>
              <p>
                When I'm not working, I'm usually hiking, reading about
                cognitive science, or tinkering with side projects I'll never
                ship.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-stone-400 mb-6">
              Experience
            </h2>
            <div className="space-y-6">
              {experience.map((role) => (
                <div key={role.company} className="flex gap-6">
                  <span className="font-mono text-xs text-stone-300 shrink-0 pt-0.5">
                    {role.years}
                  </span>
                  <div>
                    <p className="font-medium text-stone-900">{role.title}</p>
                    <p className="text-sm text-stone-500">{role.company}</p>
                    <p className="text-sm text-stone-400 mt-1">
                      {role.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-stone-400 mb-6">
              Skills
            </h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-full bg-stone-100 text-stone-600 text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-4">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-sm font-medium text-stone-900 hover:text-stone-600 transition-colors"
            >
              View my case studies →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

const experience = [
  {
    years: "2022–Now",
    title: "Independent Designer & Developer",
    company: "Freelance",
    description:
      "Working with early-stage startups on product strategy, design, and front-end implementation.",
  },
  {
    years: "2020–22",
    title: "Senior Product Designer",
    company: "Acme Corp",
    description:
      "Led design for core product. Grew user activation by 40% through a complete onboarding redesign.",
  },
  {
    years: "2018–20",
    title: "Product Designer",
    company: "Startup XYZ",
    description:
      "First design hire. Built the design system and shipped the initial iOS and web products.",
  },
];

const skills = [
  "Product Design",
  "UX Research",
  "Design Systems",
  "Figma",
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Prototyping",
  "User Testing",
];
