---
title: Door Plate
description: The faculty-door name plate, used as the ACCS wordmark until an ACCS logo is approved, and for page plates and room labels.
react: DoorPlate
---
# Door Plate

The door plate is the name plate on a faculty door: a navy plate with white Plus Jakarta Sans 800 text and an optional room code after a thin rule. It is the ACCS wordmark until an ACCS logo is approved, and it also labels pages, rooms and sections. The design system's own logo is the Meeting At 10 [Logo](logo.md). In the dark theme the plate turns pale blue with dark text.

## When to use

- Use it as the brand on ACCS surfaces (landing, portal, admin) in the [Navbar](../navigation/navbar.md), [Sidebar](../navigation/sidebar.md), [MobileHeader](../navigation/mobile-header.md), [Footer](../navigation/footer.md) and [Hero](../layout/hero.md). On Meeting At 10 surfaces the brand is the [Logo](logo.md).
- Use `code` for a room, section or time ("CCS 304", "10:00").
- Use `outline` where a solid plate would compete with the one primary action nearby.
- Don't use it as a badge or a status; use [Badge](../badge/status.md) or [RoleBadge](../badge/role.md).
- Don't present it as an official seal or imply institutional endorsement. It is a text wordmark; the proposed ACCS logo files are not approved ([Logo and assets](../../docs/logo-and-assets.md)).

## Anatomy

| Part | Class | Notes |
|---|---|---|
| Plate | `.ds-plate` | 32px tall, 12px side padding, radius 6 (`--ds-radius-plate`), `--ds-plate-bg` fill with `--ds-plate-fg` text |
| Name | `.ds-plate__name` | Plus Jakarta Sans 800 17px, tracking -0.01em |
| Code | `.ds-plate__code` | JetBrains Mono 500 12px, tabular, after a 1px rule at half opacity |
| Tagline | `.ds-plate__tagline` | Inter 500 12px, wraps within 13rem; for large plates |
| Small | `.ds-plate--sm` | 26px tall, 15px name |
| Large | `.ds-plate--lg` | 48px tall, 24px name, 13px code, 12px gap |
| Outline | `.ds-plate--outline` | No fill, navy text and a 1.5px plate-colored inset rule |

## States

| State | Looks | Set by |
|---|---|---|
| Light theme | Navy plate (`#032E87`), white text, no shadow | `data-theme="light"` or the OS |
| Dark theme | Pale blue plate (`#7C9BFF`), near-black text, a 1px top highlight | `data-theme="dark"` or the OS |
| Sizes | 26px, 32px or 48px tall | `size="sm"`, `"md"` (default), `"lg"` |
| Outline | Plate-colored rule, no fill | `outline`, `.ds-plate--outline` |
| As a link | The surrounding link draws the focus ring | wrap it in a link |

## Behavior and accessibility

- The plate is text: screen readers read the name, then the code ("ACCS, CCS 304").
- With `label`, the plate becomes `role="img"` with that name ("ACCS home") and its own text is not read separately.
- Inside a link (for example the navbar brand), the link is the interactive element and gets the focus ring.
- Plate text on the plate is checked at 4.5:1 in both themes. Monospace is used only for the code.
- No motion: nothing changes under reduced motion.
- Forced colors: the plate keeps a `CanvasText` edge and its text takes the system text color, so it stays legible on any high contrast theme.

## React

```tsx
import { DoorPlate } from '@meetingat10/design-system/react';

<DoorPlate />
<DoorPlate code="CCS 304" />
<DoorPlate size="lg" tagline="Access for College of Computer Studies" />
<DoorPlate size="sm" outline code="Faculty" />
<DoorPlate name="Office hours" code="10:00" />
<DoorPlate label="ACCS home" />
```

`name` defaults to "ACCS". `size` is `sm`, `md` (default) or `lg`.

## Plain CSS

```html
<span class="ds-plate"><span class="ds-plate__name">ACCS</span><span class="ds-plate__code">CCS 304</span></span>

<span class="ds-plate ds-plate--lg">
  <span class="ds-plate__name">ACCS</span>
  <span class="ds-plate__tagline">Access for College of Computer Studies</span>
</span>

<a class="ds-navbar__brand" href="/" aria-label="ACCS home">
  <span class="ds-plate"><span class="ds-plate__name">ACCS</span></span>
</a>
```
