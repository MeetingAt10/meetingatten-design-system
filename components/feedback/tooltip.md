---
title: Tooltip
description: A small ink plate that names an icon-only control on hover and keyboard focus.
react: Tooltip
---
# Tooltip

A tooltip is a small ink plate that names an icon-only control, with the same words as its accessible name ("Notifications, 2 unread"). It appears on hover and keyboard focus, next to its trigger, with a small arrow. [IconButton](../control/icon-button.md) adds one for you.

## When to use

- Use it to repeat the name of an icon-only control for sighted mouse and keyboard users.
- Use it for one short, non-essential hint ("All times are local campus time") when the page states the same fact elsewhere.
- Don't put essential information, policy text or anything interactive in a tooltip; people on touch screens never see it, and links inside it cannot be reached. Policy text belongs on the page ([Privacy Notice](privacy-notice.md)).
- Don't use it as a control's only label; the control needs its own accessible name.

## Anatomy

| Part | Class | Notes |
|---|---|---|
| Plate | `.ds-tooltip` | Ink plate (`inverse-bg`, `inverse-fg`), radius 6, 4px 8px padding, Inter 500 13/18, up to 18rem wide, lift shadow, no rule |
| Arrow | `.ds-tooltip__arrow` | 10x6px pointer in the plate color, turned to face the trigger |
| Shortcut | `.ds-kbd` inside the plate | Keycap redrawn as an outline in `inverse-muted` |

## States

| State | Looks | Set by |
|---|---|---|
| Hidden | Not rendered | default |
| Entering | Fades in and moves 4px out from the trigger side | `[data-entering]`, `[data-placement]` |
| Exiting | Fades out | `[data-exiting]` |
| Placement | Above the trigger by default; flips when there is no room | `placement`, `[data-placement]` |

## Behavior and accessibility

- React Aria `TooltipTrigger` and `Tooltip`: the tooltip opens after a delay on hover and at once on keyboard focus, and closes on Escape, blur or pointer leave. Touch does not open it.
- The trigger must be a focusable React Aria element ([Button](../control/button.md), [IconButton](../control/icon-button.md), [Link](../navigation/link.md)). While open, the tooltip describes its trigger.
- Defaults: `placement="top"`, `offset={8}`. `TooltipTrigger` takes `delay` and `closeDelay`; IconButton uses 500ms and 100ms.
- Elevation is declared once: the plate has a shadow and no rule.
- Reduced motion: it appears and hides at once.
- Forced colors: the plate keeps a `CanvasText` edge.

## React

```tsx
import { Button, IconButton, Tooltip, TooltipTrigger } from '@meetingat10/design-system/react';

<IconButton icon="bell" label="Notifications, 2 unread" dot />

<TooltipTrigger delay={300}>
  <Button variant="tertiary" icon="info">Campus time</Button>
  <Tooltip placement="bottom">All times are local campus time.</Tooltip>
</TooltipTrigger>
```

`Tooltip` children are short text. Other React Aria `Tooltip` props (`placement`, `offset`, `crossOffset`) pass through.

## Plain CSS

```html
<button class="ds-icon-btn" type="button" aria-label="Notifications" aria-describedby="tip-bell">
  <svg class="ds-icon" aria-hidden="true"><use href="sprite.svg#ds-bell"/></svg>
</button>
<div class="ds-tooltip" role="tooltip" id="tip-bell" data-placement="top">
  Notifications
  <svg class="ds-tooltip__arrow" width="10" height="6" viewBox="0 0 10 6" aria-hidden="true"><path d="M0 0 L5 6 L10 0"/></svg>
</div>
```

The plain layer only draws the plate. Positioning, showing it on hover and focus, and hiding it on Escape are yours.
