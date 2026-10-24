# Data visualization

**NOT IN FIGMA.** The frames define no chart palette, and this repo no longer ships `viz-*` tokens. Use existing semantic tokens only; this is guidance, not a new scale.

| Series | Token | Notes |
|---|---|---|
| 1 | `action/default` | Primary series |
| 2 | `secondary/default` | Teal |
| 3 | `accent/default` | Purple |
| 4 | `text-secondary` | Neutral comparison series |
| 5 | `warning/fg` | Only when "warning" is not the meaning; prefer fewer series |

All five pass 4.5:1 on `surface` and `canvas` in the ACCS themes (checked by `npm run check:contrast` as text pairs, stricter than the 3:1 graphics threshold).

| Rule | Detail |
|---|---|
| Never color alone | Direct labels, markers or patterns; status uses words or symbols (Figma) |
| Status colors | `success`, `warning`, `danger`, `info` keep their meaning; do not reuse them as arbitrary series colors |
| Max series | 5; group the rest |
| Axes and grid | `border-subtle` gridlines, `text-secondary` labels at Caption 12/16 |
| Alternatives | Always provide a table or text summary |
| Secondary/accent | Never mean permission or confidentiality |
| Sequential/diverging | Not defined; propose through Figma first |
