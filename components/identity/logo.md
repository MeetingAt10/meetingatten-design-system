# Identity / Logo (Horizontal, Stacked, Compact Minimum)

Official linked-C logo exports from the Figma file, in `assets/logo/`. The direction is marked PROPOSED in Figma ("Proposed, not approved"); institutional logo approval is pending, so do not describe it as final. Rules: [docs/logo-and-assets.md](../../docs/logo-and-assets.md).

## Figma source

| Component | Size (w x h) | Radius | Padding (t r b l) | Gap | Master fill |
|---|---|---|---|---|---|
| `ACCS 2026 / Identity / Logo Horizontal` | 473 x 116 | 0 | 0 / 0 / 0 / 0 | 24 | - |
| `ACCS 2026 / Identity / Logo Stacked` | 265 x 208 | 0 | 0 / 0 / 0 / 0 | 16 | - |
| `ACCS 2026 / Identity / Logo Compact Minimum` | 130 x 35 | 0 | 0 / 0 / 0 / 0 | 8 | - |

Variant axes:
- None (single component)

## Files

| State | Treatment (tokens) |
|---|---|
| `assets/logo/logo-horizontal.svg` | symbol + ACCS + "Access for College of Computer Studies"; minimum 240px wide |
| `assets/logo/logo-stacked.svg` | narrow applications; minimum 160px wide |
| `assets/logo/logo-compact-minimum.svg` | symbol + ACCS wordmark; minimum 130px; use in nav, sidebar, mobile header |

## Usage (from the Figma frames)

- Keep clear space of 2x (x = the mark’s stem thickness) on all sides.
- Omit the tagline below 480px. Mark-only minimum 24 x 16px; use 35 x 24px or larger for primary navigation.
- Don’t stretch, use low-contrast pairs, recolor with decorative accents, or add shadow, glow, outline or bevel.

## Accessibility

- Decorative when beside the product name in text; otherwise `alt="ACCS"` (or the full name on first mention).

## Reference markup

Classes come from `dist/components.css`. Live matrices: `preview/index.html`.

```html
<img class="ds-logo" src="assets/logo/logo-compact-minimum.svg" alt="ACCS">
```
