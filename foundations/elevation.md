# Elevation

Source: Figma 03.2 (`elevation/0-2`). Subtle elevation signals hierarchy, never security or trust. Components use the treatments below, not the raw elevation steps ([treatments.md](treatments.md)).

| Figma token | Value | Used by treatment |
|---|---|---|
| `elevation/0` | none | (not used by components) |
| `elevation/1` | `0 2 8 #1720330D` | `card-shadow` (light): cards, table container, record, view state at rest |
| `elevation/2` | `0 12 32 #1720331F` | `card-shadow-hover` (light): interactive card hover; `overlay-shadow`: modal, toast, listbox, floating cards |

Cards are raised by default and borderless (soft layers). **Dark mode layers by tone, not shadow:** cards sit on `raised` with a 1px top highlight (`neutral/dark-border` at 40%, 60% on hover), per Figma 02.3 "raised is distinguished by border and surface tone before shadow". Avoid luminous shadows.

Tailwind: `shadow-card`, `shadow-card-hover`, `shadow-overlay`.
