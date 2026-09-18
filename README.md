# Portfolio — Pedro Robalo

Software Engineer focused on Quality Engineering & Test Automation.
PT: Engenheiro de Software focado em Quality Engineering e Automação de Testes.

Live: [my-creations.github.io/portfolio](https://my-creations.github.io/portfolio/)

## What this is

Multi-page, bilingual static publication built with Eleventy 3, not the legacy
single-page site. Curated Work (case studies) + Writing, with evidence-backed
quality signals.

- EN at `/`, PT at `/pt/`
- Routes: `/work/` + `/pt/trabalho/`, `/writing/` + `/pt/escrita/`,
  `/about/` + `/pt/sobre/`, `/privacy/` + `/pt/privacidade/`,
  `/terms/` + `/pt/termos/`
- 3 case studies: CUF Prepara (sanitized), Dose Segura, Portfolio quality system
- Experiments section, Vestaboard featured
- Design tokens: Geist + accent orange `#ff5a00` in `src/css/main.css`
- Static by default, accessible by construction, no invented content

Canonical spec: `docs/redesign.md`, `docs/redesign-phase-0.md`,
`docs/redesign-implementation.md`, `docs/content-model.md`,
`docs/deployment-plan.md`, `CONTEXT.md`.

## Stack

- Eleventy 3 + Nunjucks (`src/` → `_site/`)
- Bun 1.3.10 (`bun.lock`, `packageManager`)
- Vitest (unit) + Playwright (legacy + redesign E2E, Chromium/Firefox/WebKit)
- oxfmt for format, `scripts/validate-content.js` for front-matter gates
- GitHub Pages from `_site/` (Stage 1). Raspberry Pi Stage 2 blocked on domain
  purchase — see `docs/deployment-plan.md`.

## Commands

```bash
bun install
bun run dev             # Eleventy --serve (respects ELEVENTY_PATH_PREFIX)
bun run build           # validate:content + Eleventy to _site/
bun run validate:content
bun run test            # vitest run (72 unit)
bun run test:redesign   # Playwright redesign suite (Chromium/Firefox/WebKit)
bun run format          # oxfmt write
bun run format:check    # oxfmt check
```

Local preview with Pages prefix:

- Home: `http://localhost:8080/portfolio/`
- Work: `http://localhost:8080/portfolio/work/`
- PT home: `http://localhost:8080/portfolio/pt/`

Override: `ELEVENTY_PATH_PREFIX=/ bun run dev`.

## Layout

| Path                                         | Role                                                                        |
| -------------------------------------------- | --------------------------------------------------------------------------- |
| `src/`                                       | Eleventy input                                                              |
| `src/_data/`                                 | site, i18n, projects, experiments, about                                    |
| `src/_includes/`                             | layouts + partials                                                          |
| `src/css/main.css`                           | tokens + editorial styles                                                   |
| `src/js/main.js`                             | mobile nav only                                                             |
| `src/work/*.md`                              | EN case studies                                                             |
| `src/pt/trabalho/*.md`                       | PT case studies                                                             |
| `src/writing/*.md`, `src/pt/escrita/*.md`    | Writing (drafts: `draft: true`, `permalink: false`)                         |
| `lib/locale-routes.js`                       | locale routing single source of truth                                       |
| `tests/unit/`                                | vitest (content-validation, locale-routes, main, translations, swiper-init) |
| `tests/redesign/`                            | generated-site navigation, localization, a11y, links, responsive            |
| `tests/e2e/`                                 | legacy single-page suite                                                    |
| `_site/`                                     | generated output (gitignored)                                               |
| `index.html`, `style.css`, `assets/` at root | legacy single-page site, superseded                                         |

## Quality gates

- `validate:content`: 10 content documents, front-matter + translationKey rules
- Unit: 72 passing (`locale-routes`, `content-validation`, `main`,
  `translations`, `swiper-init`)
- Redesign E2E: navigation, localization, browser-locale, links, responsive
  (360/800/1280 × 7 EN/PT routes), axe a11y 14/14 on landing/work/case-study/
  writing/about/privacy/terms
- Lighthouse (prod build post-#9): 100/100/100/100 on `/`, `/pt/`,
  `/work/cuf-prepara/`
- CI: format + lint + unit + E2E + build on every push; Pages deploy on `main`

## Writing status

2 EN + 2 PT drafts (`cross-browser-e2e`, `quality-as-product-feature`), both
`draft: true` / `permalink: false`. Excluded from collections, feeds, sitemaps
until reviewed. Do not publish counts, browser-matrix details, or first-person
outcomes without re-verifying against the current suite.

## Deployment

Stage 1 (live): GitHub Pages from `_site/`.
Stage 2 (blocked): private Compose stack on UmbrelOS/Portainer + Caddy +
Cloudflare Tunnel, Pages as fallback. Preconditions in
`docs/deployment-plan.md`.
