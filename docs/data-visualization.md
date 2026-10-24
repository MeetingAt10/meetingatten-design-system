# Data visualization

Tokens: `viz-cat-1..7`, `viz-seq-1..5`, `viz-div-1..5` (theme aware). Checks: every categorical color is at least 3:1 against `surface` and `canvas` in all five themes; sequential ramps are monotonic in luminance (`npm run check:contrast`).

## Categorical (distinct series, max 7)

| Token | Light (`accs-*`, `meetingatten`) | Dark |
|---|---|---|
| `viz-cat-1` | blue-600 `#1C46C2` | blue-400 `#5C86F5` |
| `viz-cat-2` | teal-600 `#0B7A72` | teal-400 `#2FB1A3` |
| `viz-cat-3` | sun-700 `#A24209` | amber-400 `#FDB022` |
| `viz-cat-4` | rose-600 `#C11574` | rose-400 `#F06EAA` |
| `viz-cat-5` | olive-600 `#5B7A12` | olive-400 `#A3C93A` |
| `viz-cat-6` | sky-600 `#0E7CA6` | sky-400 `#38BDF8` |
| `viz-cat-7` | ink-600 `#4F5A6F` | ink-400 `#939DB0` |

## Sequential (magnitude, one hue)

Blue ramp. Light: `blue-100, 300, 500, 700, 900` (light to dark = low to high). Dark: reversed so high values stay brightest against the dark surface.

## Diverging (above/below a midpoint)

`viz-div-1..5`: blue (negative) -> neutral `ink` midpoint -> sun (positive). Midpoint = true zero or target. Blue vs orange is safe for common color-vision deficiencies.

## Rules

| Rule | Detail |
|---|---|
| Never color alone | Direct labels, patterns, or distinct marker shapes; legend order matches visual order |
| Light steps need an edge | Sequential step 1 (light) is below 3:1; give cells a `line-strong` outline or show the value |
| More than 7 series | Group into "Other" or use small multiples |
| Status vs series | Never reuse `success`/`warning`/`danger` as series colors |
| Gridlines | `line`, 1px; axis text `ink-secondary` at `text-xs`; values `ink` |
| Tables | Always offer a table or text summary for screen readers |
