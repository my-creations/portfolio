# Analytics (v1)

**Decision:** no site analytics for this portfolio.

- `site.analytics` is `false` in `src/_data/site.js`.
- No Google Analytics, Plausible, advertising pixels, or other third-party tracking scripts in the Eleventy layout.
- Documented for visitors on `/privacy/` (EN) and `/pt/privacidade/` (PT).
- Preferred future option if aggregate traffic metrics are needed later: **Plausible** (cookieless), only after an explicit product decision and a separate PR.

Hosting note: GitHub Pages / GitHub may still process infrastructure logs outside this repository.

Enforcement: `bun run check:no-tracking` runs in CI on every PR. It requires
`site.analytics === false` and fails on known tracking snippets (Google
Tag Manager / GA, Plausible script, Umami, Matomo, Hotjar, FullStory,
Mixpanel, Meta Pixel, DoubleClick). Prose mentions such as this page are
ignored — only tags and snippet calls match. Flipping analytics on
requires the separate Plausible PR above plus an update to that check.
