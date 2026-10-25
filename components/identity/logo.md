---
title: Logo
description: The Meeting At 10 calendar mark and name, the design system's main logo, drawn inline so it follows the theme and forced colors.
react: Logo
demo: Logo
---
# Logo

The logo is the Meeting At 10 calendar mark, the design system's main logo: a calendar with two binding tabs whose page holds one blue appointment block with a white "10", followed by the name "Meeting At 10" and an optional short code. The mark is the artwork of `assets/logo/meeting-at-10.svg` drawn inline, so its frame and page follow the theme: a navy frame around a paper page in light, a light frame around a navy page in dark. ACCS surfaces keep the [door plate](door-plate.md) as the ACCS wordmark. Files, favicon and image rules: [Logo and assets](../../docs/logo-and-assets.md).

## When to use

- Use it as the brand on Meeting At 10 surfaces: the design system site's header, footer and home hero, and the Meeting At 10 site's [Navbar](../navigation/navbar.md) and [Footer](../navigation/footer.md). In a [Hero](../layout/hero.md) plate, use `size="lg"`.
- On ACCS surfaces (landing, portal, admin), use the [door plate](door-plate.md); it is the ACCS wordmark. Don't use the calendar mark as the ACCS brand.
- Use `code` for a version or short code ("DS 1.0"). Use `markOnly` where space is tight, with a `label` unless the name is printed right beside it.
- Use the component, or the `meeting-at-10*.svg` files as exported. Don't redraw the mark, recolor it beyond the light, dark and auto versions, stretch it, or add shadows, glows or outlines.
- Keep the mark at least 24px tall in an interface (16px only as a favicon), with clear space on every side of at least a quarter of its height. The gap to the name meets this at every size.
- Don't put the light artwork on a dark ground. Use the component (it follows the theme), `inverse` on an inverse bar, or `meeting-at-10-dark.svg`.

## Anatomy

| Part | Class | Notes |
|---|---|---|
| Logo | `.ds-logo` | Inline row of mark, name and code with an 8px gap, never wrapping; `--logo-mark` sets the mark size (32px) |
| Mark | `.ds-logo__mark` | Inline SVG on a 512 x 512 viewBox, `aria-hidden="true"`, `focusable="false"`; a `--logo-mark` square |
| Frame | `.ds-logo__frame` | The calendar outline and both binding tabs; `--ds-logo-frame` (`--ds-logo-frame-inverse` when inverse) |
| Page | `.ds-logo__page` | The page inside the frame; `--ds-logo-page` (`--ds-logo-page-inverse` when inverse) |
| Block | `.ds-logo__block` | The appointment block; `--ds-logo-block` (`#0075FF`) on every ground |
| Numeral | `.ds-logo__numeral` | The two paths of the "10"; `--ds-logo-numeral` (white) |
| Name | `.ds-logo__name` | Plus Jakarta Sans 800, 17px, tracking -0.01em, in the current text color |
| Code | `.ds-logo__code` | JetBrains Mono 500, 12px, tabular with a slashed zero, after a 1px rule at half opacity |
| Sizes | `.ds-logo--sm`, `--lg`, `--xl` | Mark 24, 48 or 64px; name 15, 24 or 32px; the 32px default has no modifier |
| Inverse | `.ds-logo--inverse` | Frame and page swap for an inverse ground |

## States

| State | Looks | Set by |
|---|---|---|
| Default | Navy frame and tabs (`#031B38`), paper page (`#F7F8FA`), blue block with a white 10; 32px mark and a 17px name | none |
| Sizes | Mark 24, 32, 48 or 64px; name 15, 17, 24 or 32px; gap 8, 8, 12 or 16px; code 12, 12, 13 or 14px | `size="sm"`, `"md"` (default), `"lg"`, `"xl"`; `.ds-logo--sm`, `--lg`, `--xl` |
| Mark only | The calendar alone, named by `label` | `markOnly`; in plain CSS, leave out the name and code |
| With code | A short code after a thin rule ("DS 1.0") | `code`, `.ds-logo__code` |
| Inverse | Frame and page swap: a light frame around a navy page on a dark bar in the light theme, a navy frame around a paper page on a light bar in dark | `inverse`, `.ds-logo--inverse` |
| Dark theme | Light frame and tabs (`#E8EEF7`) around a navy page (`#031B38`); block and numeral unchanged | `data-theme="dark"` or the OS |
| Forced colors | Frame and block in `CanvasText`, page and numerals in `Canvas` | `forced-colors: active` |

## Behavior and accessibility

- Without `label`, the mark is hidden from assistive tech and screen readers read the visible name, then the code ("Meeting At 10, DS 1.0").
- With `label`, the whole logo becomes one `role="img"` with that name ("Meeting At 10 home") and its text is not read separately. A `markOnly` logo needs a `label`, unless the name is printed right beside it.
- Inside a link (the site header or a navbar brand), the link is the interactive element and draws the focus ring. The visible name names the link; for a mark-only brand, use `label` or the navbar's `brandLabel`.
- The frame and page take the `logo-*` treatments, so the calendar keeps its outline in both themes. Set `inverse` on an inverse ground: a dark bar in the light theme, a light bar in dark, or a door-plate band. The block and numeral are the same on every ground; the name and code take the current text color.
- No motion: nothing changes under reduced motion.
- Forced colors: the mark is redrawn in system colors (frame and block in `CanvasText`, page and numerals in `Canvas`), so it keeps its shape on any high contrast theme. The name and code take the system text color.

## React

```tsx
import { Logo } from '@meetingat10/design-system/react';

<Logo />
<Logo code="DS 1.0" />
<Logo size="lg" code="DS 1.0" />
<Logo size="sm" code="DS 1.0" inverse />
<Logo markOnly size="xl" label="Meeting At 10" />
<Logo label="Meeting At 10 home" />
```

`name` defaults to "Meeting At 10". `size` is `sm` (24px mark), `md` (32px, default), `lg` (48px) or `xl` (64px).

## Plain CSS

```html
<span class="ds-logo">
  <svg class="ds-logo__mark" viewBox="0 0 512 512" aria-hidden="true" focusable="false">
    <rect class="ds-logo__frame" x="24" y="64" width="464" height="440" rx="88"/>
    <rect class="ds-logo__page" x="62" y="104" width="388" height="362" rx="48"/>
    <rect class="ds-logo__frame" x="130" y="24" width="48" height="116" rx="24"/>
    <rect class="ds-logo__frame" x="334" y="24" width="48" height="116" rx="24"/>
    <rect class="ds-logo__block" x="82" y="182" width="348" height="250" rx="58"/>
    <path class="ds-logo__numeral" d="M141 246a8 8 0 0 1 5-7l39-15a15 15 0 0 1 5-1h24a9 9 0 0 1 9 9v143a9 9 0 0 1-9 9h-29a9 9 0 0 1-9-9V270l-26 7a7 7 0 0 1-9-7v-24Z"/>
    <path class="ds-logo__numeral" fill-rule="evenodd" d="M314 221c-46 0-73 34-73 83s27 83 73 83 73-34 73-83-27-83-73-83Zm0 43c-17 0-26 14-26 40s9 40 26 40 26-14 26-40-9-40-26-40Z"/>
  </svg>
  <span class="ds-logo__name">Meeting At 10</span>
  <span class="ds-logo__code">DS 1.0</span>
</span>

<span class="ds-logo ds-logo--lg" role="img" aria-label="Meeting At 10">
  <svg class="ds-logo__mark" viewBox="0 0 512 512" aria-hidden="true" focusable="false">...</svg>
</span>

<span class="ds-logo ds-logo--sm ds-logo--inverse">
  <svg class="ds-logo__mark" viewBox="0 0 512 512" aria-hidden="true" focusable="false">...</svg>
  <span class="ds-logo__name">Meeting At 10</span>
  <span class="ds-logo__code">DS 1.0</span>
</span>
```

The mark has the geometry of `assets/logo/meeting-at-10.svg`, with the part classes in place of fills so the tokens color it.

## Proposed ACCS logo files

The linked-C ACCS marks in `assets/logo/` (`logo-horizontal.svg`, `logo-stacked.svg`, `logo-compact-minimum.svg`) are not this logo. They are proposed, not approved: show them only where the team has agreed to, as exported images with `.ds-logo-file` (32px tall; set `--logo-h` for another height) or `.ds-logo-file--compact` (28px). They do not adapt to the dark theme or forced colors, so put them on a light surface there. Files, sizes and clear space: [Logo and assets](../../docs/logo-and-assets.md).

```html
<img class="ds-logo-file" src="/logo/logo-horizontal.svg" alt="ACCS (proposed logo)">
<img class="ds-logo-file ds-logo-file--compact" src="/logo/logo-compact-minimum.svg" alt="ACCS (proposed logo)">
```
