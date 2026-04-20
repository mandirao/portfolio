"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/building", label: "Building" },
  { href: "/writing", label: "Writing" },
  { href: "/now", label: "Now" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-stone-100">
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-mono text-sm font-medium tracking-tight text-stone-900 hover:text-stone-600 transition-colors"
        >
          Mandi O&apos;Brien
        </Link>
        <ul className="flex items-center gap-8">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`text-sm transition-colors ${
                  pathname === href
                    ? "text-stone-900 font-medium"
                    : "text-stone-500 hover:text-stone-900"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
