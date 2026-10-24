---
title: Tile
description: 48px decorative icon tile on a semantic tint, used in feature rows and section headers.
react: Tile
---
# Content / Tile

**NOT IN FIGMA** (repo-owned, soft layers). Gives a section a color cue from the locked palette without filling the page with cards.

## Anatomy

| Part | Spec |
|---|---|
| Container | 48px square, `radius-tile` (8) |
| Tones | `info` (default) `info-bg`/`info-fg`; `secondary` (teal) `secondary-bg`/`secondary-fg`; `accent` (purple) `accent-bg`/`accent-fg`; `neutral` `disabled-bg`/`text-primary` |
| Icon | 24px, `currentColor` |

All tone pairs are contrast-checked in light and dark (dark uses the 950 tints with 300 icons).

## Usage

- Always next to a visible heading; the tile is decoration.
- Teal and purple are categories, never permission or confidentiality.

## React

```tsx
<Tile icon="forum" tone="secondary" />
```

## Reference markup

```html
<span class="ds-tile ds-tile--secondary" aria-hidden="true"><svg class="ds-icon ds-icon--24">…</svg></span>
```
