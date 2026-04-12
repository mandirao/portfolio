import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-6">
      {/* Hero */}
      <section className="pt-28 pb-24">
        <p className="font-mono text-sm text-stone-400 mb-6 tracking-wide uppercase">
          Product Designer & Developer
        </p>
        <h1 className="text-5xl sm:text-6xl font-semibold tracking-tight text-stone-900 leading-tight mb-8 max-w-3xl">
          I design and build things people actually want to use.
        </h1>
        <p className="text-lg text-stone-500 max-w-xl leading-relaxed mb-10">
          Based in San Francisco. Focused on the intersection of design, product
          thinking, and engineering — with a bias toward simplicity.
        </p>
        <div className="flex items-center gap-4">
          <Link
            href="/case-studies"
            className="inline-flex items-center px-5 py-2.5 rounded-full bg-stone-900 text-white text-sm font-medium hover:bg-stone-700 transition-colors"
          >
            View case studies
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center px-5 py-2.5 rounded-full border border-stone-200 text-stone-700 text-sm font-medium hover:border-stone-400 transition-colors"
          >
            About me
          </Link>
        </div>
      </section>

      {/* Divider */}
      <hr className="border-stone-100" />

      {/* Selected Work Preview */}
      <section className="py-20">
        <h2 className="text-xs font-mono uppercase tracking-widest text-stone-400 mb-10">
          Selected Work
        </h2>
        <div className="grid gap-4">
          {selectedWork.map((item) => (
            <Link
              key={item.slug}
              href={`/case-studies#${item.slug}`}
              className="group flex items-center justify-between py-6 border-b border-stone-100 hover:border-stone-300 transition-colors"
            >
              <div className="flex items-baseline gap-6">
                <span className="font-mono text-xs text-stone-300">
                  {item.year}
                </span>
                <div>
                  <h3 className="text-base font-medium text-stone-900 group-hover:text-stone-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-stone-400 mt-0.5">{item.tag}</p>
                </div>
              </div>
              <span className="text-stone-300 group-hover:text-stone-600 transition-colors text-lg">
                →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

const selectedWork = [
  {
    slug: "project-one",
    title: "Redesigning the onboarding flow",
    tag: "Product Design · UX Research",
    year: "2024",
  },
  {
    slug: "project-two",
    title: "Building a design system from scratch",
    tag: "Design Systems · Engineering",
    year: "2023",
  },
  {
    slug: "project-three",
    title: "0→1 mobile app launch",
    tag: "Product Strategy · iOS",
    year: "2023",
  },
];
