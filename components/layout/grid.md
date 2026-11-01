---
title: Grid
description: Responsive columns on the page gutters, one column on phones, with equal, main and split layouts.
react: Grid
---
# Grid

A grid lays content out in columns on the page gutters: one column on phones, two from 600px, and three, four, main plus side, or split from 1024px. Columns stack in DOM order, so the task order survives on small screens.

## When to use

- Use two equal columns for paired content (a form beside its help, two related panels).
- Use `main` for a primary column with a supporting rail (2fr + 1fr), and `split` for copy beside an artifact (5fr + 7fr).
- Use three or four columns for a collection of [Cards](../content/card.md), such as a feed of posts.
- Don't build page structure from same-size icon-card columns; use [Agenda](agenda.md) rows.
- Don't nest a grid of cards inside a card.

## Anatomy

| Part | Class | Notes |
|---|---|---|
| Grid | `.ds-cols` | One column with a 16px gutter (`--ds-grid-gutter-mobile`); two equal columns with a 24px gutter (`--ds-grid-gutter`) from 600px |
| Three or four | `.ds-cols--3`, `.ds-cols--4` | Equal columns from 1024px (two between 600 and 1023px) |
| Main | `.ds-cols--main` | 2fr + 1fr from 1024px |
| Split | `.ds-cols--split` | 5fr + 7fr from 1024px, the first-viewport layout |
| Cells | children | `minmax(0, 1fr)` tracks, so long words and tables do not blow out a column |

## States

| State | Looks | Set by |
|---|---|---|
| Phone | One column, 16px gutter | viewport below 600px |
| Tablet | Two equal columns, 24px gutter | viewport from 600px |
| Desktop | Three, four, main or split columns | viewport from 1024px with `columns`, `.ds-cols--3`, `--4`, `--main`, `--split` |

## Behavior and accessibility

- The grid has no role. Columns stack in DOM order: put the task first and supporting content after it.
- Never reorder columns visually with CSS; reading and focus order must follow what people see.
- Safety copy and labels never truncate when columns narrow; content grows in height instead.
- No motion and no fills: nothing changes under reduced motion or forced colors.

## React

```tsx
import { Grid, ForumCard } from '@meetingat10/design-system/react';

<Grid columns={3}>
  {posts.map((p) => <ForumCard key={p.id} topic={p.topic} title={p.title} href={p.href} />)}
</Grid>

<Grid columns="main">
  <section aria-labelledby="week-h">...</section>
  <aside aria-label="Your consultations">...</aside>
</Grid>
```

`columns` is `2` (default), `3`, `4`, `main` or `split`. Other `div` attributes pass through.

## Plain CSS

```html
<div class="ds-cols ds-cols--3">
  <article class="ds-card">...</article>
  <article class="ds-card">...</article>
  <article class="ds-card">...</article>
</div>
<div class="ds-cols ds-cols--main">
  <section>...</section>
  <aside aria-label="Your consultations">...</aside>
</div>
```
