# Contributing

Figma is the source of truth for ACCS. This repo mirrors it; it does not extend it silently.

## Changing ACCS tokens, styles or components

| Step | Do |
|---|---|
| 1 | Change it in Figma first (variables, text styles, components) and record the owner, date and rationale there |
| 2 | Re-export into `figma/` (see README "How the Figma export was made") |
| 3 | `npm run import:figma && node scripts/parity.mjs --write && npm run check`; commit regenerated `tokens/`, `dist/`, `docs/figma-parity.md` with the export |
| 4 | New or changed component: update or add `src/css/components/<category>/<name>.css` (add new files to `LAYERS` in `scripts/build.mjs`; nest only contiguous rules of one selector, match native, React Aria `[data-*]` and forced `.is-*` states together), its spec in `components/<category>/`, and `preview/index.html` (all states, light and dark) |
| 5 | Complete the [accessibility checklist](docs/accessibility-checklist.md) in the PR |

If a Figma value fails contrast, do not change it: add it to `tokens/figma-known-failures.json` with a note and raise it with the design owner.

## Not-in-Figma additions (motion, z-index)

Mark `NOT IN FIGMA` in the token file description and in `docs/figma-parity.md`; keep it minimal; add contrast pairs for new text/background tokens in `tokens/contrast-pairs.json`.

## Look changes (treatments)

The look (shadows, washes, radius mapping, motion distance) is repo-owned and lives in `tokens/treatments.json` ([foundations/treatments.md](foundations/treatments.md)). Every value is a locked Figma token, `transparent`, `none`, a px length for geometry, or the `wash` / `tint` / `highlight` forms; `check:tokens` rejects anything else. A new wash is contrast-checked automatically against `onWashes` in `tokens/contrast-pairs.json`.

## Review rules

| Rule | Detail |
|---|---|
| Reviewers | At least 1 approval; token or component changes also need the design owner |
| CI gate | `npm run check` passes and rebuilding `dist/` yields no diff |
| No raw color | `npm run check:tokens` passes: no hex, `rgb()`/`hsl()`/`color-mix()`, named colors or primitive `--ds-*` color variables in `src/` or `site/` |
| Honest copy | No promises of anonymity, security, response time or finality; label synthetic content `DEMO` |
| Logo | Use `assets/logo/` as exported; no redraws or recolors; it is proposed, not approved |
| Commits | Conventional commits: `feat(tokens):`, `fix(components):`, `docs:`, `build:` |
| Releases | Maintainer bumps `package.json`, edits CHANGELOG, tags `vX.Y.Z` |
