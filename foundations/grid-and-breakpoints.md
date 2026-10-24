# Grid, breakpoints and responsive layouts

Source: Figma 03.3 and 07 (twelve exact-width surfaces at 1440 / 768 / 390 / 360). Content grows naturally; do not force desktop columns onto mobile.

| Viewport | Token (min-width) | Grid and margins | Navigation | Content behavior |
|---|---|---|---|---|
| 320-599px | `mobile` 20rem | 4 col, 16 gutter, 16 margin | 44px menu + compact header | Single column; tables become labeled records |
| 600-1023px | `tablet` 37.5rem | 8 col, 24 gutter, 24 margin | Collapsible navigation (top navigation at 768) | Two columns only if each remains >= 280px |
| 1024-1439px | `desktop` 64rem | 12 col, 24 gutter, 32 margin | 240px sidebar | Main + supporting column; reading max 680px |
| 1440px+ | `wide` 90rem | 12 col, 24 gutter, 48 margin | Persistent sidebar | Content max 1200px; do not stretch paragraphs |

Tailwind 4 breakpoints are replaced by these names (`tablet:`, `desktop:`, `wide:`; defaults removed). Tokens: `--ds-breakpoint-*`, `--ds-grid-*`. Max widths: `max-w-content` (1200), `max-w-reading` (680), `w-sidebar` (240).

## Responsive contract (07)

- 1440: 12 columns / 24 gutter / 48 margin; separate 240px sidebar. 768: 8 / 24 / 24; top navigation. 390 and 360: 4 / 16 / 16; compact 44px+ menu controls.
- Screens use fixed widths with natural (HUG) heights; task bodies FILL width, text wraps, **safety copy never truncates**.
- Preserve task order when columns stack. The consultation rail moves below the feed on mobile; all labels, dates and unavailable states stay visible.
- Support 320px reflow and 200% text enlargement without two-dimensional page scrolling. Truncate only optional metadata, never labels, errors or safety guidance.
- Browser reflow and zoom tests remain required; Figma verification is of native grids only.
