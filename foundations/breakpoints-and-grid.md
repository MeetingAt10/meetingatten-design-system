# Breakpoints and grid

Mobile first, `min-width`. Same values as Tailwind defaults so no override is needed.

| Token | Min width | Layout change |
|---|---|---|
| `sm` | 640px (40rem) | Single column to roomy |
| `md` | 768px (48rem) | Nav links appear, 2 columns |
| `lg` | 1024px (64rem) | Sidebar visible, hero splits 2 columns |
| `xl` | 1280px (80rem) | Full admin density |
| `2xl` | 1536px (96rem) | Max admin container |

| Grid | Value |
|---|---|
| Columns | 12 (public), fluid auto-fit (admin cards) |
| Gutter | 24px (16px under `sm`) |
| Page padding | 24px |
| Max container | landing 72rem, admin 90rem, Meeting At 10 64rem (`--ds-container`) |

Admin below `md`: sidebar becomes a drawer, tables scroll horizontally inside `ds-table-wrap`.
