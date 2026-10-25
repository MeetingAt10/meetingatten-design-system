---
title: Now-line
description: The present moment across a time grid, a 2px line and dot in the now color with the time on a small plate.
react: NowLine
---
# Now-line

The now-line marks the present moment on a time grid: a 2px line with a dot at its start, in the now color (danger 700 in light, danger 300 in dark), labeled with the time. It is the system's "current" marker wherever time is drawn, and it glides as the minutes pass. [Timetable](timetable.md) places it on today's column for you.

## When to use

- Use it on a real, labeled time grid (a week or day sheet) to show where today is now.
- Use `useNow` to follow the clock, or pin a fixed time for samples and screenshots.
- Don't use it as decoration or on a grid without hour labels.
- Don't rely on it to tell the time; it is hidden from assistive tech, so state the time in text where it matters.

## Anatomy

| Part | Class | Notes |
|---|---|---|
| Line | `.ds-now` | 2px rule in `--ds-now` across the container; positioned by `--now` |
| Dot | `::before` | 8px dot at the start edge |
| Time plate | `.ds-now__label` | Optional; `time` style 600 in on-action text on a now-color chip |
| Inline dot | `.ds-now__dot` | The same dot on its own, for horizontal tracks |

## States

| State | Looks | Set by |
|---|---|---|
| Line only | Line and dot | no `label` |
| Labeled | Line, dot and the time plate | `label` ("10:42") |
| Moving | Glides to the new position over one second when the offset changes | `offset` (`--now`) |

## Behavior and accessibility

- Hidden from assistive tech (`aria-hidden="true"`); the grid and its text carry the meaning.
- `offset` is hours since the grid's first hour (2.7 = 2 hours 42 minutes after the start). The line multiplies it by the density hour row (`--ds-density-hour-row`: 48px comfortable, 40px compact), so the grid must use the same row height.
- Place it inside a positioned container (the day column); it spans the container's width.
- `useNow` starts as `undefined` and fills in after mount, so server and client render the same markup; it updates every 30 seconds by default.
- Reduced motion: the line moves without gliding.
- Forced colors: the line and dot paint themselves in `Highlight`.

## React

```tsx
import { NowLine, clockOf, hoursOf, useNow } from '@meetingat10/design-system/react';

function TodayColumn({ startHour = 8 }: { startHour?: number }) {
  const now = useNow(); // decimal hours, or undefined before mount
  return (
    <div className="ds-timetable__day is-today">
      {now !== undefined && <NowLine offset={now - startHour} label={clockOf(now)} />}
    </div>
  );
}

<NowLine offset={0.7} label="10:42" />
hoursOf(new Date(2026, 9, 21, 10, 42)); // 10.7
clockOf(10.7); // "10:42"
```

`offset` is required. `useNow(intervalMs)` takes the update interval (default 30000).

## Plain CSS

```html
<div class="ds-now" style="--now: 2.7" aria-hidden="true">
  <span class="ds-now__label">10:42</span>
</div>
```

Update `--now` from a script as time passes; the transition does the gliding.
