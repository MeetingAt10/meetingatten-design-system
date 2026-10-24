# Modal

| Anatomy | Notes |
|---|---|
| Scrim | `overlay`, `z-overlay` |
| Dialog | `surface-raised`, `radius-card`, `shadow-xl`, `z-modal`, width min(32rem, 100%) (48rem for forms) |
| Title | h2/h3, `aria-labelledby` |
| Body | `ink-secondary`, scrolls inside the dialog |
| Actions | Right aligned; secondary left of primary; destructive uses `danger` |

| State | Treatment |
|---|---|
| Open | Fade + 8px rise, `motion-duration-slow`, `ease-enter` |
| Closing | `motion-duration-base`, `ease-exit` |
| Submitting | Primary shows busy state, all actions disabled, dialog not dismissible |
| Error | Inline error above actions, dialog stays |

Use sparingly: confirmations, short forms. Prefer pages for long flows. Confirmation copy states the consequence and reversibility.

A11y: use `<dialog>` with `showModal()` (gives focus trap, inert background, Esc); initial focus on the least destructive action; return focus to the trigger; `aria-describedby` for body.

```html
<dialog class="ds-modal" aria-labelledby="t">
  <h2 class="ds-h3" id="t">Delete this post?</h2>
  <p class="ds-muted">This removes it for everyone and cannot be undone.</p>
  <div class="ds-modal__actions"><button class="ds-btn ds-btn--secondary ds-btn--sm" autofocus>Cancel</button><button class="ds-btn ds-btn--danger ds-btn--sm">Delete</button></div>
</dialog>
```
