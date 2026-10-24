# Pagination

| Anatomy | Notes |
|---|---|
| Summary | "Showing 1 to 5 of 24", left |
| Page buttons | `control-h` square, current = `action` fill |
| Prev / next | Ghost buttons with chevrons and text |
| Ellipsis | Non-interactive, `aria-hidden`; show first, last, current plus/minus 1 |

| State | Treatment |
|---|---|
| Default | Transparent |
| Hover | `surface-sunken` |
| Current | `aria-current="page"`, `action` bg, `on-action` text |
| Disabled (prev on page 1) | 45% opacity, `aria-disabled="true"` |
| Focus | Standard ring |

Rules: show page-size selector (10, 25, 50) in admin tables; keep page in the URL (`?page=2`); keep summary text when only one page.

A11y: `<nav aria-label="Pagination">` with a list; links not buttons when URL driven; each link has accessible name ("Page 2").

```html
<nav class="ds-pagination" aria-label="Pagination"><span>Showing 1 to 5 of 24</span>
<ul><li><a class="ds-page" href="?page=1" aria-current="page">1</a></li><li><a class="ds-page" href="?page=2">2</a></li></ul></nav>
```
