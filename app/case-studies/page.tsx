import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies — Portfolio",
};

export default function CaseStudies() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <div className="mb-16">
        <p className="font-mono text-xs uppercase tracking-widest text-stone-400 mb-3">
          Work
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-stone-900 mb-4">
          Case Studies
        </h1>
        <p className="text-stone-500 max-w-xl leading-relaxed">
          A selection of projects where I've driven meaningful outcomes through
          design and product thinking.
        </p>
      </div>

      <div className="space-y-6">
        {caseStudies.map((study) => (
          <article
            key={study.id}
            id={study.id}
            className="group relative rounded-2xl border border-stone-100 hover:border-stone-200 bg-stone-50 hover:bg-white transition-all p-8 cursor-default"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-mono text-xs text-stone-400">
                    {study.year}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-stone-300" />
                  <span className="text-xs text-stone-400">{study.tag}</span>
                </div>
                <h2 className="text-xl font-semibold text-stone-900">
                  {study.title}
                </h2>
              </div>
              <span className="shrink-0 px-3 py-1 rounded-full bg-stone-200 text-stone-500 text-xs font-medium">
                {study.status}
              </span>
            </div>

            <p className="text-stone-500 leading-relaxed mb-8">
              {study.summary}
            </p>

            {/* Placeholder image */}
            <div className="w-full h-56 rounded-xl bg-stone-100 flex items-center justify-center text-stone-300 font-mono text-sm mb-8">
              [ cover image ]
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {study.outcomes.map((outcome) => (
                <div key={outcome.label}>
                  <p className="text-2xl font-semibold text-stone-900">
                    {outcome.value}
                  </p>
                  <p className="text-xs text-stone-400 mt-0.5">
                    {outcome.label}
                  </p>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

const caseStudies = [
  {
    id: "project-one",
    year: "2024",
    tag: "Product Design · UX Research",
    status: "Case study coming soon",
    title: "Redesigning the onboarding flow",
    summary:
      "The existing onboarding was built fast and never revisited — a 14-step form with a 60% drop-off rate. I led end-to-end research and redesign, reducing onboarding to 5 steps and shipping in 6 weeks. The outcome was a measurable lift in activation and a new internal template for how we approach signup flows.",
    outcomes: [
      { value: "−58%", label: "Drop-off rate" },
      { value: "+40%", label: "Day-1 activation" },
      { value: "6 wks", label: "Ship timeline" },
    ],
  },
  {
    id: "project-two",
    year: "2023",
    tag: "Design Systems · Engineering",
    status: "Case study coming soon",
    title: "Building a design system from scratch",
    summary:
      "Four designers, three codebases, zero shared components. I audited the inconsistencies, defined a token system, and partnered with engineering to ship a component library used across every surface. It reduced design-to-dev handoff time by half and became the foundation for a rebrand.",
    outcomes: [
      { value: "120+", label: "Components shipped" },
      { value: "−50%", label: "Handoff time" },
      { value: "3", label: "Products unified" },
    ],
  },
  {
    id: "project-three",
    year: "2023",
    tag: "Product Strategy · iOS",
    status: "Case study coming soon",
    title: "0→1 mobile app launch",
    summary:
      "Joined a founding team pre-launch to own product and design for an iOS app in the health space. Ran discovery interviews, defined the MVP scope, and shipped v1 in four months. The app reached 10k downloads in the first month without paid acquisition.",
    outcomes: [
      { value: "10k", label: "Downloads in month 1" },
      { value: "4.7★", label: "App Store rating" },
      { value: "4 mo", label: "0 to launch" },
    ],
  },
];
