# Iconography

Source: Figma 03.4 and 03.6. **ACCS uses its own native icon set, not Lucide.** The frames do not name Lucide or any third-party library, so there is no sanctioned Lucide fallback.

| Property | Figma value |
|---|---|
| Families | 12: Search, Menu, Chevron, Bell, Calendar, Forum, Report, Shield, Check, Alert, Close, User (+ `Graphic / Navigation Overview`) |
| Sizes | 16 / 20 / 24px canvases (`Size=16/20/24`) |
| Strokes | 1.5 / 1.75 / 2px, round caps and joins; optical padding inside the canvas |
| Touch | Icons are not touch targets: use a 44px+ labeled control on mobile |
| Meaning | Shield denotes a privacy topic, not a security or anonymity guarantee |

Labels in 03.4: Overview, Forum, Consult, Report, Access, Visibility, Search, Updates, Success, Warning, Menu, Close.

## Status in this repo

| Item | Status |
|---|---|
| Names, sizes, strokes, CSS (`.ds-icon`, `--16`, `--24`) | Match Figma |
| Geometry (`assets/icons/sprite.svg`) | **From Figma.** Symbols are the exported Size=24 variants; per-size SVGs (16/20/24) live in `assets/icons/figma/`. Strokes use `currentColor`. `ds-home`, `ds-lock`, `ds-info` remain stand-ins for glyphs drawn inside other components |
| Extra glyphs (`home`, `lock`, `info`) | Drawn inside Figma components (Navigation Overview, Privacy Notice, Inline Alert), not in the 12-family set |

## Rules

| Rule | Detail |
|---|---|
| Labels | Pair unfamiliar icons with visible text; icon-only actions need an accessible name; tooltips supplement, not replace |
| Decorative | Hidden from assistive technology (`aria-hidden="true"`) |
| Status | Status glyph + label, never color alone |
| Color | `currentColor` |
| Sizes | 16 inline/badges/table links; 20 default; 24 view states |

```html
<svg class="ds-icon ds-icon--16" aria-hidden="true"><use href="#ds-bell"/></svg>
```
In static pages `<use>` needs the sprite inlined in the same document; `npm run build` inlines it between `<!--ds:sprite-->` markers.
