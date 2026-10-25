# Data visualization

Charts use the lane colors and the line forms, always with direct labels; there is no separate chart palette.

## Series

| Series | Token | Notes |
|---|---|---|
| Schedule | `action-default` (navy) | Classes, the department, the default series |
| Community | `accent-default` (violet) | Forum and events |
| Consult | `secondary-default` (teal) | Consultations and support |
| Comparison | `text-secondary` | A neutral reference series |
| Restricted | `hatch-ink` with hatching | Never a hue: restricted data is hatched and labeled |

The three lane colors and `text-secondary` pass 4.5:1 on `surface` and `canvas` in both themes (checked by `npm run check:contrast`), stricter than the 3:1 needed for graphics. Status colors (`success`, `warning`, `danger`, `info`) keep their meaning and are never used as arbitrary series colors. Use at most four series; group the rest.

## Line forms in charts

| Form | Means |
|---|---|
| Solid | Actual, confirmed, open |
| Dashed | Pending, projected, draft |
| Hatched | Taken or restricted |
| Struck | Withdrawn or closed |

Label each form in words on the chart or in a legend, as the [consultation slot picker](../components/scheduling/consultation-slot.md) does.

## Rules

| Rule | Detail |
|---|---|
| Never color alone | Direct labels, words, markers or patterns |
| Grids | Real, labeled axes on `border-subtle` hairlines; labels in Caption 12/16, `text-secondary` |
| Numbers | Times and values in the tabular `time` style |
| Now | Mark the present with the `now` token and a time label, like the [now-line](../components/scheduling/now-line.md) |
| Single quantities | Use [Meter](../components/feedback/meter.md) or [Progress](../components/feedback/progress.md), with the reading in words ("5 of 8 slots taken") |
| Alternatives | Always provide a [Table](../components/data/table.md) or a text summary |
| Lanes are not permissions | Violet, teal and navy never mean access or confidentiality |
| Motion | No animated chart transitions beyond rolling digits; respect reduced motion |
| New scales | Sequential and diverging palettes are not defined; propose one in a delta under `context/deltas/` first |
