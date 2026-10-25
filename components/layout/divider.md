---
title: Divider
description: A hairline rule between sections, optionally labeled with what follows, or vertical between toolbar groups.
react: Divider
---
# Divider

A divider is a hairline rule. It separates the sections of a detail page, names a break in a feed ("Today", "Earlier"), or splits groups in a toolbar. Use rules and headings to structure a page instead of wrapping sections in cards.

## When to use

- Use a plain rule between sections of a detail page or a panel.
- Use a labeled rule to break a feed or a list by time ("Today", "Earlier this week").
- Use a vertical rule between groups of controls in a toolbar row.
- Use `strong` only where a hairline is too faint against a busy background.
- Don't wrap sections in [Cards](../content/card.md) to separate them, and don't stack a divider against a rule that is already there (a sheet edge, a table border).

## Anatomy

| Part | Class | Notes |
|---|---|---|
| Rule | `.ds-divider` | 1px `border-subtle` hairline, full width, no margin |
| Strong | `.ds-divider--strong` | 1px `border-default` instead |
| Labeled | `.ds-divider--label` | Caption 600 12/16 in secondary text between two hairlines: a 16px lead-in, then a rule that fills the rest |
| Vertical | `.ds-divider--vertical` | 1px inline-start hairline that stretches to the height of its row |

## States

| State | Looks | Set by |
|---|---|---|
| Hairline | Subtle 1px rule | default, `<hr class="ds-divider">` |
| Strong | Darker 1px rule | `strong`, `.ds-divider--strong` |
| Labeled | Short rule, the label, long rule | `label`, `.ds-divider--label` |
| Vertical | Upright rule in a flex row | `vertical`, `.ds-divider--vertical` |

## Behavior and accessibility

- A plain divider renders `<hr>`, which screen readers announce as a separator. A vertical divider is `role="separator"` with `aria-orientation="vertical"`.
- A labeled divider is plain text between two drawn rules, so screen readers read the label in place and the rules stay decoration. If the label names a section people jump to, use a heading instead.
- Rules are 1px and never carry state; they only separate.
- No motion: nothing changes under reduced motion.
- Forced colors: rules take the system text color and stay visible.

## React

```tsx
import { Divider, Row, IconButton } from '@meetingat10/design-system/react';

<Divider />
<Divider label="Today" />
<Divider strong />

<Row gap={8}>
  <IconButton icon="pencil" label="Edit draft" />
  <IconButton icon="copy" label="Copy reference" />
  <Divider vertical />
  <IconButton icon="trash" label="Discard draft" />
</Row>
```

`label` takes precedence over `vertical` and `strong`.

## Plain CSS

```html
<hr class="ds-divider">
<hr class="ds-divider ds-divider--strong">
<div class="ds-divider ds-divider--label">Today</div>
<span class="ds-divider ds-divider--vertical" role="separator" aria-orientation="vertical"></span>
```
