---
title: Mobile Header
description: The sticky 56px bar below 1024px with the menu control, the wordmark and one or two actions.
react: MobileHeader
---
# Mobile Header

The mobile header is the sticky 56px bar on phones and tablets: the menu control, the brand (the door plate on ACCS surfaces, the [Logo](../identity/logo.md) on Meeting At 10 surfaces) and one or two actions. [AppShell](app-shell.md) renders it below 1024px and hides it on desktop.

## When to use

- Use it through AppShell (`mobileBrand`, `mobileNav`, `mobileActions`), or on its own in a small-screen layout.
- Keep the end slot to one or two icon actions (notifications, search).
- Don't put the page title here; the page heading stays in the content.

## Anatomy

| Part | Class | Notes |
|---|---|---|
| Bar | `.ds-mobile-header` | Sticky, 56px, paper with a hairline below, `--ds-z-sticky` |
| Start | slot | Usually the menu [IconButton](../control/icon-button.md) (`list`) |
| Brand | `.ds-mobile-header__brand` | A small [DoorPlate](../identity/door-plate.md) on ACCS surfaces, `Logo size="sm"` on Meeting At 10 surfaces; grows to fill |
| Actions | `.ds-mobile-header__actions` | Icon buttons |

## States

| State | Looks | Set by |
|---|---|---|
| Default | Menu, brand, actions | none |
| From 1024px | Hidden inside AppShell | `.ds-shell .ds-mobile-header` |

## Behavior and accessibility

- A `<header>` landmark. Icon buttons are 44px on coarse pointers and always named.
- The menu button opens the navigation drawer; React Aria returns focus to it when the drawer closes.

## React

```tsx
import { MobileHeader, IconButton, DoorPlate } from '@meetingat10/design-system/react';

<MobileHeader
  start={<IconButton icon="list" label="Open navigation" tooltip={false} onPress={openNav} />}
  end={<IconButton icon="bell" label="Notifications" tooltip={false} />}
>
  <DoorPlate size="sm" />
</MobileHeader>
```

## Plain CSS

```html
<header class="ds-mobile-header">
  <button class="ds-icon-btn" type="button" aria-label="Open navigation"><svg class="ds-icon" aria-hidden="true"><use href="sprite.svg#ds-list"/></svg></button>
  <span class="ds-mobile-header__brand"><span class="ds-plate ds-plate--sm"><span class="ds-plate__name">ACCS</span></span></span>
  <span class="ds-mobile-header__actions"><button class="ds-icon-btn" type="button" aria-label="Notifications"><svg class="ds-icon" aria-hidden="true"><use href="sprite.svg#ds-bell"/></svg></button></span>
</header>
```
