---
title: Card
description: A container for one item in a collection or for a floating panel, in a raised sheet, flat tint or open treatment, never nested.
react: Card
---
# Card

A card holds one item of a collection (an announcement, a post, a record) or a floating panel such as a sign-in form. It comes in three treatments so a page does not repeat the same box. The default `sheet` is raised paper with a hairline ring and soft layers. `tint` is flat on the neutral tint with a hairline ring, for items in a long list. `open` has no surface, only a rule above the content. A linked card deepens its shadow and rises on hover, and a floating card uses the overlay shadow. Detail pages do not use cards. They use open sections, rules and headings.

## When to use

- Use it for each item in a list or grid of comparable things: posts, announcements, records.
- Use `variant="tint"` for items in a long feed and `variant="open"` for items that sit inside a section. Keep the default `sheet` for the one item that should stand out.
- Use `overlay` for one floating panel on a page (sign-in, a short form over a hero).
- Use `link` with a `CardTitle href` when the whole card opens one destination.
- Don't put a card inside a card, and don't wrap page sections in cards; use [Divider](../layout/divider.md), [Section](../layout/section.md) and headings.
- Don't build page structure from rows of same-size icon cards; use [Agenda](../layout/agenda.md) rows.

## Anatomy

| Part | Class | Notes |
|---|---|---|
| Sheet | `.ds-card` | Paper (`--ds-sheet-bg`) with the sheet shadow (a hairline ring inside soft layers), radius 16 (`--ds-radius-sheet`), 20px padding, 12px gap |
| Tint | `.ds-card--tint` | Neutral tint with the ring shadow only, radius 12 |
| Open | `.ds-card--open` | No fill or shadow, a hairline top rule, 16px top padding, no radius |
| Floating | `.ds-card--overlay` | `--ds-overlay-bg` with the overlay shadow, radius 20, 32px padding |
| Flush | `.ds-card--flush` | No padding, content clipped (media, tables) |
| Head | `.ds-card__head` | Lane chip and time on the left (`.ds-card__lead` groups them), badges on the right |
| Lane chip | `.ds-card__lane` | Small solid block naming the lane or topic; schedule navy by default, `--community` amber, `--consult` emerald |
| Restricted chip | `.ds-card__lane--restricted` | Paper chip with an ink rule and a small hatched square, no hue |
| Time or reference | `.ds-card__when`, `.ds-card__ref` | `time` style, tabular mono, secondary text |
| Title | `.ds-card__title` | H3 style; with a link inside (`.ds-card__link`) it names and opens the card |
| Body | `.ds-card__body` | Body small, secondary text |
| Meta | `.ds-card__meta` | Ruled row (hairline on top), caption text; `.ds-card__stat` for counts, `.ds-card__action` on the right |
| Action | `.ds-card__action` | Visual call to action with an arrow; the title link does the navigating |

## States

| State | Looks | Set by |
|---|---|---|
| Rest | Raised paper with the sheet shadow | none |
| Tint, open | Flat tint with a ring, or a top rule only | `variant`, `.ds-card--tint`, `.ds-card--open` |
| Floating | Overlay shadow | `overlay`, `.ds-card--overlay` |
| Hover (linked) | The shadow deepens to the lift, the card rises 2px, the title underlines and the action arrow steps forward. Tint cards darken their ring and open cards turn the top rule navy | `link`, `.ds-card--link` with `:hover` or `.is-hover` |
| Focus (linked) | 2px focus ring around the whole card while its title link has keyboard focus | `.ds-card--link:has(.ds-card__link:focus-visible)` |

## Behavior and accessibility

- `Card` renders an `<article>` by default; use `as="li"` inside a list and `as="section"` or `as="div"` for panels.
- A linked card is one link: `CardTitle href` stretches the title link over the card, so the card is named by its title alone. `CardAction` is hidden from assistive tech because the title already navigates.
- Buttons and other links inside a linked card stay reachable and sit above the stretched link.
- `CardLink` makes the whole card one `<a>`; use it only for short cards with no heading and no other controls.
- Pick the title level (`level` 2, 3 or 4) that fits the page outline.
- Lane chips name a topic or lane and never a permission or confidentiality level. There are no colored side stripes, and color fills the whole chip.
- Reduced motion: no lift and no arrow step. The hover change lands at once.
- Forced colors: cards and lane chips keep a `CanvasText` edge; a focused linked card gets a 2px `Highlight` outline.

## React

```tsx
import {
  Badge, Card, CardAction, CardBody, CardHeader, CardLane, CardLink, CardMeta, CardTitle, CardWhen,
} from '@meetingat10/design-system/react';

<Card link>
  <CardHeader>
    <span className="ds-card__lead">
      <CardLane lane="community">Algorithms</CardLane>
      <CardWhen dateTime="2026-10-19T09:00">Mon 19 Oct · 09:00</CardWhen>
    </span>
    <Badge outline marker={false}>Pinned</Badge>
  </CardHeader>
  <CardTitle href="/community/recursion">What helped recursion finally click for you?</CardTitle>
  <CardBody>Share the explanation, drawing or example that worked.</CardBody>
  <CardMeta>
    <span>6 replies</span>
    <CardAction>Join the conversation</CardAction>
  </CardMeta>
</Card>

<Card overlay as="section" aria-label="Sign in">
  <CardTitle level={2}>Sign in</CardTitle>
  <CardBody>Use your college account.</CardBody>
</Card>

<CardLink href="/community/guidelines">
  <CardBody>Community guidelines. What to post and what to keep out.</CardBody>
</CardLink>
```

`Card` also takes `variant` (`sheet`, `tint` or `open`), `flush` and any HTML attribute. `CardLane` takes `lane` (`schedule`, `community`, `consult`, `restricted`). `CardTitle` takes `level` (default 3) and `href`.

## Plain CSS

```html
<article class="ds-card ds-card--link">
  <div class="ds-card__head">
    <span class="ds-card__lead">
      <span class="ds-card__lane ds-card__lane--community">Algorithms</span>
      <time class="ds-card__when" datetime="2026-10-19T09:00">Mon 19 Oct · 09:00</time>
    </span>
    <span class="ds-badge ds-badge--outline">Pinned</span>
  </div>
  <h3 class="ds-card__title"><a class="ds-card__link" href="/community/recursion">What helped recursion finally click for you?</a></h3>
  <p class="ds-card__body">Share the explanation, drawing or example that worked.</p>
  <div class="ds-card__meta">
    <span>6 replies</span>
    <span class="ds-card__action" aria-hidden="true">Join the conversation<svg class="ds-icon ds-icon--16"><use href="sprite.svg#ds-arrow-right"/></svg></span>
  </div>
</article>

<section class="ds-card ds-card--overlay" aria-label="Sign in">
  <h2 class="ds-card__title">Sign in</h2>
  <p class="ds-card__body">Use your college account.</p>
</section>
```
