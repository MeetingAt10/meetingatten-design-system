# Typography

Source: Figma text styles "ACCS 2026 / *" (11 styles). Plus Jakarta Sans headings, Inter body, JetBrains Mono code. Sizes ship in rem (16px = 1rem) so user text scaling is preserved. Mobile H1 uses the H2 style (no duplicate style).

| Style | Token / class | Family | Weight | Size / line height |
|---|---|---|---|---|
| Display | `type-display` / `.ds-type-display` | Plus Jakarta Sans | 700 | 36 / 44 |
| H1 | `type-h1` | Plus Jakarta Sans | 700 | 30 / 38 |
| H2 | `type-h2` | Plus Jakarta Sans | 600 | 24 / 32 |
| H3 | `type-h3` | Plus Jakarta Sans | 600 | 20 / 28 |
| H4 | `type-h4` | Plus Jakarta Sans | 600 | 16 / 24 |
| Body large | `type-body-large` | Inter | 400 | 16 / 26 |
| Body | `type-body` | Inter | 400 | 14 / 22 |
| Body small | `type-body-small` | Inter | 400 | 13 / 20 |
| Label | `type-label` | Inter | 600 | 14 / 20 |
| Caption | `type-caption` | Inter | 500 | 12 / 16 |
| Code | `type-code` | JetBrains Mono | 400 | 13 / 20 |

Tailwind 4: `class="type-h1"` sets family, weight, size, line height and tracking; `text-h1` sets only size and line height.

## Usage (Figma 02.4)

| Rule | Detail |
|---|---|
| Product UI | 14-16px body text with persistent 14px labels |
| Mobile | H1 steps to 24/32; body stays 16/26 where space allows; captions never replace labels |
| Reading width | 65-75 characters (about 680px, `--ds-grid-reading-max`) |
| Body small | Secondary reading text; not an essential mobile label |
| Scaling | Preserve user text scaling; cards grow with translated copy and 200% zoom |
| Mono | Code and identifiers (`DEMO-024`), eyebrow labels, table header labels |
| Eyebrow / frame labels | Mono 11px, uppercase, `action/default` (Figma documentation chrome, reused for section labels) |

Source blue is `#032E87`; the earlier Moodboard indigo is not authoritative. Display/H1 sizes are the Figma values (36 and 30): use whitespace and weight for emphasis, not larger sizes.
