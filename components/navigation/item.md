---
title: Nav Item
description: One sidebar or mobile-menu destination; the current page becomes a solid navy block with its icon in the fill weight.
react: NavItem
---
# Nav Item

A nav item is one destination in the [Sidebar](sidebar.md), the mobile navigation drawer or the navbar's menu sheet. The current page is a solid navy block with its icon in the fill weight; hovering takes the neutral highlighter wash.

## When to use

- Use it inside a `<nav>` for workspace destinations (Overview, Community, Consultations, My reports).
- Use `count` for unread or open items, and repeat the number in words on the page where it matters.
- Don't use it for actions; use [Button](../control/button.md) or [MenuButton](menu.md).
- Don't use it in running text; use [Link](link.md).

## Anatomy

| Part | Class | Notes |
|---|---|---|
| Item | `.ds-nav-item` | 40px tall (44px on coarse pointers), radius 8, label 600 14px |
| Icon | `.ds-icon` | 20px; regular weight, fill weight when current |
| Label | `.ds-nav-item__label` | One line, ellipsis when too long |
| Count | `.ds-nav-item__count` | Inter 500 12px chip with tabular figures on the neutral wash; reversed on the current item |

## States

| State | Looks | Set by |
|---|---|---|
| Default | Secondary text, no fill | none |
| Hover | Neutral highlighter wash, primary text | `:hover`, `[data-hovered]`, `.is-hover` |
| Current | Solid navy block, white text, fill-weight icon, 1px top highlight | `isCurrent`, `[aria-current="page"]`, `[aria-current="true"]`, `.is-current` |
| Focus | 2px focus ring with a 2px gap | `:focus-visible` |
| Disabled | Disabled text, no fill | `isDisabled`, `[aria-disabled="true"]`, `[data-disabled]` |

## Behavior and accessibility

- A React Aria `Link`; `isCurrent` sets `aria-current="page"`, so screen readers announce the current page.
- The weight change (regular to fill) and the solid block mark the current item together; color is not the only signal.
- Client routing comes from [DesignSystemProvider](../../README.md).
- Forced colors: the current item takes `Highlight` and `HighlightText`; disabled items use `GrayText`.

## React

```tsx
import { NavItem } from '@meetingat10/design-system/react';

<nav aria-label="Main">
  <NavItem href="/" icon="house" isCurrent>Overview</NavItem>
  <NavItem href="/community" icon="chats" count={3}>Community</NavItem>
  <NavItem href="/consultations" icon="chalkboard">Consultations</NavItem>
  <NavItem href="/reports" icon="file">My reports</NavItem>
</nav>
```

## Plain CSS

```html
<nav aria-label="Main">
  <a class="ds-nav-item" href="/" aria-current="page"><svg class="ds-icon" aria-hidden="true"><use href="sprite.svg#ds-house-fill"/></svg><span class="ds-nav-item__label">Overview</span></a>
  <a class="ds-nav-item" href="/community"><svg class="ds-icon" aria-hidden="true"><use href="sprite.svg#ds-chats"/></svg><span class="ds-nav-item__label">Community</span><span class="ds-nav-item__count">3</span></a>
</nav>
```
