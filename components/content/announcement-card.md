---
title: Announcement Card
description: A department or community update in a collection, with a lane chip, time, title, short body, source line and one link.
react: AnnouncementCard
---
# Announcement Card

An announcement card is one update in a feed of updates: a room change, a briefing, a deadline from the department or the community desk. It is a [Card](card.md) with a lane chip and time on top, the title, a short body and a ruled meta row with the source and one standalone link.

## When to use

- Use it for dated notices in a list of notices.
- Use the default `schedule` lane (navy) for department notices and `community` for community updates.
- The `demo` prop is deprecated and renders nothing.
- Don't use it for discussions people reply to; use [Forum Card](forum-card.md).
- Don't use it for report activity or anything restricted; report content never appears in announcements.

## Anatomy

| Part | Class | Notes |
|---|---|---|
| Sheet | `.ds-card` | Flat paper with a hairline rule; not a linked card, so it does not lift |
| Lead | `.ds-card__lead` | Lane chip and time, side by side |
| Lane chip | `.ds-card__lane` | Text from `tag` (default "Announcement"); lane from `lane` (default `schedule`) |
| Time | `.ds-card__when` | `<time>` in the `time` style |
| Demo badge | `.ds-badge.ds-badge--outline` | "Demo", only with `demo` |
| Title | `.ds-card__title` | H3 by default (`level`) |
| Body | `.ds-card__body` | Short text from `children` |
| Meta | `.ds-card__meta` | Source line (`meta`) and the link |
| Link | `.ds-link.ds-link--standalone.ds-card__action` | `linkLabel` (default "Read update") with an arrow that steps forward on hover |

## States

| State | Looks | Set by |
|---|---|---|
| Rest | Flat paper, hairline rule | none |
| Link hover | The link underlines and its arrow steps 3px forward | `:hover`, `[data-hovered]` on the link |
| Link focus | 2px focus ring on the link | `:focus-visible` |
| Demo | Outlined "Demo" badge in the head | `demo` |

## Behavior and accessibility

- The card is an `<article>` with a heading; the only interactive element is the standalone link.
- The visible link reads "Read update" (or your `linkLabel`), and the card title follows it as visually hidden text, so the name stays distinct out of context ("Read update: Make room for your next idea") and still starts with the words people see.
- Monospace is used only for the time.
- Reduced motion: the arrow does not step; the underline still appears.
- Forced colors: the card and the lane chip keep a `CanvasText` edge.

## React

```tsx
import { AnnouncementCard } from '@meetingat10/design-system/react';

<AnnouncementCard
  when="Mon 19 Oct · 09:00"
  dateTime="2026-10-19T09:00"
  title="Hackathon briefing moves to the AVR"
  meta="Community desk"
  href="/announcements/hackathon-briefing"
  linkLabel="Read the briefing update"
  demo
>
  Same time, Wednesday 13:00. Bring a laptop; teams form on the day.
</AnnouncementCard>

<AnnouncementCard tag="Community" lane="community" when="Tue 20 Oct" title="Peer study circle meets in Library 2F" demo />
```

`level` sets the title heading (default 3). Without `href` and `meta` the meta row is left out.

## Plain CSS

```html
<article class="ds-card">
  <div class="ds-card__head">
    <span class="ds-card__lead">
      <span class="ds-card__lane">Announcement</span>
      <time class="ds-card__when" datetime="2026-10-19T09:00">Mon 19 Oct · 09:00</time>
    </span>
    <span class="ds-badge ds-badge--outline">Demo</span>
  </div>
  <h3 class="ds-card__title">Hackathon briefing moves to the AVR</h3>
  <p class="ds-card__body">Same time, Wednesday 13:00. Bring a laptop; teams form on the day.</p>
  <div class="ds-card__meta">
    <span>Community desk</span>
    <a class="ds-link ds-link--standalone ds-card__action" href="/announcements/hackathon-briefing">
      Read the briefing update<svg class="ds-icon ds-icon--16" aria-hidden="true"><use href="sprite.svg#ds-arrow-right"/></svg>
    </a>
  </div>
</article>
```
