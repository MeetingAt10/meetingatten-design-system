---
title: Inline Alert
description: Persistent message next to the content it is about, in info, success, warning or error tone.
react: Alert
---
# Feedback / Inline Alert

Persistent, non-dismissible Tone=Info / Success / Warning / Error, 824 x 79. It needs no hover/focus/loading. Alerts persist when action is required; the status glyph and title carry meaning, never color alone.

## Figma source

| Component | Size (w x h) | Radius | Padding (t r b l) | Gap | Master fill |
|---|---|---|---|---|---|
| `ACCS 2026 / Feedback / Inline Alert` | 824 x 79 | 6 | 16 / 16 / 16 / 16 | 12 | `#EFF4FF` |

Variant axes:
- Tone: Info / Success / Warning / Error (4 variants)

## Anatomy

| Part | Spec |
|---|---|
| Container | `radius-tile` (8), padding 16, gap 12, tone background, 3px left bar in tone foreground |
| Icon | Info: `Icon / Alert` outline circle glyph; Success: Check; Warning and Error: Alert (triangle), 20px |
| Title | `Label` in tone fg: "System message" |
| Body | `Body` in `color/text-primary` |

## Tones

| State | Treatment (tokens) |
|---|---|
| Info | `color/info/bg`, `color/info/fg` |
| Success | `color/success/bg`, `success/fg` |
| Warning | `color/warning/bg`, `warning/fg` |
| Error | `color/danger/bg`, `danger/fg` |

## Figma copy

Info "Illustrative schedule / These times are examples, not live availability."; Success "Display preference updated"; Warning "Policy scope pending / Sensitive submission is unavailable until rules are confirmed."; Error "A subject is required / Add a brief subject, then try again. Your draft remains on this page."

## Accessibility

- Polite status for updates (`role="status"`); assertive (`role="alert"`) only for urgent errors; announce once, avoid duplicate live regions.
- Keep focus unless recovery requires deliberate movement.

## React

```tsx
<Alert title="Illustrative schedule" role="note">These times are examples, not live availability.</Alert>
<Alert tone="error" title="We couldn’t sign you in">Check your email and password, then try again. Your email is kept.</Alert>
```

Role defaults to `alert` for errors and `status` otherwise; use `note` for guidance that is always on the page.

## Reference markup

Classes come from `dist/components.css`. Live light and dark demos: this component's page on the design system site (`site/`).

```html
<div class="ds-alert ds-alert--error" role="alert"><svg class="ds-icon ds-icon--20" aria-hidden="true"><use href="#ds-alert"/></svg><div><strong class="ds-alert__title">A subject is required</strong><span class="ds-alert__body">Add a brief subject, then try again. Your draft remains on this page.</span></div></div>
```
