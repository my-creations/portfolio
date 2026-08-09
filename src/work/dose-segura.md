---
layout: layouts/case-study.njk
tags:
  - case-study
permalink: /work/dose-segura/
translationKey: dose-segura
projectKey: dose-segura
contentType: case-study
title: Dose Segura
summary: Offline-first injectable-med reference for Portuguese clinicians — guidance, not prescription.
featured: true
sanitized: false
order: 2
draft: false
---

## Overview and role

Dose Segura is an offline-first reference for injectable medication information aimed at Portuguese clinicians. I shipped a mobile-first clinical utility with a PWA/web surface alongside native, shaped by real nursing workflow constraints.

**Clinical boundary:** Dose Segura provides guidance and reference material. It is not a prescribing calculator and must not be presented as one.

## Problem and users

Nurses need fast, trustworthy reference material at the point of care. Network coverage is not guaranteed on every ward or moment. Tools that silently fail offline, or that blur the line into prescribing, create risk instead of reducing it.

## Constraints and risks

- Offline use is a requirement, not an enhancement.
- Domain language must stay precise; over-claiming clinical authority is unacceptable.
- Cross-platform delivery (native + web/PWA) has to share a coherent domain model.
- Safety-critical adjacent software demands typed boundaries and automated checks.

## Key decisions

- **Offline-first storage** with AsyncStorage-backed persistence for reference use without network.
- **Structured domain modules** in TypeScript so clinical content shapes stay explicit.
- **Expo / React Native + Expo Router** for mobile delivery, with a PWA/web surface for broader access.
- **Clear product framing** as reference/guidance rather than dosing prescription.

## Quality strategy

- Type-level guarantees around domain modules.
- Jest unit coverage for critical logic.
- Playwright checks for the web surface.
- Lint and type gates as part of the delivery loop.

## Outcome and evidence

A mobile-first clinical utility with typed domain modules and automated checks across lint, types, unit tests, and web end-to-end tests. Public source and demo:

- Source: [my-creations/dose-segura](https://github.com/my-creations/dose-segura)
- Demo: [my-creations.github.io/dose-segura](https://my-creations.github.io/dose-segura/)

## Lessons and next steps

- Domain expertise is most valuable when it draws hard product boundaries, not when it maximizes features.
- Offline-first reference tools earn trust by failing honestly and loading quickly where care actually happens.
