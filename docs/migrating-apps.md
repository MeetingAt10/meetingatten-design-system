# Moving the apps onto the design system

How each ACCS app replaces its copied `--accs-*` token block with the package (decision 25 of the v0.3.0 rebuild). Written from the apps' files on 2026-10-25; check them again before applying, since the apps had uncommitted changes then. Each app is its own small change.

## Before you start

The apps install the package from git, pinned to a tag, so the release tag has to exist on GitHub first:

```bash
npm i @meetingat10/design-system@github:MeetingAt10/meetingatten-design-system#v0.5.0
```

`dist/` is committed, so there is no build step. React components need `react` and `react-dom` 19 (all three apps already use 19).

## accs-landing and meeting@10-website (Next.js, Tailwind 4)

1. **`src/app/globals.css`**: delete the copied `:root { --accs-* }` block, the `@theme inline { … }` color, font, text and radius block, and the `html { color-scheme }`, `body { background; color }` and `:focus-visible` rules. Start the file with:

   ```css
   @layer properties, theme, base, ds, components, utilities; /* design system below Tailwind utilities */
   @import "tailwindcss";
   @import "@meetingat10/design-system/dist/tailwind.css";
   @import "@meetingat10/design-system/dist/components.css";
   ```

   Keep the app's own motion `@theme` block (`animate-rise`, `animate-float`, `animate-pulse-dot`) and its reduced-motion rule.

2. **`src/app/layout.tsx`**: add `className="ds-body"` to `<body>` (canvas, text color, density font, focus ring). The coming-soon pages were reviewed in light only, so pin the theme until dark is reviewed:

   ```tsx
   <html lang="en" data-theme="light" className={`${inter.variable} ${plusJakartaSans.variable} h-full antialiased`}>
   ```

   The `next/font` variables (`--font-inter`, `--font-plus-jakarta-sans`) are already the ones the tokens read.

3. **Class changes** (Tailwind's default breakpoints and the legacy names are removed):

   | Before | After | Where |
   |---|---|---|
   | `sm:text-6xl`, `sm:leading-tight` | `tablet:text-6xl`, `tablet:leading-tight` (600px instead of 640px) | meeting@10-website |
   | `text-ink` | `text-text-primary` | meeting@10-website |
   | `text-ink-secondary` | `text-text-secondary` | meeting@10-website |
   | `text-body-lg` | `text-body-large` | meeting@10-website |

   Unchanged: `bg-action`, `text-on-action`, `bg-on-action`, `text-display`, `text-label`, `text-caption`, `font-display`, `font-sans`, and Tailwind's non-color utilities (`text-sm`, `rounded-full`, spacing). `rounded-card` stays 12px.

4. **Check**: `npm run build`; the page looks the same; `grep -rn "accs-\|#[0-9a-fA-F]\{6\}" src/app` finds nothing left except asset files (icons, OG image).

## accs-system/frontend (Vite, React, plain CSS)

1. **`src/main.tsx`**: import the package CSS before the app CSS:

   ```ts
   import "@meetingat10/design-system/dist/tokens.css";
   import "@meetingat10/design-system/dist/components.css";
   import "./styles.css";
   ```

2. **`index.html`**: `<html lang="en" data-theme="light" data-density="compact">` and `<body class="ds-body">`. Keep the Google Fonts link (Inter, Plus Jakarta Sans; add JetBrains Mono for code text).

3. **`src/styles.css`**: delete the `:root` block, the `body` rule and the `:focus-visible` rule, then rename the variables in the `.coming-soon*` rules:

   | Before | After |
   |---|---|
   | `var(--accs-canvas)` | `var(--ds-canvas)` |
   | `var(--accs-surface)` | `var(--ds-surface)` (or `var(--ds-card-bg)` for the soft look) |
   | `var(--accs-text-primary)` / `--accs-text-secondary` | `var(--ds-text-primary)` / `var(--ds-text-secondary)` |
   | `var(--accs-border-subtle)` | `var(--ds-border-subtle)` |
   | `var(--accs-action)` | `var(--ds-action-default)` |
   | `#fff` on the badge | `var(--ds-on-action)` |
   | `var(--accs-radius-card)` | `var(--ds-radius-card)` |
   | `var(--accs-font-display)` / `--accs-font-body` | `var(--ds-font-family-display)` / `var(--ds-font-family-body)` |

   Or replace the card markup with components: `<Card as="div" overlay>`, `<Badge>` and the type classes (`ds-type-h1`). App CSS is unlayered, so it always overrides the design system.

4. **Check**: `npm run build` and `npm run typecheck`; the page looks the same.

## Known issue: lazy-loaded React Aria code in Next 16 Turbopack builds

Observed on 2026-10-25 with Next.js 16.4.2 (Turbopack, production build) and React Aria Components 1.22.1: when components that use React Aria menu or list state (for example `MenuButton`) are both on a page and inside a `next/dynamic` chunk, the production build can drop an internal react-stately export. The page then fails in the browser with `TypeError: (0, t.f) is not a function` and shows the Next error page; `next build` itself succeeds and `next dev` is unaffected. The same code without the `next/dynamic` boundary works. Until this is fixed upstream:

- Avoid `next/dynamic` boundaries around design system components that use menus, listboxes or selects.
- Open the production build (`next build` + a static server) in a browser before shipping, not only `next dev`.

## After the switch

- New screens use the React components (`@meetingat10/design-system/react`) and the card rule.
- Rebuilding a page with the components belongs to that page's feature work, not to this switch.
