# Themes: `accs-admin` and `accs-admin-dark`

ACCS department/admin portal (Vite + React + TanStack Router). **`accs-admin` is the Figma Semantic LIGHT mode and `accs-admin-dark` is DARK**: the tokens are identical to `accs-landing` (LIGHT). They differ only in usage and density guidance.

| Item | Light `accs-admin` | Dark `accs-admin-dark` |
|---|---|---|
| Canvas / surface / raised | `#F5F7FB` / `#FFFFFF` / `#FFFFFF` | `#0B1220` / `#172033` / `#22304A` |
| Text primary / secondary | `#172033` / `#46516A` | `#F5F7FB` / `#B8C4D9` |
| Border default / strong / subtle | `#65718A` / `#46516A` / `#DCE2EC` | `#7D8DA6` / `#B8C4D9` / `#22304A` |
| Action default / hover / pressed | `#032E87` / `#022568` / `#011B4F` | `#97B5FF` / `#B8CDFF` / `#729AFF` |
| On-action / focus | `#FFFFFF` / `#3157D5` | `#0B1220` / `#97B5FF` |

Dark uses lighter blue actions with dark on-action text, not a naive inversion. Raised is distinguished by border and surface tone before shadow; avoid luminous shadows. Validate text, UI boundaries and focus on every surface.

## Usage guidance

| Topic | Guidance |
|---|---|
| Body | Product UI uses Body 14/22 with persistent 14px Label; wrap with `class="ds-body ds-body--app"` |
| Density | Same 48px buttons and 44px controls (no compact variant exists in Figma); density comes from 16/24/32 spacing between regions, tables over card walls on desktop, labeled records on mobile |
| Reading | Max 680px for prose; content max 1200px |
| Navigation | 240px sidebar from 1024px (`ds-sidebar`), 72px top bar; top navigation at 768; 44px menu control on mobile |
| Roles | Role badge + note in the sidebar ("Own reports only · proposed permission"); not a privacy or status signal |
| Reports | Restricted-report pages always show the durable Privacy Notice, keep submission disabled until policy is confirmed, and use neutral titles and notifications |
| Secondary/accent | Teal and purple only as chips/specimens (e.g. topic tags); blue is the primary action |

## Switching modes

```html
<html data-theme="accs-admin">        <!-- Figma LIGHT -->
<html data-theme="accs-admin-dark">   <!-- Figma DARK -->
```
```js
const dark = matchMedia('(prefers-color-scheme: dark)').matches;
document.documentElement.dataset.theme = saved ?? (dark ? 'accs-admin-dark' : 'accs-admin');
```
Set it before first paint (inline script in `index.html`) and persist the user's explicit choice.

Patterns: `templates/admin-shell.html` (community overview), `templates/report-detail.html` (restricted report). Component specs: `components/`.
