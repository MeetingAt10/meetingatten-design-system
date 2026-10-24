# Z-index

| Token | Value | Layer |
|---|---|---|
| `z-base` | 0 | Content |
| `z-raised` | 10 | Sticky table header, floating card |
| `z-sticky` | 100 | Top bar, sidebar |
| `z-dropdown` | 200 | Select, menus, popovers |
| `z-overlay` | 300 | Scrim |
| `z-modal` | 400 | Dialogs, drawers |
| `z-toast` | 500 | Toasts |
| `z-tooltip` | 600 | Tooltips, skip link |

Never write a literal z-index in components. Tailwind 4 has no z theme key: use `z-(--ds-z-modal)`.
