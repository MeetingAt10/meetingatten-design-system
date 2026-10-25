---
title: Select
description: Pick one option from a short list; the trigger matches the text input and the list floats on an overlay sheet.
react: Select
---
# Select

A select picks one option from a short list. The trigger is shaped like the text input and shows the chosen value or a placeholder; the list opens on a floating sheet with ruled option rows, and the caret turns over while it is open.

## When to use

- Use it for one choice from a short, known list (topics, sections, meeting types).
- Use a [RadioGroup](radio.md) when there are two to four options people should see at once.
- Use a [ComboBox](combobox.md) when the list is long enough that typing to filter helps.
- Use a native `<select class="ds-select-trigger">` in plain markup; it keeps the platform behavior.
- Don't use it for actions; use a [MenuButton](../navigation/menu.md).

## Anatomy

| Part | Class | Notes |
|---|---|---|
| Field | `.ds-field.ds-select` | Label, description, trigger and error ([Field](field.md)) |
| Trigger | `.ds-select-trigger` | 48px, radius 8, `border-default` rule on paper, body text |
| Value | `.ds-select-trigger__value` | Chosen text, or the placeholder in secondary ink; truncates with an ellipsis |
| Caret | `.ds-select-trigger__caret` | 16px `caret-down`, turns 180 degrees while open |
| List sheet | `.ds-popover` | Overlay sheet with the overlay shadow, 6px from the trigger |
| List | `.ds-listbox` | Option rows ([SelectOption](select-option.md)) |

## States

| State | Looks | Set by |
|---|---|---|
| Placeholder | Placeholder text in secondary ink | `placeholder`, `[data-placeholder]` on the value |
| Hover | Rule darkens to `border-strong` | `:hover`, `[data-hovered]`, `.is-hover` |
| Open | Rule in the focus color, caret turned over, list showing | `[aria-expanded="true"]`, `[data-pressed]` |
| Focus | 2px focus ring with a 2px gap | `:focus-visible` |
| Invalid | Rule in danger ink, error line below | `isInvalid`, `[aria-invalid="true"]`, `[data-invalid]`, `.is-error` |
| Disabled | Dashed rule on the disabled ground, disabled ink | `isDisabled`, `:disabled`, `[data-disabled]` |
| Compact | 40px with body-small text on fine pointers | `data-density="compact"` on an ancestor |

## Behavior and accessibility

- React Aria `Select`: the trigger has `aria-haspopup="listbox"`. Enter, Space or Arrow Down opens the list; arrows move; typing jumps to a match; Enter chooses; Escape closes; focus returns to the trigger.
- A hidden native select carries the value in forms (`name`).
- The label stays visible; the placeholder never replaces it.
- The caret turns on the snappy spring; under reduced motion it turns at once.
- Forced colors: the focused option and the selected option take `Highlight`; disabled triggers use `GrayText`.

## React

```tsx
import { Select, SelectOption } from '@meetingat10/design-system/react';

<Select label="Topic" placeholder="Choose a topic" description="One topic per consultation."
  value={topic} onChange={setTopic}>
  <SelectOption id="planning" icon="graduation-cap">Course planning</SelectOption>
  <SelectOption id="thesis" icon="notepad" description="Proposal, chapters or defense">Thesis advising</SelectOption>
  <SelectOption id="career" icon="rocket">Career guidance</SelectOption>
</Select>
```

Pass `items` and a render function for dynamic lists. React Aria 1.22 uses `value`, `defaultValue` and `onChange`; `selectedKey` and `onSelectionChange` still work but are deprecated there.

## Plain CSS

```html
<div class="ds-field ds-select">
  <label class="ds-field__label" for="topic">Topic</label>
  <select class="ds-select-trigger" id="topic">
    <option value="">Choose a topic</option>
    <option value="planning">Course planning</option>
    <option value="thesis">Thesis advising</option>
  </select>
</div>

<!-- Custom trigger, when a script provides the listbox: -->
<button class="ds-select-trigger" type="button" aria-haspopup="listbox" aria-expanded="false">
  <span class="ds-select-trigger__value">Course planning</span>
  <svg class="ds-icon ds-icon--16 ds-select-trigger__caret" aria-hidden="true"><use href="sprite.svg#ds-caret-down"/></svg>
</button>
```
