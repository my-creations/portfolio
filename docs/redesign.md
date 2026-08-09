# Portfolio Redesign Specification

**Status:** Approved. Implementation started — Eleventy scaffold, bilingual core pages, Case Studies, and design tokens land in `src/` and build to `_site/`. The legacy single-page site at the repo root remains public until cutover.

This document defines the agreed redesign of Pedro's Portfolio from a single scrolling page into a multi-page, bilingual publication for Work and Writing.

## Related documents

- [`../CONTEXT.md`](../CONTEXT.md) — canonical project language
- [`redesign-phase-0.md`](./redesign-phase-0.md) — verified positioning, project facts, and bilingual source copy
- [`content-model.md`](./content-model.md) — content types, metadata, and editorial rules
- [`deployment-plan.md`](./deployment-plan.md) — current and future hosting design
- [`adr/0001-adopt-eleventy-for-static-site-generation.md`](./adr/0001-adopt-eleventy-for-static-site-generation.md)
- [`adr/0002-use-staged-static-hosting.md`](./adr/0002-use-staged-static-hosting.md)

## 1. Purpose

The Portfolio should present a curated body of work rather than behave like a résumé template or a catalogue of project cards.

Its priorities are:

1. Demonstrate craft and judgment through selected Work.
2. Build authority through durable Writing.
3. Support conversations with technical hiring managers and thoughtful collaborators.

The desired impression is **precise, thoughtful, and quietly distinctive**. The design should avoid generic SaaS styling and over-animated developer-portfolio conventions.

### Primary visitor journey

1. Understand Pedro's positioning.
2. Open a featured Case Study or piece of Writing.
3. Inspect supporting proof and background.
4. Make contact through the persistent footer.

## 2. Design principles

- **Depth over volume:** A few strong Case Studies outrank a large project carousel.
- **Evidence over claims:** Capability statements should be backed by verifiable Proof Signals.
- **Editorial over promotional:** Typography and content hierarchy carry the experience.
- **Static by default:** Pages must remain useful without client-side rendering.
- **Bilingual without blockage:** Core pages launch in English and Portuguese; untranslated Writing may still be published.
- **Accessible by construction:** Keyboard, focus, contrast, semantics, and reduced motion are release requirements.
- **No invented content:** Unsupported outcomes, personal claims, or confidential details must be omitted.

## 3. Information architecture

### Main navigation

- Home
- Work
- Writing
- About
- Language control

There is no separate Contact page. Contact details and the résumé remain available in the global footer.

### Routes

English is the default locale. Portuguese lives under `/pt/`.

| Page           | English            | Portuguese             |
| -------------- | ------------------ | ---------------------- |
| Landing Page   | `/`                | `/pt/`                 |
| Work           | `/work/`           | `/pt/trabalho/`        |
| Writing        | `/writing/`        | `/pt/escrita/`         |
| About          | `/about/`          | `/pt/sobre/`           |
| Case Study     | `/work/{slug}/`    | `/pt/trabalho/{slug}/` |
| Writing detail | `/writing/{slug}/` | `/pt/escrita/{slug}/`  |

Translated documents may use localized slugs. A stable translation key connects counterparts.

If a piece of Writing has no translated counterpart, the language control leads to the other locale's Writing index rather than fabricating content or returning a 404.

## 4. Page specifications

### 4.1 Landing Page

The Landing Page is a curated gateway, not a compressed copy of every page.

1. **Identity:** Use the verified headline “Software Engineer focused on Quality Engineering & Test Automation.” Supporting copy introduces healthcare experience, safety-critical thinking, and product craftsmanship.
2. **Primary actions:** “View Work” first and “Read Writing” second.
3. **Featured Work:** One primary Case Study with links into the Work collection.
4. **Featured Writing:** Two recent or featured entries.
5. **Professional context:** A concise account of experience and capabilities, not a complete timeline.
6. **Contact invitation:** A short closing invitation leading into the footer.

Do not surface a Proof Signals strip on the Landing Page.

The current large circular portrait does not appear here.

### 4.2 Work

The Work index uses an editorial grid rather than a carousel or filter interface.

#### Launch Case Studies

1. **CUF Prepara** — primary Case Study; sanitized because its repository is private and a public demo is unresolved.
2. **Dose Segura** — primary Case Study.
3. **This Portfolio** — Quality Engineering treated as a product capability.

#### Experiments

Vestaboard Clock receives highlighted Experiment treatment. A small selection of the strongest remaining Experiments follows, with the rest retained in a compact archive. Experiments must not receive equal visual weight to Case Studies.

#### Case Study template

Use only sections supported by verified material:

1. Overview and role
2. Problem and users
3. Constraints and risks
4. Key decisions
5. Quality strategy
6. Outcome and evidence
7. Lessons and next steps
8. Available source and demo links

A Sanitized Case Study must not reveal patient information, internal systems, private source code, employer-confidential information, or unsupported impact.

### 4.3 Writing

Writing contains Articles and Notes in one reverse-chronological collection.

The index shows:

- Content type
- Title and summary
- Publication date
- Available language
- Optional restrained tags

The first release should contain one Article and one Note in English and Portuguese. Their working briefs are documented in [`content-model.md`](./content-model.md).

The index includes an RSS feed. Search, tag archives, category pages, comments, and newsletters are deferred until there is enough content or demonstrated demand.

Writing detail pages show the title, summary, publication date, content type, language, reading time, restrained tags, heading anchors, previous/next links, and an RSS link. Do not add repetitive author cards to a single-author site.

### 4.4 About

The About page tells a coherent personal and professional story:

- Transition from registered nursing into software engineering
- Healthcare credibility and safety-critical thinking
- Quality Engineering and test-automation focus
- Selected professional milestones
- Computer Science and Nursing education
- Selected toolkit and working approach
- Link to the full résumé

Use a quieter editorial crop of the existing portrait. Do not reproduce the entire résumé or invent employer details that are not currently available.

### 4.5 Header and footer

The header contains Pedro's name or wordmark, the four main destinations, and a language control. It must work with keyboard and touch input at all supported widths.

The footer contains:

- Concise contact invitation
- Email
- GitHub
- LinkedIn
- Résumé
- Copyright

Use descriptive text links rather than relying on icon-only controls. No contact form is required.

## 5. Visual direction

### Character

Use an editorial system weighted toward calm, precision, and technical credibility:

- Warm off-white background
- Near-black primary text
- Restrained electric/cobalt-blue accent
- Generous whitespace
- Asymmetric but disciplined composition
- Clear typographic hierarchy
- Fine rules and subtle surfaces instead of heavy cards

### Typography

- **Display:** Newsreader
- **Body and interface:** Geist
- **Technical metadata:** Monospace used sparingly for dates, tags, metrics, and code

Body copy should use a comfortable reading measure. Article layouts must prioritize long-form readability over decorative composition.

### Theme

The first release has one polished light theme. Tokens may permit a future dark theme, but the initial release must not include a theme switch.

### Motion

Use restrained entrance and hover transitions only. Avoid continuous decorative animation, elaborate page transitions, and interactions that depend on movement. Honor `prefers-reduced-motion` fully.

### Responsive behavior

The hierarchy and reading order must remain intact from small mobile screens through wide desktop layouts. Grids collapse without turning into carousels. Navigation, language controls, code blocks, and long titles must remain usable without horizontal page overflow.

## 6. Localization

- Core pages and launch Writing are available in English and Portuguese.
- Future Writing may be published in one language without blocking release.
- Each localized page has translated visible copy and metadata.
- Language selection navigates between URLs; it does not replace indexed page content at runtime.
- Every translated pair uses a stable translation key.
- Missing counterparts are represented honestly.
- Clinical and healthcare wording must remain precise; Dose Segura provides guidance and is not presented as prescribing.

## 7. Discovery and metadata

Every public page should define an appropriate title, description, canonical URL, Open Graph metadata, locale, and available alternate-language links. The generated site should provide a sitemap, RSS feed, robots policy, favicon set, and useful 404 page.

No visitor analytics, tracking scripts, comments, or newsletter integration are part of the initial release.

## 8. Quality standard

Before launch, the generated site must satisfy:

- Semantic page landmarks and heading order
- Keyboard-operable navigation and controls
- Visible focus indicators
- WCAG 2.2 AA contrast
- Reduced-motion behavior
- Responsive layouts without content loss
- Correct localized routes, canonicals, and alternate links
- No broken internal links
- No visible drafts, TODOs, or unsupported claims
- Unit tests for relevant browser behavior
- Playwright coverage in Chromium, Firefox, and WebKit
- Accessibility checks in automated end-to-end coverage

Lighthouse 100 remains a Proof Signal when verified, but accessibility and correctness—not a fragile score—are the release gates.

## 9. Technical direction

Eleventy generates static HTML from shared layouts, structured Project data, and Markdown content. Existing vanilla CSS and browser JavaScript remain the runtime approach; the redesign does not introduce a client-side application framework or hydration runtime.

The current site remains available while the generated replacement is prepared and validated. Deployment changes only when the complete multi-page site passes its quality gates.

## 10. Hosting stages

1. **Current and initial redesign release:** GitHub Pages.
2. **Future canonical deployment:** Raspberry Pi running UmbrelOS after a domain is purchased through Cloudflare.
3. **Fallback:** Preserve the generated site and GitHub Pages workflow so static hosting can be restored without rebuilding the product architecture.

See [`deployment-plan.md`](./deployment-plan.md) for the future infrastructure design.

## 11. Explicitly out of scope

- Redesign implementation as part of this documentation task
- Client-side SPA routing
- Contact form or backend
- Dark mode at launch
- Search, tag archives, or complex Writing taxonomy
- Comments or newsletter
- Visitor analytics
- Public exposure of Umbrel administration or deployment controls
- Live Raspberry Pi deployment before the domain is owned
- Invented copy, outcomes, employer details, or confidential project information
