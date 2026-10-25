---
title: App Shell
description: The workspace layout, a sidebar beside the top bar and content on desktop and a mobile header with a navigation drawer below 1024px.
react: AppShell
---
# App Shell

The app shell lays out the portal and admin workspace. From 1024px the [Sidebar](sidebar.md) sits beside a column holding the [TopBar](top-bar.md) and the content; below 1024px a [MobileHeader](mobile-header.md) opens the navigation in a start-side [Drawer](../feedback/drawer.md).

## When to use

- Use it once per workspace page, around the page content.
- Use `density="compact"` for dense staff screens ([density](../../themes/density.md)).
- Use `contentAs="div"` when the shell is embedded in a page that already has a `<main>` (docs, previews).
- Don't use it for the landing or Meeting At 10 site; use [Navbar](navbar.md) and [Section](../layout/section.md).

## Anatomy

| Part | Class | Notes |
|---|---|---|
| Shell | `.ds-shell` | One column; from 1024px `16rem` + content. Carries `data-density` |
| Sidebar | `.ds-shell > .ds-sidebar` | Shown from 1024px |
| Main column | `.ds-shell__main` | Mobile header, top bar, content |
| Content | `.ds-shell__content` | `<main>` (or `div`), centered, content width plus 32px gutters, 24/32px top padding |
| Drawer navigation | `.ds-shell__drawer-nav` | The `mobileNav` items inside the drawer |

## States

| State | Looks | Set by |
|---|---|---|
| Desktop (1024px and up) | Sidebar, top bar, content; mobile header hidden | media query |
| Phone and tablet | Mobile header with a menu button; sidebar and top bar hidden | media query |
| Drawer open | Navigation slides in from the start edge over the scrim | menu button |
| Compact | Body small text, 24/32px sections, 40px hour rows | `density="compact"` |

## Behavior and accessibility

- One `<main>` landmark; `contentId` sets its id (and `tabIndex={-1}`) so a [skip link](../../foundations/focus-and-targets.md) can move focus to it.
- The menu button ("Open navigation") opens a drawer titled "Navigation" with its own `nav` named "Main". Following a link closes the drawer; Escape and the scrim close it; focus returns to the button.
- The drawer shows only when `mobileNav` is passed; the mobile header only when `mobileBrand` is passed.

## React

```tsx
import { AppShell, Sidebar, TopBar, NavItem, DoorPlate } from '@meetingat10/design-system/react';

const nav = <>
  <NavItem href="/" icon="house" isCurrent>Overview</NavItem>
  <NavItem href="/community" icon="chats">Community</NavItem>
</>;

<AppShell
  density="compact"
  contentId="content"
  sidebar={<Sidebar brand={<DoorPlate code="CCS" />}>{nav}</Sidebar>}
  topBar={<TopBar title="Overview" />}
  mobileBrand={<DoorPlate size="sm" />}
  mobileNav={nav}
>
  {page}
</AppShell>
```

## Plain CSS

```html
<div class="ds-shell" data-density="compact">
  <aside class="ds-sidebar" aria-label="Main sidebar">...</aside>
  <div class="ds-shell__main">
    <header class="ds-mobile-header">...</header>
    <header class="ds-topbar">...</header>
    <main class="ds-shell__content" id="content" tabindex="-1">...</main>
  </div>
</div>
```

In plain markup, build the mobile drawer yourself with `.ds-drawer-overlay` and `.ds-drawer--start`.
