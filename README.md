# @meetingat10/design-system

One design system for three surfaces. Replaces the duplicated `--accs-*` blocks in each repo.

| Surface | Repo (stack) | Theme(s) |
|---|---|---|
| ACCS landing | `accs-landing` (Next.js, Tailwind 4) | `accs-landing` |
| ACCS admin | `accs-system/frontend` (Vite, React, TanStack Router) | `accs-admin`, `accs-admin-dark` |
| Meeting At 10 site | `meeting@10-website` (Next.js, Tailwind 4) | `meetingatten`, `meetingatten-dark` |

Brand anchors (fixed from Figma): blue `#032E87`, navy ink `#172033`, white. Teal is the only ACCS accent; sunrise orange is the only Meeting At 10 accent. Purple is removed. The logo is pending team approval ([docs/logo-and-assets.md](docs/logo-and-assets.md)).

## Layout

| Path | Contents |
|---|---|
| `tokens/` | W3C DTCG JSON source: `foundations/*.json` (primitives), `themes/*.json` (semantic per theme), `contrast-pairs.json` |
| `scripts/` | `build.mjs` (generates `dist/`), `check-contrast.mjs` (WCAG gate); plain Node ESM, zero dependencies |
| `dist/` | **Committed output**: `tokens.css`, `tailwind.css`, `components.css`, `tokens.json`, `tokens.js` |
| `foundations/` | Color, type, spacing, radius, elevation, motion, z-index, breakpoints |
| `themes/` | Theme docs and patterns per surface |
| `components/admin/` | Admin component specs with HTML snippets |
| `templates/` | Static HTML: landing, admin shell, auth, Meeting At 10 home |
| `preview/index.html` | Every token and component, theme switcher |
| `docs/` | Principles, voice, logo/assets, dataviz, icons, accessibility checklist |

Open `preview/index.html` or any file in `templates/` directly in a browser.

## Commands

```bash
npm run build           # tokens/ -> dist/
npm run check:contrast  # WCAG AA gate, exit 1 on failure
npm run check           # both
```

## Install and version pinning

Private repo, consumed from git. **Pin to a tag**, never a branch.

```bash
npm i -D github:MeetingAt10/meetingatten-design-system#v0.1.0
# or: pnpm add -D github:MeetingAt10/meetingatten-design-system#v0.1.0
```

`dist/` is committed, so consumers need no build step.

| Bump | When | Consumer action |
|---|---|---|
| Patch `0.1.x` | Value tweak that keeps contrast (hex nudge), docs, bug fix | Safe to take |
| Minor `0.x.0` | New tokens, components, themes, additive CSS | Safe; review preview |
| Major / breaking (`0.x` minor until 1.0) | Rename/remove token or class, semantic meaning change, theme restructure | Read CHANGELOG migration notes |

Before 1.0, breaking changes bump the **minor** and are flagged `BREAKING` in [CHANGELOG.md](CHANGELOG.md). Tag every release `vX.Y.Z`; update the three repos in separate PRs.

## Consume: Tailwind 4 (Next.js: landing and Meeting At 10)

`app/globals.css`:

```css
@import "tailwindcss";
@import "@meetingat10/design-system/dist/tailwind.css"; /* also pulls in tokens.css */
@import "@meetingat10/design-system/dist/components.css"; /* optional ds-* classes */
```

Set the theme on `<html>`:

```tsx
<html lang="en" data-theme="accs-landing">   {/* or "meetingatten" */}
```

Fonts via `next/font` (the tokens read these CSS variables first, then fall back to the Google Fonts names):

```tsx
const display = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-plus-jakarta-sans", weight: ["600","700","800"] });
const body = Inter({ subsets: ["latin"], variable: "--font-inter" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono" });
// <body className={`${display.variable} ${body.variable} ${mono.variable}`}>
```

Use utilities: `bg-canvas text-ink border-line bg-action text-on-action rounded-card font-display text-5xl`. For a stricter palette add `@theme { --color-*: initial; }` after the tailwind import (removes default Tailwind colors).

Tailwind utilities that exist: `canvas surface surface-sunken surface-raised ink ink-secondary ink-muted line line-strong action action-hover on-action action-subtle action-subtle-fg link focus accent on-accent accent-bg accent-fg inverse inverse-ink info-* success-* warning-* danger-*`, plus scales `blue-50..950`, `ink-50..950`, `teal`, `sun`, etc. (use scales only for illustration).

## Consume: Vite + React (admin)

`src/main.tsx`:

```ts
import "@meetingat10/design-system/dist/tokens.css";
import "@meetingat10/design-system/dist/components.css"; // optional
```

`index.html`: set `<html data-theme="accs-admin">` and the dark-mode snippet from [themes/accs-admin](themes/accs-admin/README.md); add the Google Fonts link (Inter, Plus Jakarta Sans, JetBrains Mono). Use `var(--ds-canvas)`, `var(--ds-action)`, etc. in CSS, or Tailwind as above if the admin adopts it.

## Migrating from the old `--accs-*` blocks

`tokens.css` defines legacy aliases per theme, so existing code keeps working while you migrate:

| Old | New |
|---|---|
| `--accs-canvas`, `--accs-surface` | `--ds-canvas`, `--ds-surface` |
| `--accs-text-primary`, `--accs-text-secondary` | `--ds-ink`, `--ds-ink-secondary` |
| `--accs-border-subtle` | `--ds-line` |
| `--accs-action`, `-hover`, `--accs-on-action`, `--accs-focus` | `--ds-action`, `-hover`, `--ds-on-action`, `--ds-focus` |
| `--accs-secondary-bg/fg` (teal) | `--ds-accent-bg/fg` |
| `--accs-accent-bg/fg` (was purple) | now teal: `--ds-accent-bg/fg` |
| `--accs-radius-card`, `--accs-font-*` | `--ds-radius-card`, `--ds-font-family-*` |
| Tailwind `bg-secondary-bg`, `text-secondary-fg` | `bg-accent-bg`, `text-accent-fg` |

Delete the local `:root { --accs-* }` and `@theme inline` blocks, then the aliases when no code references them.

## Rules

1. Product code uses semantic tokens, never primitives or raw hex.
2. New text/background pair means a new row in `tokens/contrast-pairs.json`.
3. Edit `tokens/` or `src/components.css`, run `npm run check`, commit `dist/` with the source. See [CONTRIBUTING.md](CONTRIBUTING.md).
