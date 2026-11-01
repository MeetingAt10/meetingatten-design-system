---
title: Reports Table
description: Own or assigned reports in a captioned, ruled table with the reference as row header, the status in line form and words, and a named action per row.
react: ReportsTable
---
# Reports Table

The reports table lists a person's own or assigned reports on a ruled sheet: the reference is the row header in tabular mono, the status is a [Badge](../badge/status.md) whose marker line form carries the state with a word, and each row has one named action. Reports copy stays serious and neutral.

## When to use

- Use it on desktop for a person's own drafts and records, or a reviewer's assigned records.
- On phones, show [Report Record](report-record.md) rows instead.
- Use [Table](table.md) when people need sorting or selection.
- Don't put sensitive preview text, names or narrative in any column; categories stay neutral ("General concern").

## Anatomy

| Part | Class | Notes |
|---|---|---|
| Sheet | `.ds-table-wrap` | Focusable region named by the caption, paper with a hairline rule |
| Table | `.ds-table` | Columns: Reference, Category, Status, Updated (only when a row has it), Action |
| Caption | `caption` | Names the table, H4 style |
| Reference | `th[scope="row"]` > `.ds-table__ref` | Row header in tabular mono |
| Status | `.ds-badge` | Words plus the line-form marker |
| Action | `.ds-table__actions` > `.ds-link--standalone` | `actionLabel` (default "View"), named with the reference |
| Empty | `.ds-table__empty` | `emptyMessage` (default "No reports yet.") across all columns |

## States

| State | Looks | Set by |
|---|---|---|
| Row hover | Schedule highlighter wash | `:hover` |
| Status: open or active | Solid marker and a word ("Resolved", "Submitted") | `statusForm="solid"` (default) |
| Status: pending or draft | Dashed marker ("Draft", "Review pending") | `statusForm="pending"` |
| Status: restricted | Hatched marker ("Restricted review") | `statusForm="restricted"` |
| Status: closed | Struck marker ("Withdrawn") | `statusForm="closed"` |
| Empty | One row with the empty message | `rows={[]}` |
| Focus | 2px focus ring on the sheet or the action link | `:focus-visible` |

## Behavior and accessibility

- A native table: caption, column headers and the reference as row header, so screen readers read each cell with its headers.
- The wrapper is a focusable region named by the caption, so keyboard users can scroll it when it overflows.
- Each action link is named with the reference ("View CCS-2026-0118"), so links differ out of context.
- Status tone only reinforces; the word and the marker form carry the state.
- Never put report subjects or identities in page titles, notifications or search previews.
- Forced colors: the sheet keeps a `CanvasText` edge; badge markers are redrawn in `CanvasText`.

## React

```tsx
import { ReportsTable } from '@meetingat10/design-system/react';

<ReportsTable
  caption="Own reports"
  rows={[
    { id: '24', reference: 'CCS-2026-0142', category: 'General concern', status: 'Draft', statusTone: 'warning', statusForm: 'pending', updated: '21 Oct', href: '/reports/ccs-2026-0142', actionLabel: 'Open draft' },
    { id: '18', reference: 'CCS-2026-0118', category: 'Process question', status: 'Restricted review', statusForm: 'restricted', updated: '17 Oct', href: '/reports/ccs-2026-0118' },
    { id: '9', reference: 'CCS-2026-0091', category: 'General question', status: 'Resolved', statusTone: 'success', updated: '2 Oct', href: '/reports/ccs-2026-0091' },
    { id: '4', reference: 'CCS-2026-0047', category: 'General concern', status: 'Withdrawn', statusForm: 'closed', updated: '28 Sep', href: '/reports/ccs-2026-0047' },
  ]}
/>
```

`caption` and `rows` are required. A row without `href` has an empty action cell.

## Plain CSS

```html
<div class="ds-table-wrap" role="region" aria-labelledby="own-cap" tabindex="0">
  <table class="ds-table">
    <caption id="own-cap">Own reports</caption>
    <thead>
      <tr><th scope="col">Reference</th><th scope="col">Category</th><th scope="col">Status</th><th scope="col">Updated</th><th scope="col" class="ds-table__actions">Action</th></tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row"><span class="ds-table__ref">CCS-2026-0142</span></th>
        <td>General concern</td>
        <td><span class="ds-badge ds-badge--warning ds-badge--pending"><span class="ds-badge__mark" aria-hidden="true"></span>Draft</span></td>
        <td>21 Oct</td>
        <td class="ds-table__actions"><a class="ds-link ds-link--standalone" href="/reports/ccs-2026-0142" aria-label="Open draft CCS-2026-0142">Open draft<svg class="ds-icon ds-icon--16" aria-hidden="true"><use href="sprite.svg#ds-arrow-right"/></svg></a></td>
      </tr>
    </tbody>
  </table>
</div>
```
