---
title: Checkbox
description: An independent on or off choice whose check is drawn in as the box fills navy, alone or in a labeled group.
react: Checkbox
---
# Checkbox

A checkbox is an independent on or off choice in a form. The 20px box fills navy and the check is drawn in; a dash shows a mixed state. Group related choices under one label with `CheckboxGroup`, which also carries the group's error.

## When to use

- Use it for choices that are submitted with a form ("Replies to my posts", "Weekly digest").
- Use `CheckboxGroup` for several related choices under one label.
- Use `isIndeterminate` on a parent box when only some of its children are checked.
- Don't use it for settings that apply at once; use a [Switch](switch.md).
- Don't use it for one choice out of several; use a [RadioGroup](radio.md).

## Anatomy

| Part | Class | Notes |
|---|---|---|
| Choice | `.ds-check` | Label row, 12px gap, at least 24px tall; the whole label is clickable |
| Native input | `.ds-check__input` | Plain markup only, visually hidden |
| Box | `.ds-check__box` | 20px, 1.5px `border-default` rule, radius 4, paper |
| Check | `svg polyline` | 16px stroke drawn in on the snappy spring |
| Dash | `.ds-check__dash` | 10 by 2px bar for the mixed state |
| Text | `.ds-check__text`, `.ds-check__description` | Label with a body-small second line |
| Group | `.ds-check-group` | 12px between choices |

## States

| State | Looks | Set by |
|---|---|---|
| Unchecked | Empty paper box | none |
| Hover | Box rule darkens to `border-strong` | `:hover`, `[data-hovered]`, `.is-hover` |
| Checked | Navy box, check drawn in | `isSelected`, `[data-selected]`, `:checked` |
| Mixed | Navy box with a dash | `isIndeterminate`, `[data-indeterminate]`, `:indeterminate` |
| Focus | 2px focus ring around the box | `[data-focus-visible]`, `:focus-visible` on the input |
| Invalid | Danger rule; a checked box fills danger | `isInvalid`, `[data-invalid]`, `.is-error` |
| Disabled | Dashed box on the disabled ground, disabled ink | `isDisabled`, `[data-disabled]`, `:disabled` |

## Behavior and accessibility

- React Aria `Checkbox`: Space toggles; the label and the box are one target.
- `CheckboxGroup` names the group with its label and shows one error line for the group ([Field](field.md)).
- A single `Checkbox` has no error line of its own; put the message in a group or next to it.
- The label says the full meaning of the choice. Required choices say so in words.
- Reduced motion: the check appears at once.
- Forced colors: the box keeps a `CanvasText` edge on `Canvas`; checked and mixed boxes fill `Highlight`; focus is a 2px `Highlight` outline.

## React

```tsx
import { Checkbox, CheckboxGroup } from '@meetingat10/design-system/react';

<CheckboxGroup label="Notify me about" defaultValue={['replies']}>
  <Checkbox value="replies">Replies to my posts</Checkbox>
  <Checkbox value="slots" description="Only consultations you booked.">Consultation changes</Checkbox>
  <Checkbox value="digest">Weekly digest</Checkbox>
</CheckboxGroup>

<Checkbox isIndeterminate>Some topics</Checkbox>
<Checkbox isDisabled>Sync calendar (unavailable)</Checkbox>
```

`Checkbox` passes through React Aria props (`isSelected`, `defaultSelected`, `onChange`, `value`, `name`). `CheckboxGroup` takes `label`, `description`, `errorMessage` and React Aria group props (`value`, `onChange`, `isRequired`, `isInvalid`).

## Plain CSS

```html
<fieldset class="ds-fieldset">
  <legend>Notify me about</legend>
  <div class="ds-check-group">
    <label class="ds-check">
      <input type="checkbox" class="ds-check__input" name="notify" value="replies" checked>
      <span class="ds-check__box" aria-hidden="true">
        <svg viewBox="0 0 18 18"><polyline points="3.5 9.5 7.5 13 14.5 5" pathLength="1"/></svg>
        <span class="ds-check__dash"></span>
      </span>
      Replies to my posts
    </label>
    <label class="ds-check">
      <input type="checkbox" class="ds-check__input" name="notify" value="slots">
      <span class="ds-check__box" aria-hidden="true">
        <svg viewBox="0 0 18 18"><polyline points="3.5 9.5 7.5 13 14.5 5" pathLength="1"/></svg>
        <span class="ds-check__dash"></span>
      </span>
      <span class="ds-check__text"><span>Consultation changes</span><span class="ds-check__description">Only consultations you booked.</span></span>
    </label>
  </div>
</fieldset>
```
