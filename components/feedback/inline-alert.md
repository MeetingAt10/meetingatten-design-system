---
title: Inline Alert
description: A persistent message next to the content it is about, on a tinted sheet with its icon on a solid tone block.
react: Alert
---
# Inline Alert

An inline alert is a persistent message placed next to the content it is about: a failed save, a notice that a schedule is a sample, a boundary to keep in mind. It is a tinted sheet; the icon sits on a small solid block in the tone color, and the title and body stay in ink. There is no colored side stripe.

## When to use

- Use it for messages that stay until the situation changes: errors with a fix, warnings, notices about sample content.
- Use `danger` for errors, with the problem and the fix in words ("Couldn't save your draft. Your text is kept on this device.").
- Use `neutral` with `role="note"` for static guidance that is always on the page ("Why is Submit disabled?").
- Don't make a [Toast](toast.md) the only place an error lives; the alert stays beside the content.
- Don't add a colored side stripe or a second border; the tint and the icon block carry the tone.

## Anatomy

| Part | Class | Notes |
|---|---|---|
| Sheet | `.ds-alert` | Tone ground, radius 8, 12px 16px padding; columns for icon, content and close |
| Tone | `.ds-alert--success`, `--warning`, `--danger`, `--neutral` | Info is the default (no modifier) |
| Icon block | `.ds-alert__icon` | 28px solid block (radius 6) in the tone ink; 16px fill-weight glyph in the tone ground; decorative |
| Content | `.ds-alert__content` | Title, body and actions |
| Title | `.ds-alert__title` | Label style, ink |
| Body | `.ds-alert__body` | Body small, ink |
| Actions | `.ds-alert__actions` | Buttons or links under the text, 8px gap |
| Close | `.ds-icon-btn.ds-alert__close` | Optional "Dismiss" icon button |

## States

| State | Looks | Set by |
|---|---|---|
| Info | Info ground, navy icon block, `info` glyph; announced politely | `tone="info"` (default) |
| Success | Success ground and block, `check-circle` glyph | `tone="success"`, `.ds-alert--success` |
| Warning | Warning ground and block, `warning` glyph | `tone="warning"`, `.ds-alert--warning` |
| Danger | Danger ground and block, `warning-circle` glyph; announced at once | `tone="danger"`, `.ds-alert--danger` |
| Neutral | Neutral highlighter wash, ink block, `info` glyph | `tone="neutral"`, `.ds-alert--neutral` |
| With actions | A row of buttons or links under the body | `actions` |
| Dismissible | "Dismiss" button on the right | `onDismiss` |

## Behavior and accessibility

- Role: `alert` for danger (announced at once), `status` for the other tones (announced politely), `note` for static guidance that is not a live region. Set `role` to override.
- Render the alert when the situation happens, close to the content it is about. Don't move focus to it unless the fix needs it.
- The title says what happened; the body says what to do next. Keep the person's input.
- The icon block is decorative; the words carry the tone. Change the glyph with `icon` (a curated name).
- Honest copy: no promises of anonymity, security, response time or outcome.
- Forced colors: the sheet and the icon block keep `CanvasText` edges.

## React

```tsx
import { Alert, Button } from '@meetingat10/design-system/react';

<Alert title="Illustrative schedule">These times are examples, not live availability.</Alert>
<Alert tone="success" title="Draft saved">CCS-2026-0142 is saved as a draft.</Alert>
<Alert tone="warning" icon="lock" title="Community access does not grant report access">
  Keep posts free of personal or case details.
</Alert>
<Alert
  tone="danger" title="Couldn't save your draft"
  actions={<Button size="sm" variant="secondary" onPress={retry}>Try again</Button>}
>
  Your text is kept on this device.
</Alert>
<Alert tone="neutral" role="note" title="Why is Submit disabled?" onDismiss={hideNote}>
  Recipients and access rules are still being confirmed.
</Alert>
```

`tone` is `info` (default), `success`, `warning`, `danger` or `neutral`.

## Plain CSS

```html
<div class="ds-alert ds-alert--warning" role="status">
  <span class="ds-alert__icon" aria-hidden="true">
    <svg class="ds-icon ds-icon--16"><use href="sprite.svg#ds-lock-fill"/></svg>
  </span>
  <div class="ds-alert__content">
    <p class="ds-alert__title">Community access does not grant report access</p>
    <p class="ds-alert__body">Keep posts free of personal or case details.</p>
  </div>
</div>

<div class="ds-alert ds-alert--danger" role="alert">
  <span class="ds-alert__icon" aria-hidden="true">
    <svg class="ds-icon ds-icon--16"><use href="sprite.svg#ds-warning-circle-fill"/></svg>
  </span>
  <div class="ds-alert__content">
    <p class="ds-alert__title">Couldn't save your draft</p>
    <p class="ds-alert__body">Your text is kept on this device.</p>
    <div class="ds-alert__actions"><button class="ds-btn ds-btn--secondary ds-btn--sm" type="button">Try again</button></div>
  </div>
  <button class="ds-icon-btn ds-alert__close" type="button" aria-label="Dismiss">
    <svg class="ds-icon ds-icon--16" aria-hidden="true"><use href="sprite.svg#ds-x"/></svg>
  </button>
</div>
```
