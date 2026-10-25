---
title: Progress
description: A labeled bar whose navy fill springs to the value, with the value in rolling digits; determinate or indeterminate.
react: Progress
---
# Progress

Progress shows how far a task has run: uploading attachments, importing a file, saving a long form. The label names the task, the value prints beside it in rolling digits, and the navy fill springs along a 6px track. When the amount is unknown, a block sweeps along the track instead.

## When to use

- Use it for work with a known amount (bytes, files, steps), with a label that names the task.
- Use `isIndeterminate` when the amount is unknown, and say what is happening ("Checking availability").
- Use `tone="success"` or `tone="danger"` only to reinforce a result the label already states ("Upload complete").
- Don't use it for a quantity that is not a task (slots taken, storage used); use [Meter](meter.md).
- Don't use it for a short wait inside a control; use the pending [Button](../control/button.md) or a [Spinner](spinner.md).

## Anatomy

| Part | Class | Notes |
|---|---|---|
| Root | `.ds-progress` | Grid, 8px gap; `role="progressbar"` |
| Head | `.ds-progress__head` | Label on the left, value on the right |
| Label | `.ds-progress__label` | Label style (Inter 600 14/20); also the accessible name |
| Value | `.ds-progress__value` | Percentage in Inter 500 13px with tabular figures, secondary text; the digits roll with NumberFlow in React |
| Track | `.ds-progress__track` | 6px, fully rounded, disabled ground |
| Fill | `.ds-progress__fill` | Navy (`action-default`), revealed with `clip-path` up to `--value` percent; moves on the smooth spring |
| Hint | `.ds-progress__hint` | Caption under the bar ("3 of 5 files") |
| Tone | `.ds-progress--success`, `--danger` | Success or danger fill |

## States

| State | Looks | Set by |
|---|---|---|
| Determinate | The fill springs to the value; the value prints beside the label | `value` (with `minValue`, `maxValue`), `aria-valuenow`, `--value` |
| Indeterminate | A 35% block sweeps along the track; no value is printed | `isIndeterminate`, no `aria-valuenow` |
| Success | Success fill; the label states the result | `tone="success"`, `.ds-progress--success` |
| Danger | Danger fill; the label says what failed | `tone="danger"`, `.ds-progress--danger` |
| Value hidden | No printed value; the bar still exposes it | `showValue={false}` |
| Reduced motion | The fill jumps to the value, the sweep block rests at the start of the track, and the digits change without rolling | `prefers-reduced-motion: reduce` |

## Behavior and accessibility

- React Aria `ProgressBar`: `role="progressbar"` with `aria-valuenow`, `aria-valuemin`, `aria-valuemax` and a formatted `aria-valuetext`, named by the visible label. The printed value is `aria-hidden`, so it is not read twice.
- Indeterminate bars have no `aria-valuenow`; the label says what is happening.
- Don't announce every step. State the outcome in the page, or confirm it with a [Toast](toast.md) as well.
- NumberFlow follows the reduced-motion setting by default.
- Forced colors: the track becomes a `Canvas` box with a `CanvasText` edge and the fill paints `Highlight`.

## React

```tsx
import { Progress } from '@meetingat10/design-system/react';

<Progress label="Uploading attachments" value={62} hint="3 of 5 files" />
<Progress label="Upload complete" value={100} tone="success" />
<Progress label="Checking availability" isIndeterminate />
```

`value` is read against `minValue` (0) and `maxValue` (100). `valueLabel` changes only the announced text; the printed value stays a percentage.

## Plain CSS

```html
<div class="ds-progress" role="progressbar" aria-labelledby="upload-label"
  aria-valuenow="62" aria-valuemin="0" aria-valuemax="100" style="--value: 62">
  <div class="ds-progress__head">
    <span class="ds-progress__label" id="upload-label">Uploading attachments</span>
    <span class="ds-progress__value" aria-hidden="true">62%</span>
  </div>
  <div class="ds-progress__track"><div class="ds-progress__fill"></div></div>
  <p class="ds-progress__hint">3 of 5 files</p>
</div>

<div class="ds-progress" role="progressbar" aria-labelledby="check-label">
  <div class="ds-progress__head"><span class="ds-progress__label" id="check-label">Checking availability</span></div>
  <div class="ds-progress__track"><div class="ds-progress__fill"></div></div>
</div>
```

Without `aria-valuenow` the bar shows the indeterminate sweep.
