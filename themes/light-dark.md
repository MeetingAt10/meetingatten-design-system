# Themes: `light` and `dark`

Two themes, both from the Figma "ACCS 2026 / Semantic" collection: **`light` is Semantic LIGHT and `dark` is Semantic DARK.** Every ACCS surface (landing, admin, the Meeting At 10 team site) uses the same two themes; density is a separate setting ([density.md](density.md)).

| Item | `light` | `dark` |
|---|---|---|
| Canvas / surface / raised | `#F5F7FB` / `#FFFFFF` / `#FFFFFF` | `#0B1220` / `#172033` / `#22304A` |
| Text primary / secondary | `#172033` / `#46516A` | `#F5F7FB` / `#B8C4D9` |
| Border default / strong / subtle | `#65718A` / `#46516A` / `#DCE2EC` | `#7D8DA6` / `#B8C4D9` / `#22304A` |
| Action default / hover / pressed | `#032E87` / `#022568` / `#011B4F` | `#97B5FF` / `#B8CDFF` / `#729AFF` |
| On-action / focus | `#FFFFFF` / `#3157D5` | `#0B1220` / `#97B5FF` |

Dark uses lighter blue actions with dark on-action text, not a naive inversion. Raised is distinguished by border and surface tone before shadow; avoid luminous shadows. Validate text, UI boundaries and focus on every surface.

## Choosing a theme

| Markup | Result |
|---|---|
| no `data-theme` | follows the OS (`prefers-color-scheme`); light when there is no preference |
| `data-theme="light"` | always light |
| `data-theme="dark"` | always dark |

`data-theme` works on any element, so a subtree can show the other theme (for example a light and a dark preview side by side).

To let users override the OS, set the attribute before first paint (inline script in `index.html` or the root layout) and persist only an explicit choice:

```js
const saved = localStorage.getItem('theme'); // 'light' | 'dark' | null
if (saved) document.documentElement.dataset.theme = saved; // null: keep following the OS
```
