# Portfolio Redesign — Phase 0 Content

> **Status:** Content source retained. The one-page implementation plan is superseded by the multi-page redesign.

Source of truth for verified positioning, case studies, experiments, Quality Engineering approach, and proof metrics.
Mirrored on the Notion Portfolio page. Reuse this content without inventing new factual claims; the current information architecture is defined in [`redesign.md`](./redesign.md).

Last updated: 2026-08-06

---

## 1. Positioning

### One-liner

**EN:** Software Engineer focused on Quality Engineering & Test Automation.
**PT:** Engenheiro de Software focado em Quality Engineering e Automação de Testes.

### Supporting line

**EN:** I design reliable test systems and ship healthcare-aware products with the same care I bring to production quality.
**PT:** Desenho sistemas de teste fiáveis e entrego produtos com sensibilidade clínica com o mesmo rigor que aplico à qualidade em produção.

### Differentiation

- Not a generic full-stack portfolio.
- Lead with QE specialization; healthcare background is the credibility edge for safety-critical thinking.
- Depth over volume: few case studies, clear outcomes, measurable quality signals.

---

## 2. Hero copy (EN / PT)

| Key          | EN                                                                                                              | PT                                                                                                                  |
| ------------ | --------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| greeting     | Hello, I'm                                                                                                      | Olá, eu sou                                                                                                         |
| name         | Pedro Robalo                                                                                                    | Pedro Robalo                                                                                                        |
| title        | Software Engineer · Quality Engineering & Test Automation                                                       | Engenheiro de Software · Quality Engineering e Automação de Testes                                                  |
| tagline      | I turn risk into reliable software — from test strategy and automation to CI feedback that protects production. | Transformo risco em software fiável — da estratégia de testes e automação ao feedback de CI que protege a produção. |
| ctaPrimary   | View case studies                                                                                               | Ver case studies                                                                                                    |
| ctaSecondary | Download CV                                                                                                     | Descarregar CV                                                                                                      |
| ctaTertiary  | Contact                                                                                                         | Contactos                                                                                                           |

### Nav labels (proposed)

| Key        | EN         | PT          |
| ---------- | ---------- | ----------- |
| work       | Work       | Trabalho    |
| approach   | Approach   | Abordagem   |
| experience | Experience | Experiência |
| contact    | Contact    | Contactos   |

---

## 3. Selected case studies (3–4)

Priority order for the redesign. Each card on the site should surface: problem → approach → stack → outcome.

### Case study 1 — CUF Prepara (primary)

| Field          | EN                                                                                                                                                                                                        | PT                                                                                                                                                                                                                             |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Title          | CUF Prepara                                                                                                                                                                                               | CUF Prepara                                                                                                                                                                                                                    |
| Subtitle       | Personalized colonoscopy prep for Hospital CUF Descobertas                                                                                                                                                | Preparação personalizada para colonoscopia no Hospital CUF Descobertas                                                                                                                                                         |
| Problem        | Patients need a clear, timed prep plan. Generic PDF instructions create confusion, missed steps, and avoidable exam delays.                                                                               | Os pacientes precisam de um plano de preparação claro e temporizado. Instruções genéricas em PDF geram confusão, passos em falta e atrasos evitáveis.                                                                          |
| Approach       | Built a bilingual (PT/EN) client-side wizard that personalizes diet, medication, and exam-day guidance from clinical inputs, with local persistence, deep links, and calendar export (`.ics` + `VALARM`). | Construí um wizard client-side bilingue (PT/EN) que personaliza dieta, medicação e orientações do dia do exame a partir de inputs clínicos, com persistência local, deep links e exportação de calendário (`.ics` + `VALARM`). |
| Stack          | Vanilla JS (ES modules), Vitest, Playwright, ESLint, Prettier, Husky                                                                                                                                      | Vanilla JS (ES modules), Vitest, Playwright, ESLint, Prettier, Husky                                                                                                                                                           |
| Outcome        | A responsive prep experience with testable core logic (≥80% coverage target), E2E coverage, and CLS-conscious UI — quality treated as a product feature, not an afterthought.                             | Experiência de preparação responsiva com lógica principal testável (meta ≥80% de cobertura), cobertura E2E e UI consciente de CLS — qualidade como funcionalidade do produto, não como pensamento posterior.                   |
| Links          | GitHub: `my-creations/cuf-prepara` (private) · Demo: TBD if public                                                                                                                                        | same                                                                                                                                                                                                                           |
| Why it belongs | Healthcare domain + product thinking + serious automated quality bar.                                                                                                                                     |                                                                                                                                                                                                                                |

### Case study 2 — Dose Segura (primary)

| Field          | EN                                                                                                                                                                     | PT                                                                                                                                                                                 |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Title          | Dose Segura                                                                                                                                                            | Dose Segura                                                                                                                                                                        |
| Subtitle       | Offline-first injectable-med reference for Portuguese clinicians                                                                                                       | Referência offline-first de medicamentos injetáveis para profissionais de saúde em Portugal                                                                                        |
| Problem        | Nurses need fast, trustworthy reference material at the point of care — not a prescribing calculator, and not something that dies without network.                     | Os enfermeiros precisam de referência rápida e fiável no ponto de cuidado — não uma calculadora de prescrição, nem algo que falhe sem rede.                                        |
| Approach       | Shipped an offline-first reference app with a clear clinical boundary (guidance, not prescription), structured domain modules, and a PWA/web surface alongside native. | Entreguei uma app de referência offline-first com fronteira clínica clara (orientação, não prescrição), módulos de domínio estruturados e superfície PWA/web além do nativo.       |
| Stack          | Expo / React Native, Expo Router, TypeScript, AsyncStorage, PWA web; Jest + Playwright                                                                                 | Expo / React Native, Expo Router, TypeScript, AsyncStorage, PWA web; Jest + Playwright                                                                                             |
| Outcome        | A mobile-first clinical utility shaped by real nursing workflow constraints, with typed domain modules and automated checks for lint, types, unit, and web E2E.        | Utilitário clínico mobile-first moldado por constrangimentos reais de enfermagem, com módulos de domínio tipados e verificações automatizadas de lint, tipos, unitários e E2E web. |
| Links          | GitHub: https://github.com/my-creations/dose-segura · Demo: https://my-creations.github.io/dose-segura/                                                                | same                                                                                                                                                                               |
| Why it belongs | Domain expertise + safety boundaries + cross-platform delivery.                                                                                                        |                                                                                                                                                                                    |

### Case study 3 — This portfolio (quality system as product)

| Field          | EN                                                                                                                                                                                                                  | PT                                                                                                                                                                                                                      |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Title          | Portfolio quality system                                                                                                                                                                                            | Sistema de qualidade do portfolio                                                                                                                                                                                       |
| Subtitle       | A personal site treated like production software                                                                                                                                                                    | Um site pessoal tratado como software de produção                                                                                                                                                                       |
| Problem        | Portfolios often showcase projects but hide how the author works. Recruiters cannot see testing discipline, CI, or accessibility rigor.                                                                             | Os portfolios costumam mostrar projetos mas escondem a forma de trabalhar. Os recrutadores não veem disciplina de testes, CI ou rigor de acessibilidade.                                                                |
| Approach       | Built the site in vanilla HTML/CSS/JS with bilingual content, semantic markup, `data-test` hooks, Vitest unit tests, Playwright E2E across Chromium/Firefox/WebKit, and GitHub Actions CI. Drove Lighthouse to 100. | Construí o site em HTML/CSS/JS vanilla com conteúdo bilingue, markup semântico, hooks `data-test`, testes unitários Vitest, E2E Playwright em Chromium/Firefox/WebKit e CI no GitHub Actions. Levei o Lighthouse a 100. |
| Stack          | HTML, CSS, Vanilla JS, Vitest, Playwright, Prettier, GitHub Actions, PWA manifest                                                                                                                                   | same                                                                                                                                                                                                                    |
| Outcome        | **~147 automated tests** (48 unit + 99 E2E across 3 browsers), cross-browser CI, skip links and ARIA patterns, Lighthouse 100 — the portfolio itself is evidence of QE practice.                                    | **~147 testes automatizados** (48 unitários + 99 E2E em 3 browsers), CI cross-browser, skip links e padrões ARIA, Lighthouse 100 — o próprio portfolio é evidência da prática de QE.                                    |
| Links          | GitHub: https://github.com/my-creations/portfolio · Demo: https://my-creations.github.io/portfolio/                                                                                                                 | same                                                                                                                                                                                                                    |
| Why it belongs | Makes the specialization visible without requiring employer NDAs.                                                                                                                                                   |                                                                                                                                                                                                                         |

### Case study 4 (optional) — Vestaboard Clock

Use only if a fourth slot is needed; otherwise keep under Experiments.

| Field    | EN                                                                                                    | PT                                                                                                |
| -------- | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| Title    | Vestaboard Clock                                                                                      | Vestaboard Clock                                                                                  |
| Subtitle | Split-flap inspired clock with Lisbon time                                                            | Relógio inspirado em split-flap com hora de Lisboa                                                |
| Problem  | Wanted a focused UI craft exercise: constrained grid, motion, and sound without framework weight.     | Quis um exercício focado de craft de UI: grelha restrita, movimento e som sem peso de frameworks. |
| Approach | 6×22 character grid, Lisbon timezone, mechanical split-flap style feedback.                           | Grelha 6×22, fuso de Lisboa, feedback mecânico estilo split-flap.                                 |
| Stack    | Vanilla web                                                                                           | Vanilla web                                                                                       |
| Outcome  | A polished micro-product that demonstrates attention to interaction detail.                           | Micro-produto polido que demonstra atenção ao detalhe de interação.                               |
| Links    | GitHub: https://github.com/my-creations/vestaboard · Demo: https://my-creations.github.io/vestaboard/ | same                                                                                              |

---

## 4. Experiments & side projects (compact list)

Everything that leaves the main case-study stage. Show as a compact list (name + one line + links), not a carousel.

| Key               | Name                | One-liner EN                                      | One-liner PT                                                | GitHub                           | Demo                |
| ----------------- | ------------------- | ------------------------------------------------- | ----------------------------------------------------------- | -------------------------------- | ------------------- |
| projectVestaboard | Vestaboard Clock    | Minimal 6×22 split-flap style clock (Lisbon time) | Relógio minimalista estilo split-flap 6×22 (hora de Lisboa) | my-creations/vestaboard          | vestaboard          |
| projectTwo        | Nike Store          | Nike e-commerce UI exercise                       | Exercício de UI e-commerce Nike                             | my-creations/nike                | nike                |
| projectThree      | Music Player        | Vanilla JS music player                           | Leitor de música em JS vanilla                              | my-creations/music-player        | music-player        |
| projectTwelve     | NASA APOD           | Astronomy Picture of the Day explorer             | Explorador da Imagem Astronómica do Dia da NASA             | my-creations/nasa-apod           | nasa-apod           |
| projectNine       | Book Keeper         | Bookmark manager for favorite sites               | Gestor de marcadores para sites favoritos                   | my-creations/book-keeper         | book-keeper         |
| projectTen        | Form Validator      | Client-side validation with live feedback         | Validação client-side com feedback em tempo real            | my-creations/form-validator      | form-validator      |
| projectEight      | Custom Countdown    | Event countdown with custom dates                 | Contagem decrescente com datas personalizadas               | my-creations/custom-countdown    | custom-countdown    |
| projectSeven      | Infinite Scroll     | Dynamic content loading pattern                   | Padrão de carregamento dinâmico infinito                    | my-creations/infinite-scroll     | infinite-scroll     |
| projectSix        | Quote Generator     | API-backed inspirational quotes                   | Citações inspiradoras via API                               | my-creations/quote-generator     | quote-generator     |
| projectFourteen   | Drag and Drop       | HTML5 drag events playground                      | Playground de eventos HTML5 drag-and-drop                   | my-creations/drag-and-drop       | drag-and-drop       |
| projectThirteen   | Math Sprint Game    | Timed arithmetic quiz                             | Quiz aritmético cronometrado                                | my-creations/math-sprint-game    | math-sprint-game    |
| projectEleven     | Spock Rock Game     | Rock-Paper-Scissors-Lizard-Spock                  | Pedra-Papel-Tesoura-Lagarto-Spock                           | my-creations/spock-rock-game     | spock-rock-game     |
| projectFour       | Animated Navigation | Animated nav menu study                           | Estudo de menu de navegação animado                         | my-creations/animated-navigation | animated-navigation |
| projectFive       | Animated Template   | Animation and transition sandbox                  | Sandbox de animações e transições                           | my-creations/animated-template   | animated-template   |
| projectOne        | Joke Teller         | Joke-telling robot demo                           | Demo de robô que conta piadas                               | my-creations/joke-teller         | joke-teller         |
| projectFifteen    | Calculator          | Basic operations calculator                       | Calculadora de operações básicas                            | my-creations/calculator          | calculator          |

Demo base URL: `https://my-creations.github.io/<repo>/`

---

## 5. Quality Engineering approach (section draft)

Section title: **How I approach quality** / **Como abordo a qualidade**

Five-step narrative (short cards or a horizontal flow):

1. **Strategy** / **Estratégia**  
   EN: Start from risk — what can break, who gets hurt, what must never silently fail.  
   PT: Começo pelo risco — o que pode falhar, quem é afetado, o que nunca pode falhar em silêncio.

2. **Automation** / **Automação**  
   EN: Encode the critical paths. Prefer deterministic checks close to the code (unit) and user journeys that matter (E2E).  
   PT: Codifico os caminhos críticos. Prefiro verificações determinísticas perto do código (unitários) e jornadas de utilizador que importam (E2E).

3. **CI feedback** / **Feedback de CI**  
   EN: Every push should answer “is it safe to ship?” — lint, types, unit, and cross-browser E2E in the pipeline.  
   PT: Cada push deve responder “é seguro publicar?” — lint, tipos, unitários e E2E cross-browser no pipeline.

4. **Shift-left signals** / **Sinais shift-left**  
   EN: Catch defects before review: coverage gates, a11y checks, formatting hooks, and testable design (`data-test`, stable selectors).  
   PT: Apanho defeitos antes da review: gates de cobertura, checks de a11y, hooks de formatação e design testável (`data-test`, seletores estáveis).

5. **Production quality** / **Qualidade em produção**  
   EN: Quality does not end at green CI — observability mindset, graceful degradation, and honest UX when things fail.  
   PT: A qualidade não acaba no CI verde — mentalidade de observabilidade, degradação graciosa e UX honesta quando algo falha.

Closing line:

**EN:** Healthcare taught me that small process failures have human cost. I bring that standard to software.
**PT:** A saúde ensinou-me que falhas pequenas de processo têm custo humano. Trago esse padrão para o software.

---

## 6. Proof metrics (proof strip)

Surface these on the hero-adjacent proof strip. Keep numbers honest and easy to re-verify.

| Signal              | Value (as of Phase 0)                                          | Source                                             |
| ------------------- | -------------------------------------------------------------- | -------------------------------------------------- |
| Automated tests     | ~147 (48 unit + 99 E2E)                                        | `tests/unit` + `tests/e2e` × 3 Playwright projects |
| Browsers under test | Chromium, Firefox, WebKit                                      | `playwright.config.js`                             |
| Lighthouse          | 100                                                            | Commit `e38ea2e` — Improve Lighthouse score to 100 |
| Languages           | EN + PT                                                        | `scripts/translations.js`                          |
| Core QE tools       | Playwright, Cypress, Detox, Selenium, API testing, CI/CD, a11y | Experience / skills content                        |
| Domain edge         | Ex-Registered Nurse + Test Automation Engineer (5y+)           | About / experience dates                           |

### Proof strip labels

**EN:** 147 automated tests · 3 browsers · Lighthouse 100 · EN/PT · CI on every push  
**PT:** 147 testes automatizados · 3 browsers · Lighthouse 100 · EN/PT · CI em cada push

### Tool chips (proof strip secondary row)

Playwright · Cypress · Detox · Selenium · TypeScript · API testing · GitHub Actions · Accessibility

---

## 7. About blurb (rewritten for QE positioning)

**EN:**  
I am a Software Engineer specializing in Quality Engineering and test automation, with a prior career as a Registered Nurse. That path trained me for precision, calm under pressure, and systems where failure has real consequences. Today I design automation frameworks, strengthen CI feedback loops, and build products — especially in healthcare-adjacent contexts — where reliability is part of the UX.

**PT:**  
Sou Engenheiro de Software especializado em Quality Engineering e automação de testes, com percurso anterior como Enfermeiro. Esse caminho treinou-me para a precisão, a calma sob pressão e sistemas em que a falha tem consequências reais. Hoje desenho frameworks de automação, reforço loops de feedback de CI e construo produtos — sobretudo em contextos próximos da saúde — em que a fiabilidade faz parte da UX.

---

## 8. Implementation handoff (Phase 1+)

Do **not** restyle yet. Next implementation steps:

1. Restructure `index.html` sections to: Hero → Proof strip → Case studies → QE approach → Experience/toolkit → Experiments → Contact.
2. Replace Swiper carousel usage for featured work with case-study cards fed by this doc.
3. Add translation keys for all new copy in `scripts/translations.js` (EN + PT).
4. Keep existing tests green until DOM migration; then rewrite selectors in Phase 3.

### Open questions (need human input)

- [ ] Is the portfolio itself an acceptable 3rd case study, or prefer Vestaboard / another work project?
- [ ] Any employer case studies that can be sanitized and added later?
- [ ] Public demo URL for CUF Prepara (repo is private)?
- [ ] Accent color preference: electric blue vs acid green?
- [ ] Typeface preference: Inter vs Geist?
