# Elevation

Source: Figma 03.2. Subtle elevation signals hierarchy, never security or trust.

| Token | Value | Use |
|---|---|---|
| `elevation/0` | none | Flat: default cards (they use a 1px `border-subtle`) |
| `elevation/1` | `0 2 8 #1720330D` | Raised: toast, optional raised cards |
| `elevation/2` | `0 12 32 #1720331F` | Overlay: modal |

Tailwind: `shadow-raised`, `shadow-overlay`. Dark surfaces use a tone step (`raised`) and border; avoid luminous shadows.
