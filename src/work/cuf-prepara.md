---
layout: layouts/case-study.njk
tags:
  - case-study
permalink: /work/cuf-prepara/
translationKey: cuf-prepara
projectKey: cuf-prepara
contentType: case-study
title: CUF Prepara
summary: Personalized colonoscopy prep for Hospital CUF Descobertas — a bilingual client-side wizard with quality treated as a product feature.
featured: true
sanitized: true
order: 1
draft: false
---

## Overview and role

CUF Prepara is a bilingual (Portuguese/English) client-side experience that personalizes colonoscopy preparation guidance. I designed and built the product end to end, treating automated quality as part of the product rather than a final checklist.

This is a **sanitized case study**. The repository is private and a public demo is not published yet. Patient information, internal systems, and employer-confidential detail are omitted.

## Problem and users

Patients preparing for colonoscopy need a clear, timed plan. Generic PDF instructions are easy to misread: steps get missed, timing drifts, and exams can be delayed for avoidable reasons.

The primary users are patients (and supporting family members) who must follow diet, medication, and exam-day guidance under time pressure.

## Constraints and risks

- Clinical inputs must drive personalization without turning the interface into a medical record system.
- The experience must work well on phones; preparation happens at home, not at a desk.
- Copy and timing cues must stay precise in both Portuguese and English.
- Private clinical and institutional detail cannot appear in a public portfolio write-up.

## Key decisions

- **Client-side wizard** with local persistence so progress survives reloads without a backend.
- **Deep links** so a session can be resumed or shared carefully within the product flow.
- **Calendar export** (`.ics` with `VALARM`) so reminders live where patients already manage time.
- **Vanilla JS modules** to keep the runtime small and the core logic unit-testable.

## Quality strategy

- Unit tests around core personalization and timing logic (coverage target ≥80% for critical modules).
- Playwright end-to-end coverage for the journeys that matter.
- CLS-conscious UI decisions so layout stability is part of the experience quality.
- Lint/format gates and pre-commit hooks to keep the feedback loop close to the code.

## Outcome and evidence

A responsive prep experience that turns clinical inputs into a timed, bilingual plan with testable core logic and automated journey checks. Public metrics beyond the engineering practices above are not disclosed here.

## Lessons and next steps

- Preparation guidance is a product problem, not only a content problem: timing, language, and resumability matter as much as the clinical text.
- When a demo can be published safely, this case study should gain a live link without expanding the disclosure boundary.
