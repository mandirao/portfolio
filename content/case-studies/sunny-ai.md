---
title: "Teaching a lawn funnel to see."
company: "Sunday"
year: 2025
category: "AI Product"
status: "in-progress"
tags: ["AI Product", "Consumer UX", "Vision Model"]
summary: "The acquisition funnel asks leads to self-report lawn conditions — high drop-off, low data quality. I'm designing a photo-upload AI analysis feature: upload a yard photo, get a structured diagnosis, confirm before it writes to the funnel."
metrics: []
---

## The problem

The current funnel asks leads to self-report their lawn conditions: grass type, problem areas, square footage. It's the weakest step in the flow — high drop-off, low data quality, and frequent mismatch between what leads report and what their lawn actually needs.

## The design

Photo upload AI analysis: a lead uploads a yard photo, a vision model returns a structured assessment (weeds, bare spots, pet damage, coverage gaps), and the lead confirms or adjusts before that data writes into the funnel.

The design surface is deceptively simple. The systems thinking underneath it isn't.

## Key decisions

**Graceful fallback.** If confidence falls below threshold, the feature exits to the manual flow — not an error state, just a smooth hand-off. The AI augments the funnel; it doesn't gatekeep it.

**Correction rate as the primary signal.** If leads consistently correct the AI's output, that's the most honest signal we have about model quality. Tracking correction rate by problem type, by lawn region, and over time.

**Shared analysis service pattern.** The vision model integration is designed as a standalone service — not baked into the funnel. Every future AI use case in the product can call the same service.

This is the first AI feature in the Sunday product.
