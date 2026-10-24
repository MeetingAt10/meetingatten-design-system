# Feedback / Modal

Seven states, 560 x 304, radius 12. Hover / Focus / Pressed apply to the primary action, not the dialog surface. Error preserves the draft; Loading is busy feedback. Static states are not implemented behavior.

## Figma source

| Component | Size (w x h) | Radius | Padding (t r b l) | Gap | Master fill |
|---|---|---|---|---|---|
| `ACCS 2026 / Feedback / Modal` | 560 x 304 | 12 | 32 / 32 / 32 / 32 | 20 | `#FFFFFF` |

Variant axes:
- State: Default / Hover / Pressed / Focus / Disabled / Error / Loading (7 variants)

## Anatomy

| Part | Spec |
|---|---|
| Container | `radius-card` (12), padding 32, gap 20, `card-bg`, `overlay-shadow`, no border |
| Header | `H2` 24/32 title + Icon Button close |
| Body | `Body` 14/22; message `Body small` |
| Actions | two 48px buttons: Secondary "Keep draft", Destructive "Discard draft" |

## States

| State | Treatment (tokens) |
|---|---|
| Default | message empty |
| Hover / Pressed / Focus | primary (destructive) action states; focus = 3px ring |
| Disabled | Discard disabled; message "Discard is unavailable in this demo." |
| Error | `color/danger/fg` message "Draft was not removed. Sample text is preserved. Try again." |
| Loading | Keep draft disabled; Discard shows "Discarding…" + spinner; message "Discarding demo draft… Keep this dialog open." |

## Figma copy

Title "Discard this demo draft?" Body "The unsent sample draft will be removed from this view. No report has been submitted. This action cannot be undone."

## Usage (from the Figma frames)

- Name the object and explain whether the action is reversible.
- Dark: raised surface is `color/raised`; keep the focus ring on raised and modal surfaces.

## Accessibility

- Use `<dialog>` + `showModal()`; name and describe the dialog; move focus inside, contain Tab/Shift+Tab, close with Escape where appropriate, return focus to the opener.
- Background is inert; do not trap focus in nonmodal content.

## Reference markup

Classes come from `dist/components.css`. Live matrices: `preview/index.html`.

```html
<div class="ds-scrim"><div class="ds-modal" role="dialog" aria-modal="true" aria-labelledby="m-t">
  <div class="ds-modal__head"><h2 class="ds-type-h2" id="m-t">Discard this demo draft?</h2><button class="ds-icon-btn" aria-label="Close"><svg class="ds-icon ds-icon--20" aria-hidden="true"><use href="#ds-close"/></svg></button></div>
  <p class="ds-type-body">The unsent sample draft will be removed from this view. No report has been submitted. This action cannot be undone.</p>
  <div class="ds-modal__actions"><button class="ds-btn ds-btn--secondary">Keep draft</button><button class="ds-btn ds-btn--destructive">Discard draft</button></div>
</div></div>
```
