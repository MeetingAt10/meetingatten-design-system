---
title: Popover
description: A floating sheet anchored to its trigger for extra detail or a quick setting, closed by Escape or a click outside.
react: Popover
---
# Popover

A popover is a floating sheet anchored to its trigger. The `Popover` component holds a small dialog: extra detail ("Why 30 minutes?") or a quick setting. The same `.ds-popover` sheet carries the lists of [Select](../control/select.md), [ComboBox](../control/combobox.md) and [Menu](../navigation/menu.md), and the [Date Picker](../control/date-picker.md) calendar.

## When to use

- Use it for short, optional detail or a quick setting next to the control it is about.
- Give it a `title`, or a `label` when there is no visible heading.
- Don't use it for a decision that must block the page; use a [Modal](modal.md).
- Don't use it to name an icon-only control; use a [Tooltip](tooltip.md).
- Don't keep policy or privacy text only in a popover; state it on the page.

## Anatomy

| Part | Class | Notes |
|---|---|---|
| Sheet | `.ds-popover` | Overlay background and overlay shadow, radius 12, no rule; at most the viewport width minus 32px; scrolls within the visible viewport height |
| Dialog | `.ds-popover__dialog` | `role="dialog"`, 16px padding, 12px gap |
| Title | `.ds-popover__title` | Label style; names the dialog |
| Arrow | `.ds-popover__arrow` | Optional 14x8px pointer in the sheet color |

## States

| State | Looks | Set by |
|---|---|---|
| Entering | Fades in and moves 6px out from the trigger side | `[data-entering]`, `[data-placement]` |
| Exiting | Fades out | `[data-exiting]` |
| Placement | Below the trigger, aligned to its start, by default; flips to stay on screen | `placement` (default `bottom start`), `[data-placement]` |
| With arrow | A pointer toward the trigger; the sheet sits 12px away instead of 8px | `arrow` |

## Behavior and accessibility

- React Aria `DialogTrigger`, `Popover` and `Dialog`: pressing the trigger opens it and focus moves into the dialog; Escape or a click outside closes it, and focus returns to the trigger.
- `title` renders the dialog heading, which names it; without a title, `label` becomes its `aria-label`.
- `trigger` must be a React Aria pressable element, usually [Button](../control/button.md) or [IconButton](../control/icon-button.md).
- Elevation is declared once: a shadow, no rule.
- Reduced motion: it opens and closes at once.
- Forced colors: the sheet keeps a `CanvasText` edge.

## React

```tsx
import { Button, Popover } from '@meetingat10/design-system/react';

<Popover
  trigger={<Button variant="secondary" icon="question">Why 30 minutes?</Button>}
  title="Consultation length"
  arrow
>
  <p className="ds-type-body-small ds-secondary">Slots are 30 minutes. Book two in a row for longer topics.</p>
</Popover>
```

`placement` defaults to `bottom start`.

## Plain CSS

```html
<button class="ds-btn ds-btn--secondary" type="button" aria-expanded="true" aria-controls="length-pop">Why 30 minutes?</button>
<div class="ds-popover" id="length-pop" data-placement="bottom">
  <div class="ds-popover__dialog" role="dialog" aria-labelledby="length-title">
    <h3 class="ds-popover__title" id="length-title">Consultation length</h3>
    <p class="ds-type-body-small ds-secondary">Slots are 30 minutes. Book two in a row for longer topics.</p>
  </div>
</div>
```

In plain markup, positioning, Escape and outside clicks are yours.
