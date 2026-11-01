---
title: Select Option
description: One row in a Select or ComboBox list, on the shared listbox sheet, with a check when selected.
react: SelectOption
---
# Select Option

A select option is one row in the list of a [Select](select.md) or [ComboBox](combobox.md). Rows sit 2px apart on the floating sheet; the focused row takes the schedule highlighter wash and the selected row gets weight and a check. The same listbox rows also carry [Menu](../navigation/menu.md) items and [CommandPalette](../navigation/command-palette.md) results.

## When to use

- Use it as the child of a Select or ComboBox, one per choice.
- Use `description` for a short second line that helps people choose ("Proposal, chapters or defense").
- Use `icon` when the options are easier to scan with a picture of the topic.
- Don't put actions in a listbox; actions belong in a [MenuButton](../navigation/menu.md).

## Anatomy

| Part | Class | Notes |
|---|---|---|
| List | `.ds-listbox` | 4px padding, 2px between rows, at least the trigger's width (12rem minimum), scrolls past 22rem |
| Row | `.ds-option` | 40px minimum (44px on coarse pointers), 8px 12px padding, radius 6, body small |
| Icon | `.ds-icon` | 16px, first in the row, secondary ink |
| Text | `.ds-option__text` | The label, and the description under it |
| Description | `.ds-option__description` | Caption, secondary ink |
| Check | `.ds-option__check` | 16px navy check at the end (bold weight), shown only when selected |
| Keys | `.ds-option__keys` | Shortcut keycaps at the end (menus) |
| Danger | `.ds-option--danger` | Danger ink for destructive menu items |
| Section | `.ds-listbox__section`, `.ds-listbox__header` | Groups with a caption header; a rule separates groups |
| Separator | `.ds-listbox__separator` | 1px rule between groups |
| Empty | `.ds-listbox__empty` | Centered body-small message when nothing matches |

## States

| State | Looks | Set by |
|---|---|---|
| Default | Row on the sheet | none |
| Hover or focused | Schedule highlighter wash | `:hover`, `[data-hovered]`, `[data-focused]`, `.is-hover` |
| Keyboard focus | The wash plus a 2px focus outline inside the row | `[data-focus-visible]` |
| Selected | Weight 600 and the check | `[aria-selected="true"]`, `[data-selected]` |
| Disabled | Disabled ink, no wash, `not-allowed` cursor | `isDisabled`, `[aria-disabled="true"]`, `[data-disabled]` |
| Danger | Danger ink; danger ground on hover | `.ds-option--danger` |
| Match | Matched text on the yellow highlighter | `<mark>` inside the row |

## Behavior and accessibility

- React Aria `ListBoxItem`: role `option` with `aria-selected`. Arrow keys move, Enter or a click chooses, typing jumps to a match; disabled rows are skipped.
- When the label is not plain text, pass `textValue` so typing and screen readers get the words.
- The selected row is marked by weight and the check, never by color alone.
- Forced colors: focused and selected rows take `Highlight` with `HighlightText`; disabled rows use `GrayText`.

## React

```tsx
import { Select, SelectOption } from '@meetingat10/design-system/react';

<Select label="Topic" placeholder="Choose a topic">
  <SelectOption id="planning" icon="graduation-cap">Course planning</SelectOption>
  <SelectOption id="thesis" icon="notepad" description="Proposal, chapters or defense">Thesis advising</SelectOption>
  <SelectOption id="career" icon="rocket" isDisabled>Career guidance (no hours this week)</SelectOption>
</Select>
```

Other React Aria `ListBoxItem` props (`id`, `textValue`, `isDisabled`) pass through.

## Plain CSS

```html
<div class="ds-popover">
  <div class="ds-listbox" role="listbox" aria-label="Topic">
    <div class="ds-option" role="option" aria-selected="true">
      <svg class="ds-icon ds-icon--16" aria-hidden="true"><use href="sprite.svg#ds-graduation-cap"/></svg>
      <span class="ds-option__text">Course planning</span>
      <svg class="ds-icon ds-icon--16 ds-option__check" aria-hidden="true"><use href="sprite.svg#ds-check"/></svg>
    </div>
    <div class="ds-option" role="option" aria-selected="false">
      <span class="ds-option__text">Thesis advising<span class="ds-option__description">Proposal, chapters or defense</span></span>
      <svg class="ds-icon ds-icon--16 ds-option__check" aria-hidden="true"><use href="sprite.svg#ds-check"/></svg>
    </div>
    <div class="ds-option" role="option" aria-selected="false" aria-disabled="true">Career guidance</div>
  </div>
</div>
```

Listbox markup needs a script for keyboard behavior; in plain pages prefer a native `<select class="ds-select-trigger">`.
