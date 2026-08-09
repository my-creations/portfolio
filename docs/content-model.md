# Portfolio Content Model

**Status:** Approved design; no content migration or public Writing has been created.

This document defines how Work and Writing should be represented when the Eleventy redesign is implemented. Canonical terminology lives in [`../CONTEXT.md`](../CONTEXT.md).

## 1. Sources and editorial boundaries

[`redesign-phase-0.md`](./redesign-phase-0.md) remains the source of verified positioning, Case Study facts, Experiments, Quality Engineering copy, and Proof Signals.

Content rules:

- Do not invent outcomes, metrics, roles, employer details, or personal opinions.
- Omit unsupported public sections instead of exposing placeholders.
- Track unresolved factual gaps only in internal documentation.
- Keep healthcare claims precise and avoid prescriptive language.
- Remove patient, internal-system, private-source, and employer-confidential information from Sanitized Case Studies.
- Record when a time-sensitive Proof Signal was last verified.

## 2. Shared document identity

Every localized document has a unique page identity and, when translated, a shared `translationKey`.

Recommended common metadata:

```yaml
layout: writing
contentType: article
locale: en
translationKey: quality-as-product-feature
title: Quality Engineering as a Product Feature
summary: A factual summary written from the finished draft.
date: YYYY-MM-DD
tags:
  - quality-engineering
featured: true
draft: true
```

Required rules:

- `contentType` is one of `article`, `note`, or `case-study`.
- `locale` is `en` or `pt`.
- `translationKey` is stable across localized counterparts.
- `title`, `summary`, and date are localized page metadata.
- `draft: true` content is excluded from public collections, feeds, and sitemaps.
- A document must not claim a counterpart unless that counterpart exists.

Slugs may differ by language. Relationships use `translationKey`, never matching slugs or titles.

## 3. Work model

### Project data

Shared Project facts should be structured separately from narrative Case Study content.

```yaml
key: dose-segura
name: Dose Segura
kind: project
featured: true
caseStudy: true
links:
  source: https://github.com/my-creations/dose-segura
  demo: https://my-creations.github.io/dose-segura/
media: []
proof: []
```

Localized fields include summary, role, problem, users, constraints, decisions, outcomes, and link labels. Shared fields include stable identity, relationship to a Case Study, verified URLs, and media references.

### Launch hierarchy

| Work               | Treatment                    | Public boundary                                            |
| ------------------ | ---------------------------- | ---------------------------------------------------------- |
| CUF Prepara        | Primary Case Study           | Sanitized; private repository; demo omitted until verified |
| Dose Segura        | Primary Case Study           | Public source and demo may be linked after verification    |
| This Portfolio     | Primary Case Study           | Present Quality Engineering as product capability          |
| Vestaboard Clock   | Highlighted Experiment       | Compact evidence of interaction craft                      |
| Remaining projects | Selected Experiments/archive | Do not give equal weight to Case Studies                   |

### Case Study metadata

```yaml
layout: case-study
contentType: case-study
projectKey: cuf-prepara
locale: en
translationKey: cuf-prepara
title: CUF Prepara
summary: Verified localized summary
featured: true
sanitized: true
draft: true
```

A Case Study may contain:

1. Overview and role
2. Problem and users
3. Constraints and risks
4. Key decisions
5. Quality strategy
6. Outcome and evidence
7. Lessons and next steps
8. Verified links

Sections are optional when facts are unavailable. `sanitized: true` is an editorial warning, not a public promise that every detail may be disclosed.

## 4. Writing model

### Article

A polished, structured, durable piece that develops a substantial idea. Articles may use multiple sections, examples, code, diagrams, and references.

### Note

A shorter, less formal piece focused on one observation or developing idea. A Note remains intentional and edited; it is not filler used to simulate publishing activity.

### Listing and ordering

- Articles and Notes share one reverse-chronological Writing collection.
- Type labels distinguish them without creating separate top-level sections.
- Featured Writing may be selected independently of publication order.
- Tags remain descriptive metadata at launch; no tag archives or complex category hierarchy are generated.
- Only public, non-draft entries appear in the RSS feed.

### Individual page metadata

Display:

- Content type
- Title
- Summary
- Publication date
- Language
- Reading time
- Restrained tags

Do not display a repetitive author card. Previous/next links should move through public Writing in the current language.

## 5. Initial Writing briefs

These are briefs, not finished public copy. Drafts must use verified repository material and flag any personal interpretation for Pedro's review.

### Article — Quality Engineering as a Product Feature

**Purpose:** Explain how quality decisions shape product behavior rather than appearing only as a final testing phase.

**Verified material available:**

- Risk-based testing and safety-critical thinking
- Unit and cross-browser end-to-end testing
- CI feedback on every push
- Accessibility patterns
- Graceful failure
- Examples from the Portfolio, CUF Prepara, and Dose Segura within their disclosure boundaries

**Required review:** Pedro must approve first-person opinions, lessons, and any claimed outcomes before publication.

### Note — Why Cross-Browser End-to-End Testing Matters

**Purpose:** Show why Chromium-only confidence is insufficient and how browser-engine coverage supports reliable releases.

**Verified material available:**

- Existing Playwright coverage across Chromium, Firefox, and WebKit
- CI execution
- Semantic and accessibility checks already represented in the Portfolio's quality story

**Required review:** Verify the exact current test behavior before publishing technical specifics.

Both launch pieces should have English and Portuguese counterparts. Future Writing may be published in one language.

## 6. Localization behavior

- English content uses default routes.
- Portuguese content uses `/pt/` routes.
- Core page pairs are mandatory for launch.
- Writing pairs are optional after the initial launch set.
- If a counterpart exists, the language control links directly to it.
- If it does not exist, the control links to the other language's Writing index.
- Generated metadata declares only real alternate-language pages.
- No runtime text substitution or invisible automatic fallback is used for indexable content.

## 7. Proof Signals

Preferred stable signals:

- Chromium, Firefox, and WebKit coverage
- English and Portuguese core content
- CI on every push
- Unit and end-to-end testing
- Lighthouse 100 with a recorded verification point

Do not publish an exact test count unless it is generated or deliberately reverified as part of the release process.

## 8. Editorial workflow

1. Start as `draft: true`.
2. Confirm that every factual claim has a source or Pedro's approval.
3. Review confidentiality and healthcare wording.
4. Add or verify the localized counterpart when one is promised.
5. Check summary, metadata, headings, links, code, and media alternatives.
6. Preview the generated page at mobile and desktop widths.
7. Run link, accessibility, locale, and cross-browser checks.
8. Set `draft: false` only when the public page has no TODOs or unsupported claims.
