# Elevation

Mostly flat; borders do the structural work. Shadows mark things that float.

| Token | Use |
|---|---|
| `shadow-none` | Default |
| `shadow-xs` | Inputs on hover (optional) |
| `shadow-sm` | Sticky bars |
| `shadow-md` | Hero card, raised card |
| `shadow-lg` | Dropdowns, toasts |
| `shadow-xl` | Modals |

All shadows use ink-950 at low alpha, two layers, negative spread for softness. In dark themes depth comes from `surface-raised` (lighter surface) plus a border; shadows are barely visible and that is expected.
Do not stack shadow and heavy border on one element.
