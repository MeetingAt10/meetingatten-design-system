---
title: Badge: Severity
description: Severity badge, a separate family from status; the text carries the meaning.
react: Badge
---
# Badge / Severity

Proposed classification, separate from Status. Severity is not an emergency assessment. Radius 4, padding 5 / 10.

## Figma source

| Component | Size (w x h) | Radius | Padding (t r b l) | Gap | Master fill |
|---|---|---|---|---|---|
| `ACCS 2026 / Badge / Severity` | 96 x 25 | 4 | 5 / 10 / 5 / 10 | 6 | `#EDF1F7` |

Variant axes:
- Severity: Low / Moderate / High (3 variants)

## Variants

| State | Treatment (tokens) |
|---|---|
| Low | neutral fill |
| Moderate | `color/warning/bg` + `warning/fg` |
| High | `color/danger/bg` + `danger/fg` |

## Figma copy

"Low · sample", "Moderate · sample", "High · sample".

## Usage (from the Figma frames)



## Accessibility

- Badges are text, never color alone; status includes words or symbols.
- Not interactive. Only actual actions receive focus.

## React

```tsx
<Badge tone="danger">High</Badge>
```

Tones: `neutral` (default), `info`, `success`, `warning`, `danger`, `secondary`, `accent`. Never rely on the tone alone.

## Reference markup

Classes come from `dist/components.css`. Live matrices: `preview/index.html`.

```html
<span class="ds-badge ds-badge--danger">High · sample</span>
```
