---
title: Text Area
description: Several lines of text that grow with the content, with a label, help, an error and an optional count.
react: TextArea
---
# Text Area

A text area takes several lines: what happened, a question for a consultation, a post. It is the text field's paper slot, 128px tall to start, growing with its content up to a limit. A live count can show how much of the limit is used.

## When to use

- Use it for free text longer than one line.
- Use `showCount` with `maxLength` when there is a real limit.
- In report forms, use the description to say what to leave out ("Leave out names you do not need to share.").
- Don't use it for one-line answers; use [TextField](text-field.md).

## Anatomy

| Part | Class | Notes |
|---|---|---|
| Field | `.ds-field` | Label, description, control and error ([Field](field.md)) |
| Area | `.ds-input.ds-textarea` | 128px minimum (`--ds-size-textarea-h`), 12px vertical padding, line height 1.5, grows with content up to 24rem, resizes vertically |
| Count | `.ds-field__count` | "120 / 500" in Inter 500 12px with tabular figures, at the end of the row |
| Foot | `.ds-field__foot` | Plain markup row holding the error and the count |

## States

| State | Looks | Set by |
|---|---|---|
| Default | Paper slot with a solid `border-default` rule | none |
| Hover | Rule darkens to `border-strong` | `:hover`, `[data-hovered]`, `.is-hover` |
| Focus | Rule in the focus color plus a 2px ring | `:focus`, `[data-focused]`, `.is-focus` |
| Invalid | Rule in danger ink; error line; text kept | `isInvalid`, `[aria-invalid="true"]`, `[data-invalid]`, `.is-error` |
| Disabled | Dashed rule on the disabled ground | `isDisabled`, `:disabled`, `[data-disabled]` |
| Read-only | Hairline rule, no fill | `isReadOnly`, `:read-only` |

## Behavior and accessibility

- React Aria `TextField` with a `textarea`: label, description and error are wired to it.
- The area grows with its content where the browser supports `field-sizing: content`; elsewhere people resize it by dragging the corner.
- `maxLength` stops input at the limit. The count updates as people type and is a polite live region.
- Keep the user's text on every error, including network failures.
- Reduced motion: rule and ring changes land at once.
- Forced colors: focus is a 2px `Highlight` outline.

## React

```tsx
import { TextArea } from '@meetingat10/design-system/react';

<TextArea
  label="What happened"
  description="Leave out names you do not need to share."
  showCount
  maxLength={500}
/>
```

Other React Aria `TextField` props (`value`, `onChange`, `isRequired`, `isInvalid`, `errorMessage`, `placeholder`) pass through.

## Plain CSS

```html
<div class="ds-field">
  <label class="ds-field__label" for="what">What happened</label>
  <p class="ds-field__description" id="what-desc">Leave out names you do not need to share.</p>
  <textarea class="ds-input ds-textarea" id="what" maxlength="500" aria-describedby="what-desc"></textarea>
  <div class="ds-field__foot"><span class="ds-field__count">0 / 500</span></div>
</div>
```
