---
title: Section Header
description: A section's heading, an optional description and actions, with no label above the heading.
react: SectionHeader
---
# Section Header

A section header opens a region: the heading, one optional line of description, and optional actions. The heading carries its own weight; there is no eyebrow or kicker label above it. With `split`, the actions sit on the right from 768px.

## When to use

- Use it at the top of every named region of a page, and with `level={1}` as the page title.
- Use `split` when the region has a "see all" or "new" action that belongs beside the heading.
- Keep the description to one sentence that says what the region holds.
- Don't put an eyebrow, kicker or category label above the heading; if the region needs a lane or date, put it in the description or the content.
- Don't use it inside cards; a [Card](../content/card.md) has its own title.

## Anatomy

| Part | Class | Notes |
|---|---|---|
| Header | `.ds-section-header` | Grid with a 12px gap, max width 46rem, 32px below |
| Title | `.ds-section-header__title` | h2 style: Plus Jakarta Sans 700, fluid 24 to 30px, line height 1.2, balanced lines |
| Page title | `.ds-section-header--page` | h1 style: Plus Jakarta Sans 800, fluid 32 to 44px, line height 1.1 |
| Description | `.ds-section-header__description` | Body large 18/29 in secondary text, max width 40rem |
| Actions | `.ds-section-header__actions` | Wrapping row, 8px gap |
| Split | `.ds-section-header--split` | From 768px the actions move to a right column, aligned to the bottom of the text |

## States

| State | Looks | Set by |
|---|---|---|
| Section | h2 heading at the h2 size | `level={2}` (default) |
| Page | h1 heading at the page-title size | `level={1}`, `.ds-section-header--page` |
| Subsection | h3 heading, still at the h2 size | `level={3}` |
| Stacked | Title, description, then actions | default, and below 768px with `split` |
| Split | Actions on the right of the title and description | `split`, `.ds-section-header--split`, from 768px |

## Behavior and accessibility

- Renders a `<header>`. Inside `<main>`, `<section>` or `<article>` it has no landmark role.
- Pick `level` to fit the page outline: one `level={1}` per page, no skipped levels.
- Pass `id` and point the region's `aria-labelledby` at it, so the region is named by its heading.
- Actions keep their own words ("All posts", "New draft"); avoid several identical "See all" links on one page.
- No motion: nothing changes under reduced motion or forced colors.

## React

```tsx
import { SectionHeader, Button } from '@meetingat10/design-system/react';

<SectionHeader level={1} title="Your week" description="Your timetable for the college week." />

<SectionHeader
  id="community-h"
  split
  title="This week in the community"
  description="Posts from the college community."
  actions={<Button variant="secondary" iconEnd="arrow-right" href="/community">All posts</Button>}
/>
```

`level` is `1`, `2` (default) or `3`. `split` moves the actions to the right from 768px. `id` lands on the heading element.

## Plain CSS

```html
<header class="ds-section-header ds-section-header--split">
  <h2 class="ds-section-header__title" id="community-h">This week in the community</h2>
  <p class="ds-section-header__description">Posts from the college community.</p>
  <div class="ds-section-header__actions">
    <a class="ds-btn ds-btn--secondary" href="/community">All posts</a>
  </div>
</header>
```
