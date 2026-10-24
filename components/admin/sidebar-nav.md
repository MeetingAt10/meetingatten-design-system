# Sidebar nav

| Anatomy | Notes |
|---|---|
| Container | 240px, `surface`, right border, sticky full height |
| Brand | Wordmark at top (logo pending approval) |
| Group label | Mono 12px uppercase, `ink-muted` |
| Item | `control-h`, icon 20px + label, `radius-control` |
| Footer (optional) | User menu, mode toggle |

| State | Treatment |
|---|---|
| Default | `ink-secondary` |
| Hover | `surface-sunken`, `ink` |
| Current | `aria-current="page"`, `action-subtle` bg, `action-subtle-fg` text, semibold |
| Focus | Standard ring |
| Collapsed (optional, `lg` down to icon rail) | Icons only, tooltip with label, `aria-label` on each link |
| Mobile | Hidden under `md`; opens as drawer from a menu button |

Rules: max 7 items per group, max 2 groups visible without scroll; restricted areas (grievances, roles) in their own labeled group; no badges counts above 99+.

A11y: `<nav aria-label="Main">`, links not buttons; current page via `aria-current`; drawer traps focus like [modal](modal.md); skip link bypasses sidebar.

```html
<nav class="ds-sidebar" aria-label="Main"><div class="ds-nav-group"><span class="ds-nav-label">Workspace</span>
<a class="ds-nav-item" href="/requests" aria-current="page">Support requests</a><a class="ds-nav-item" href="/announcements">Announcements</a></div></nav>
```
