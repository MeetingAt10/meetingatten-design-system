---
title: Meter
description: A known quantity within a range on a tick-ruled scale, with the reading in words and a fill tone that only reinforces.
react: Meter
---
# Meter

A meter shows a known amount within a range: slots taken this week, room capacity, storage used. The scale is ruled with a hairline tick every 10%, the teal fill springs to the value, and the reading prints on the right in words ("5 of 8"). The fill turns warning and then danger as it fills, but the words always carry the reading.

## When to use

- Use it for a measured quantity against a limit, with the reading in words (`valueLabel`).
- Use the default `tone="auto"`, or set a tone when your thresholds differ.
- Don't use it for task progress; use [Progress](progress.md).
- Don't use it for severity or status; use [Severity](../badge/severity.md) or a [Status Badge](../badge/status.md).
- Don't rely on the fill color to warn; write "Full" or "7 of 8" in the reading.

## Anatomy

| Part | Class | Notes |
|---|---|---|
| Root | `.ds-meter` | Grid, 8px gap; `role="meter"` |
| Head | `.ds-meter__head` | Label on the left, reading on the right |
| Label | `.ds-meter__label` | Label style (Inter 600 14/20); the accessible name |
| Reading | `.ds-meter__value` | Inter 500 13px with tabular figures, secondary text; your `valueLabel`, or the percentage in rolling digits |
| Track | `.ds-meter__track` | 10px, radius 4, neutral highlighter wash with a hairline tick every 10% |
| Fill | `.ds-meter__fill` | Teal (`secondary-default`), revealed with `clip-path` up to `--value` percent; moves on the smooth spring |
| Tone | `.ds-meter--high`, `--full` | Warning or danger fill |

## States

| State | Looks | Set by |
|---|---|---|
| Default | Teal fill | `tone="default"`, or `auto` below 75% |
| High | Warning fill | `tone="high"`, or `auto` from 75%; `.ds-meter--high` |
| Full | Danger fill | `tone="full"`, or `auto` at 100%; `.ds-meter--full` |
| Reading in words | Your text replaces the percentage and is announced | `valueLabel`, `aria-valuetext` |
| Reduced motion | The fill jumps to the value; digits change without rolling | `prefers-reduced-motion: reduce` |

## Behavior and accessibility

- React Aria `Meter`: `role="meter"` with `aria-valuenow`, `aria-valuemin`, `aria-valuemax` and `aria-valuetext` (your `valueLabel`, or the formatted percentage), named by the label. The printed reading is `aria-hidden`, so it is not read twice.
- A meter is not interactive and takes no focus.
- Write the reading the way people say it: "3 of 8", "Full: 40 of 40".
- NumberFlow follows the reduced-motion setting by default.
- Forced colors: the track becomes a `Canvas` box with a `CanvasText` edge (the tick marks drop out) and the fill paints `Highlight`.

## React

```tsx
import { Meter } from '@meetingat10/design-system/react';

<Meter label="Slots taken this week" value={3} maxValue={8} valueLabel="3 of 8" />
<Meter label="Slots taken next week" value={7} maxValue={8} valueLabel="7 of 8" />
<Meter label="Room capacity" value={40} maxValue={40} valueLabel="Full: 40 of 40" />
```

`minValue` defaults to 0 and `maxValue` to 100. `tone` is `auto` (default: warning from 75%, danger at 100%), `default`, `high` or `full`.

## Plain CSS

```html
<div class="ds-meter ds-meter--high" role="meter" aria-labelledby="slots-label"
  aria-valuenow="7" aria-valuemin="0" aria-valuemax="8" aria-valuetext="7 of 8" style="--value: 87.5">
  <div class="ds-meter__head">
    <span class="ds-meter__label" id="slots-label">Slots taken next week</span>
    <span class="ds-meter__value" aria-hidden="true">7 of 8</span>
  </div>
  <div class="ds-meter__track"><div class="ds-meter__fill"></div></div>
</div>
```

Set `--value` to the percentage (0 to 100), not the raw value.
