# Select

Use native `<select>` up to ~15 options. Use a combobox (ARIA 1.2 pattern) for search or multi-select.

| Anatomy | Notes |
|---|---|
| Trigger | Same box as input, chevron at right (CSS arrow) |
| Menu (combobox) | `surface-raised`, `shadow-lg`, `radius-card`, `z-dropdown`, max-height 20rem |
| Option | `row-h` minus 4px, selected `action-subtle`, active `surface-sunken`, check icon for selected |

| State | Treatment |
|---|---|
| Default / hover / focus / invalid / disabled | Same as [form field](form-field.md) |
| Open | Border `focus`, menu visible, `aria-expanded="true"` |
| Empty results | "No matches" row in `ink-muted` |

Tokens: input tokens plus `surface-raised`, `shadow-lg`, `z-dropdown`, `action-subtle`.

A11y: native select needs no ARIA; combobox: `role="combobox"`, `aria-controls`, `aria-activedescendant`, arrows/Home/End/Esc/type-ahead; selected option has `aria-selected`.

```html
<div class="ds-field">
  <label class="ds-label" for="prog">Program</label>
  <select class="ds-select" id="prog"><option>BS Computer Science</option><option>BS Information Technology</option></select>
</div>
```
