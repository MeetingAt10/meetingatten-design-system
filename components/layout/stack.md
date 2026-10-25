---
title: Stack
description: Vertical rhythm with one gap on the 8px module, plus Row for wrapping horizontal groups.
react: Stack
---
# Stack

A stack places its children in one column with a single gap, so spacing comes from the layout and not from margins on each child. Row is its horizontal partner: a wrapping group for buttons, chips and meta. Both live in `Stack.js`.

## When to use

- Use Stack for the vertical rhythm of a form, a panel or a column of blocks.
- Use Row for a group of actions, badges or meta that may wrap on small screens.
- Use the 8px steps (8, 16, 24, 32, 48); 4, 12 and 20 are for tight groups such as a label and its hint.
- Don't add margins to children inside a stack; change the gap instead.
- Don't use Row for page columns; use [Grid](grid.md).

## Anatomy

| Part | Class | Notes |
|---|---|---|
| Stack | `.ds-stack` | CSS grid, 16px gap, `align-content: start` (children never stretch to fill a taller cell), `min-width: 0` |
| Stack gap | `.ds-stack--4`, `--8`, `--12`, `--20`, `--24`, `--32`, `--48` | Gap in px from the space tokens (`--ds-space-*`) |
| Row | `.ds-row` | Wrapping flex row, 12px gap, items centered on the cross axis |
| Row gap | `.ds-row--8`, `.ds-row--16` | 8px or 16px gap |
| Row alignment | `.ds-row--between`, `.ds-row--end` | Push the ends apart, or align to the end |

## States

| State | Looks | Set by |
|---|---|---|
| Default stack | One column, 16px between children | `Stack`, `.ds-stack` |
| Other gaps | 4, 8, 12, 20, 24, 32 or 48px | `gap`, `.ds-stack--N` |
| Default row | Items in a line, 12px apart, wrapping when there is no room | `Row`, `.ds-row` |
| Row justified | Ends apart, or packed to the end | `justify="between"`, `justify="end"` |

## Behavior and accessibility

- Both render a plain `div` with no role. When the children are a list, use list markup (`<ul class="ds-stack">`) in plain CSS, or put a list inside.
- Visual order is DOM order, so reading and focus order match what people see.
- Row wraps instead of overflowing, so actions stay reachable at 320px and at 200% zoom.
- No motion and no fills: nothing changes under reduced motion or forced colors.

## React

```tsx
import { Stack, Row, Button, TextField } from '@meetingat10/design-system/react';

<Stack gap={24}>
  <TextField label="Subject" isRequired />
  <TextField label="Room" placeholder="CCS 304" />
  <Row justify="end">
    <Button variant="secondary">Cancel</Button>
    <Button>Save details</Button>
  </Row>
</Stack>
```

Stack `gap` is 4, 8, 12, 16 (default), 20, 24, 32 or 48. Row `gap` is 8, 12 (default) or 16; `justify` is `start` (default), `between` or `end`. Other `div` attributes pass through.

## Plain CSS

```html
<div class="ds-stack ds-stack--24">
  <div class="ds-field">...</div>
  <div class="ds-field">...</div>
  <div class="ds-row ds-row--end">
    <button class="ds-btn ds-btn--secondary" type="button">Cancel</button>
    <button class="ds-btn ds-btn--primary" type="button">Save details</button>
  </div>
</div>
```
