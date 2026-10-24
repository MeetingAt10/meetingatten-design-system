---
title: Badge: Role
description: Neutral role badge (Student, Adviser, Reviewer); never a privacy or status signal.
react: Badge
---
# Badge / Role

Permission-context label, radius 4, padding 5 / 10, gap 6, `Caption` 12/16 / 500. A role badge describes permission context; it is not a privacy or status signal. Do not style roles as severity.

## Figma source

| Component | Size (w x h) | Radius | Padding (t r b l) | Gap | Master fill |
|---|---|---|---|---|---|
| `ACCS 2026 / Badge / Role` | 146 x 25 | 4 | 5 / 10 / 5 / 10 | 6 | `#EDF1F7` |

Variant axes:
- Role: Student / Assigned reviewer / Community moderator (3 variants)

## Variants

| State | Treatment (tokens) |
|---|---|
| Role=Student | "Student · own reports" |
| Role=Assigned reviewer | "Assigned reviewer" |
| Role=Community moderator | "Community moderator" |
| Fill | `color/disabled/bg` (neutral/100 in LIGHT), text `color/text-primary` |

## Figma copy

"Assigned cases only ≠ identity hidden."

## Usage (from the Figma frames)



## Accessibility

- Badges are text, never color alone; status includes words or symbols.
- Not interactive. Only actual actions receive focus.

## React

```tsx
<Badge>Student</Badge>
```

Role badges keep the default neutral tone.

## Reference markup

Classes come from `dist/components.css`. Live light and dark demos: this component's page on the design system site (`site/`).

```html
<span class="ds-badge">Assigned reviewer</span>
```
