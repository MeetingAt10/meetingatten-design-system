# Motion

| Token | Value | Use |
|---|---|---|
| `motion-duration-instant` | 75ms | Press feedback |
| `motion-duration-fast` | 120ms | Hover, color changes |
| `motion-duration-base` | 200ms | Menus, tabs, toasts in |
| `motion-duration-slow` | 320ms | Modal, drawer |
| `motion-duration-slower` | 500ms | Page-level reveal (public only) |
| `motion-ease-standard` | cubic-bezier(0.2, 0, 0, 1) | Default |
| `motion-ease-enter` | cubic-bezier(0, 0, 0, 1) | Elements entering |
| `motion-ease-exit` | cubic-bezier(0.3, 0, 1, 1) | Elements leaving |
| `motion-ease-emphasized` | cubic-bezier(0.2, 0, 0, 1.15) | Rare, small overshoot |

Rules: animate `opacity` and `transform` only; exit faster than enter; admin stays at or under `base`; honor `prefers-reduced-motion` (`components.css` already collapses durations); no looping decorative animation.
