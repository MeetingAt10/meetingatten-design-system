# Control / Select

Thirteen valid combinations: Expanded=False x seven states, Expanded=True x six (Disabled excluded; a disabled menu cannot be expanded). Use a native select where possible. The visible label persists. The popup is an intentional absolute overlay, not layout.

## Figma source

| Component | Size (w x h) | Radius | Padding (t r b l) | Gap | Master fill |
|---|---|---|---|---|---|
| `ACCS 2026 / Control / Select` | 352 x 128 | 0 | 0 / 0 / 0 / 0 | 8 | - |

Variant axes:
- Expanded: False / True; State: Default / Hover / Pressed / Focus / Disabled / Error / Loading (13 variants)

## Anatomy

| Part | Spec |
|---|---|
| Trigger | height 44, radius 6, value + chevron (`Icon / Chevron` 16, rotated) |
| Popup | `card-bg` fill, `overlay-shadow`, `radius-tile` (8), no border, Select Option rows |
| Open Error / Loading | popup shows "Choices couldn’t load. Try again." + Retry choices button, or "Loading choices…"; these report option retrieval, not a selected-value failure |

## States

| State | Treatment (tokens) |
|---|---|
| Default / Hover / Pressed / Focus / Disabled / Error / Loading | as [Text Field](text-field.md); Disabled message "This choice is unavailable."; Error "Couldn’t load these choices. Try again."; Loading "Loading choices…" |
| Expanded=True | trigger keeps its state; popup lists [Select Option](select-option.md) |

## Figma copy

Label "Consultation topic"; options "Course planning", "Learning support", "General question".

## Accessibility

- Native select preferred: arrows choose, Enter confirms, Escape closes.
- Custom combobox: announce expanded state, selected value and active option; do not intercept text editing unexpectedly.

## Reference markup

Classes come from `dist/components.css`. Live matrices: `preview/index.html`.

```html
<div class="ds-field">
  <label class="ds-label" for="topic">Consultation topic</label>
  <button class="ds-select" id="topic" aria-haspopup="listbox" aria-expanded="true">Course planning <svg class="ds-icon ds-icon--16" aria-hidden="true"><use href="#ds-chevron"/></svg></button>
  <ul class="ds-listbox" role="listbox" aria-labelledby="topic">
    <li class="ds-option" role="option" aria-selected="true"><svg class="ds-icon ds-icon--16" aria-hidden="true"><use href="#ds-check"/></svg>Course planning</li>
    <li class="ds-option" role="option">Learning support</li>
    <li class="ds-option" role="option">General question</li>
  </ul>
</div>
```
