# Control / Text Field

Persistent label and value; seven states. Placeholder text never replaces a label. Required fields use text, not an asterisk alone. Loading means async validation. Pressed is pointer-down before focus.

## Figma source

| Component | Size (w x h) | Radius | Padding (t r b l) | Gap | Master fill |
|---|---|---|---|---|---|
| `ACCS 2026 / Control / Text Field` | 352 x 128 | 0 | 0 / 0 / 0 / 0 | 8 | - |

Variant axes:
- State: Default / Hover / Pressed / Focus / Disabled / Error / Loading (7 variants)

## Anatomy

| Part | Spec |
|---|---|
| Label | `Label` 14/20 / 600, always visible |
| Input | height 44, padding 0 / 10, radius 6, 1px `color/border-default`, `Body` 14/22 |
| Message | `Body small` 13/20; hint in `text-secondary`, error in `color/danger/fg` |

## States

| State | Treatment (tokens) |
|---|---|
| Default | `color/surface` fill, 1px `color/border-default` |
| Hover | `color/info/bg` fill |
| Pressed | `color/border-strong` 2px edge (pointer-down before focus) |
| Focus | 3px `color/focus` ring + 2px gap |
| Disabled | `color/disabled/bg` fill, `color/disabled/fg` text; reason in message ("Policy scope is not confirmed.") |
| Error | 1px `color/danger/fg` border + message "Couldn’t validate this subject. Try again; your text is kept." |
| Loading | message "Checking subject…"; `aria-busy` |

## Figma copy

Label "Subject", value "Course planning", disabled value "Submission unavailable".

## Accessibility

- Persistent `<label for>`; hint and error linked with `aria-describedby`; announce required/invalid (`aria-invalid="true"`).
- On a failed submit provide a linked error summary and a deliberate focus destination; retain entered values.
- Distinguish network failure from validation failure; do not announce every keystroke.
- Do not expose sensitive details in errors, analytics, URLs or live regions.

## Reference markup

Classes come from `dist/components.css`. Live matrices: `preview/index.html`.

```html
<div class="ds-field is-error">
  <label class="ds-label" for="subject">Subject</label>
  <input class="ds-input" id="subject" value="Course planning" aria-invalid="true" aria-describedby="subject-msg">
  <p class="ds-field__msg" id="subject-msg">Couldn’t validate this subject. Try again; your text is kept.</p>
</div>
```
