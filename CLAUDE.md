# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start dev server at localhost:3000
npm run build    # production build
npm run lint     # ESLint via next lint
```

## Stack

- **Next.js 16** (App Router, all routes are server components by default)
- **Tailwind CSS 3** with a stone color palette
- **TypeScript** in strict mode
- **Geist** font (loaded via `next/font/google`, variables set on `<body>`)
- Deployed on Vercel. Repo: github.com/mandirao/portfolio

## Project structure

```
app/
  layout.tsx          # root layout — mounts <Nav>, <footer>, font variables
  globals.css         # Tailwind directives + base body styles
  page.tsx            # Home: hero + selected work list
  about/page.tsx      # About: two-column bio, experience, skills
  case-studies/page.tsx  # Case Studies: card list with outcomes grid
components/
  Nav.tsx             # sticky nav, uses usePathname for active state ("use client")
```

## Architecture notes

- All pages are statically rendered (no `use client` except `Nav.tsx`)
- Page-level data (case studies, experience, skills) lives as plain arrays in the same file as the component — no CMS or external data fetching yet
- The `@/*` path alias maps to the repo root
- Placeholder content uses stone-100 `<div>` blocks for images; replace with `next/image` when real assets are added
- This site is also a personal learning environment — the owner 
  is building AI product skills through hands-on building. 
  Prefer approaches that are legible and teach good patterns 
  over clever abstractions. Explain non-obvious decisions briefly 
  in comments.

---

## About this site

# Portfolio — Mandi O'Brien
- Name: Mandi O'Brien
- Role: Senior Product Manager / AI-first product leader 
- Current company: Sunday (DTC lawn care, Boulder CO) 
- Job searching: Yes (stealth mode, Sunday doesn't know) — targeting Director PM, VP Product, or player-coach Senior/Staff/Principal roles at AI-native or AI-forward companies
- Site purpose: Professional portfolio for recruiters, hiring managers, and network connections.

## Who I am
Senior PM and AI product leader. Background spans design, front-end engineering, and product — which means I think in systems, write stories engineers respect, and have taste. Currently at Sunday (DTC lawn care, Boulder CO), where I own the D2C acquisition funnel and am designing the second AI feature in the product (Sunny AI — photo upload for lawn diagnosis). Actively job searchin in stealth mode.

**Target roles:** Director PM, VP Product, or senior/staff/principal player-coach or IC at AI-native or AI-forward companies. Prioritized by: culture → scope/impact → title → comp.

## What this site needs to communicate
Three things, in this order:

1. **Trustworthy AI product judgment** — I know which bets to make, how to scope them, and how to govern them. I'm not just "using AI tools" — I'm designing AI-powered product experiences right now. I know where AI creates real leverage, how to scope it responsibly, and how to balance speed, accuracy, and trust in production environments.
2. **Customer-first, design-led product leadership** — backed by evidence (metrics, case studies, real decisions), not claims.
3. **Player-coach operator** — I've built and led product teams from zero, and I can also excel as a senior IC. Not one or the other. I’ve built and led product and design teams from early-stage to scale—and can operate as a high-leverage IC when that’s the fastest path to impact.

## What I bring that's unusual
- Early career foundation in front-end development and design — I can read architecture, collaborate deeply with engineers, and write stories engineers can actually translate into clean buildable systems
- Genuine design background (BFA, Tough Mudder, Blue Apron) — I have taste, not just opinions
- Led product and design for a two-sided marketplace (Verblio), scaling from ~$2M to $12M ARR bootstrapped while maintaining supply-demand balance and platform quality
- Currently: 60+ A/B tests, 115% CVR improvement, $1.2M over revenue goal on a ~$19M funnel in just one year
- Now designing AI vision model features for a consumer funnel — active, not theoretical
- Proven ability to translate ambiguous strategy into clear operating models (North Stars, experimentation systems, cross-functional alignment)

## Content source of truth
All site content about professional experiences and goals should be sourced from 
/content/career-identity.md — do not invent it.

## Tech stack
Next.js, Tailwind CSS, TypeScript — deployed on Vercel.
Repo: github.com/mandirao/portfolio

## Design direction
Not a template. Not a developer portfolio with a headshot.
Art-directed — like a well-designed magazine spread that
happens to be a product manager portfolio.

Visual personality:
- Warm but precise — editorial, not corporate
- Typography does real work: scale, weight, and spacing
  carry hierarchy before color does
- Moments of unexpected detail reward close readers
- Color: warm stone neutrals as base, terracotta as the
  single accent — used with conviction, not decoration
- Whitespace creates pacing, like paragraphs in good writing
- Mobile-first — but desktop should feel like opening
  something worth opening

What it should NOT look like:
- A Notion page with a custom domain
- A Linear-inspired dev portfolio (all gray, no soul)
- Any theme marketplace template

## Voice and tone
I am a writer. This site should sound like one person
wrote it — because one person did.

Core qualities:
- Pragmatic warmth: authority without performance
- Wry specificity: the detail that makes you smile before
  it makes you think
- Verbs do the heavy lifting
- Conversational sophistication: precise language paired
  with colloquial asides
- Every page has pacing — not just information density

Signature moves:
- Lead with a pattern or tension the reader has felt
  but not named
- One vivid specific detail over a category. Give the reader an experience, don't describe the experience (e.g. sensory detail instead of "it was fun".)
- Personify when it clarifies, even better if it also adds a smile
- Leave space at the end — not every thought needs a bow

Avoid:
- Passive constructions ("was responsible for")
- Buzzword stacks
- Fake humility ("I was lucky to...")
- Enthusiasm performance ("I'm passionate about...")

## What this site is NOT
A LinkedIn profile with a custom domain. Every page should
do something LinkedIn can't — show judgment, tradeoffs,
and the thinking behind the outcomes.

**Bad:** "Cross-functional leader who drives results through collaborative stakeholder alignment"
**Good:** "Led 60 A/B tests. 115% CVR improvement. $1.2M over goal."

## When making changes
- Always prefer editing existing files over creating new ones
- Keep file structure clean — no one-off components unless they'll be reused
- If you're unsure whether something belongs in a new file or an existing one, ask
- Mobile-first. The site will be viewed on phones by recruiters.
- Accessibility matters — semantic HTML, proper heading hierarchy, alt text

## Content source of truth
My full career context, story bank, and verified metrics live in my Career Identity Layer document. When writing copy for this site, ask me to paste relevant sections rather than inferring from job titles alone.

## Session logs
Decision logs live in /logs/ with date-stamped filenames.
When making significant architectural decisions, create or 
update the relevant log file. These are source material for 
future synthesis — treat them as honest, not polished.
