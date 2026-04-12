import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mandi O'Brien — Product Leader",
  description:
    "Senior PM and AI product leader. Design background, engineering roots, outcomes on record.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans`}
      >
        <Nav />
        <main>{children}</main>
        <footer className="border-t border-stone-100 py-10 mt-24">
          <div className="max-w-5xl mx-auto px-6 flex items-center justify-between text-sm text-stone-400">
            <span>Mandi O&apos;Brien · {new Date().getFullYear()}</span>
            <span className="font-mono text-xs">Next.js · Vercel</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
