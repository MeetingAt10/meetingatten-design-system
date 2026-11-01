---
title: Agenda
description: Features or steps as ruled rows of a schedule, each led by a lane chip, never a row of same-size icon cards.
react: Agenda
---
# Agenda

An agenda lists features, steps or lanes as ruled rows, like the entries on a timetable. Each row leads with a lane chip (a lane name or a time code), then the title, one or two lines of text, and an optional link. It replaces the old feature row of icon cards.

## When to use

- Use it to explain what a product does, one lane per row (community, consultations, reports).
- Use it for an ordered set of steps where each step has a time or a name.
- Use the `restricted` lane for report-related rows: hatched ink, no hue, with words that state the boundary.
- Don't lay features out as a row of same-size icon cards; that is the template this replaces.
- Don't use it for collection items people browse and open; use [Cards](../content/card.md) in a [Grid](grid.md).

## Anatomy

| Part | Class | Notes |
|---|---|---|
| Agenda | `.ds-agenda` | Ordered list with a hairline rule on top |
| Row | `.ds-agenda__item` | 24px padding, hairline rule below; from 768px three columns (9rem chip, text, link) and 32px padding |
| Chip | `.ds-agenda__chip` | Small solid block, radius 6, Inter 600 12/16 with tabular figures; navy (schedule) by default |
| Chip lanes | `.ds-agenda__chip--community`, `--consult`, `--restricted` | Amber or emerald fill; restricted is paper with an ink rule and a small hatched square marker, no hue |
| Text | `.ds-agenda__text` | Title and body, 8px apart, max width 40rem |
| Title | `.ds-agenda__title` | h3 style: Plus Jakarta Sans 700 20/26 |
| Body | `.ds-agenda__body` | Body 16/26 in secondary text |
| Link | `.ds-agenda__action` | A standalone [Link](../navigation/link.md) with a forward arrow |

## States

| State | Looks | Set by |
|---|---|---|
| Phone | Chip, text and link stacked in one column | viewport below 768px |
| Desktop | Chip column, text column, link on the right | viewport from 768px |
| Schedule lane | Navy chip with white text | `lane="schedule"` (default) |
| Community lane | Amber chip | `lane="community"`, `.ds-agenda__chip--community` |
| Consult lane | Emerald chip | `lane="consult"`, `.ds-agenda__chip--consult` |
| Restricted lane | Paper chip, ink rule, hatched marker beside the word | `lane="restricted"`, `.ds-agenda__chip--restricted` |
| No link | The link column stays empty | omit `href` |

## Behavior and accessibility

- Renders an ordered list (`<ol>`), so screen readers announce the number of rows. Each row has a heading (`level` 3 by default); pick the level that fits the page outline.
- The chip is text, read before the title. The lane color reinforces it; the word carries it.
- Give each link its own words ("See open slots", "Join the conversation"). Several "Learn more" links on one page are hard to tell apart.
- Restricted rows state the boundary plainly ("Your own records, kept apart") and promise nothing about anonymity or security.
- Reduced motion: only the link arrow moves on hover, and it stops.
- Forced colors: chips keep a `CanvasText` edge; the hatched marker drops out and the word remains.

## React

```tsx
import { Agenda, AgendaItem } from '@meetingat10/design-system/react';

<Agenda>
  <AgendaItem chip="Community" lane="community" title="Ask, answer, share what helped" href="/community" linkLabel="Join the conversation">
    Questions and answers from the college community.
  </AgendaItem>
  <AgendaItem chip="10:00" lane="consult" title="Book office hours" href="/consultations" linkLabel="See open slots">
    Nothing is booked until faculty confirm.
  </AgendaItem>
  <AgendaItem chip="Reports" lane="restricted" title="Your own records, kept apart">
    Community access does not grant report access.
  </AgendaItem>
</Agenda>
```

`AgendaItem` takes `chip` (lane name or time code), `lane` (`schedule` default, `community`, `consult`, `restricted`), `title`, `level` (2, 3 or 4; default 3), body text as children, and `href` with `linkLabel` (default "Learn more").

## Plain CSS

```html
<ol class="ds-agenda">
  <li class="ds-agenda__item">
    <span class="ds-agenda__chip ds-agenda__chip--community">Community</span>
    <div class="ds-agenda__text">
      <h3 class="ds-agenda__title">Ask, answer, share what helped</h3>
      <p class="ds-agenda__body">Questions and answers from the college community.</p>
    </div>
    <a class="ds-link ds-link--standalone ds-agenda__action" href="/community">Join the conversation<svg class="ds-icon ds-icon--16" aria-hidden="true"><use href="sprite.svg#ds-arrow-right"/></svg></a>
  </li>
  <li class="ds-agenda__item">
    <span class="ds-agenda__chip ds-agenda__chip--restricted">Reports</span>
    <div class="ds-agenda__text">
      <h3 class="ds-agenda__title">Your own records, kept apart</h3>
      <p class="ds-agenda__body">Community access does not grant report access.</p>
    </div>
    <span></span>
  </li>
</ol>
```
