---
title: Checkbox
description: Independent on/off choice with checked, indeterminate, error and disabled states.
react: Checkbox
---
# Control / Checkbox

Selected=False/True x seven states = 14 variants. Independent multi-select; Space toggles. Loading represents a pending preference save, never automatic consent. Do not use a disabled checkbox to imply privacy consent.

## Figma source

| Component | Size (w x h) | Radius | Padding (t r b l) | Gap | Master fill |
|---|---|---|---|---|---|
| `ACCS 2026 / Control / Checkbox` | 352 x 96 | 6 | 0 / 0 / 0 / 0 | 8 | - |

Variant axes:
- Selected: False / True; State: Default / Hover / Pressed / Focus / Disabled / Error / Loading (14 variants)

## Anatomy

| Part | Spec |
|---|---|
| Box | 20px, radius 4, 2px `color/border-default`; checked fill `color/action/default`, check `color/on-action` |
| Label | `Label` 14/20 / 600, whole label is clickable; gap 8 |
| Message | error "Couldn’t save this preference. Try again."; loading "Saving preference… Changes are paused." |

## States

| State | Treatment (tokens) |
|---|---|
| Default / Hover / Pressed | hover `color/info/bg` box; pressed `color/border-strong` |
| Focus | 3px focus ring around the box |
| Disabled | `color/disabled/bg`, `color/disabled/fg` |
| Error | `color/danger/fg` border + message |
| Loading | message; changes paused |

## Figma copy

Label "Email updates"; notification preference remains optional.

## Accessibility

- Native `<input type="checkbox">` inside a `<label>`; group related choices with `<fieldset>` and `<legend>`; expose checked state.
- The label includes the full choice meaning.

## React

```tsx
<Checkbox>Keep me signed in</Checkbox>
<Checkbox isIndeterminate>All topics</Checkbox>
```

## Reference markup

Classes come from `dist/components.css`. Live matrices: `preview/index.html`.

```html
<label class="ds-check"><input type="checkbox" checked><span class="ds-check__box"></span>Email updates</label>
```
