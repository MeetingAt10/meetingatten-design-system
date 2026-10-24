# Table

| Anatomy | Notes |
|---|---|
| Wrapper `ds-table-wrap` | Border, card radius, horizontal scroll |
| `<caption>` | Title or visually hidden label |
| Header row | Sunken bg, 12px uppercase, `ink-secondary` |
| Body row | `row-h` (40px), 1px `line` divider |
| Cells | Text left, numbers right with tabular figures, status as badge |

| State | Treatment |
|---|---|
| Hover | `surface-sunken` |
| Selected | `aria-selected="true"`, `action-subtle` bg |
| Empty | Replace table with [empty state](empty-state.md) |
| Loading | Skeleton rows at `row-h`, `aria-busy="true"` on wrapper |
| Sorted | Header button with `aria-sort`, chevron icon 16px |

Tokens: `surface`, `surface-sunken`, `line`, `ink-secondary`, `action-subtle`, `radius-card`, `row-h`, `text-sm`, `text-xs`.

A11y: real `<table>`, `<th scope="col">`, caption, sortable headers are `<button>`s, never rely on row color alone, scroll container is focusable (`tabindex="0"`) with a label when overflowing.

```html
<div class="ds-table-wrap"><table class="ds-table">
  <caption>Support requests</caption>
  <thead><tr><th scope="col">Request</th><th scope="col">Status</th><th scope="col" class="num">Age</th></tr></thead>
  <tbody><tr><td>Adviser change</td><td><span class="ds-badge ds-badge--info">In review</span></td><td class="num">2 d</td></tr></tbody>
</table></div>
```
