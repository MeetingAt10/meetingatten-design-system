# Theme: `meetingatten` and `meetingatten-dark`

Meeting At 10 team site (handle `meetingatten`). Next.js + Tailwind 4.

## Identity rationale

| Question | Answer |
|---|---|
| Who is it for | Peers, advisers, recruiters. It shows a small student team that ships |
| Relationship to ACCS | Shares the ink-navy `#172033`, Plus Jakarta Sans, Inter, JetBrains Mono, semantic token names. Different palette temperature and personality |
| Distinct how | Warm paper canvas (`#FBF8F3`) instead of cool white; ink-navy buttons instead of blue; **sunrise orange** (`sun`) as the single accent instead of teal; sharper radii; mono used for metadata and the daily "log" |
| Why sunrise | The name is a time: the daily 10:00 meeting. Morning light is the metaphor; orange is the warmest hue that still reads as engineered rather than playful, and it is the complement of ACCS blue so the two sit well side by side |
| Why paper + ink | An editorial, written-decisions feel ("we write things down"). High contrast, little decoration |
| Personality | Direct, dry, confident. Short sentences. Oversized type, lots of air |

## Tokens at a glance

| Token | Light | Dark |
|---|---|---|
| Canvas / surface | `paper-50` / white | `ink-950` / `ink-900` |
| Ink | `ink-900` | `paper-50` |
| Action | `ink-900`, text `paper-50` | `paper-50`, text `ink-900` |
| Link | `sun-700` underlined | `sun-300` underlined |
| Accent | `sun-500` fill, `ink-950` text | `sun-400` fill, `ink-950` text |
| Accent text | `sun-800` on `sun-100` | `sun-300` on `sun-950` |
| Focus | `blue-600` (keeps a tie to ACCS) | `blue-300` |
| Radius | 6 controls, 8 cards | same |
| Control height | 44px | same |
| Container | 64rem | same |

`sun-500` is `#E8650A` (not a stock orange) so it holds 3:1 against white and paper for graphic use.

## Patterns

| Pattern | Spec |
|---|---|
| Hero | Oversized display (up to `text-7xl`/clamp), one word highlighted with an `accent` block (like "10"), mono meta line above (`@meetingatten - daily, 10:00`) |
| Work list | Sunken band, ACCS and sub-projects as cards with status badge |
| Team | Numbered ruled list, name + role badge. No avatar grid unless photos are approved |
| Log | Mono block with `decided / blocked / next` lines; the site's signature element |
| Footer | `inverse`, wordmark and handle only |

Reference: `templates/meetingatten-home.html`.

## Do not

| Don't | Reason |
|---|---|
| Use teal | Reserved for ACCS |
| Use orange for status | Warning/amber is separate (`warning-*`); orange is brand |
| Put orange text below `sun-700` on light | Contrast |
| Use ACCS wordmark or logo on this site as its own mark | Logo for Meeting At 10 is pending team approval |
