# Logo and assets

**Status: the logo is pending team approval.** Figma shows Logo Proposal 1-5; none is approved. Do not invent or redraw one. Until approval use a text wordmark ("ACCS" / "Meeting At 10" in Plus Jakarta Sans 800, tracking -0.02em). Meeting At 10 has no logo proposals yet.

| Spec | Rule (applies once a mark is approved) |
|---|---|
| Source | Export originals from Figma as SVG; never trace a screenshot |
| Clear space | Height of the mark's "C" (ACCS) / the "1" glyph (Meeting At 10) on all sides |
| Minimum size | Mark alone 16px; mark + wordmark 96px wide (digital), 20mm (print) |
| Light backgrounds | Full-color on white, `canvas`, `surface-sunken`; one-color `ink-900` otherwise |
| Dark backgrounds | One-color white / `paper-50`, or a dedicated reversed file. Never place the blue mark directly on `ink-900` |
| Don'ts | Stretch, rotate, recolor, add shadows, place on photos without a solid plate |
| Files | `logo.svg`, `logo-reversed.svg`, `logo-mark.svg`, `logo-mono.svg` |

## Favicon and social

| Asset | Spec |
|---|---|
| `favicon.svg` | Mark only, works at 16px, uses `currentColor`-safe fills + `prefers-color-scheme` media query for dark |
| `favicon.ico` | 32x32 fallback |
| `apple-touch-icon.png` | 180x180, solid background (no transparency), 20% padding |
| `icon-192.png`, `icon-512.png` | PWA icons, plus maskable 512 with 40% safe zone |
| OG image | 1200x630 PNG, under 300KB. Left-aligned wordmark, title in Plus Jakarta Sans 800 (max 2 lines, 64-72px), solid `canvas` or `action` background, no gradients. Text at least 4.5:1 |
| Twitter card | Reuse the OG image (`summary_large_image`) |
| Alt text | Describe content ("ACCS - Your Access to the College of Computer Studies") |

Per-site OG backgrounds: ACCS `blue-800` with white text; Meeting At 10 `paper-50` with `ink-900` text and a `sun-500` highlight.
