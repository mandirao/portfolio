# Content Architecture Spec — v1

## Decision
Move from hardcoded .tsx content to markdown-based content 
system using Next.js file-based generation.

## Content Types

### Case Studies (/work)
Location: /content/case-studies/*.md
Feed page: /app/work/page.tsx
Detail page: /app/work/[slug]/page.tsx

Frontmatter schema:
---
title: ""           # The punchy headline eg "60 tests. 115% CVR."
company: ""         # Company name
year: 2024
category: ""        # eg "Growth / A/B Testing"
status: "published" # published | draft | in-progress
tags: []
summary: ""         # 2-3 sentence description for feed card
metrics: []         # eg ["115% CVR lift", "$1.2M over goal"]
---

### Building (/building)
Location: /content/building/*.md
Feed page: /app/building/page.tsx
No detail pages needed for v1 — feed cards only

Frontmatter schema:
---
title: ""
description: ""     # 1-2 sentences
status: ""          # "live" | "in progress" | "paused"
url: ""             # live URL if exists
tags: []
year: 2026
---

### Writing (/writing)
Location: /content/writing/*.md
Feed page: /app/writing/page.tsx
Detail page: /app/writing/[slug]/page.tsx
Placeholder for v1 — build the architecture, no real posts yet

Frontmatter schema:
---
title: ""
date: ""
status: "draft"     # draft | published
summary: ""
tags: []
---

### Now (/now)
Location: /content/now.md (single file, not a feed)
Page: /app/now/page.tsx
Updated manually, no frontmatter needed

## Navigation Order
Home / Work / Building / Writing / Now / About / Contact

## Feed Behavior
- Sort by year descending (newest first)
- Show only status: published on live site
- Draft items invisible to visitors
- No external CMS, no database
- All content lives in /content/ folder

## Design Pattern for Feed Cards
Each feed page shows cards with:
- Title (punchy, large)
- Company + year (small, muted)
- Summary (2-3 lines)
- Tags (small pills)
- Metrics if they exist (terracotta, prominent)
- Status badge for "in progress" items

## What to migrate
Take existing hardcoded case studies from 
app/case-studies/page.tsx and convert to .md files.
Existing building projects:
1. This portfolio site
2. Concert feed app (setlistsocialfeed.com)
3. Tab splitter (tabsplits.com)  