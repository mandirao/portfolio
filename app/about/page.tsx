import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — Mandi O'Brien",
};

export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        {/* Left column */}
        <div className="md:col-span-1">
          {/* Photo placeholder — replace with next/image when ready */}
          <div className="w-full aspect-square rounded-2xl bg-stone-100 flex items-center justify-center mb-6">
            <span className="font-mono text-2xl text-stone-300 tracking-widest">
              MO
            </span>
          </div>
          <h1 className="text-xl font-semibold text-stone-900">
            Mandi O&apos;Brien
          </h1>
          <p className="text-sm text-stone-500 mt-1">Senior Product Manager</p>
          <p className="text-sm text-stone-400 mt-0.5">Boulder, CO</p>

          <div className="flex flex-col gap-2 mt-6">
            <a
              href="https://linkedin.com/in/mandiobrien"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-stone-500 hover:text-stone-900 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/mandirao"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-stone-500 hover:text-stone-900 transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Right column */}
        <div className="md:col-span-2 space-y-14">
          {/* Bio */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-stone-400 mb-5">
              Background
            </h2>
            <div className="space-y-4 text-stone-600 leading-relaxed">
              <p>
                Background spans front-end engineering (HTML, CSS, JS—since
                1997), design (BFA; Tough Mudder, Blue Apron), and product
                (Verblio, Sunday). Three different job titles, one repeating
                pattern: I make the invisible legible. Broken experiences become
                clear ones. Chaotic processes become trusted systems. Skeptical
                stakeholders become advocates.
              </p>
              <p>
                I think in systems, write with clarity, lead with empathy, and
                build with taste. Most PMs claim two of these. I have receipts
                for all four.
              </p>
              <p>
                Currently Senior PM at Sunday (Boulder, CO), where I own the
                D2C acquisition funnel and am designing the first AI
                feature—a vision model that analyzes yard photos and returns
                structured assessments for leads before they enter the purchase
                flow. Actively looking for my next role at an AI-native or
                AI-forward company.
              </p>
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-stone-400 mb-7">
              Experience
            </h2>
            <div className="space-y-8">
              {experience.map((role) => (
                <div key={`${role.company}-${role.years}`} className="flex gap-6">
                  <span className="font-mono text-xs text-stone-300 shrink-0 pt-1 w-20">
                    {role.years}
                  </span>
                  <div>
                    <p className="font-semibold text-stone-900">{role.title}</p>
                    <p className="text-sm text-stone-500">
                      {role.company} · {role.location}
                    </p>
                    <p className="text-sm text-stone-500 leading-relaxed mt-2">
                      {role.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills — organized by category */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-stone-400 mb-7">
              Skills
            </h2>
            <div className="space-y-5">
              {skillGroups.map((group) => (
                <div key={group.label} className="flex gap-6">
                  <span className="font-mono text-xs text-stone-300 shrink-0 pt-1 w-20">
                    {group.label}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-full bg-stone-100 text-stone-600 text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-sm font-medium text-stone-900 hover:text-terracotta-500 transition-colors"
            >
              View case studies →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

const experience = [
  {
    years: "2023–now",
    title: "Senior Product Manager",
    company: "Sunday",
    location: "Boulder, CO",
    description:
      "Inherited a broken acquisition funnel. Built it into a machine. 60+ A/B tests, 115% CVR improvement, $1.2M over revenue goal in year one. Currently designing Sunny AI—the first AI feature in the product, a vision model that analyzes yard photos and returns structured lawn assessments.",
  },
  {
    years: "2018–23",
    title: "Head of Product & Design (Director → VP)",
    company: "Verblio",
    location: "Denver, CO",
    description:
      "Built the product and design org from zero at a bootstrapped two-sided content marketplace. Hired and developed a team of four—both direct reports promoted within a year. Drove 5x revenue growth without external funding over 4.5 years.",
  },
  {
    years: "2014–17",
    title: "Graphic Designer",
    company: "Blue Apron",
    location: "New York, NY",
    description:
      "First designer on the marketing team. Owned art direction, editorial design, animated email, and infographics at scale. First time working with a real creative director—skills accelerated fast.",
  },
  {
    years: "2012–14",
    title: "Graphic Designer",
    company: "Tough Mudder",
    location: "New York, NY",
    description:
      "Created the Murderella brand from scratch. Differentiated through full Adobe suite fluency and fast production. Was offered the manager role when my boss left—then Blue Apron called.",
  },
];

const skillGroups = [
  {
    label: "Product",
    skills: [
      "A/B testing (VWO)",
      "Continuous discovery",
      "Roadmapping",
      "OKR design",
      "AI product design",
      "JTBD",
      "Reforge AI Strategy",
    ],
  },
  {
    label: "Design",
    skills: [
      "Figma",
      "UX/UI",
      "Usability testing",
      "Brand & visual identity",
      "UX copywriting",
      "Adobe Suite",
    ],
  },
  {
    label: "Technical",
    skills: [
      "HTML / CSS / JS",
      "React",
      "Next.js",
      "FullStory · Pendo · Metabase",
      "Prompt engineering",
      "Vibe coding",
    ],
  },
  {
    label: "Leadership",
    skills: [
      "Team building",
      "Executive comms",
      "Servant leadership",
      "Delegation frameworks",
      "Change management (ADKAR)",
    ],
  },
];
