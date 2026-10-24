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
| Container | radius 8, 1px `color/border-subtle`; cells radius 0 |
| Header | `color/info/bg` fill, mono 12/16 labels: Reference, Category, Status, Action |
| Rows | reference in `Code` mono; status as words ("Draft · policy gate"); action as Link ("View draft →") |

## Figma copy

Title "Own reports / demo records". Rows DEMO-024 General concern, DEMO-018 Process question, DEMO-009 General question.

## Accessibility

- Native table navigation; caption, column headers (`<th scope="col">`) and row relationships; sort buttons expose sort state.

## Reference markup

Classes come from `dist/components.css`. Live matrices: `preview/index.html`.

```html
<div class="ds-table-wrap"><table class="ds-table">
  <caption>Own reports / demo records</caption>
  <thead><tr><th scope="col">Reference</th><th scope="col">Category</th><th scope="col">Status</th><th scope="col">Action</th></tr></thead>
  <tbody><tr><td class="ds-mono">DEMO-024</td><td>General concern</td><td>Draft · policy gate</td><td><a class="ds-link" href="#">View draft <svg class="ds-icon ds-icon--16" aria-hidden="true"><use href="#ds-chevron"/></svg></a></td></tr></tbody>
</table></div>
```
