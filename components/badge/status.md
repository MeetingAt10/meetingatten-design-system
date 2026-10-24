---
title: Badge: Status
description: Status badge in words (Draft, Review pending, Resolved) with a status tone.
react: Badge
---
# Badge / Status

Case/record status family, separate from Severity. Radius 4, padding 5 / 10.

## Figma source

| Component | Size (w x h) | Radius | Padding (t r b l) | Gap | Master fill |
|---|---|---|---|---|---|
| `ACCS 2026 / Badge / Status` | 50 x 25 | 4 | 5 / 10 / 5 / 10 | 6 | `#EDF1F7` |

Variant axes:
- Status: Draft / Review pending / Resolved / Needs information (4 variants)

## Variants

| State | Treatment (tokens) |
|---|---|
| Draft | neutral fill |
| Review pending | `color/warning/bg` + `warning/fg` |
| Resolved | `color/success/bg` + `success/fg` |
| Needs information | `color/info/bg` + `info/fg` |

## Figma copy

"Draft", "Review pending", "Resolved", "Needs information"; table cells combine words: "Draft · policy gate", "Review pending · demo".

## Usage (from the Figma frames)



## Accessibility

- Badges are text, never color alone; status includes words or symbols.
- Not interactive. Only actual actions receive focus.

## React

```tsx
<Badge tone="warning">Draft · policy gate</Badge>
<Badge tone="success">Resolved</Badge>
<Badge tone="info">DEMO</Badge>
```

## Reference markup

Classes come from `dist/components.css`. Live light and dark demos: this component's page on the design system site (`site/`).

```html
<span class="ds-badge ds-badge--warning">Review pending</span>
```
