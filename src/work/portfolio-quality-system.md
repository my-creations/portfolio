---
layout: layouts/case-study.njk
tags:
  - case-study
permalink: /work/portfolio-quality-system/
translationKey: portfolio-quality-system
projectKey: portfolio-quality-system
contentType: case-study
title: Portfolio quality system
summary: A personal site treated like production software — bilingual, testable, and continuously checked.
featured: true
sanitized: false
order: 3
draft: false
---

## Overview and role

This Portfolio is both product and proof. I built the original single-page site in vanilla HTML, CSS, and JavaScript, and I am redesigning it as a multi-page static publication generated with Eleventy. The goal is the same: make Quality Engineering practice visible without relying on employer NDAs.

## Problem and users

Portfolios often showcase project screenshots while hiding how the author works. Technical hiring managers and thoughtful collaborators cannot see testing discipline, CI habits, accessibility rigor, or editorial judgment from a decorative landing page alone.

## Constraints and risks

- The site must remain useful without client-side rendering.
- Content must stay bilingual without runtime text substitution for indexable pages.
- Claims need verifiable proof signals; vanity metrics and unsupported outcomes are out of bounds.
- The current public site stays available until the redesign passes its quality gates.

## Key decisions

- **Static by default** — Eleventy generates HTML from shared layouts, structured project data, and Markdown.
- **Vanilla CSS and browser JavaScript** at runtime; no client-side application framework.
- **Editorial information architecture** — Home, Work, Writing, About — instead of one long résumé page.
- **`data-test` hooks, Vitest, and Playwright** across Chromium, Firefox, and WebKit on the existing site, with CI on every push.
- **Proof signals without hard-coded test counts** in the redesign until numbers are regenerated or deliberately re-verified.

## Quality strategy

- Semantic landmarks, heading order, keyboard access, visible focus, and WCAG 2.2 AA contrast as release requirements.
- Unit tests for relevant browser behavior; Playwright coverage in three engines.
- Accessibility checks inside automated end-to-end coverage.
- Reduced-motion support and responsive layouts that collapse without carousels.

## Outcome and evidence

The previous single-page site reached Lighthouse 100 (verified at commit `e38ea2e`) and runs unit plus cross-browser end-to-end checks in GitHub Actions. The redesign preserves that quality bar while shifting the product toward a curated publication.

- Source: [my-creations/portfolio](https://github.com/my-creations/portfolio)
- Live site: [my-creations.github.io/portfolio](https://my-creations.github.io/portfolio/)

## Lessons and next steps

- A portfolio can demonstrate specialization by how it is built, not only by what it lists.
- Depth beats volume: a few honest case studies outperform a large undifferentiated carousel.
- Next: finish Writing drafts, tighten visual polish, and cut over hosting only after the multi-page quality gates pass.
