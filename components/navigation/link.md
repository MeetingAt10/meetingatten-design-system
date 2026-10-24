---
title: Link
description: Standalone 44px navigation link and the underlined inline link for running text.
react: Link
---
# Navigation / Link

Five states, 240 x 44. Card and table links expose this family ("Read update →", "View draft →"). Route errors and loading belong to the destination. Bare action links and breadcrumbs use 44px minimum-height wrappers.

## Figma source

| Component | Size (w x h) | Radius | Padding (t r b l) | Gap | Master fill |
|---|---|---|---|---|---|
| `ACCS 2026 / Navigation / Link` | 240 x 44 | 6 | 0 / 12 / 0 / 12 | 12 | `#FFFFFF` |

Variant axes:
- State: Default / Hover / Pressed / Focus / Disabled (5 variants)

## States

| State | Treatment (tokens) |
|---|---|
| Default | `color/action/default` text, `Label` 14/20 / 600, arrow icon 16 |
| Hover | `color/info/bg` fill, underline |
| Pressed | `color/info/bg` + 1px `color/border-default` |
| Focus | 3px focus ring |
| Disabled | `color/disabled/bg`, `color/disabled/fg` |

## Figma copy

"Open sample", "Read update →", "Join the conversation →", "View draft →", "← My reports / DEMO-024".

## Accessibility

- Native `<a href>`; the accessible name describes the destination; links navigate, buttons act.

## React

```tsx
<Link href="/community">Join the conversation</Link>
<p>Read the <Link href="/privacy" inline>privacy and access</Link> notes.</p>
<Link href="/reports" isDisabled>Reports</Link>
```

React Aria `Link`: works with client routers through its `RouterProvider`; disabled links get `aria-disabled` and are not activated.

## Reference markup

Classes come from `dist/components.css`. Live light and dark demos: this component's page on the design system site (`site/`).

```html
<a class="ds-link" href="#">Read update <svg class="ds-icon ds-icon--16" aria-hidden="true"><use href="#ds-chevron"/></svg></a>
```
