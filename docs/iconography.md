# Iconography

Library: [Lucide](https://lucide.dev) (`lucide-react` in React apps; inline SVG in static templates). No emoji as icons. No mixing libraries.

| Property | Value |
|---|---|
| Sizes | 16 (inline with `text-sm`, badges, dense tables), 20 (default, nav, buttons), 24 (empty states, feature tiles) |
| Stroke | 1.75px at 20px; keep stroke at 1.75 at 16 and 24 (`stroke-width` prop, not scaled) |
| Color | `currentColor`; inherits text color |
| Caps/joins | Round (Lucide default) |
| Hit target | Icon-only buttons at least 36px (admin) / 44px (public) with `aria-label` |
| Decorative icons | `aria-hidden="true"`; meaningful ones need a text label or `aria-label` |

## Usage

| Do | Don't |
|---|---|
| Pair icons with labels in navigation | Icon-only nav except for universal actions (close, search) |
| One icon per concept across the product | Different icons for the same action |
| Use icon + text for status (check + "Resolved") | Color-only status dots |
| Put feature icons in a `radius-control` tinted tile (`action-subtle`) | Oversized or multicolor icons |

## Recommended set

| Concept | Lucide name |
|---|---|
| Forum | `message-square` |
| Support | `life-buoy` |
| Grievance / confidential | `shield` / `lock` |
| Announcements | `megaphone` |
| Users and roles | `users` |
| Search / filter | `search` / `sliders-horizontal` |
| Success / warning / error / info | `circle-check` / `triangle-alert` / `circle-x` / `info` |
| Navigation | `chevron-right`, `arrow-right`, `menu`, `x` |

```tsx
import { MessageSquare } from "lucide-react";
<MessageSquare size={20} strokeWidth={1.75} aria-hidden />
```
