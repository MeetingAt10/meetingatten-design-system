# Data / Case Timeline

Chronological events with a title, actor role and description. Serious, structured copy; no promised response deadline. Relative times are optional; exact illustrative timestamps belong in the detail view.

## Figma source

| Component | Size (w x h) | Radius | Padding (t r b l) | Gap | Master fill |
|---|---|---|---|---|---|
| `ACCS 2026 / Data / Case Timeline` | 801 x 264 | 0 | 0 / 0 / 0 / 0 | 0 | - |

Variant axes:
- None (single component)

## Anatomy

| Part | Spec |
|---|---|
| Marker | 10px circle; newest filled `color/action/default`, earlier hollow with 2px border; 1px connector `color/border-default` |
| Title | `Label` 14/20 / 600 (+ "· DEMO") |
| Actor | `Caption` `color/text-secondary`: "Assigned reviewer · DEMO" |
| Description | `Body small` 13/20 |

## Figma copy

"Review scope pending / Assigned reviewer · DEMO / Policy gate remains active. No sensitive submission.", "Draft saved locally · DEMO / Student · own report / Illustrative record only; not a submitted case.", "Record created · DEMO / Sample event / DEMO-024 · dates and events are illustrative."

## Accessibility

- Use an ordered list (`<ol>`); explicit actor roles and dates; events read chronologically.
- Identity visibility is not inferred from permission labels.

## Reference markup

Classes come from `dist/components.css`. Live light and dark demos: this component's page on the design system site (`site/`).

```html
<ol class="ds-timeline">
  <li><span class="ds-timeline__title">Review scope pending</span><span class="ds-timeline__actor">Assigned reviewer · DEMO</span><p class="ds-timeline__body">Policy gate remains active. No sensitive submission.</p></li>
  <li><span class="ds-timeline__title">Draft saved locally · DEMO</span><span class="ds-timeline__actor">Student · own report</span><p class="ds-timeline__body">Illustrative record only; not a submitted case.</p></li>
</ol>
```
