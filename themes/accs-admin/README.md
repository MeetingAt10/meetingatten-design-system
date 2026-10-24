# Theme: `accs-admin` and `accs-admin-dark`

Department/admin portal. Vite + React + TanStack Router. Dense, calm, data-heavy.

| Trait | Light `accs-admin` | Dark `accs-admin-dark` |
|---|---|---|
| Canvas | `ink-50` | `ink-950` |
| Surface | White | `ink-900` |
| Raised (menus, modals) | White + `shadow-lg` | `ink-800` + border |
| Text | `ink-900` / `ink-600` | `ink-50` / `ink-300` / `ink-400` |
| Action | `blue-800` (white text) | `blue-400` (ink-950 text) |
| Selected | `blue-50` bg, `blue-800` text | `blue-950` bg, `blue-200` text |
| Accent | `teal-600` | `teal-400` |
| Status | 50 bg / 800 fg | 950 bg / 300 fg |

## Density

| Token | Value |
|---|---|
| Control height | 36px (`control-h`) |
| Table row | 40px (`row-h`) |
| Radius | 6px controls, 8px cards |
| Page padding | 24px |
| Body size | 14px (`text-sm`) |
| Max content width | 90rem |

Calm means: one filled primary button per view, status in badges (not row colors), borders over shadows, no decorative color. Teal appears only for focus-neutral highlights such as "featured" badges.

## Switching modes

```html
<html data-theme="accs-admin">           <!-- light -->
<html data-theme="accs-admin-dark">      <!-- dark -->
```
```js
const prefersDark = matchMedia('(prefers-color-scheme: dark)').matches;
document.documentElement.dataset.theme = saved ?? (prefersDark ? 'accs-admin-dark' : 'accs-admin');
```
Set it before first paint (inline script in `index.html`) to avoid a flash. Persist the user's explicit choice; default to the OS preference.

## Layout

| Zone | Spec |
|---|---|
| Sidebar | 240px, `surface`, right border, grouped nav with mono labels, sticky |
| Top bar | 56px, search left, role badge + mode toggle right |
| Content | Page title + one primary action, stat row (optional), tabs, table, pagination |
| Restricted areas | Label groups such as "Restricted" (grievances, roles); show lock state explicitly in text |

Reference: `templates/admin-shell.html`, components in `components/admin/`.
