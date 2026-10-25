---
title: Severity
description: One to three filled segments plus a word for how serious something is, a family separate from status.
react: Severity
---
# Severity

Severity shows how serious something is: three rising segments, one to three of them filled, plus the word ("Low", "Medium", "High"). It is its own family, independent of status: a resolved item can still have been high severity. The word carries the level; the segments repeat it.

## When to use

- Use it where triage needs a level, next to the status and never merged with it.
- Keep the word; it defaults to the level itself ("High").
- Don't use it for status, roles or lanes.
- Don't infer severity from a lane color or a status tone.

## Anatomy

| Part | Class | Notes |
|---|---|---|
| Root | `.ds-severity` | Inline row, 8px gap, caption type, ink text |
| Segments | `.ds-severity__bars` | Three 4px bars, 6, 9 and 12px tall, 2px apart; empty bars in `border-subtle`; decorative |
| Level | `.ds-severity--low`, `--medium`, `--high` | Fills one, two or three bars |

## States

| State | Looks | Set by |
|---|---|---|
| Low | First bar filled in ink; word "Low" | `level="low"`, `.ds-severity--low` |
| Medium | Two bars filled in ink; word "Medium" | `level="medium"`, `.ds-severity--medium` |
| High | All three bars filled in danger ink; word "High" | `level="high"`, `.ds-severity--high` |

## Behavior and accessibility

- Text in a `span`; the bars are `aria-hidden` and the word is read. Change the word with `children` ("High priority") and keep the level clear.
- Separate from status: show a [Status Badge](status.md) beside it when both matter.
- No motion.
- Forced colors: lit bars fill with `CanvasText` and unlit bars become `CanvasText` outlines, so the level still reads beside the word.

## React

```tsx
import { Severity } from '@meetingat10/design-system/react';

<Severity level="low" />
<Severity level="medium" />
<Severity level="high">High priority</Severity>
```

## Plain CSS

```html
<span class="ds-severity ds-severity--medium">
  <span class="ds-severity__bars" aria-hidden="true"><i></i><i></i><i></i></span>Medium
</span>
```
