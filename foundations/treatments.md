# Treatments (look tokens)

Source: `tokens/treatments.json`. **REPO-OWNED, NOT IN FIGMA.** Figma owns color and type; the repo owns the look built from them. Every treatment is made only from locked Figma tokens, blended only with `transparent`; px lengths appear only as geometry. `npm run check:tokens` enforces this, and `npm run check:contrast` tests text on every wash in both themes.

| Token | Light | Dark | Use |
|---|---|---|---|
| `--ds-card-bg` | `surface` | `raised` | Card and overlay background |
| `--ds-card-shadow` | `elevation/1` | 1px top highlight, `neutral/dark-border` at 40% | Cards at rest |
| `--ds-card-shadow-hover` | `elevation/2` | highlight at 60% | Interactive cards on hover |
| `--ds-overlay-shadow` | `elevation/2` | `elevation/2` + highlight | Modal, popover, menu, toast |
| `--ds-wash-accent` / `-secondary` / `-info` | `accent/100`, `secondary/100`, `info/50` to transparent | `accent/950`, `secondary/950`, `info/950` to transparent | Decorative page backgrounds (radial, `closest-side`) |
| `--ds-scrim` | `source-ink` at 94% | same | Modal backdrop |
| `--ds-lift` | `-2px` | same | Hover translate for interactive cards |
| `--ds-radius-card` / `-tile` / `-control` / `-chip` | 12 / 8 / 6 / 4 | same | Containers / tiles, alerts, toasts, slots / controls / badges |

Dark mode layers by tone, not shadow: cards sit on `raised` with a faint top highlight (Figma 02.3: "raised is distinguished by border and surface tone before shadow").

Text on washes (measured): light worst case `text-secondary` on `accent/100` 6.14:1; dark worst case `action-default` on `secondary/950` 7.15:1.

Tailwind: `bg-card`, `wash-accent`, `wash-secondary`, `wash-info`, `shadow-card`, `shadow-card-hover`, `shadow-overlay`, `rounded-card`, `rounded-tile`, `rounded-control`, `rounded-chip`.
