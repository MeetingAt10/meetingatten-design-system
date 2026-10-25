# Contributing

The repo owns everything: tokens, materials, components and docs. Change the source in this repo, check it, and document it in the same pull request.

## Changing tokens

| Step | Do |
|---|---|
| 1 | Edit `tokens/`. Foundations live in `tokens/foundations/*.json`, the light and dark mapping in `tokens/themes/accs-*.json` |
| 2 | Look in `tokens/treatments.json` first: materials (sheet, block, hatch, highlighter, plate, scrim), shadows by theme, radius by material and motion distances are treatments, not new tokens |
| 3 | New text and background pairs go in `tokens/contrast-pairs.json` |
| 4 | Run `npm run check`; commit the regenerated `dist/`, `assets/icons/sprite.svg`, `src/react/icon/icons.ts` and `src/react/lib/motion.ts` |

The palette (54 primitives and the semantic mapping) and the three font families are pinned by the user. Do not change them as part of other work.

Treatment values follow a fixed grammar (token reference, `transparent`, `none`, a px length, or the `tint`, `highlight` and `hatch` forms; see [treatments](foundations/treatments.md)). `check:tokens` rejects anything else.

## Changing or adding a component

| Step | Do |
|---|---|
| 1 | CSS: `src/css/components/<category>/<name>.css`, starting with a comment that describes the component and its plain-CSS markup. Add new files to `LAYERS` in `scripts/build.mjs`. Match native, React Aria (`[data-hovered]`, `[data-pressed]`, `[data-focus-visible]`, `[data-disabled]`) and forced (`.is-hover`) states together |
| 2 | Forced colors: add the component to `src/css/base/forced-colors.css` if any state lives only in a fill or background image |
| 3 | React: `src/react/<category>/<Name>.tsx` on React Aria, exported from `src/react/index.ts`, with JSDoc on every prop; tests with axe in the category test file |
| 4 | Spec: `components/<category>/<name>.md` with frontmatter (`title`, `description`, `react`, and `demo` when the demo id differs), then When to use, Anatomy, States, Behavior and accessibility, React, Plain CSS |
| 5 | Demo: `site/app/_site/demos.tsx`, showing every state; the site renders it on a light and a dark sheet |
| 6 | Attach light and dark screenshots and complete the [accessibility checklist](docs/accessibility-checklist.md) in the PR |

## Craft rules

| Rule | Detail |
|---|---|
| No eyebrows | No kicker or eyebrow label above a heading |
| No side stripes | No colored border-left or border-right over 1px on cards or alerts |
| No icon-card columns | Use [Agenda](components/layout/agenda.md) rows for features and steps |
| Mono is not a costume | JetBrains Mono only for times, codes, references, keys and code |
| One elevation | A rule border or a shadow, never both |
| Cards | Only for collection items and floating panels; never nested |
| Line forms with words | Solid, dashed, hatched and struck states always carry a word or icon |
| No emoji, no Unicode glyph icons | Use the curated Phosphor vocabulary |
| Honest copy | No promises of anonymity, security, response time or finality; label synthetic content `DEMO` or "sample" |
| Logo | The Meeting At 10 logo is the system's logo: use the `Logo` component or the `meeting-at-10*.svg` files as exported; never redraw or stretch it, or recolor it beyond the light, dark and auto versions. The proposed ACCS files (`logo-*.svg`) are used as exported, never redrawn or recolored; they are proposed, not approved. The door plate is the ACCS wordmark |

## CI gate

`.github/workflows/ci.yml` runs on every pull request and on pushes to `main`:

| Step | Must pass |
|---|---|
| `npm ci` | Install |
| `npm run check` | Build, contrast (`check-contrast.mjs`) and token rules (`check-tokens.mjs`) |
| `npm run typecheck` | Types, tests included |
| `npm test` | Vitest, Testing Library and axe |
| `git diff --exit-code -- dist src/react/icon/icons.ts` | The committed build output is up to date |
| Site build | `npm --prefix site ci && npm --prefix site run build` |

No raw color: `check:tokens` fails on hex, `rgb()`, `hsl()`, `color-mix()` and other color functions, named colors and primitive `--ds-*` color variables anywhere in `src/` and `site/`. System colors (`CanvasText`, `Highlight`) belong only in `src/css/base/forced-colors.css`.

## Commits and releases

| Item | Rule |
|---|---|
| Reviews | At least one approval; token or component changes also need the design owner |
| Commits | Conventional commits: `feat(tokens):`, `feat(components):`, `fix(css):`, `docs:`, `build:` |
| Changelog | Every user-facing change gets a line under the next version in `CHANGELOG.md`; breaking changes are marked **BREAKING** |
| Releases | The maintainer bumps `package.json`, finalizes the changelog and tags `vX.Y.Z`. A `v*` tag deploys the showcase site. Tag, push and deploy only with the owner's approval |
