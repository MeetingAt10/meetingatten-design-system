# Toast

| Anatomy | Notes |
|---|---|
| Container | Bottom-right (top-center under `md`), `z-toast`, stack gap 12px, max 3 |
| Toast | `surface-raised`, border, 4px left status bar, `shadow-lg`, width 24rem |
| Content | Bold title + one line of detail, optional single action, close button |

| Variant | Left bar | Role |
|---|---|---|
| Info | `info-fg` | `status` |
| Success | `success` | `status` |
| Warning | `warning` | `status` |
| Danger | `danger` | `alert` |

| State | Treatment |
|---|---|
| Enter | Slide 8px + fade, `base` |
| Auto-dismiss | 6s for success/info; warning and danger persist until closed |
| Hover/focus | Pauses timer |

Never use toasts for the only copy of important information (grievance receipts get a page).

A11y: region `aria-live`; do not steal focus; action reachable by keyboard; close button has `aria-label="Dismiss"`.

```html
<div class="ds-toast ds-toast--success" role="status"><div><strong>Request resolved</strong>The student was notified.</div></div>
```
