---
title: Footer
description: The site footer with the wordmark and a short description, named link columns, and a bottom line for status notes.
react: Footer
---
# Footer

The footer closes landing and public pages: the brand (the door plate on ACCS surfaces, the [Logo](../identity/logo.md) on Meeting At 10 surfaces) with a short description, link columns that are each a named navigation, and a ruled bottom line for a short note and the version.

## When to use

- Use it on the landing, Meeting At 10 and public pages.
- Use `note` for status, `meta` for small print on the right.
- Don't use it inside the workspace shell.

## Anatomy

| Part | Class | Notes |
|---|---|---|
| Footer | `.ds-footer` | Paper with a hairline on top, 48px top and 32px bottom padding |
| Grid | `.ds-footer__grid` | One column, two from 600px, brand plus one column per link group from 1024px |
| Brand | `.ds-footer__brand`, `.ds-footer__description` | The brand (DoorPlate on ACCS surfaces, Logo on Meeting At 10 surfaces) and body small text, max 22rem |
| Column | `.ds-footer__col`, `.ds-footer__title` | `<nav>` named by its title; label-style title |
| Links | `.ds-footer__links`, `.ds-footer__link` | Body small, secondary, underline on hover |
| Bottom line | `.ds-footer__bottom` | Ruled caption line: note on the left, meta on the right |

## States

| State | Looks | Set by |
|---|---|---|
| Link hover | Primary text with an underline | `:hover` |
| Focus | 2px focus ring | `:focus-visible` |

## Behavior and accessibility

- A `<footer>` landmark; each column is a `<nav>` named by its title, so screen reader users can tell them apart.
- Links are plain anchors, so they do full page loads (they do not use the provider's client router).
- Keep the status note visible while the ACCS identity is unapproved.

## React

```tsx
import { Footer, DoorPlate } from '@meetingat10/design-system/react';

<Footer
  brand={<DoorPlate />}
  description="Your Access to the College of Computer Studies."
  columns={[
    { title: 'ACCS', links: [{ label: 'Community', href: '/community' }, { label: 'Consultations', href: '/consultations' }] },
    { title: 'Policy', links: [{ label: 'Privacy and access', href: '/privacy' }] },
  ]}
 
/>
```

On Meeting At 10 surfaces pass `brand={<Logo />}`.

## Plain CSS

```html
<footer class="ds-footer">
  <div class="ds-container">
    <div class="ds-footer__grid" style="--footer-cols: 2">
      <div class="ds-footer__brand"><span class="ds-plate"><span class="ds-plate__name">ACCS</span></span><p class="ds-footer__description">Your Access to the College of Computer Studies.</p></div>
      <nav class="ds-footer__col" aria-label="Policy"><p class="ds-footer__title">Policy</p><ul class="ds-footer__links"><li><a class="ds-footer__link" href="/privacy">Privacy and access</a></li></ul></nav>
    </div>
    <div class="ds-footer__bottom"></div>
  </div>
</footer>
```
