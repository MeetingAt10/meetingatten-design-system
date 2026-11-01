---
title: Announcement Card
description: A department or community update in a collection, with a lane chip, time, title, short body, source line and one link.
react: AnnouncementCard
---
# Announcement Card

An announcement card is one update in a feed, such as a room change, a briefing or a deadline from the department or the community desk. It is a [Card](card.md) with a lane chip and time on top, a title, a short body and a ruled meta row holding the source and one standalone link. It uses the flat `tint` treatment by default so a long feed does not stack raised sheets.

## When to use

- Use it for dated notices in a list of notices.
- Use the default `schedule` lane (navy) for department notices and `community` for community updates.
- Don't use it for discussions people reply to; use [Forum Card](forum-card.md).
- Don't use it for report activity or anything restricted; report content never appears in announcements.

## Anatomy

| Part | Class | Notes |
|---|---|---|
| Sheet | `.ds-card.ds-card--tint` | Flat on the neutral tint with a hairline ring and 12px corners. Pass `variant="sheet"` for raised paper or `"open"` for a top rule only. It is not a linked card, so it does not lift |
| Lead | `.ds-card__lead` | Lane chip and time, side by side |
| Lane chip | `.ds-card__lane` | Text from `tag` (default "Announcement"); lane from `lane` (default `schedule`) |
| Time | `.ds-card__when` | `<time>` in the `time` style |
| Title | `.ds-card__title` | H3 by default (`level`) |
| Body | `.ds-card__body` | Short text from `children` |
| Meta | `.ds-card__meta` | Source line (`meta`) and the link |
| Link | `.ds-link.ds-link--standalone.ds-card__action` | `linkLabel` (default "Read update") with an arrow that steps forward on hover |

## States

| State | Looks | Set by |
|---|---|---|
| Rest | Flat on the tint, hairline ring | none |
| Link hover | The link underlines and its arrow steps 3px forward | `:hover`, `[data-hovered]` on the link |
| Link focus | 2px focus ring on the link | `:focus-visible` |

## Behavior and accessibility

- The card is an `<article>` with a heading; the only interactive element is the standalone link.
- The visible link reads "Read update" (or your `linkLabel`). The card title follows it as visually hidden text, so the name stays distinct out of context and still starts with the words people see.
- Only the time uses monospace.
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
>
  The briefing is still at Wednesday 13:00. Bring a laptop. Teams form on the day.
</AnnouncementCard>

<AnnouncementCard tag="Community" lane="community" when="Tue 20 Oct" title="Peer study circle meets in Library 2F" />
```

`level` sets the title heading (default 3). Without `href` and `meta` the meta row is left out.

## Plain CSS

```html
<article class="ds-card ds-card--tint">
  <div class="ds-card__head">
    <span class="ds-card__lead">
      <span class="ds-card__lane">Announcement</span>
      <time class="ds-card__when" datetime="2026-10-19T09:00">Mon 19 Oct · 09:00</time>
    </span>
  </div>
  <h3 class="ds-card__title">Hackathon briefing moves to the AVR</h3>
  <p class="ds-card__body">The briefing is still at Wednesday 13:00. Bring a laptop. Teams form on the day.</p>
  <div class="ds-card__meta">
    <span>Community desk</span>
    <a class="ds-link ds-link--standalone ds-card__action" href="/announcements/hackathon-briefing">
      Read the briefing update<svg class="ds-icon ds-icon--16" aria-hidden="true"><use href="sprite.svg#ds-arrow-right"/></svg>
    </a>
  </div>
</article>
```
