---
title: Radio
description: Choose exactly one option in a labeled group; the center dot springs in, and card radios make block-shaped choices.
react: RadioGroup
demo: Radio
---
# Radio

A radio group asks for exactly one choice. Each radio is a ring whose center dot springs in when chosen. A card radio turns the choice into a ruled block with a description, for choices that need a sentence each (meeting type, delivery).

## When to use

- Use it for two to five options people should see at once ("Online", "On campus").
- Use `row` for short labels that fit on one line.
- Use `card` when each option needs a description.
- Don't use it for long lists; use a [Select](select.md) or [ComboBox](combobox.md).
- Don't use it to switch views; use a [SegmentedControl](segmented-control.md).

## Anatomy

| Part | Class | Notes |
|---|---|---|
| Group | `.ds-radio-group` | 12px between options; `--row` lays them out in a wrapping row |
| Radio | `.ds-radio` | Label row, 12px gap, at least 24px tall |
| Native input | `.ds-check__input` | Plain markup only, visually hidden |
| Ring | `.ds-radio__ring` | 20px, 1.5px `border-default` rule, paper |
| Dot | `.ds-radio__ring::after` | Navy center dot that springs in |
| Text | `.ds-check__text`, `.ds-check__description` | Label with a body-small second line |
| Card | `.ds-radio--card` | Full-width block, 16px padding, `border-default` rule, radius 8 |

## States

| State | Looks | Set by |
|---|---|---|
| Unselected | Empty ring | none |
| Hover | Ring darkens to `border-strong`; a card takes the schedule wash | `:hover`, `[data-hovered]`, `.is-hover` |
| Selected | Navy ring and dot; a card gets a 2px navy edge on the schedule wash | `[data-selected]`, `:checked` |
| Focus | 2px focus ring around the ring (around the card for card radios) | `[data-focus-visible]`, `:focus-visible` on the input |
| Invalid | Danger ring and dot | `isInvalid` on the group, `[data-invalid]`, `.is-error` |
| Disabled | Dashed ring on the disabled ground, disabled ink | `isDisabled`, `[data-disabled]`, `:disabled` |

## Behavior and accessibility

- React Aria `RadioGroup`: role `radiogroup` named by the group label. Tab enters the group at the selected option; arrow keys move and select.
- The group label, description and error come from [Field](field.md); required groups say so in words.
- Option labels say the full meaning ("Phone (unavailable)", not just "Phone").
- Reduced motion: the dot appears at once.
- Forced colors: rings keep a `CanvasText` edge; the selected dot is `Highlight`; focus is a 2px `Highlight` outline.

## React

```tsx
import { RadioGroup, Radio } from '@meetingat10/design-system/react';

<RadioGroup label="Meeting type" defaultValue="campus" row>
  <Radio value="online">Online</Radio>
  <Radio value="campus">On campus</Radio>
  <Radio value="phone" isDisabled>Phone (unavailable)</Radio>
</RadioGroup>

<RadioGroup label="Meeting type" value={type} onChange={setType}>
  <Radio value="online" card description="A link is sent after the faculty member confirms.">Online</Radio>
  <Radio value="campus" card description="At the faculty office shown on the slot.">On campus</Radio>
</RadioGroup>
```

`RadioGroup` takes `label`, `description`, `errorMessage`, `row` and React Aria group props (`value`, `onChange`, `isRequired`, `isDisabled`, `name`). `Radio` takes `value`, `description`, `card` and `isDisabled`.

## Plain CSS

```html
<fieldset class="ds-fieldset">
  <legend>Meeting type</legend>
  <div class="ds-radio-group ds-radio-group--row">
    <label class="ds-radio"><input type="radio" class="ds-check__input" name="type" value="online"><span class="ds-radio__ring" aria-hidden="true"></span>Online</label>
    <label class="ds-radio"><input type="radio" class="ds-check__input" name="type" value="campus" checked><span class="ds-radio__ring" aria-hidden="true"></span>On campus</label>
  </div>
</fieldset>

<label class="ds-radio ds-radio--card">
  <input type="radio" class="ds-check__input" name="delivery" value="online">
  <span class="ds-radio__ring" aria-hidden="true"></span>
  <span class="ds-check__text"><span>Online</span><span class="ds-check__description">A link is sent after the faculty member confirms.</span></span>
</label>
```
