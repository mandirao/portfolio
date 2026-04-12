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
