---
title: Text Field
description: One line of text with a persistent label, help text and an error that keeps what was typed.
react: TextField
---
# Text Field

A text field takes one line of text: a subject, a course code, a room, an email. It is a paper slot with a solid rule under a visible label. Focus draws the focus color on the rule plus a ring; an error turns the rule danger and keeps the text.

## When to use

- Use it for short free text and codes ("Subject", "Course code", "CCS 304").
- Use `icon` for a start icon that helps recognition (`map-pin` for a room).
- Use `type`, `autoComplete` and `inputMode` so phones show the right keyboard.
- Don't use it for several lines; use [TextArea](text-area.md). Don't use it for search; use [Search](search.md).
- Don't use the placeholder as the label; keep it for a format hint.

## Anatomy

| Part | Class | Notes |
|---|---|---|
| Field | `.ds-field` | Label, description, control and error ([Field](field.md)) |
| Input | `.ds-input` | 48px tall, 16px side padding, radius 8, `border-default` rule on paper, body text |
| Small | `.ds-input--sm` | 40px (44px on coarse pointers) |
| Icon group | `.ds-input-group` | Wraps the input when there is a start icon |
| Start icon | `.ds-input-group__icon` | 20px, secondary ink, 16px from the start edge |

## States

| State | Looks | Set by |
|---|---|---|
| Default | Paper slot with a solid `border-default` rule | none |
| Hover | Rule darkens to `border-strong` | `:hover`, `[data-hovered]`, `.is-hover` |
| Focus | Rule in the focus color plus a 2px ring | `:focus`, `[data-focused]`, `.is-focus` |
| Invalid | Rule in danger ink (the ring too when focused); error line below; text kept | `isInvalid`, `[aria-invalid="true"]`, `[data-invalid]`, `.is-error` |
| Disabled | Dashed rule on the disabled ground, disabled ink | `isDisabled`, `:disabled`, `[data-disabled]` |
| Read-only | Hairline rule, no fill | `isReadOnly`, `:read-only` |
| Compact | 40px tall with body-small text on fine pointers | `data-density="compact"` on an ancestor |

## Behavior and accessibility

- React Aria `TextField`: the label, description and error are wired to the input; required and invalid states are exposed.
- Text is 16px on touch screens, so phones never zoom into the field.
- Validation comes from `isRequired`, `validate` or native constraints; for server errors pass `isInvalid` and `errorMessage`. The typed text always stays.
- Disabled fields keep a readable value; say why nearby when the reason is not obvious.
- Reduced motion: rule and ring changes land at once.
- Forced colors: focus is a 2px `Highlight` outline; disabled inputs use a `GrayText` edge.

## React

```tsx
import { TextField } from '@meetingat10/design-system/react';

<TextField label="Subject" description="Shown to the faculty member you book." isRequired />
<TextField label="Course code" defaultValue="CCS 10" isInvalid
  errorMessage="Couldn't find CCS 10. Check the code; your text is kept." />
<TextField label="Room" icon="map-pin" placeholder="CCS 304" />
<TextField label="Section" defaultValue="BSCS 3-A" isDisabled />
<TextField label="School email" type="email" autoComplete="email" size="sm" />
```

`size` is `md` (48px, default) or `sm` (40px). Other React Aria `TextField` props (`value`, `onChange`, `name`, `maxLength`, `validate`, `isReadOnly`) pass through.

## Plain CSS

```html
<div class="ds-field">
  <label class="ds-field__label" for="room">Room</label>
  <div class="ds-input-group">
    <svg class="ds-icon ds-input-group__icon" aria-hidden="true"><use href="sprite.svg#ds-map-pin"/></svg>
    <input class="ds-input" id="room" placeholder="CCS 304">
  </div>
</div>

<div class="ds-field">
  <label class="ds-field__label" for="code">Course code</label>
  <input class="ds-input" id="code" value="CCS 10" aria-invalid="true" aria-describedby="code-err">
  <p class="ds-field__error" id="code-err">
    <svg class="ds-icon ds-icon--16" aria-hidden="true"><use href="sprite.svg#ds-warning-circle-fill"/></svg>
    Couldn't find CCS 10. Check the code; your text is kept.
  </p>
</div>
```
