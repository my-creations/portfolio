# Redesign implementation notes

Working notes for the Eleventy multi-page redesign. Canonical product rules remain in [`redesign.md`](./redesign.md).

## Commands

```bash
bun run dev             # clean build + local server (respects pathPrefix /portfolio/)
bun run build           # clean production build into _site/
bun run test:redesign   # generated Portfolio checks in Chromium, Firefox, and WebKit
```

Local preview with GitHub Pages path prefix:

- Home: `http://localhost:8080/portfolio/`
- Work: `http://localhost:8080/portfolio/work/`
- Writing: `http://localhost:8080/portfolio/writing/`
- About: `http://localhost:8080/portfolio/about/`
- Portuguese home: `http://localhost:8080/portfolio/pt/`

Override the prefix when needed:

```bash
ELEVENTY_PATH_PREFIX=/ bun run dev
```

## Layout

| Path                            | Role                                                                    |
| ------------------------------- | ----------------------------------------------------------------------- |
| `src/`                          | Eleventy input                                                          |
| `src/_data/`                    | Site, i18n, projects, experiments, about                                |
| `src/_includes/`                | Layouts and partials                                                    |
| `src/css/main.css`              | Design tokens + editorial styles                                        |
| `src/js/main.js`                | Mobile nav only                                                         |
| `tests/redesign/`               | Generated-site navigation, localization, accessibility, and link checks |
| `playwright.redesign.config.js` | Redesign server and cross-browser test configuration                    |
| `src/work/*.md`                 | EN Case Studies                                                         |
| `src/pt/trabalho/*.md`          | PT Case Studies                                                         |
| `src/writing/*.md`              | EN Writing (drafts use `permalink: false`)                              |
| `src/pt/escrita/*.md`           | PT Writing drafts                                                       |
| `_site/`                        | Generated output (gitignored)                                           |
| repo root `index.html`          | Legacy single-page site still live                                      |

## Current progress

- [x] Eleventy 3 + RSS plugin
- [x] EN/PT routes for Home, Work, Writing, About
- [x] Three Case Studies (CUF Prepara sanitized, Dose Segura, Portfolio quality system)
- [x] Experiments list with Vestaboard highlighted
- [x] Apple-clean light surfaces, Geist typography, and Teenage Engineering-inspired orange accents
- [x] Header/footer, language alternates, sitemap, robots, empty RSS
- [x] Writing briefs kept as non-public drafts
- [x] Build-time front matter, draft exclusion, and translation-key validation
- [x] Instrument-style hero, section indexes, featured Case Study panel, ink footer, and contact band
- [x] Playwright coverage for navigation, locale alternates, WCAG A/AA smoke checks, and internal links
- [x] GH Pages deploy switch from legacy root to `_site`
- [ ] Finish Writing drafts and publish after review
- [ ] Add redesign unit coverage where browser behavior benefits from a smaller seam
- [ ] Final reduced-motion / contrast audit before cutover

## Rules while implementing

- Do not invent outcomes, metrics, or employer details.
- Do not hard-code a test count as a Proof Signal.
- Prefer HtmlBase-managed root-relative URLs in HTML templates (avoid `| url` there; keep `| url` for XML/absolute meta construction).
- Keep the legacy site and its tests green until cutover.
