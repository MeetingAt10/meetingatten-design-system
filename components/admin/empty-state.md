# Empty state

| Anatomy | Notes |
|---|---|
| Icon tile | 48px circle, `action-subtle` bg, 24px icon |
| Title | h3, says what is missing |
| Body | One or two lines, `ink-secondary`, max 40ch |
| Action | One primary button when the user can fix it |
| Container | Dashed `line-strong` border, `radius-card` |

| Variant | Copy pattern |
|---|---|
| First use | "No requests yet. New student requests will show up here." + Create |
| No results | "No matches for 'lab'. Clear filters." + Clear filters (ghost) |
| No permission | "You do not have access to this area. Contact the department admin." No action |
| Error | Use an inline alert, not an empty state |

A11y: icon `aria-hidden`; heading level fits the page; action is a real button/link.

```html
<div class="ds-empty">
  <span class="ds-empty__icon"><svg class="ds-icon" viewBox="0 0 24 24" aria-hidden="true">...</svg></span>
  <h3 class="ds-h3">No requests yet</h3><p>New student requests will show up here.</p>
  <button class="ds-btn ds-btn--primary ds-btn--sm">Create request</button>
</div>
```
