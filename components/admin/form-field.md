# Form field

| Anatomy | Notes |
|---|---|
| Label | Always visible, 14px medium, above the input |
| Input | `control-h`, `line-strong` border, `radius-control` |
| Hint | 12px `ink-muted`, below input |
| Error | 12px `danger-fg` with icon, replaces hint |
| Required | Text "(required)" in label; not an asterisk alone |

| State | Treatment |
|---|---|
| Default | 1px `line-strong` |
| Hover | Border `ink-secondary` |
| Focus | 2px `focus` outline, border `focus` |
| Filled | `ink` text |
| Invalid | 2px `danger` border + error text, `aria-invalid="true"` |
| Disabled | `surface-sunken` bg, `ink-muted` text, no hover |
| Read-only | Plain text style, no border |

Tokens: `surface`, `ink`, `ink-muted`, `line-strong`, `focus`, `danger`, `danger-fg`, `radius-control`, `control-h`.

A11y: `<label for>`; hint/error ids in `aria-describedby`; error text announced on submit (`role="alert"`); `autocomplete` attributes set; placeholder never replaces label (placeholder uses `ink-muted`, 4.5:1).

```html
<div class="ds-field">
  <label class="ds-label" for="email">Email</label>
  <input class="ds-input" id="email" type="email" aria-invalid="true" aria-describedby="email-err">
  <p class="ds-error" id="email-err">Enter a complete email address.</p>
</div>
```
