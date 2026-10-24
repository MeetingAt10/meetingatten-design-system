# Data / Report Record

Mobile labeled record, 390 x 246: each table field keeps its label and reading order.

## Figma source

| Component | Size (w x h) | Radius | Padding (t r b l) | Gap | Master fill |
|---|---|---|---|---|---|
| `ACCS 2026 / Data / Report Record` | 390 x 246 | 8 | 20 / 20 / 20 / 20 | 16 | `#FFFFFF` |

Variant axes:
- None (single component)

## Anatomy

| Part | Spec |
|---|---|
| Container | radius 8, padding 20, gap 16, 1px `color/border-default` |
| Title | `H3`: "DEMO-024" |
| Badge | Status "Draft · policy gate" |
| Facts | "Category: General concern", "Permission: Student · own reports" |
| Action | Secondary button "View draft", full width |

## Accessibility

- Keep each field label with its value; heading for the record; never expose sensitive preview text.

## Reference markup

Classes come from `dist/components.css`. Live matrices: `preview/index.html`.

```html
<article class="ds-record"><h3 class="ds-type-h3">DEMO-024</h3><span class="ds-badge ds-badge--warning">Draft · policy gate</span>
  <p class="ds-record__fact">Category: General concern</p><p class="ds-record__fact">Permission: Student · own reports</p>
  <a class="ds-btn ds-btn--secondary ds-btn--block" href="#">View draft</a></article>
```
