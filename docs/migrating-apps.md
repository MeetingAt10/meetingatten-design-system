# Migrating apps to v1.0.0

How accs-landing, meeting@10-website and accs-system/frontend move to the v1.0.0 "Office Hours" release. v1 is breaking: classes, props, tones and icon names changed.

Check each app's files again before applying; each app is its own small change.

## 1. Install by tag

The apps install from git, pinned to a tag. The `v1.0.0` tag has to exist on GitHub first (tagging needs the maintainer's approval).

```bash
npm i @meetingat10/design-system@github:MeetingAt10/meetingatten-design-system#v1.0.0
```

`dist/` is committed, so there is no build step. Peer dependencies: `react` and `react-dom` 19. The package brings `react-aria-components` 1.22.1, `motion`, `@phosphor-icons/react`, `@number-flow/react` and the fontsource variable fonts.

## 2. Import the CSS

Next.js with Tailwind 4 (accs-landing, meeting@10-website), at the top of `globals.css`:

```css
@layer properties, theme, base, ds, components, utilities;
@import "tailwindcss";
@import "@meetingat10/design-system/tailwind.css";
@import "@meetingat10/design-system/components.css";
```

The first line must come before `@import "tailwindcss"`. It puts the design system's `ds.*` layers below Tailwind's `components` and `utilities`, so a utility such as `p-4` on a `Card` wins over the card's own padding. `tailwind.css` imports `tokens.css`.

Vite (accs-system/frontend), in `src/main.tsx` before the app CSS:

```ts
import '@meetingat10/design-system/tokens.css';
import '@meetingat10/design-system/components.css';
import '@meetingat10/design-system/fonts.css'; // optional: self-hosted Inter, Plus Jakarta Sans, JetBrains Mono
import './styles.css';
```

The `dist/` paths (`@meetingat10/design-system/dist/components.css`) still resolve. App CSS that is not in a layer always overrides the design system.

Put `class="ds-body"` on `<body>`. The canvas, text color, density text, focus ring, selection color and the reduced-motion rules are scoped to it.

## 3. Fonts

| App | Do |
|---|---|
| Next.js | Keep `next/font` for Inter, Plus Jakarta Sans and JetBrains Mono, and put their variables in front of the token stacks after the imports (see below) |
| Vite | Import `fonts.css`, or keep a Google Fonts link that includes JetBrains Mono |

```css
:root {
  --ds-font-family-body: var(--font-inter), "Inter Variable", "Inter", ui-sans-serif, system-ui, sans-serif;
  --ds-font-family-display: var(--font-plus-jakarta-sans), "Plus Jakarta Sans Variable", "Plus Jakarta Sans", ui-sans-serif, system-ui, sans-serif;
  --ds-font-family-mono: var(--font-jetbrains-mono), "JetBrains Mono Variable", "JetBrains Mono", ui-monospace, monospace;
}
```

## 4. Wrap the app in DesignSystemProvider

It sets Motion's `MotionConfig` (`reducedMotion="user"`, the smooth spring as default), client-side routing for every design system link, and the locale. Render `ToastRegion` once inside it.

Next.js (a client component used by the root layout):

```tsx
'use client';
import { useRouter } from 'next/navigation';
import { DesignSystemProvider, ToastRegion } from '@meetingat10/design-system/react';

export function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  return (
    <DesignSystemProvider navigate={router.push} locale="en-PH">
      {children}
      <ToastRegion />
    </DesignSystemProvider>
  );
}
```

Vite with TanStack Router, for example:

```tsx
const router = useRouter();
<DesignSystemProvider
  navigate={(href) => router.navigate({ to: href })}
  useHref={(href) => router.buildLocation({ to: href }).href}
>
  {app}
  <ToastRegion />
</DesignSystemProvider>
```

Components still render without the provider; links then do full page loads and the locale follows the browser.

## 5. Renamed and removed

| Before (0.5.x) | After (1.0.0) |
|---|---|
| `eyebrow` on `Hero` and `SectionHeader`, `.ds-eyebrow` | Removed. No label above headings; use `description`, or a `DoorPlate` in `Hero plate` |
| `Hero` `aside`, `wash` | `art` (the product at work, usually a `Timetable`), `plate`, `note` |
| `SectionHeader` `action` | `actions`, plus `split` and `id` |
| `Section` `band`, `wash` | `tone="sheet"` or `tone="plate"`, `tight`, `bleed` |
| `FeatureRow` + `Feature`, `.ds-features`, `.ds-feature` | `Agenda` + `AgendaItem`, `.ds-agenda`, `.ds-agenda__item` (ruled rows with a lane chip) |
| `Wash`, `.ds-wash` | `Highlight` (`<mark class="ds-highlight">`), a highlighter stroke behind words. There are no background washes |
| `Alert tone="error"`, `.ds-alert--error` | `tone="danger"`, `.ds-alert--danger`; new `neutral` tone, `icon`, `actions`, `onDismiss` |
| `Badge tone="secondary"` / `"accent"` | `tone="consult"` / `"community"`; new `form` (`solid`, `pending`, `restricted`, `taken`, `closed`), `marker`, `outline`; `RoleBadge` and `Severity` are separate exports |
| `Tile tone="info"` / `"secondary"` / `"accent"` | `tone="schedule"` (default) / `"consult"` / `"community"`; also `restricted`, `neutral`, `success`, `warning`, `danger`, and `size`, `weight`, `label` |
| `Avatar size="sm" | "md" | "lg"` | `size={24 | 32 | 36 | 48 | 64}` (default 36), `lane`, `decorative`; `AvatarGroup` |
| `IconButton inverse` | `variant="quiet" | "outline" | "solid"`, `size`, `dot`, `tooltip` |
| `Link inline` | `variant="inline" | "standalone" | "quiet"`, `icon`, `external` |
| `Tooltip content` wrapping its trigger | `<TooltipTrigger><Trigger /><Tooltip>Text</Tooltip></TooltipTrigger>` (IconButton adds its own) |
| `Drawer placement` | `side="end" | "start" | "bottom"`, `footer` |
| `EmptyState icon`, `tone` | Removed; it draws the empty ruled sheet |
| `FileUpload onSelect` | `onChange` (the full list) and `status` per file |
| `Sidebar logo` | `brand` |
| `Skeleton short` | `shape`, `width`, `height` |
| `ConsultationSlot state="available"` | `state="open"` |
| `Stack gap={16 | 24 | 32}` | Also 4, 8, 12, 20, 48 |
| Icon names `menu`, `chevron`, `forum`, `report`, `shield`, `alert`, `close`, `home` | `list`, `caret-right` (and `caret-down`, `-left`, `-up`), `chat` or `chats`, `file`, `lock`, `warning` or `warning-circle`, `x`, `house` (Phosphor vocabulary, see [iconography](iconography.md)) |
| `.ds-notice` | `.ds-privacy` (`PrivacyNotice`) |
| `.ds-app`, `.ds-app__main`, `.ds-app__content` | `.ds-shell`, `.ds-shell__main`, `.ds-shell__content` |
| `.ds-mono`, `.ds-tag-mono` | `.ds-time` for times, codes and references; `.ds-type-code` for code |
| `.ds-icon-btn--inverse` | `.ds-icon-btn--outline` or `--solid` |
| `.ds-badge--secondary`, `--accent`; `.ds-tile--secondary`, `--accent` | `--consult`, `--community` |
| `.ds-avatar--sm`, `--lg` | `.ds-avatar--24`, `--32`, `--48`, `--64` |
| `.ds-logo`, `.ds-logo--stacked` on logo images | `.ds-logo-file` (32px tall); for the stacked file set `--logo-h: 7rem`; `.ds-logo-file--compact` (28px) is new. `.ds-logo` is now the Meeting At 10 `Logo` |
| `.ds-breadcrumb`, `.ds-pagination__page`, `.ds-tab-panel`, `.ds-popover-panel`, `.ds-search`, `.ds-label`, `.ds-field__msg` | `.ds-breadcrumbs__item`, `.ds-page`, `.ds-tabs__panel`, `.ds-popover`, `.ds-input-group`, `.ds-field__label` or `.ds-type-label`, `.ds-field__description` and `.ds-field__error` |
| Tailwind `bg-card`, `shadow-card`, `shadow-card-hover`, `wash-*`, `rounded-card`, `rounded-tile` | `bg-surface`, `shadow-block`, `shadow-overlay`, `bg-highlight-*`, `rounded-sheet`, `rounded-control` |
| CSS `--ds-card-bg`, `--ds-card-shadow`, `--ds-radius-card`, `--ds-radius-tile` | `--ds-sheet-bg` and `--ds-sheet-rule`, `--ds-block-shadow`, `--ds-radius-sheet`, `--ds-radius-control` |

Search each app for the old names before switching: `grep -rnE "eyebrow|FeatureRow|Wash|tone=\"error\"|ds-wash|ds-notice|ds-mono|card-shadow|radius-card|ds-logo" src`.

## Per app

### accs-landing (Next.js 16)

1. `globals.css`: the layer line and imports from step 2, then the font variables from step 3. Delete any copied token blocks.
2. `layout.tsx`: `className="ds-body"` on `<body>`, the `Providers` from step 4. Pin `data-theme="light"` on `<html>` only until dark has been reviewed; otherwise let it follow the OS.
3. Rebuild the first viewport with `Navbar`, `Hero` (door plate, display headline, one line, "Sign in" and "Browse the community") and a `Timetable` with the hatched reports `band`; replace icon-card columns with `Agenda`.
4. Check: `next build`, then open the production build in a browser.

### meeting@10-website (Next.js 16)

1. Same CSS, fonts and provider as accs-landing.
2. Replace the brand with the Meeting At 10 [Logo](../components/identity/logo.md): `<Logo />` in the `Navbar` and `Footer`, `<Logo size="lg" />` in the `Hero` plate, and `assets/logo/meeting-at-10-auto.svg` as the favicon. Never the ACCS mark.
3. Breakpoint utilities are `tablet:`, `desktop:`, `wide:` (Tailwind's defaults are removed); colors use semantic names (`text-text-primary`, `bg-action`).
4. Check: `next build` and the production build in a browser.

### accs-system/frontend (Vite SPA)

1. `main.tsx`: the imports from step 2 (with `fonts.css`).
2. `index.html`: `<html lang="en" data-density="compact">` and `<body class="ds-body">`.
3. Wrap the router in `DesignSystemProvider` with the router's `navigate` and `useHref`; render `ToastRegion` once.
4. Rename `var(--accs-*)` and old `--ds-card-*` variables in `styles.css` to the semantic and treatment tokens; prefer the components (`AppShell`, `Sidebar`, `TopBar`, `ReportsTable`, `ReportRecord`, `PrivacyNotice`).
5. Check: `npm run build` and `npm run typecheck`.

## Known issue: React Aria menus inside next/dynamic (Turbopack)

Seen on 2026-10-25 with Next.js 16.4.2 (Turbopack, production build) and React Aria Components 1.22.1: when components that use React Aria menu or list state (for example `MenuButton`, `Select`, `ComboBox`, `CommandPalette`) are both on a page and inside a `next/dynamic` chunk, the production build can drop an internal react-stately export. The page then fails in the browser with `TypeError: (0, t.f) is not a function`; `next build` succeeds and `next dev` is unaffected. Until it is fixed upstream:

- Avoid `next/dynamic` boundaries around design system components that use menus, listboxes or selects.
- Open the production build (`next build` and a static server) in a browser before shipping, not only `next dev`.

## After the switch

New screens use the React components and the craft rules ([principles](principles.md)). Rebuilding older pages with the components belongs to each page's feature work, not to this switch.
