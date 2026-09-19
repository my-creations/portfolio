---
layout: layouts/case-study.njk
tags:
  - case-study
permalink: /work/pkd-digest/
translationKey: pkd-digest
projectKey: pkd-digest
contentType: case-study
title: PKD Digest
summary: Weekly bilingual digest on cystic kidney disease — plain language for patients and families, clinical notes for clinicians.
featured: true
sanitized: false
order: 4
draft: false
---

## Overview and role

PKD Digest (Digest DRP) is a weekly bilingual (EN+PT) curated digest on cystic kidney disease — general cystic kidney disease, not ADPKD-only. I design, build, and curate it: content model, publication pipeline, and the weekly review loop.

## Problem and users

Two audiences, one publication: patients and families who need plain language, and clinicians who need precision. Raw paper feeds serve neither — and health content must never blur into medical advice.

## Constraints and risks

- Every item carries dual framing: a plain-language summary plus a clinical note, in both languages.
- Nothing publishes without human review; assisted shortlists stay drafts until a person decides.
- Explicit boundary: educational curation only, not medical advice.
- Privacy by default: no analytics in v1.

## Key decisions

- **Eleventy 3 + Bun static publication**, following the same patterns as this Portfolio: path prefix, locale routing, and front-matter content validation.
- **One-file content model**: each `src/content/items/*.md` card holds nested `summary.en/pt` and `clinicalNote.en/pt`, with `status` (`draft`/`published`) and issue tags.
- **Assisted, never automatic, curation**: a shortlist script fetches public PubMed candidates into draft cards, and a weekly review step promotes only the keepers — completed EN+PT framing, `status: published`.
- **Digest, timeline, guides, glossary, and search** as the public surfaces, in both languages.

## Quality strategy

- Front-matter content validation gates every build.
- Vitest unit coverage plus Playwright end-to-end checks, including axe accessibility.
- Lighthouse CI on the built site.
- oxlint and oxfmt with pre-commit hooks, plus GitHub Actions CI and Pages deploy on every push to `main`.

## Outcome and evidence

A live bilingual digest with a review-gated publishing loop. Public source and demo:

- Source: [my-creations/pkd-digest](https://github.com/my-creations/pkd-digest)
- Demo: [my-creations.github.io/pkd-digest](https://my-creations.github.io/pkd-digest/)

## Lessons and next steps

- Dual framing forces honesty: if the plain-language version cannot be written, the item is not ready.
- Keeping automation on the draft side of the gate preserves trust — the human publish decision is the product.
