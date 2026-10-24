---
title: Radio
description: Choose exactly one option in a labeled group; arrow keys move the selection.
react: RadioGroup
---
# Control / Radio

Selected=False/True x six states = 12 variants (no Loading: loading belongs to the option group, not an individual choice). One option per named group; arrow keys move and select.

## Figma source

| Component | Size (w x h) | Radius | Padding (t r b l) | Gap | Master fill |
|---|---|---|---|---|---|
| `ACCS 2026 / Control / Radio` | 352 x 96 | 6 | 0 / 0 / 0 / 0 | 8 | - |

Variant axes:
- Selected: False / True; State: Default / Hover / Pressed / Focus / Disabled / Error (12 variants)

## Anatomy

| Part | Spec |
|---|---|
| Control | 20px circle, 2px `color/border-default`; selected: `color/action/default` ring + dot |
| Label | `Label` 14/20 / 600 |
| Message | disabled "This option is unavailable."; error "Choose an option to continue." / "Couldn’t save this choice. Try again." |

## States

| State | Treatment (tokens) |
|---|---|
| Default / Hover / Pressed / Focus | as [Checkbox](checkbox.md) |
| Disabled | disabled tokens |
| Error | `color/danger/fg` |

## Figma copy

Labels "Online consultation", "In-person consultation".

## Accessibility

- Native radios with a shared `name`, in a `<fieldset>`/`<legend>`; arrow keys move and select.
- A single appointment slot also uses a radio-group model.

## React

```tsx
<RadioGroup label="Meeting type" isRequired>
  <Radio value="online">Online</Radio>
  <Radio value="campus">On campus</Radio>
</RadioGroup>
```

## Reference markup

Classes come from `dist/components.css`. Live light and dark demos: this component's page on the design system site (`site/`).

```html
<fieldset class="ds-stack"><legend class="ds-label">Consultation format</legend>
  <label class="ds-check ds-check--radio"><input type="radio" name="fmt" checked><span class="ds-check__box"></span>Online consultation</label>
  <label class="ds-check ds-check--radio"><input type="radio" name="fmt"><span class="ds-check__box"></span>In-person consultation</label>
</fieldset>
```
