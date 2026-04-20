import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-6">
      {/* Hero */}
      <section className="pt-32 pb-28">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-stone-900 leading-[1.05] mb-10 max-w-3xl">
          Builder since 1997. Coder turned designer turned PM and occasional
          team-builder. 
        </h1>
        <p className="text-xl sm:text-2xl font-light text-stone-500 leading-snug mb-10 max-w-2xl">
          Currently senior IC at Sunday, where I own the $30M acquisition
          funnel and am designing its first AI-powered lawn diagnosis feature.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="/work"
            className="inline-flex items-center px-5 py-2.5 rounded-full bg-terracotta-500 text-white text-sm font-medium hover:bg-terracotta-600 transition-colors"
          >
            View the work
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center px-5 py-2.5 rounded-full border border-stone-200 text-stone-700 text-sm font-medium hover:border-stone-400 transition-colors"
          >
            About me
          </Link>
        </div>
      </section>

      <hr className="border-stone-100" />

      {/* Selected Work */}
      <section className="py-20">
        <h2 className="text-xs font-mono uppercase tracking-widest text-stone-400 mb-10">
          Selected Work
        </h2>
        <div>
          {selectedWork.map((item) => (
            <Link
              key={item.slug}
              href={`/work/${item.slug}`}
              className="group flex items-start justify-between py-7 border-b border-stone-100 hover:border-stone-300 transition-colors"
            >
              <div className="flex items-baseline gap-6 min-w-0">
                <span className="font-mono text-xs text-stone-300 shrink-0 pt-0.5">
                  {item.year}
                </span>
                <div className="min-w-0">
                  <h3 className="text-base sm:text-lg font-semibold text-stone-900 group-hover:text-stone-600 transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-stone-400 mt-1">
                    {item.descriptor} · {item.tag}
                  </p>
                </div>
              </div>
              <span className="text-stone-300 group-hover:text-terracotta-400 transition-colors text-lg shrink-0 ml-6 mt-0.5">
                →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Belief statement — something LinkedIn can't show */}
      <section className="pb-28 max-w-2xl">
        <h2 className="text-xs font-mono uppercase tracking-widest text-stone-400 mb-6">
          On AI and the PM craft
        </h2>
        <p className="text-stone-600 text-lg leading-relaxed">
          AI executes your thinking. It doesn&apos;t replace it. The bottleneck
          isn&apos;t the model—it&apos;s the human architecture behind the
          prompt. The PMs who will matter in this era are the ones who can think
          clearly about what to build, for whom, and why.
        </p>
      </section>
    </div>
  );
}

const selectedWork = [
  {
    slug: "sunny-ai",
    title: "Teaching a lawn funnel to see.",
    descriptor: "Sunny AI — Sunday",
    tag: "AI Product",
    year: "2025",
  },
  {
    slug: "sunday-funnel",
    title: "60 tests. 115% CVR. $1.2M over goal.",
    descriptor: "Acquisition funnel — Sunday",
    tag: "Growth",
    year: "2024",
  },
  {
    slug: "verblio",
    title: "5x revenue, bootstrapped. No playbook.",
    descriptor: "Two-sided marketplace — Verblio",
    tag: "Product Leadership",
    year: "2018–23",
  },
];
