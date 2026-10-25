<picture>
  <source media="(prefers-color-scheme: dark)" srcset="assets/logo/meeting-at-10-dark.svg">
  <img src="assets/logo/meeting-at-10.svg" width="72" height="72" alt="Meeting At 10">
</picture>

# Meeting At 10 Design System

`@meetingat10/design-system` is one design system for three surfaces: the ACCS landing, the ACCS portal and admin, and the Meeting At 10 site. It ships tokens, a plain-CSS component layer and React components on React Aria, in one package installed from a git tag.

The visual world is **Office Hours**: the weekly consultation timetable on a CCS faculty door. Paper sheets on a cool canvas, hairline rules that are real time grids, blocks whose lane color owns the fill, highlighter washes, hatching for taken or restricted time, the door plate as the ACCS wordmark, and a now-line that marks the present ([principles](docs/principles.md)). The palette and the fonts are pinned. Everything is proposed, not approved.

| Surface | Repo (stack) | `data-density` |
|---|---|---|
| ACCS landing | `accs-landing` (Next.js 16, Tailwind 4) | `comfortable` (default) |
| ACCS portal and admin | `accs-system/frontend` (Vite, React) | `compact` |
| Meeting At 10 | `meeting@10-website` (Next.js 16, Tailwind 4) | `comfortable` (default) |

Themes: `data-theme="light"` or `"dark"`; no attribute follows the OS ([light and dark](themes/light-dark.md), [density](themes/density.md)).

## Install

Private repo, consumed from git. Pin a tag, never a branch.

```bash
npm i @meetingat10/design-system@github:MeetingAt10/meetingatten-design-system#v1.0.1
```

`dist/` is committed, so there is no build step. Peer dependencies: `react` and `react-dom` 19. Moving from 0.5.x: [migrating apps](docs/migrating-apps.md).

## What to import

| Import | Contents |
|---|---|
| `@meetingat10/design-system/tokens.css` | Every token as `--ds-*`, both themes and both densities |
| `@meetingat10/design-system/tailwind.css` | Tailwind 4 theme on the tokens (imports `tokens.css`) |
| `@meetingat10/design-system/components.css` | The `ds-*` component classes, in `@layer ds.base, ds.components, ds.utilities` |
| `@meetingat10/design-system/fonts.css` | Optional: self-hosted variable Inter, Plus Jakarta Sans and JetBrains Mono |
| `@meetingat10/design-system/react` | React components, the provider and motion tokens |
| `@meetingat10/design-system/icons` | The full Phosphor icon set |
| `@meetingat10/design-system/tokens.json` | Tokens as data |
| `@meetingat10/design-system/assets/*` | `icons/sprite.svg`, `icons/icons.json`, the Meeting At 10 logo `logo/meeting-at-10*.svg`, the proposed ACCS `logo/logo-*.svg` |

Put `class="ds-body"` on `<body>`: the canvas, text, density text, focus ring and reduced-motion rules are scoped to it.

### Tailwind 4 (Next.js)

```css
@layer properties, theme, base, ds, components, utilities;
@import "tailwindcss";
@import "@meetingat10/design-system/tailwind.css";
@import "@meetingat10/design-system/components.css";
```

The layer line comes first, before `@import "tailwindcss"`, so Tailwind utilities override the design system. Utilities use the semantic names only (`bg-surface`, `text-text-primary`, `bg-action`, `bg-highlight-consult`, `rounded-sheet`, `shadow-block`, `type-h1`, `hatch`, `plate`); Tailwind's palette is removed and primitives are not exposed. Breakpoints: `tablet:` 600px, `desktop:` 1024px, `wide:` 1440px.

With `next/font`, put the font variables in front of the token stacks ([typography](foundations/typography.md)).

### Plain CSS (Vite)

```ts
import '@meetingat10/design-system/tokens.css';
import '@meetingat10/design-system/components.css';
import '@meetingat10/design-system/fonts.css';
```

## React

Wrap the app once in `DesignSystemProvider`. It sets Motion's `MotionConfig reducedMotion="user"`, client routing for every link (`navigate`, `useHref`) and the locale.

```tsx
'use client';
import { useRouter } from 'next/navigation';
import { DesignSystemProvider, ToastRegion, Button, toast } from '@meetingat10/design-system/react';

export function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  return (
    <DesignSystemProvider navigate={router.push} locale="en-PH">
      {children}
      <ToastRegion />
    </DesignSystemProvider>
  );
}

<Button onPress={() => toast('Draft saved', { tone: 'success' })}>Save draft</Button>
```

Interactive components start with `"use client"`. Behavior, keyboard support and ARIA come from React Aria Components 1.22.1; Motion drives the toast swipe and stack, the drawer swipe and the timetable block drop; `@number-flow/react` rolls the Progress and Meter digits. Specs for every component: [components/](components/README.md).

## Icons

```tsx
import { Icon } from '@meetingat10/design-system/react';
import { RocketLaunchIcon } from '@meetingat10/design-system/icons';

<Icon name="calendar" />            {/* curated vocabulary */}
<Icon name="house" weight="fill" /> {/* current item */}
<Icon icon={RocketLaunchIcon} />    {/* any Phosphor icon */}
```

Plain CSS: `<svg class="ds-icon" aria-hidden="true"><use href="sprite.svg#ds-calendar"/></svg>` (`#ds-NAME-fill`, `#ds-NAME-duotone`). See [iconography](docs/iconography.md).

## Commands

```bash
npm run build      # tokens + src/css -> dist/, the icon sprite and React icon map, motion tokens, dist/react (tsc)
npm run check      # build, then contrast (check-contrast.mjs) and token rules (check-tokens.mjs)
npm run typecheck  # tsc over src/react, tests included
npm test           # Vitest + Testing Library + axe on every component
```

`npm run check:contrast` and `npm run check:tokens` run the two checks alone. On low-power machines, run the heavy commands one at a time.

## Repo layout

| Path | Contents |
|---|---|
| `tokens/` | The source: `foundations/` (color, identity, type, spacing, radius, size, grid, elevation, motion, z-index), `themes/` (light and dark mapping), `treatments.json` (materials), `contrast-pairs.json` |
| `src/css/` | Token-only CSS: `base/` (reset, type, layout, motion, utilities, forced colors) and `components/<category>/<name>.css` |
| `src/react/` | React components (`<category>/<Name>.tsx`), tests per category, the provider, motion tokens and icon map |
| `scripts/` | `build.mjs`, `check-contrast.mjs`, `check-tokens.mjs`, `lib.mjs` (plain Node, no dependencies) |
| `dist/` | Committed output: `tokens.css`, `tailwind.css`, `components.css`, `fonts.css`, `tokens.json`, `tokens.js`, `react/` |
| `assets/` | `icons/icons.json` (curated vocabulary), `icons/sprite.svg` (generated), `logo/meeting-at-10*.svg` (the Meeting At 10 logo), `logo/logo-*.svg` (proposed ACCS marks) |
| `components/`, `foundations/`, `themes/`, `docs/` | Component specs and guides; the site renders them |
| `context/deltas/` | Change specs (deltas); `archive/` holds past ones |
| `site/` | The public showcase (Next.js 16 static export) with live light and dark demos; not part of the package |

## Rules

1. Product code uses semantic and treatment tokens, never primitives or hex (`npm run check:tokens`).
2. The palette (54 primitives and the light and dark mapping) and the fonts are pinned; change them only by an explicit decision.
3. Follow the craft rules: no eyebrows, no side stripes, Agenda rows instead of icon-card columns, mono only for times and codes, one elevation per element, no nested cards, no emoji, honest claims ([principles](docs/principles.md)).
4. See [CONTRIBUTING.md](CONTRIBUTING.md).
