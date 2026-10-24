# Icon (12 families) and Graphic / Navigation Overview

Figma owns the icon set: 12 native families (Search, Menu, Chevron, Bell, Calendar, Forum, Report, Shield, Check, Alert, Close, User), each Size=16 / 20 / 24, strokes 1.5 / 1.75 / 2px, round caps and joins, optical padding inside the canvas. **Status: from Figma.** `assets/icons/sprite.svg` symbols are the exported Size=24 variants and `assets/icons/figma/{name}-{16,20,24}.svg` are the per-size exports, with strokes set to `currentColor`. See [docs/iconography.md](../../docs/iconography.md).

## Figma source

| Component | Size (w x h) | Radius | Padding (t r b l) | Gap | Master fill |
|---|---|---|---|---|---|
| `ACCS 2026 / Icon / Search` | 16 x 16 | 0 | 0 / 0 / 0 / 0 | 0 | - |
| `ACCS 2026 / Icon / Menu` | 16 x 16 | 0 | 0 / 0 / 0 / 0 | 0 | - |
| `ACCS 2026 / Icon / Chevron` | 16 x 16 | 0 | 0 / 0 / 0 / 0 | 0 | - |
| `ACCS 2026 / Icon / Bell` | 16 x 16 | 0 | 0 / 0 / 0 / 0 | 0 | - |
| `ACCS 2026 / Icon / Calendar` | 16 x 16 | 0 | 0 / 0 / 0 / 0 | 0 | - |
| `ACCS 2026 / Icon / Forum` | 16 x 16 | 0 | 0 / 0 / 0 / 0 | 0 | - |
| `ACCS 2026 / Icon / Report` | 16 x 16 | 0 | 0 / 0 / 0 / 0 | 0 | - |
| `ACCS 2026 / Icon / Shield` | 16 x 16 | 0 | 0 / 0 / 0 / 0 | 0 | - |
| `ACCS 2026 / Icon / Check` | 16 x 16 | 0 | 0 / 0 / 0 / 0 | 0 | - |
| `ACCS 2026 / Icon / Alert` | 16 x 16 | 0 | 0 / 0 / 0 / 0 | 0 | - |
| `ACCS 2026 / Icon / Close` | 16 x 16 | 0 | 0 / 0 / 0 / 0 | 0 | - |
| `ACCS 2026 / Icon / User` | 16 x 16 | 0 | 0 / 0 / 0 / 0 | 0 | - |
| `ACCS 2026 / Graphic / Navigation Overview` | 20 x 20 | 0 | 0 / 0 / 0 / 0 | 0 | - |

Variant axes:
- **Icon / Search** Size: 16 / 20 / 24 (3 variants)
- **Icon / Menu** Size: 16 / 20 / 24 (3 variants)
- **Icon / Chevron** Size: 16 / 20 / 24 (3 variants)
- **Icon / Bell** Size: 16 / 20 / 24 (3 variants)
- **Icon / Calendar** Size: 16 / 20 / 24 (3 variants)
- **Icon / Forum** Size: 16 / 20 / 24 (3 variants)
- **Icon / Report** Size: 16 / 20 / 24 (3 variants)
- **Icon / Shield** Size: 16 / 20 / 24 (3 variants)
- **Icon / Check** Size: 16 / 20 / 24 (3 variants)
- **Icon / Alert** Size: 16 / 20 / 24 (3 variants)
- **Icon / Close** Size: 16 / 20 / 24 (3 variants)
- **Icon / User** Size: 16 / 20 / 24 (3 variants)

## Sizes

| State | Treatment (tokens) |
|---|---|
| 16 px | stroke 1.5px; inline, badges, table links (`.ds-icon--16`) |
| 20 px | stroke 1.75px; default, nav items, buttons (`.ds-icon`) |
| 24 px | stroke 2px; view states, feature tiles (`.ds-icon--24`) |

## Usage (from the Figma frames)

- Pair unfamiliar icons with visible text. Icon-only actions need an accessible name; tooltips supplement, not replace it.
- Decorative icons are hidden from assistive technology. Use status glyph + label, never color alone.
- Icons are not touch targets: use a 44px+ labeled control on mobile. Shield denotes a privacy topic, not a security or anonymity guarantee.
- 03.4 labels: Overview, Forum, Consult, Report, Access, Visibility, Search, Updates, Success, Warning, Menu, Close.

## Accessibility

- `aria-hidden="true"` unless the icon is the only content, then give the control an accessible name.

## Reference markup

Classes come from `dist/components.css`. Live matrices: `preview/index.html`.

```html
<svg class="ds-icon" aria-hidden="true"><use href="#ds-search"/></svg>   <!-- 20px / 1.75 -->
<svg class="ds-icon ds-icon--16" aria-hidden="true"><use href="#ds-bell"/></svg>
<svg class="ds-icon ds-icon--24" aria-hidden="true"><use href="#ds-shield"/></svg>
```
