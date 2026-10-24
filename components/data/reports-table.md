---
title: Reports Table
description: Own or assigned reports in a captioned table with the reference as row header and a named action per row.
react: ReportsTable
---
# Data / Reports Table

Desktop table, 1258 x 271. On mobile tables become labeled records ([Report Record](report-record.md)). Never expose sensitive preview text.

## Figma source

| Component | Size (w x h) | Radius | Padding (t r b l) | Gap | Master fill |
|---|---|---|---|---|---|
| `ACCS 2026 / Data / Reports Table` | 1258 x 271 | 8 | 0 / 0 / 0 / 0 | 0 | - |

Variant axes:
- None (single component)

## Anatomy

| Part | Spec |
|---|---|
| Container | `radius-card` (12), `card-bg`, `card-shadow`, no border; cells radius 0. Never wrap the table in a Card |
| Header | `color/info/bg` fill, mono 12/16 labels: Reference, Category, Status, Action |
| Rows | reference in `Code` mono; status as words ("Draft · policy gate"); action as Link ("View draft →") |

## Figma copy

Title "Own reports / demo records". Rows DEMO-024 General concern, DEMO-018 Process question, DEMO-009 General question.

## Accessibility

- Native table navigation; caption, column headers (`<th scope="col">`) and row relationships; sort buttons expose sort state.

## React

```tsx
<ReportsTable caption="Own reports / demo records" rows={[
  { id: "24", reference: "DEMO-024", category: "General concern", status: "Draft · policy gate", href: "/reports/24", actionLabel: "View draft" },
]} />
```

Action links are named with the reference ("View draft DEMO-024"). The scrolling wrapper is a focusable region named by the caption, so keyboard users can scroll a wide table. On mobile show ReportRecord cards instead (`ds-only-desktop` / `ds-only-mobile`).

## Reference markup

Classes come from `dist/components.css`. Live light and dark demos: this component's page on the design system site (`site/`).

```html
<div class="ds-table-wrap"><table class="ds-table">
  <caption>Own reports / demo records</caption>
  <thead><tr><th scope="col">Reference</th><th scope="col">Category</th><th scope="col">Status</th><th scope="col">Action</th></tr></thead>
  <tbody><tr><td class="ds-mono">DEMO-024</td><td>General concern</td><td>Draft · policy gate</td><td><a class="ds-link" href="#">View draft <svg class="ds-icon ds-icon--16" aria-hidden="true"><use href="#ds-chevron"/></svg></a></td></tr></tbody>
</table></div>
```
