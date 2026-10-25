---
title: Container
description: The centered content column, 1280px wide by default, with the page grid margins for each breakpoint.
react: Container
---
# Container

A container is the centered column that holds a page's content and gives it the grid margins for each breakpoint. Use one per full-width region; [Section](section.md) adds it for you.

## When to use

- Use `content` (1280px) for page bodies, feeds and dashboards.
- Use `reading` (680px) for prose, policy pages and long forms, so lines stay at 65 to 75 characters.
- Use `wide` (1440px) for a first viewport or a timetable that needs the room.
- Don't nest containers; one column per region is enough.
- Don't use it to draw a box; it has no fill and no rule. For a paper surface use a sheet (`.ds-sheet`) or a [Card](../content/card.md) for a collection item.

## Anatomy

| Part | Class | Notes |
|---|---|---|
| Column | `.ds-container` | Full width up to 1280px (`--ds-grid-content-max`) plus the side margins, centered with `margin-inline: auto` |
| Reading width | `.ds-container--reading` | 680px (`--ds-grid-reading-max`) plus the desktop margins |
| Wide | `.ds-container--wide` | 1440px plus the wide margins |
| Side margins | `padding-inline` | 16px, 24px from 600px, 32px from 1024px, 48px from 1440px (`--ds-grid-margin-*`) |

## States

| State | Looks | Set by |
|---|---|---|
| Phone | 16px side margins, content fills the width | viewport below 600px |
| Tablet | 24px side margins | viewport from 600px |
| Desktop | 32px side margins, content stops at its max width | viewport from 1024px |
| Wide | 48px side margins | viewport from 1440px |
| Width | 1280px, 680px or 1440px of content | `width`, `.ds-container--reading`, `.ds-container--wide` |

## Behavior and accessibility

- The container has no role of its own. Use `as="main"` once per page for the main landmark, and give an `as="nav"` container an `aria-label`.
- Content reflows at 320px wide and at 200% zoom without horizontal page scrolling.
- Keep paragraphs inside `reading` width or set `max-width: var(--ds-grid-reading-max)` (`.ds-reading`) on the text.
- No motion, no fills: nothing changes under reduced motion or forced colors.

## React

```tsx
import { Container } from '@meetingat10/design-system/react';

<Container as="main" id="content">
  <SectionHeader level={1} title="Your week" />
</Container>

<Container width="reading">
  <p>Community access does not grant report access.</p>
</Container>
```

`width` is `content` (default), `reading` or `wide`. `as` is `div` (default), `section`, `header`, `footer`, `main`, `nav` or `article`. Other HTML attributes pass through.

## Plain CSS

```html
<main class="ds-container" id="content">...</main>
<article class="ds-container ds-container--reading">...</article>
<section class="ds-container ds-container--wide">...</section>
```
