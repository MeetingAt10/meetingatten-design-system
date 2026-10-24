# Radius

| Token | Value | Use |
|---|---|---|
| `radius-xs` | 2px | Swatches, focus rings on tiny items |
| `radius-sm` | 4px | Role badges, code chips |
| `radius-md` | 6px | Inputs and buttons (admin, Meeting At 10) |
| `radius-lg` | 8px | Cards (admin, Meeting At 10) |
| `radius-xl` | 12px | Large cards |
| `radius-2xl` | 16px | Cards (landing) |
| `radius-3xl` | 24px | Hero media |
| `radius-pill` | 9999px | Status badges, avatars |

Themes expose `radius-control` and `radius-card` so components never pick a size themselves: landing 10/16, admin 6/8, Meeting At 10 6/8.

Nested radius: inner = outer minus padding. Do not mix pill and square buttons on one surface.
