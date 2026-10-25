---
title: Navbar
description: The landing and Meeting At 10 top navigation with the wordmark, a few links and one primary action; links move into a drawer below 768px.
react: Navbar
---
# Navbar

The navbar is the top navigation for the ACCS landing and the Meeting At 10 site: the brand (the door plate on ACCS surfaces, the [Logo](../identity/logo.md) on Meeting At 10 surfaces), a few links and the one primary action ("Sign in"). The current link carries a 2px navy rule like a selected tab. Below 768px the links move into a menu drawer.

## When to use

- Use it on marketing and public pages.
- Keep it to three to five links and one primary action.
- Use `transparent` when it sits over the hero without a rule or fill.
- Don't use it inside the workspace; use [AppShell](app-shell.md).

## Anatomy

| Part | Class | Notes |
|---|---|---|
| Bar | `.ds-navbar` | Sticky, canvas ground, hairline below, `--ds-z-sticky` |
| Inner | `.ds-navbar__inner` | Inside `.ds-container`, 68px tall |
| Brand | `.ds-navbar__brand` | Link to `brandHref`: a [DoorPlate](../identity/door-plate.md) on ACCS surfaces, the [Logo](../identity/logo.md) on Meeting At 10 surfaces |
| Links | `.ds-navbar__links`, `.ds-navbar__link` | Shown from 768px; label 600 14px, 40px tall |
| Actions | `.ds-navbar__actions` | The primary [Button](../control/button.md) |
| Menu button | `.ds-navbar__menu` | Icon button below 768px |
| Menu sheet | `.ds-navbar__sheet` | [Nav items](item.md) in a drawer |

## States

| State | Looks | Set by |
|---|---|---|
| Link hover | Neutral wash, primary text | `:hover`, `[data-hovered]` |
| Current link | Primary text and a 2px navy rule along the bar's bottom edge | `current: true`, `[aria-current="page"]` |
| Transparent | No fill, no rule, not sticky | `transparent`, `.ds-navbar--transparent` |
| Below 768px | Links hidden; "Open menu" opens the drawer | media query |

## Behavior and accessibility

- A `<header>` with a `<nav>` named by `label` (default "Main"); the drawer repeats the links in a second `nav` with the same name.
- `brandLabel` names the brand link when the brand has no text (a logo image).
- In the drawer, the current link is a solid nav item with `aria-current="page"`; choosing a link closes it.

## React

```tsx
import { Navbar, DoorPlate, Button } from '@meetingat10/design-system/react';

<Navbar
  brand={<DoorPlate />}
  brandLabel="ACCS home"
  links={[
    { label: 'Community', href: '/community', current: true },
    { label: 'Consultations', href: '/consultations' },
    { label: 'Reports', href: '/reports' },
  ]}
  actions={<Button size="sm" icon="sign-in" href="/sign-in">Sign in</Button>}
/>
```

On Meeting At 10 surfaces pass `brand={<Logo />}`; its visible name names the link, so it needs no `brandLabel`.

## Plain CSS

```html
<header class="ds-navbar">
  <div class="ds-navbar__inner ds-container">
    <a class="ds-navbar__brand" href="/" aria-label="ACCS home"><span class="ds-plate"><span class="ds-plate__name">ACCS</span></span></a>
    <nav class="ds-navbar__links" aria-label="Main">
      <a class="ds-navbar__link" href="/community" aria-current="page">Community</a>
      <a class="ds-navbar__link" href="/consultations">Consultations</a>
    </nav>
    <div class="ds-navbar__actions"><a class="ds-btn ds-btn--primary ds-btn--sm" href="/sign-in">Sign in</a></div>
  </div>
</header>
```
