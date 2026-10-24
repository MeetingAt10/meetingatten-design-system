# Motion

**NOT IN FIGMA.** The frames only say motion is optional, reduced-motion aware, and that state changes must be understandable without animation. Minimal values exist so hover/focus transitions are consistent.

| Token | Value |
|---|---|
| `motion/duration/fast` | 120ms |
| `motion/duration/base` | 200ms |
| `motion/ease/standard` | `cubic-bezier(0.2, 0, 0, 1)` |

| `lift` (treatment) | `-2px` |

Interactive cards (`a.ds-card`, `button.ds-card`, `.ds-card[data-interactive]`) lift by `lift` and step from `card-shadow` to `card-shadow-hover` over `motion/duration/base`. Non-interactive cards never move.

`components.css` collapses transitions under `prefers-reduced-motion`; interactive cards then change only their shadow, with no movement. Do not add decorative or looping animation.
