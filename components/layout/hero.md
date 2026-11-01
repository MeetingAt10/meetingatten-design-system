---
title: Hero
description: The first viewport as a thesis, with the brand, a display headline, one line, actions and the product at work beside them.
react: Hero
---
# Hero

The hero is the first viewport of the ACCS landing and the Meeting At 10 site. Copy sits on the left: the brand (the [door plate](../identity/door-plate.md) on ACCS surfaces, the [Logo](../identity/logo.md) on Meeting At 10 surfaces), the page's h1 at display size, one supporting line and the actions. The artifact sits on the right at the scale it has in use, usually a [Timetable](../scheduling/timetable.md) with realistic blocks.

## When to use

- Use it once, at the top of a landing or marketing page.
- Use `art` for the product doing its job (a week sheet, a slot picker), using realistic course and room names.
- Use `note` for small print such as the time zone ("Times are shown in Asia/Manila (PHT).").
- Don't put an eyebrow or kicker above the headline, and don't add a row of metrics, gradient text or a stack of cards under it.
- On marketing surfaces (the ACCS landing, the Meeting At 10 site, the documentation site), the page around the hero may use an [Aurora](../expressive/aurora.md) and a [GridBackdrop](../expressive/grid-backdrop.md), with the headline as a [WordReveal](../expressive/word-reveal.md) (`as="span"`, inside the hero's h1). The Timetable or slot picker stays the main artifact. Never in the portal.
- Don't use it on app pages; use [SectionHeader](section-header.md) with `level={1}`.

## Anatomy

| Part | Class | Notes |
|---|---|---|
| Hero | `.ds-hero` | Inside `.ds-container`; one column with a 40px gap, then 5fr + 7fr columns from 1024px with a 48px gap and at least the viewport height minus the navbar |
| Copy | `.ds-hero__copy` | Grid with a 24px gap, items aligned to the start |
| Plate | `plate` slot | `DoorPlate size="lg"` on ACCS surfaces or `Logo size="lg"` on Meeting At 10 surfaces: the brand mark, not a label |
| Title | `.ds-hero__title` | The page's h1 in the display style: Plus Jakarta Sans 800, fluid 44 to 72px, line height 1.02, tracking -0.035em |
| Lead | `.ds-hero__lead` | One line in body large 18/29, secondary text, max width 34rem |
| Actions | `.ds-hero__actions` | One primary and at most one secondary [Button](../control/button.md), 12px apart |
| Note | `.ds-hero__note` | Caption in secondary text |
| Art | `.ds-hero__art` | The artifact column; `min-width: 0` so a wide timetable scrolls inside it |

## States

| State | Looks | Set by |
|---|---|---|
| Phone and tablet | Copy first, art below it; 40px above, 64px below | viewport below 1024px |
| Desktop | Copy in five columns, art in seven, vertically centered; 48px above and below | viewport from 1024px |
| No art | Copy only | omit `art` |

## Behavior and accessibility

- The title is the page's only h1. The plate, lead, actions and note follow it in DOM order, then the art.
- Name actions by what they do ("Sign in", "Browse the community"); keep one primary.
- Do not imply approval or endorsement in the art or the note.
- The hero has no motion of its own. Art such as the Timetable follows reduced motion on its own terms, and the [expressive layer](../../foundations/motion.md) pieces stop under reduced motion.
- Forced colors: the plate and blocks keep their edges; the headline and lead take system text colors.

## React

```tsx
import { Hero, DoorPlate, Button, Timetable } from '@meetingat10/design-system/react';

<Hero
  plate={<DoorPlate size="lg" />}
  title="Your Access to the College of Computer Studies"
  lead="Community, consultations and your own reports, each in its lane."
  actions={<>
    <Button icon="sign-in" href="/sign-in">Sign in</Button>
    <Button variant="secondary" href="/community">Browse the community</Button>
  </>}
  note="Times are shown in Asia/Manila (PHT)."
  art={<Timetable label="This week" days={week} events={events} />}
/>
```

All slots except `title` are optional. The React component renders `<section class="ds-container ds-hero">`.

## Plain CSS

```html
<section class="ds-container ds-hero">
  <div class="ds-hero__copy">
    <span class="ds-plate ds-plate--lg"><span class="ds-plate__name">ACCS</span></span>
    <h1 class="ds-hero__title">Your Access to the College of Computer Studies</h1>
    <p class="ds-hero__lead">Community, consultations and your own reports, each in its lane.</p>
    <div class="ds-hero__actions">
      <a class="ds-btn ds-btn--primary" href="/sign-in">Sign in</a>
      <a class="ds-btn ds-btn--secondary" href="/community">Browse the community</a>
    </div>
    <p class="ds-hero__note">Times are shown in Asia/Manila (PHT).</p>
  </div>
  <div class="ds-hero__art">
    <div class="ds-timetable ds-isolate">...</div>
  </div>
</section>
```
