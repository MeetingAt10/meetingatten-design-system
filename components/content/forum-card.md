---
title: Forum Card
description: A community discussion in a collection; the title is the link, its hit area covers the card, and the card lifts on hover.
react: ForumCard
---
# Forum Card

A forum card is one community discussion in a list: the topic chip, the question, a short excerpt, and a ruled meta row with the author, the reply count and the status. The whole card opens the thread. It is a linked [Card](card.md) in the community lane.

## When to use

- Use it for community questions and discussions in a feed or search results.
- The `demo` prop is deprecated and renders nothing.
- Don't use it for announcements; use [Announcement Card](announcement-card.md).
- Don't put names, student identifiers or report content in the excerpt.

## Anatomy

| Part | Class | Notes |
|---|---|---|
| Sheet | `.ds-card.ds-card--link` | Flat paper with a hairline rule; lifts on hover |
| Topic chip | `.ds-card__lane.ds-card__lane--community` | Amber block naming the topic (`topic`) |
| Demo badge | `.ds-badge.ds-badge--outline` | "Demo", only with `demo` |
| Title link | `.ds-card__title` > `.ds-card__link` | H3 by default (`level`); the link stretches over the whole card |
| Excerpt | `.ds-card__body` | Body small, secondary text |
| Author | `.ds-card__stat` | 24px community [Avatar](avatar.md) and the name |
| Replies | `.ds-card__stat` | `chat` icon and "1 reply" or "N replies", tabular figures |
| Status | text | For example "Open discussion" |
| Action | `.ds-card__action` | Visual call to action (`actionLabel`, default "Join the conversation") with an arrow |

## States

| State | Looks | Set by |
|---|---|---|
| Rest | Flat paper, hairline rule | none |
| Hover | The rule gives way to the lift shadow, the card rises 2px, the title underlines, the arrow steps forward | `:hover`, `.is-hover` |
| Focus | 2px focus ring around the card while the title link has keyboard focus | `:focus-visible` on `.ds-card__link` |
| Demo | Outlined "Demo" badge in the head | `demo` |

## Behavior and accessibility

- The title is the card's only link, so the card is named by its title alone; the action text is hidden from assistive tech.
- The topic chip is a topic, never a permission or confidentiality signal.
- Community copy is casual and encouraging; invite participation without promising answers.
- The author avatar is announced as an image with the author's name, and the name is printed beside it.
- Reduced motion: no lift and no arrow step.
- Forced colors: the card keeps a `CanvasText` edge; focus shows a 2px `Highlight` outline around the card.

## React

```tsx
import { ForumCard } from '@meetingat10/design-system/react';

<ForumCard
  topic="Algorithms"
  title="What helped recursion finally click for you?"
  excerpt="Share the explanation, drawing or example that worked."
  author="Demo member"
  replies={6}
  status="Open discussion"
  href="/community/recursion"
  demo
/>
```

`topic`, `title` and `href` are required. `level` sets the title heading (default 3).

## Plain CSS

```html
<article class="ds-card ds-card--link">
  <div class="ds-card__head">
    <span class="ds-card__lane ds-card__lane--community">Algorithms</span>
    <span class="ds-badge ds-badge--outline">Demo</span>
  </div>
  <h3 class="ds-card__title"><a class="ds-card__link" href="/community/recursion">What helped recursion finally click for you?</a></h3>
  <p class="ds-card__body">Share the explanation, drawing or example that worked.</p>
  <div class="ds-card__meta">
    <span class="ds-card__stat"><span class="ds-avatar ds-avatar--24 ds-avatar--community" aria-hidden="true">DM</span>Demo member</span>
    <span class="ds-card__stat"><svg class="ds-icon ds-icon--16" aria-hidden="true"><use href="sprite.svg#ds-chat"/></svg>6 replies</span>
    <span>Open discussion</span>
    <span class="ds-card__action" aria-hidden="true">Join the conversation<svg class="ds-icon ds-icon--16"><use href="sprite.svg#ds-arrow-right"/></svg></span>
  </div>
</article>
```
