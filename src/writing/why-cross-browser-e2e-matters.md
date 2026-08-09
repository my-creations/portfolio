---
layout: layouts/writing.njk
permalink: false
translationKey: cross-browser-e2e
contentType: note
title: Why Cross-Browser End-to-End Testing Matters
summary: Draft brief — why Chromium-only confidence is insufficient for reliable releases.
date: 2026-08-02
tags:
  - writing
  - testing
featured: true
draft: true
---

> **Draft.** This Note is not public yet. Technical specifics must match the current test suite before publication.

## Intended point

Green checks in a single browser engine are not the same as release confidence. Engine differences still surface in layout, APIs, and real user journeys.

## Verified material to draw from

- Existing Playwright coverage across Chromium, Firefox, and WebKit
- CI execution on every push
- Semantic and accessibility checks already represented in the Portfolio quality story

## Review required

Re-verify exact current test behavior before publishing counts, browser matrix details, or tooling claims.
