---
title: Toast
description: A short-lived note on the inverse ink sheet that rises from the bottom edge, with a time-left line, swipe to dismiss and a stack of three.
react: ToastRegion
demo: Toast
---
# Toast

A toast is a short-lived note on the inverse ink sheet: "Draft saved", "Post moved to Saved". It rises from the bottom edge, shows the time left as a line along its bottom, and can be swiped away. Render one `ToastRegion` near the app root and call `toast()` from anywhere.

## When to use

- Use it to confirm something the person just did, with at most one quick action ("Undo").
- Use `tone="success"` when the action completed; the title still says what happened.
- Don't put errors only in a toast; show them in an [Inline Alert](inline-alert.md) or on the field, next to the content.
- Don't use it for anything people must read or act on later; it goes away. Use an alert or the page itself.
- Don't put names, record content or report details in a toast.

## Anatomy

| Part | Class | Notes |
|---|---|---|
| Region | `.ds-toast-region` | Fixed at the bottom end corner, 16px inset, up to 24rem wide; full width with 12px insets below 600px; `z-index` toast (500) |
| Toast | `.ds-toast` | Inverse sheet (`inverse-bg`, `inverse-fg`), radius 12, overlay shadow, no rule |
| Icon | `.ds-toast__icon` | Fill-weight `info`, or `check-circle` in `success-on-inverse` for success; decorative |
| Content | `.ds-toast__content` | Title and description |
| Title | `.ds-toast__title` | Label style |
| Description | `.ds-toast__body` | Body small in `inverse-muted` |
| Action | `.ds-toast__actions`, `.ds-toast__action` | One underlined text button; runs its action, then closes the toast |
| Close | `.ds-toast__close` | 32px "Dismiss" button |
| Timer | `.ds-toast__timer` | 2px line along the bottom that shrinks over `--toast-duration` |

## States

| State | Looks | Set by |
|---|---|---|
| Neutral | Ink sheet, `info` icon | `tone="neutral"` (default) |
| Success | Icon and timer line in `success-on-inverse` | `tone="success"`, `.ds-toast--success` |
| Entering | Rises 8px and fades in | mount |
| Timing | The line shrinks from full width to nothing over the timeout | `timeout` (default 6000ms), `--toast-duration` |
| Paused | The timer stops while the pointer is over the toast or focus is inside | `:hover`, `:focus-within` |
| Persistent | No timer line; stays until dismissed | `timeout: 0` |
| Swiping | Follows a sideways drag; closes past 90px, springs back otherwise | drag (Motion); off under reduced motion |
| Exiting | Sinks and fades; inside a view transition where the browser supports it | `[data-exiting]` |
| Focus | 2px ring in `inverse-focus` | `:focus-visible` |

## Behavior and accessibility

- React Aria toast region: a landmark named "Notifications" (change it with `label`). F6 moves focus to the region; Tab reaches the action and "Dismiss".
- Each toast is an `alertdialog` named by its title, and its content is an `alert`, so screen readers announce it when it appears.
- Up to three toasts show at once, the newest at the bottom; older ones wait in the queue until a visible one closes.
- Timers pause while the region is hovered or focused, so people can read and act.
- `toast()` returns the toast's key; close one early with `toastQueue.close(key)`.
- Swiping is never the only way out: every toast has "Dismiss".
- Reduced motion: no rise, sink, swipe or view transition; the timer line is not drawn, and the toast still closes after its timeout.
- Forced colors: the toast keeps a `CanvasText` edge and the timer line paints `Highlight`.

## React

```tsx
import { DesignSystemProvider, ToastRegion, toast } from '@meetingat10/design-system/react';

// Once, near the app root.
<DesignSystemProvider>
  <App />
  <ToastRegion />
</DesignSystemProvider>

// Anywhere.
toast('Draft saved', { tone: 'success', description: 'CCS-2026-0142 is saved as a draft.' });
toast('Post moved to Saved', { action: { label: 'Undo', onAction: undoMove } });
toast('Sample export ready', { timeout: 0 });
```

`ToastData` is `{ title, description?, tone?: 'neutral' | 'success', action?: { label, onAction } }`. The `toast()` options add `timeout` (ms, default 6000; `0` keeps the toast) and `queue`. For a separate stack, create `new ToastQueue<ToastData>({ maxVisibleToasts: 3 })` and pass it to `<ToastRegion queue={...}>` and `toast(..., { queue })`. React Aria's toast API is `UNSTABLE_` in 1.22.1; this package wraps it.

## Plain CSS

```html
<div class="ds-toast-region" role="region" aria-label="Notifications">
  <div class="ds-toast ds-toast--success" role="alertdialog" aria-labelledby="toast-1-title">
    <span class="ds-toast__icon" aria-hidden="true"><svg class="ds-icon"><use href="sprite.svg#ds-check-circle-fill"/></svg></span>
    <div class="ds-toast__content">
      <p class="ds-toast__title" id="toast-1-title">Draft saved</p>
      <p class="ds-toast__body">CCS-2026-0142 is saved as a draft.</p>
    </div>
    <button class="ds-toast__close" type="button" aria-label="Dismiss">
      <svg class="ds-icon ds-icon--16" aria-hidden="true"><use href="sprite.svg#ds-x"/></svg>
    </button>
    <span class="ds-toast__timer" aria-hidden="true" style="--toast-duration: 6s"></span>
  </div>
</div>
```

The plain layer only draws the toast. Announce it through a live region, remove it after `--toast-duration`, and pause that timer while it is hovered or focused.
