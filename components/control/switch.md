---
title: Switch
description: An on or off setting that takes effect at once; the thumb springs across and the track fills navy.
react: Switch
---
# Switch

A switch is a setting that applies the moment it changes: show my name on posts, compact view. The thumb springs across the track and the track fills navy when on. The label says what it controls; "On" and "Off" can show beside it.

## When to use

- Use it for preferences that apply immediately, without a Save button.
- Use `showState` when the label alone does not make the current state obvious.
- Don't use it inside a form that is submitted; use a [Checkbox](checkbox.md).
- Don't use it for a choice between two named options; use a [RadioGroup](radio.md) or [SegmentedControl](segmented-control.md).

## Anatomy

| Part | Class | Notes |
|---|---|---|
| Switch | `.ds-switch` | Label row, 12px gap, at least 24px tall; the whole label is clickable |
| Native input | `.ds-check__input` | Plain markup only, `role="switch"`, visually hidden |
| Track | `.ds-switch__track` | 44 by 24px, fully round, `border-default` fill when off |
| Thumb | `.ds-switch__track::after` | 18px paper circle with the lift shadow |
| State words | `.ds-switch__state` | "On" or "Off" in caption, secondary ink |

## States

| State | Looks | Set by |
|---|---|---|
| Off | Gray track, thumb at the start | none |
| On | Navy track, thumb at the end | `isSelected`, `[data-selected]`, `:checked` |
| Pressed | The thumb stretches toward where it will go | `:active`, `[data-pressed]` |
| Focus | 2px focus ring around the track | `[data-focus-visible]`, `:focus-visible` on the input |
| Disabled | Disabled ground with a 1px rule, flat thumb, disabled ink | `isDisabled`, `[data-disabled]`, `:disabled` |

## Behavior and accessibility

- React Aria `Switch`: a checkbox input with `role="switch"`; Space toggles; screen readers hear on or off.
- The state words are hidden from assistive tech because the switch already announces its state.
- Apply the change at once and confirm it where it shows (the post preview, the layout). If the change can fail, say so next to the switch and return it to its previous state.
- Reduced motion: the thumb and the track change at once.
- Forced colors: the track is drawn with a `CanvasText` edge and thumb; when on, the track fills `Highlight` with a `HighlightText` thumb.

## React

```tsx
import { Switch } from '@meetingat10/design-system/react';

<Switch defaultSelected showState onChange={setShowName}>Show my name on posts</Switch>
<Switch showState>Compact view</Switch>
<Switch isDisabled>Sync calendar (unavailable)</Switch>
```

Other React Aria `Switch` props (`isSelected`, `onChange`, `name`, `value`, `isReadOnly`) pass through.

## Plain CSS

```html
<label class="ds-switch">
  <input type="checkbox" role="switch" class="ds-check__input" checked>
  <span class="ds-switch__track" aria-hidden="true"></span>
  <span>Show my name on posts</span>
  <span class="ds-switch__state" aria-hidden="true">On</span>
</label>
```

In plain markup, update the state word yourself when the input changes.
