---
title: Privacy Notice
description: The access boundary stated on the page, in a hatched band with a lock and neutral ink, never a promise of anonymity or security.
react: PrivacyNotice
---
# Privacy Notice

A privacy notice states the boundary on the page, where people decide what to write: who can open a record, what is still being confirmed, what is disabled. It is a ruled sheet with a hatched band, a lock on an ink block, and the restriction named in words. It uses neutral ink and no hue, because color never signals confidentiality.

## When to use

- Use it on report pages and wherever restricted content is drafted, opened or listed.
- Keep permission and identity visibility as separate statements. Restricted access does not mean anonymous.
- Say what is known, what is pending and what is disabled; put the disabled reason in the foot.
- Don't promise anonymity, security, response times or outcomes.
- Don't hide it in a tooltip, popover, toast or closed panel, and don't tint it with a status or lane color.

## Anatomy

| Part | Class | Notes |
|---|---|---|
| Sheet | `.ds-privacy` | Paper surface, 1px `border-default` rule, radius 12, no shadow; a region named by its title |
| Band | `.ds-privacy__band` | Hatched header strip (`--ds-hatch` over the surface), ruled below |
| Lock | `.ds-privacy__lock` | 32px ink block (radius 6) holding a fill-weight lock; decorative |
| Title | `.ds-privacy__title` | Label style on a small paper chip, so the hatch never crosses the words; `h2` by default |
| Body | `.ds-privacy__body` | Body small; short paragraphs or a list |
| Foot | `.ds-privacy__foot` | Caption in secondary text, ruled above: what is disabled and why |

## States

| State | Looks | Set by |
|---|---|---|
| Default | Hatched band with the lock and title, then the body | `title`, `children` |
| With foot | A ruled caption line at the bottom | `foot`, `.ds-privacy__foot` |
| Nested heading | The title renders as `h3` | `level={3}` |
| Dark theme | The hatch and the lock block redraw from `hatch-ink` and ink; still no hue | `data-theme="dark"` |

## Behavior and accessibility

- Renders a `section` labelled by its heading, so it is a named region landmark.
- The lock is decorative; the title words carry the restriction ("Restricted record", "Policy confirmation required").
- Reports copy is serious, structured and neutral. State permission and identity visibility separately, and say where backend enforcement is still required.
- It stays on the page, close to the action it governs.
- Elevation is declared once: a rule, no shadow.
- No motion.
- Forced colors: the sheet keeps a `CanvasText` edge; the title carries the restriction in words.

## React

```tsx
import { PrivacyNotice } from '@meetingat10/design-system/react';

<PrivacyNotice
  title="Policy confirmation required"
  foot="Sensitive submission is disabled until scope and policy are confirmed."
>
  <p>Access permission: assigned reviewers only (proposed).</p>
  <p>Identity visibility: recipients and anonymity behavior are not yet confirmed.</p>
  <p>These are separate decisions. Restricted access does not mean anonymous. Backend enforcement is required.</p>
</PrivacyNotice>
```

`title` is a string. String `children` are wrapped in a paragraph.

## Plain CSS

```html
<section class="ds-privacy" aria-labelledby="privacy-title">
  <header class="ds-privacy__band">
    <span class="ds-privacy__lock" aria-hidden="true"><svg class="ds-icon ds-icon--16"><use href="sprite.svg#ds-lock-fill"/></svg></span>
    <h2 class="ds-privacy__title" id="privacy-title">Restricted record</h2>
  </header>
  <div class="ds-privacy__body">
    <p>Access permission: assigned reviewers only (proposed).</p>
    <p>Identity visibility: recipients and anonymity behavior are not yet confirmed. Restricted access does not mean anonymous.</p>
  </div>
  <p class="ds-privacy__foot">Submission is disabled until recipients and access rules are confirmed.</p>
</section>
```
