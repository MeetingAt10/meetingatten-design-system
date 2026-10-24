# @meetingat10/design-system

One design system for three surfaces. **ACCS tokens, themes, type, components and copy come from the team's Figma** (file `HhZBfgDKt4aMudftxOP4Jg`, page "ACCS Design System - 2026"); the repo mirrors it and proves parity on every check ([docs/figma-parity.md](docs/figma-parity.md)). Everything in Figma is marked PROPOSED, not approved.

| Surface | Repo (stack) | `data-density` |
|---|---|---|
| ACCS landing | `accs-landing` (Next.js, Tailwind 4) | `comfortable` (default) |
| ACCS admin | `accs-system/frontend` (Vite, React, TanStack Router) | `compact` |
| Meeting At 10 team site | `meeting@10-website` (Next.js, Tailwind 4) | `comfortable` (default) |

Every surface uses the same two themes from the Figma Semantic modes: `data-theme="light"` or `"dark"`, and no attribute follows the OS setting ([themes/light-dark.md](themes/light-dark.md)). `data-density` only sets body text and section rhythm ([themes/density.md](themes/density.md)).

## Layout

| Path | Contents |
|---|---|
| `tokens/` | W3C DTCG JSON. `foundations/` (Figma primitives, dimensions, type, plus grid, size, elevation, and clearly marked not-in-Figma motion, z-index), `themes/` (semantic, Figma names), `contrast-pairs.json` |
| `figma/` | Source export: `variables-styles.json`, `frames-components.json`, `slices/*.png` (frame images, 1400px wide) |
| `scripts/` | `import-figma.mjs`, `build.mjs`, `check-contrast.mjs`, `parity.mjs` (plain Node ESM, no dependencies) |
| `dist/` | Committed output: `tokens.css`, `tailwind.css`, `components.css`, `tokens.json`, `tokens.js` |
| `src/components.css` | Token-only reference components mirroring the 48 Figma components |
| `components/` | Specs per Figma component (variants, sizes, tokens per state, copy, a11y, markup) |
| `foundations/`, `themes/`, `docs/` | Guidance synced with the Figma frame text; `docs/figma-parity.md` maps every Figma token, style and component |
| `assets/` | `logo/*.svg` (official Figma exports), `icons/sprite.svg` + `icons/figma/*.svg` (Figma exports) |
| `templates/`, `preview/` | Static pages (open directly in a browser): landing, admin shell, report detail, auth; full catalog with theme switcher |

## Commands

```bash
npm run build           # tokens/ + src/ -> dist/, inlines the icon sprite into templates/preview
npm run check:contrast  # WCAG AA gate over declared pairs per theme (exit 1 on a new failure)
npm run check:parity    # every Figma variable, text style, dimension and component compared with the repo
npm run import:figma    # regenerate Figma-sourced tokens from figma/variables-styles.json
npm run check           # build + contrast + parity
node scripts/parity.mjs --write   # refresh docs/figma-parity.md
```

## How the Figma export was made

Run in the browser through the Figma Plugin API (Playwright-driven session on file `HhZBfgDKt4aMudftxOP4Jg`, page "ACCS Design System - 2026"):

1. `figma.variables.getLocalVariableCollectionsAsync()` and `getVariableByIdAsync()` for every collection (modes, values, aliases written as `->name`); `figma.getLocalTextStylesAsync()` for the text styles. Output: `figma/variables-styles.json` (a JSON string; parse twice). Only the "ACCS 2026 / *" collections are used; the old "ACCS / ... v0.1" ones are ignored.
2. Walk the eight frames and every component set/component: names, variant names, sizes, radius, fills, padding, gap, and each frame's text. Output: `figma/frames-components.json`.
3. `exportAsync` of each frame at 1x, cut into 1400px-wide slices (`figma/slices/*.png`), and SVG export of the three logos (`assets/logo/`). Full frame PNGs are intentionally not committed.

To refresh: re-export, replace the files in `figma/`, run `npm run import:figma && npm run check`, review the diff.

## Install and version pinning

Private repo, consumed from git. **Pin to a tag**, never a branch.

```bash
npm i -D github:MeetingAt10/meetingatten-design-system#v0.2.0
```

`dist/` is committed, so consumers need no build step.

| Bump | When | Consumer action |
|---|---|---|
| Patch `0.2.x` | Docs, bug fixes, Figma re-sync with no token change | Safe |
| Minor `0.x.0` | New tokens/components, or **BREAKING** renames while `< 1.0` | Read CHANGELOG |
| Major `1.0+` | Breaking changes after 1.0 | Migration notes |

## Consume: Tailwind 4 (Next.js: accs-landing and meeting@10-website)

```css
@import "tailwindcss";
@import "@meetingat10/design-system/dist/tailwind.css";   /* also imports tokens.css */
@import "@meetingat10/design-system/dist/components.css"; /* optional ds-* classes */
```
```tsx
<html lang="en">   {/* follows the OS; add data-theme="light" or "dark" to force one */}
```

Fonts via `next/font` (tokens read these variables first, then the font names):

```tsx
const display = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-plus-jakarta-sans", weight: ["600","700","800"] });
const body = Inter({ subsets: ["latin"], variable: "--font-inter" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono" });
```

Utilities use the Figma names: `bg-canvas bg-surface text-text-primary border-border-default bg-action-default bg-action text-on-action bg-info-bg text-secondary-fg bg-accent-bg rounded-control rounded-card shadow-overlay type-h1 text-body font-display tablet:... desktop:... max-w-content`. Legacy aliases kept: `ink`, `ink-secondary`, `line`. Breakpoints are `tablet` 600, `desktop` 1024, `wide` 1440 (Tailwind defaults removed). Spacing keeps Tailwind's multiplier (`p-4` = Figma `space/16`); use `var(--ds-space-16)` for the Figma name. For a strict palette add `@theme { --color-*: initial; }` before the import.

## Consume: Vite + React (admin)

```ts
import "@meetingat10/design-system/dist/tokens.css";
import "@meetingat10/design-system/dist/components.css"; // optional
```
Set `<html data-density="compact">` (plus `data-theme` only for an explicit user choice, see [themes/light-dark.md](themes/light-dark.md)); add the Google Fonts link (Inter, Plus Jakarta Sans, JetBrains Mono). Use `var(--ds-surface)`, `var(--ds-action-default)`, `class="type-h1"` equivalents `.ds-type-h1`.

## Migrating from the per-repo `--accs-*` blocks

Delete the local `:root` and `@theme inline` blocks and import the package. The `--accs-*` variables no longer exist; use the `--ds-*` names (`--accs-canvas` -> `--ds-canvas`, `--accs-action` -> `--ds-action-default`, `--accs-secondary-bg` -> `--ds-secondary-bg`, ...). Tailwind names `canvas`, `surface`, `action`, `action-hover`, `on-action`, `focus`, `info-bg`, `secondary-bg/fg`, `accent-bg/fg` resolve unchanged.

## Rules

1. Product code uses semantic tokens, never primitives or raw hex.
2. ACCS values change only by re-importing from Figma. Do not edit `tokens/foundations/color.json`, `type.json`, `spacing.json`, `radius.json` or `tokens/themes/accs-*.json` by hand.
3. Anything without a Figma source is marked "NOT IN FIGMA" in its file and listed in `docs/figma-parity.md`.
4. See [CONTRIBUTING.md](CONTRIBUTING.md).
