# Motion

**NOT IN FIGMA.** The frames only say motion is optional, reduced-motion aware, and that state changes must be understandable without animation. Minimal values exist so hover/focus transitions are consistent.

| Token | Value |
|---|---|
| `motion/duration/fast` | 120ms |
| `motion/duration/base` | 200ms |
| `motion/ease/standard` | `cubic-bezier(0.2, 0, 0, 1)` |

`components.css` collapses transitions under `prefers-reduced-motion`. Do not add decorative or looping animation.
