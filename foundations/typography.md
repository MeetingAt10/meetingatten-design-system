# Typography

| Role | Family | Weights | Source |
|---|---|---|---|
| Display + headings | Plus Jakarta Sans | 600, 700, 800 | `--ds-font-family-display` / `font-display` |
| Body + UI | Inter | 400, 500, 600 | `--ds-font-family-body` / `font-sans` |
| Code, labels, data | JetBrains Mono | 500, 600 | `--ds-font-family-mono` / `font-mono` |

Families resolve `var(--font-plus-jakarta-sans)` style next/font variables first when present, otherwise the Google Fonts name, then system fallbacks.

## Scale

Heavier at the top, tighter tracking as size grows. Base line-height 1.625 for reading.

| Token | Size | Line height | Tracking | Use |
|---|---|---|---|---|
| `text-xs` | 12 | 18 | +0.01em | Captions, badges, mono eyebrows |
| `text-sm` | 14 | 20 | 0 | Admin body, table cells, labels |
| `text-base` | 16 | 26 | 0 | Body |
| `text-lg` | 18 | 28 | -0.005em | Lead paragraph, h3 |
| `text-xl` | 20 | 28 | -0.01em | Card titles |
| `text-2xl` | 24 | 32 | -0.015em | h2 (admin page sections) |
| `text-3xl` | 30 | 38 | -0.02em | Stat values |
| `text-4xl` | 36 | 42 | -0.025em | h1, mobile display |
| `text-5xl` | 48 | 52 | -0.03em | Section headline (marketing) |
| `text-6xl` | 60 | 62 | -0.035em | Hero display |
| `text-7xl` | 72 | 72 | -0.04em | Meeting At 10 oversize hero only |

## Rules

| Rule | Value |
|---|---|
| Measure | 60-70ch for paragraphs (`ds-lead` caps at 60ch) |
| Headings | `text-wrap: balance`, one h1 per page |
| Display weight | 800 for hero, 700 for h1/h2, 600 for h3 |
| Numbers in tables/stats | `font-variant-numeric: tabular-nums` |
| Eyebrow | Mono, 12px, uppercase, +0.08em, `accent-fg` |
| Admin | Max `text-2xl` in content area; body `text-sm` |
| Minimum body size | 14px admin, 16px public |
