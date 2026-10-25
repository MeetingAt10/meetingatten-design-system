# Z-index

Six stacking layers, from sticky chrome to tooltips. Use the tokens, never a raw number.

| Token | Value | Layer | Set by the CSS on |
|---|---|---|---|
| `--ds-z-sticky` | 100 | Sticky chrome | `.ds-topbar`, `.ds-navbar`, `.ds-mobile-header` |
| `--ds-z-dropdown` | 200 | Anchored popups | Not set by a component; for your own plain-CSS dropdowns |
| `--ds-z-drawer` | 300 | Side and bottom sheets | `.ds-drawer-overlay` |
| `--ds-z-modal` | 400 | Dialogs | `.ds-modal-overlay` (Modal, command palette) |
| `--ds-z-toast` | 500 | Notifications | `.ds-toast-region` |
| `--ds-z-tooltip` | 600 | Labels | `.ds-skip-link`; your own plain-CSS tooltips |

Source: `tokens/foundations/z-index.json`.

In React, popovers, menus, listboxes and tooltips are positioned by React Aria in a portal with its own inline z-index (100000), so they always sit above an open modal or drawer that contains their trigger. The tokens order everything else, for example a toast over an open drawer.

Inside components, small local stacks (the timetable's pinned hour column, a now-line over its blocks, a card's stretched title link) use small numbers within their own stacking context. They never compete with these layers.

## Tailwind

Tailwind 4 has no z-index theme key. Use the variable: `z-(--ds-z-modal)`.
