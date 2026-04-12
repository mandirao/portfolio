import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies — Mandi O'Brien",
};

export default function CaseStudies() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      {/* Page header */}
      <div className="mb-20">
        <p className="font-mono text-xs uppercase tracking-widest text-stone-400 mb-3">
          Work
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-stone-900 mb-5">
          Case Studies
        </h1>
        <p className="text-stone-500 max-w-xl leading-relaxed">
          Four stories. Each one shows a different thing—AI product judgment,
          growth execution, UX instinct, technical leadership. The through-line
          is the same in all of them.
        </p>
      </div>

      {/* Case study list */}
      <div>
        {caseStudies.map((study, index) => (
          <article
            key={study.id}
            id={study.id}
            className="py-14 border-t border-stone-100 first:border-t-0"
          >
            {/* Meta row */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
              <div className="flex items-center gap-4 font-mono text-xs text-stone-400">
                <span className="text-stone-200">
                  0{index + 1}
                </span>
                <span>·</span>
                <span>{study.year}</span>
                <span>·</span>
                <span>{study.tag}</span>
              </div>
              <span className="font-mono text-xs text-stone-400">
                {study.status}
              </span>
            </div>

            {/* Claim headline — the thing it proves */}
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 leading-snug mb-2 max-w-2xl">
              {study.claim}
            </h2>

            {/* Story title as descriptor */}
            <p className="text-sm text-stone-400 mb-7">
              {study.title} — {study.company}
            </p>

            {/* Context */}
            <p className="text-stone-500 leading-relaxed max-w-2xl mb-8">
              {study.context}
            </p>

            {/* Outcomes — only rendered when there are real metrics */}
            {study.outcomes.length > 0 && (
              <div className="flex flex-wrap gap-10">
                {study.outcomes.map((outcome) => (
                  <div key={outcome.label}>
                    <p className="text-3xl font-bold text-terracotta-500 leading-none">
                      {outcome.value}
                    </p>
                    <p className="text-xs text-stone-400 mt-2">
                      {outcome.label}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}

const caseStudies = [
  {
    id: "sunny-ai",
    year: "2025",
    tag: "AI Product · Consumer UX",
    status: "In design · Case study in progress",
    claim: "Teaching a lawn funnel to see.",
    title: "Sunny AI",
    company: "Sunday",
    context:
      "The acquisition funnel asks leads to self-report lawn conditions—a step with high drop-off and low data quality. I designed a photo-upload AI analysis feature: lead uploads a yard photo, a vision model returns a structured assessment (weeds, bare spots, pet damage), lead confirms or adjusts before data writes to the funnel. The spec includes image compression, graceful fallback to manual flow, confidence thresholds, correction rate tracking, and a shared analysis service pattern for every future AI use case. This is the first AI feature in the product.",
    outcomes: [],
  },
  {
    id: "sunday-funnel",
    year: "2024",
    tag: "Growth · A/B Testing · UX",
    status: "Case study in progress",
    claim: "60 tests. 115% CVR. $1.2M over goal.",
    title: "Lawn subscription acquisition funnel",
    company: "Sunday",
    context:
      "Inherited a funnel that hadn't been touched with real product rigor. In year one: ran 60+ A/B tests in VWO, drove a cumulative 115% CVR improvement, and delivered $1.2M over revenue goal on a ~$19M DTC funnel. New subscribers up 11.1% YoY. Session-to-plan-selection rate up 33%. Plan-to-purchase rate up 87%. The work that earned the \"best steerco in the history of our steercos\" quote from the company President lives in this case study.",
    outcomes: [
      { value: "+115%", label: "Cumulative CVR improvement" },
      { value: "$1.2M", label: "Over revenue goal" },
      { value: "+11.1%", label: "New subscribers YoY" },
    ],
  },
  {
    id: "need-algorithm",
    year: "2021",
    tag: "UX · Product Sense · Growth",
    status: "Case study in progress",
    claim: "A 3-day fix did what years of backend work couldn't.",
    title: "Writer UX — Need Algorithm",
    company: "Verblio",
    context:
      "Writers weren't changing behavior after a major algorithm update because nothing in the UI told them it had changed. Watched FullStory for 10 minutes. Saw the problem immediately: numeric \"need\" scores (1–5) meant nothing to writers. Changed them to plain language (Lite → On Fire). Added a competition indicator when customers already had submissions. Rewrote helper text. Released a Pendo guide. Three days. Content delivered under 96 hours jumped from 60% to 90%—a trend that held for two years.",
    outcomes: [
      { value: "60→90%", label: "Under-96h delivery rate" },
      { value: "3 days", label: "Implementation" },
      { value: "2+ yrs", label: "Improvement held" },
    ],
  },
  {
    id: "multipass",
    year: "2021–22",
    tag: "Technical Leadership · Cross-functional",
    status: "Case study in progress",
    claim:
      "Led the most technically complex project in company history while keeping the lights on.",
    title: "Multipass — Billing & Subscription Replatform",
    company: "Verblio",
    context:
      "Obsolete billing and subscription architecture was quietly blocking customer experience, writer pay accuracy, business analytics, and pricing strategy—all at once. Led a cross-functional fellowship of six. Partnered with the CTO, senior engineer, and product marketer. Wrote vertically sliced user stories so parallel development could proceed. Designed phased migration with a full communications strategy. A mid-level engineer became the team hero and was promoted to senior. The junior PM I was coaching earned her promotion.",
    outcomes: [
      { value: "6", label: "Cross-functional contributors" },
      { value: "2", label: "Team members promoted" },
      { value: "4", label: "Blocked domains unblocked" },
    ],
  },
];
