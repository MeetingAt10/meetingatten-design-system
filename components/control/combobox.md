---
title: ComboBox
description: Type to filter a longer list, then pick one option; the caret button opens the full list.
react: ComboBox
---
# ComboBox

A combobox is a text input that filters a list as people type, then picks one option. The caret button at the end opens the full list. Use it when the list is long enough that scrolling a [Select](select.md) would be slow.

## When to use

- Use it for long lists people can name: courses, faculty, rooms.
- Use `emptyMessage` to say plainly that nothing matched.
- Use `allowsCustomValue` only when free text is a valid answer.
- Don't use it for short lists; use a [Select](select.md) or a [RadioGroup](radio.md).
- Don't use it as site search; use [Search](search.md) or the [CommandPalette](../navigation/command-palette.md).

## Anatomy

| Part | Class | Notes |
|---|---|---|
| Field | `.ds-field` | Label, description, control and error ([Field](field.md)) |
| Wrapper | `.ds-combobox` | Positions the caret button; the input leaves room for it |
| Input | `.ds-input` | The text field slot |
| Caret button | `.ds-icon-btn.ds-combobox__button` | 16px `caret-down`, turns 180 degrees while the list is open |
| List sheet | `.ds-popover` | Overlay sheet, 6px from the input |
| List | `.ds-listbox` | [SelectOption](select-option.md) rows; `.ds-listbox__empty` when nothing matches |
| Match | `.ds-option mark` | Matched text on the yellow highlighter, when you mark it |

## States

| State | Looks | Set by |
|---|---|---|
| Default | Text field slot with the caret button | none |
| Hover | Rule darkens to `border-strong` | `:hover`, `[data-hovered]` |
| Focus | Rule in the focus color plus a 2px ring | `:focus`, `[data-focused]` |
| Open | List showing, caret turned over | `[aria-expanded="true"]` on the button |
| No matches | The empty message in the list | `emptyMessage` (default "No matches") |
| Invalid | Rule in danger ink, error line below | `isInvalid`, `[aria-invalid="true"]`, `[data-invalid]` |
| Disabled | Dashed rule on the disabled ground | `isDisabled`, `:disabled`, `[data-disabled]` |

## Behavior and accessibility

- React Aria `ComboBox`: role `combobox` on the input. Typing filters and opens the list; Arrow Down opens it; arrows move through options; Enter chooses; Escape closes.
- The caret button is named by React Aria ("Show suggestions") and is left out of the tab order.
- With `defaultItems`, React Aria filters with a "contains" match. With `items`, filter the list yourself (for example from a server).
- The list stays open when it is empty so the empty message is read.
- Reduced motion: the caret turns at once.
- Forced colors: focused and selected options take `Highlight`.

## React

```tsx
import { ComboBox, SelectOption } from '@meetingat10/design-system/react';

const courses = [
  { id: 'ds', name: 'Data Structures' },
  { id: 'db', name: 'Databases' },
  { id: 'se', name: 'Software Engineering' },
];

<ComboBox label="Course" placeholder="Type a course" defaultItems={courses}
  emptyMessage="No course matches. Check the spelling or the course code.">
  {(item) => <SelectOption id={item.id}>{item.name}</SelectOption>}
</ComboBox>
```

React Aria 1.22 uses `value`, `defaultValue` and `onChange` for the chosen key, and `inputValue` with `onInputChange` for the typed text.

## Plain CSS

```html
<div class="ds-field">
  <label class="ds-field__label" for="course">Course</label>
  <div class="ds-combobox">
    <input class="ds-input" id="course" role="combobox" aria-expanded="false" aria-controls="course-list" aria-autocomplete="list" placeholder="Type a course">
    <button class="ds-icon-btn ds-combobox__button" type="button" tabindex="-1" aria-label="Show suggestions" aria-expanded="false">
      <svg class="ds-icon ds-icon--16" aria-hidden="true"><use href="sprite.svg#ds-caret-down"/></svg>
    </button>
  </div>
</div>
```

Plain markup needs a script for filtering and keyboard behavior.
