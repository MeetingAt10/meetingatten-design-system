---
title: Card
description: A paper sheet for one item in a collection or for a floating panel, never nested, with a rule at rest or a shadow when it floats.
react: Card
---
# Card

A card is a paper sheet that holds one item of a collection (an announcement, a post, a record) or a floating panel such as a sign-in form. At rest it is flat paper with a hairline rule; a linked card trades the rule for a lift on hover, and a floating card uses a shadow instead of a rule. Detail pages do not use cards; they use open sections, rules and headings.

## When to use

- Use it for each item in a list or grid of comparable things: posts, announcements, records.
- Use `overlay` for one floating panel on a page (sign-in, a short form over a hero).
- Use `link` with a `CardTitle href` when the whole card opens one destination.
- Don't put a card inside a card, and don't wrap page sections in cards; use [Divider](../layout/divider.md), [Section](../layout/section.md) and headings.
- Don't build page structure from rows of same-size icon cards; use [Agenda](../layout/agenda.md) rows.

## Anatomy

| Part | Class | Notes |
|---|---|---|
| Sheet | `.ds-card` | Paper (`--ds-sheet-bg`), 1px `--ds-sheet-rule`, radius 12 (`--ds-radius-sheet`), 20px padding, 12px gap |
| Floating | `.ds-card--overlay` | No rule; `--ds-overlay-bg` with the overlay shadow, radius 16, 32px padding |
| Flush | `.ds-card--flush` | No padding, content clipped (media, tables) |
| Head | `.ds-card__head` | Lane chip and time on the left (`.ds-card__lead` groups them), badges on the right |
| Lane chip | `.ds-card__lane` | Small solid block naming the lane or topic; schedule navy by default, `--community` violet, `--consult` teal |
| Restricted chip | `.ds-card__lane--restricted` | Paper chip with an ink rule and a small hatched square, no hue |
| Time or reference | `.ds-card__when`, `.ds-card__ref` | `time` style, tabular mono, secondary text |
| Title | `.ds-card__title` | H3 style; with a link inside (`.ds-card__link`) it names and opens the card |
| Body | `.ds-card__body` | Body small, secondary text |
| Meta | `.ds-card__meta` | Ruled row (hairline on top), caption text; `.ds-card__stat` for counts, `.ds-card__action` on the right |
| Action | `.ds-card__action` | Visual call to action with an arrow; the title link does the navigating |

## States

| State | Looks | Set by |
|---|---|---|
| Rest | Flat paper with the hairline rule, no shadow | none |
| Floating | Shadow, no rule (elevation is declared once) | `overlay`, `.ds-card--overlay` |
| Hover (linked) | The rule gives way to the lift shadow, the card rises 2px, the title underlines and the action arrow steps forward | `link`, `.ds-card--link` with `:hover` or `.is-hover` |
| Focus (linked) | 2px focus ring around the whole card while its title link has keyboard focus | `.ds-card--link:has(.ds-card__link:focus-visible)` |

## Behavior and accessibility

- `Card` renders an `<article>` by default; use `as="li"` inside a list and `as="section"` or `as="div"` for panels.
- A linked card is one link: `CardTitle href` stretches the title link over the card, so the card is named by its title alone. `CardAction` is hidden from assistive tech because the title already navigates.
- Buttons and other links inside a linked card stay reachable and sit above the stretched link.
- `CardLink` makes the whole card one `<a>`; use it only for short cards with no heading and no other controls.
- Pick the title level (`level` 2, 3 or 4) that fits the page outline.
- Lane chips name a topic or lane, never a permission or confidentiality level. No colored side stripes; color owns the whole chip.
- Reduced motion: no lift and no arrow step; the hover change lands at once.
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
    <Badge outline marker={false}>Demo</Badge>
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
  <CardBody>Community guidelines: what to post and what to keep out.</CardBody>
</CardLink>
```

`Card` also takes `flush` and any HTML attribute. `CardLane` takes `lane` (`schedule`, `community`, `consult`, `restricted`). `CardTitle` takes `level` (default 3) and `href`.

## Plain CSS

```html
<article class="ds-card ds-card--link">
  <div class="ds-card__head">
    <span class="ds-card__lead">
      <span class="ds-card__lane ds-card__lane--community">Algorithms</span>
      <time class="ds-card__when" datetime="2026-10-19T09:00">Mon 19 Oct · 09:00</time>
    </span>
    <span class="ds-badge ds-badge--outline">Demo</span>
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
