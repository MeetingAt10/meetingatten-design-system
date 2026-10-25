---
title: Table
description: A ruled sheet of rows and columns with keyboard navigation, sortable columns and row selection.
react: Table
---
# Table

A table is a ruled sheet of comparable rows: column headers stay pinned while the body scrolls, the reference cell is set in tabular mono, and hovering a row takes the schedule highlighter wash. The React `Table` adds keyboard navigation, sorting and selection from React Aria. For read-only lists of reports, use [Reports Table](reports-table.md).

## When to use

- Use it for data people compare or act on across columns: requests, records, posts.
- Use sortable columns when order matters to the task; use selection when people act on several rows at once.
- On phones, show one record per row instead, for example [Report Record](report-record.md); keep every field label.
- Don't use a table for page layout or for a single list of links.

## Anatomy

| Part | Class | Notes |
|---|---|---|
| Sheet | `.ds-table-wrap` | Paper with a hairline rule, radius 12, scrolls when the table is wider than the screen |
| Table | `.ds-table` | Body small, tabular figures |
| Caption | `caption` | H4 style, top left (plain HTML tables) |
| Column header | `thead th`, `[role="columnheader"]` | Sticky, caption size 600, secondary text, hairline below |
| Cell | `td`, `[role="rowheader"]`, `[role="gridcell"]` | 12px 16px padding (8px vertical in compact density), hairline between rows |
| Reference | `.ds-table__ref` | Tabular mono 500 13/20 with slashed zero |
| Numeric | `.ds-table__num` | End-aligned |
| Date | `time` in a cell | Never breaks inside the value |
| Check column | `.ds-table__check` | 52px; added by `TableHeader` and `TableRow` when `selectionMode` is set: "Select all" heads it when multiple, each row gets a checkbox named by its row header ("Select DEMO-024") |
| Actions | `.ds-table__actions` | End-aligned, no wrapping |
| Sort control | `.ds-table__sort` | Header label plus a 16px sort icon |
| Empty | `.ds-table__empty` | Centered message in secondary text |

## States

| State | Looks | Set by |
|---|---|---|
| Row hover | Schedule highlighter wash | `:hover`, `[data-hovered]` |
| Row selected | Checked box plus the info ground | `selectionMode`, `[aria-selected="true"]`, `[data-selected]` |
| Unsorted column | `arrows-down-up` icon at half strength | `allowsSorting` |
| Sorted column | `sort-ascending` or `sort-descending` icon in navy | `sortDescriptor`, `[aria-sort]` |
| Focus | 2px focus ring inset on the focused row or cell; on the sheet when it is the focus target | `:focus-visible` |

## Behavior and accessibility

- React Aria grid: Tab moves into the table, arrow keys move between rows and cells, and Space selects a row when `selectionMode` is set.
- Name the table with `aria-label` or `aria-labelledby`. Mark one column `isRowHeader` (usually the reference).
- Sorting is announced through `aria-sort`; the icon shape changes with the direction.
- A selected row shows a checked box as well as the info ground, so selection never rests on color alone. Say the count in words too, for example above the table ("2 selected").
- Monospace is used only for references and codes.
- Reduced motion: hover changes land at once.
- Forced colors: the sheet keeps a `CanvasText` edge; selected rows take `Highlight`.

## React

```tsx
import { Cell, Column, Table, TableBody, TableHeader, TableRow } from '@meetingat10/design-system/react';

<Table
  aria-label="Consultation requests (sample)"
  sortDescriptor={sort}
  onSortChange={setSort}
  selectionMode="multiple"
>
  <TableHeader>
    <Column id="ref" isRowHeader allowsSorting>Reference</Column>
    <Column id="topic" allowsSorting>Topic</Column>
    <Column id="replies" numeric allowsSorting>Replies</Column>
    <Column id="updated" allowsSorting>Updated</Column>
  </TableHeader>
  <TableBody items={rows} renderEmptyState={() => 'No requests yet.'}>
    {(r) => (
      <TableRow id={r.id}>
        <Cell reference>{r.ref}</Cell>
        <Cell>{r.topic}</Cell>
        <Cell numeric>{r.replies}</Cell>
        <Cell><time dateTime={r.updated}>{r.updated}</time></Cell>
      </TableRow>
    )}
  </TableBody>
</Table>
```

`Column` and `Cell` take `numeric`; `Cell` takes `reference` for the mono reference style. Sort the rows yourself in `onSortChange`. `TableRow` is the package's name for the table `Row` (the layout `Row` is a different component).

## Plain CSS

```html
<div class="ds-table-wrap" role="region" aria-labelledby="req-cap" tabindex="0">
  <table class="ds-table">
    <caption id="req-cap">Consultation requests (sample)</caption>
    <thead>
      <tr>
        <th scope="col" aria-sort="ascending">
          <button class="ds-table__sort" type="button">Reference<svg class="ds-icon ds-icon--16" aria-hidden="true"><use href="sprite.svg#ds-sort-ascending"/></svg></button>
        </th>
        <th scope="col">Topic</th>
        <th scope="col" class="ds-table__num">Replies</th>
      </tr>
    </thead>
    <tbody>
      <tr><th scope="row"><span class="ds-table__ref">DEMO-009</span></th><td>Career guidance</td><td class="ds-table__num">0</td></tr>
      <tr><th scope="row"><span class="ds-table__ref">DEMO-024</span></th><td>Course planning</td><td class="ds-table__num">3</td></tr>
    </tbody>
  </table>
</div>
```

The wrapper is a focusable region named by the caption, so keyboard users can scroll a wide table.
