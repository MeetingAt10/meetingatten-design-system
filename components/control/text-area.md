# Control / Text Area

Seven states, same state model as Text Field. 112px input plus a reserved message region.

## Figma source

| Component | Size (w x h) | Radius | Padding (t r b l) | Gap | Master fill |
|---|---|---|---|---|---|
| `ACCS 2026 / Control / Text Area` | 493 x 192 | 0 | 0 / 0 / 0 / 0 | 8 | - |

Variant axes:
- State: Default / Hover / Pressed / Focus / Disabled / Error / Loading (7 variants)

## Anatomy

| Part | Spec |
|---|---|
| Input | min-height 112, padding 10, radius 6, 1px `color/border-default`, `Body` 14/22, vertical resize |
| Message | `Body small`; "General context only; omit personal details." |

## States

| State | Treatment (tokens) |
|---|---|
| Default / Hover / Pressed / Focus | as [Text Field](text-field.md) |
| Disabled | message "This field is unavailable." |
| Error | `color/danger/fg` border + "Couldn’t validate this text. Try again; your text is kept." |
| Loading | message "Checking text…" |

## Figma copy

Label "How can we help?", placeholder "Describe the topic you’d like to discuss. Do not include sensitive details here."

## Accessibility

- Same label, hint, error and live-region rules as Text Field; preserve normal editing keys.

## Reference markup

Classes come from `dist/components.css`. Live matrices: `preview/index.html`.

```html
<div class="ds-field">
  <label class="ds-label" for="help">How can we help?</label>
  <textarea class="ds-textarea" id="help" placeholder="Describe the topic you’d like to discuss. Do not include sensitive details here."></textarea>
  <p class="ds-field__msg">General context only; omit personal details.</p>
</div>
```
