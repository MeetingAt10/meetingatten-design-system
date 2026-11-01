---
title: Sidebar
description: The workspace rail from 1024px, with the brand on top, grouped navigation, and the signed-in person and role at the bottom.
react: Sidebar
---
# Sidebar

The sidebar is the workspace rail on desktop: the brand on top (the door plate on ACCS surfaces, the [Logo](../identity/logo.md) on Meeting At 10 surfaces), grouped [nav items](item.md), and the signed-in person with their role at the bottom. Below 1024px, [AppShell](app-shell.md) moves the same navigation into a drawer.

## When to use

- Use it for the portal and admin workspace, inside [AppShell](app-shell.md).
- Use `SidebarSection` to group destinations under a short label ("Workspace", "Staff").
- Use `SidebarNote` for honest scope notes ("Own reports only").
- Don't use it on the landing or Meeting At 10 site; use [Navbar](navbar.md).

## Anatomy

| Part | Class | Notes |
|---|---|---|
| Rail | `.ds-sidebar` | `<aside>` named "{label} sidebar", 16rem wide, full height, sticky, paper with a hairline on the end edge |
| Brand | `.ds-sidebar__brand` | A [DoorPlate](../identity/door-plate.md) on ACCS surfaces, the [Logo](../identity/logo.md) on Meeting At 10 surfaces |
| Navigation | `.ds-sidebar__nav` | `<nav>` named by `label` (default "Main") |
| Group label | `.ds-sidebar__label` | Caption 600; a group name, not a heading kicker |
| Footer | `.ds-sidebar__foot` | Ruled area pinned to the bottom |
| Person | `.ds-sidebar__person`, `.ds-sidebar__name` | Avatar, name and a [RoleBadge](../badge/role.md) |
| Note | `.ds-sidebar__note` | Caption, secondary text |

## States

| State | Looks | Set by |
|---|---|---|
| Current destination | Solid navy block with a fill-weight icon | `NavItem isCurrent` |
| Overflow | The rail scrolls on its own; the page keeps its place | content taller than the viewport |
| Below 1024px | Hidden by AppShell; the navigation moves to the drawer | `.ds-shell > .ds-sidebar` |

## Behavior and accessibility

- Two landmarks: the complementary `<aside>` ("Main sidebar") and the navigation inside it ("Main"). Give a different `label` when a page has more than one navigation.
- A role badge says who is signed in; it is not a permission or privacy signal.
- Forced colors: the current item takes `Highlight`.

## React

```tsx
import { Sidebar, SidebarSection, SidebarNote, NavItem, DoorPlate, Avatar, RoleBadge } from '@meetingat10/design-system/react';

<Sidebar
  brand={<DoorPlate code="CCS" />}
  footer={<>
    <div className="ds-sidebar__person">
      <Avatar name="Paolo Dizon" decorative />
      <div><p className="ds-sidebar__name">Paolo Dizon</p><RoleBadge>Student</RoleBadge></div>
    </div>
    <SidebarNote>Own reports only</SidebarNote>
  </>}
>
  <SidebarSection label="Workspace">
    <NavItem href="/" icon="house" isCurrent>Overview</NavItem>
    <NavItem href="/community" icon="chats" count={3}>Community</NavItem>
    <NavItem href="/reports" icon="file">My reports</NavItem>
  </SidebarSection>
</Sidebar>
```

## Plain CSS

```html
<aside class="ds-sidebar" aria-label="Main sidebar">
  <div class="ds-sidebar__brand"><span class="ds-plate"><span class="ds-plate__name">ACCS</span><span class="ds-plate__code">CCS</span></span></div>
  <nav class="ds-sidebar__nav" aria-label="Main">
    <p class="ds-sidebar__label">Workspace</p>
    <a class="ds-nav-item" href="/" aria-current="page"><svg class="ds-icon" aria-hidden="true"><use href="sprite.svg#ds-house-fill"/></svg><span class="ds-nav-item__label">Overview</span></a>
  </nav>
  <div class="ds-sidebar__foot"><p class="ds-sidebar__note">Own reports only</p></div>
</aside>
```
