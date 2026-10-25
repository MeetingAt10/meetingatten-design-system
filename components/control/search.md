---
title: Search
description: A text field with a magnifier and a clear button; Escape clears and Enter submits.
react: Search
---
# Search

Search is a text field with a magnifier at the start and a clear button that appears once there is text. Escape clears it and Enter submits. Its label is always present: visible, or for assistive tech only when the page already makes the purpose clear.

## When to use

- Use it to search posts, people or records within a page or the workspace.
- Use `size="sm"` in the [TopBar](../navigation/top-bar.md) with the `ds-topbar__search` class.
- Use `showLabel` when the field stands alone on a page.
- Don't use it to jump between pages and actions; use the [CommandPalette](../navigation/command-palette.md).
- Don't show results inside the field; show them in the page with a short status line.

## Anatomy

| Part | Class | Notes |
|---|---|---|
| Field | `.ds-field` | Holds the label and the group |
| Label | `.ds-field__label` or `.ds-visually-hidden` | Visible with `showLabel`, otherwise hidden but read |
| Group | `.ds-input-group` | Positions the icon and the clear button |
| Magnifier | `.ds-input-group__icon` | `search` icon, 20px, secondary ink |
| Input | `.ds-input` | The text field slot; `.ds-input--sm` for 40px |
| Clear | `.ds-icon-btn.ds-input-group__action` | 16px `x` icon, named "Clear search", hidden while the field is empty |

## States

| State | Looks | Set by |
|---|---|---|
| Empty | Placeholder in secondary ink; clear button hidden | `[data-empty]` on the field |
| Has text | Clear button shows at the end | no `[data-empty]` |
| Hover | Rule darkens to `border-strong` | `:hover`, `[data-hovered]` |
| Focus | Rule in the focus color plus a 2px ring | `:focus`, `[data-focused]` |
| Disabled | Dashed rule on the disabled ground | `isDisabled`, `:disabled`, `[data-disabled]` |

## Behavior and accessibility

- React Aria `SearchField`: the input is `type="search"`; Escape clears it; Enter calls `onSubmit`; clearing calls `onClear`.
- The clear button is left out of the tab order; keyboard users press Escape.
- The platform's own clear glyph is hidden, so there is only one clear control.
- The label is always in the markup, even when hidden.
- Announce result counts in a status message near the results, once, not on every keystroke.
- Forced colors: focus is a 2px `Highlight` outline.

## React

```tsx
import { Search } from '@meetingat10/design-system/react';

<Search label="Search the community" showLabel placeholder="Search posts and topics" onSubmit={runSearch} />
<Search label="Search ACCS" size="sm" placeholder="Search" className="ds-topbar__search" />
```

Other React Aria `SearchField` props (`value`, `onChange`, `onClear`, `isDisabled`) pass through.

## Plain CSS

```html
<form class="ds-field" role="search" data-empty>
  <label class="ds-visually-hidden" for="q">Search the community</label>
  <div class="ds-input-group">
    <svg class="ds-icon ds-input-group__icon" aria-hidden="true"><use href="sprite.svg#ds-search"/></svg>
    <input class="ds-input" id="q" type="search" placeholder="Search posts and topics">
    <button class="ds-icon-btn ds-input-group__action" type="button" aria-label="Clear search">
      <svg class="ds-icon ds-icon--16" aria-hidden="true"><use href="sprite.svg#ds-x"/></svg>
    </button>
  </div>
</form>
```

In plain markup, remove `data-empty` from the wrapper while the input has text, and clear the input on Escape yourself.
