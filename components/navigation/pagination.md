---
title: Pagination
description: Previous, page blocks with gaps, and next for long lists; the current page is the solid navy block.
react: Pagination
---
# Pagination

Pagination moves through a long list one page at a time: Previous, the first, last and nearby page numbers with gaps between, and Next. The current page is the solid navy block.

## When to use

- Use it for long lists people browse in order (posts, records).
- Use `summary` to say what is shown ("Showing 41-50 of 118 posts").
- Don't use it for a handful of items; show them all.

## Anatomy

| Part | Class | Notes |
|---|---|---|
| Bar | `.ds-pagination` | `<nav>` named by `label` (default "Pages"), wraps |
| Summary | `.ds-pagination__summary` | Body small, secondary, pushes the pages to the end |
| Page | `.ds-page` | 40px square block (44px on coarse pointers), tabular numerals |
| Step | `.ds-page--step` | Previous and Next, with their words and a caret |
| Gap | `.ds-page--gap` | An ellipsis for skipped pages, hidden from assistive tech |

## States

| State | Looks | Set by |
|---|---|---|
| Hover | Neutral wash | `:hover`, `[data-hovered]` |
| Current | Solid navy block, white numerals | `[aria-current="page"]` |
| Disabled | Disabled text (Previous on page 1, Next on the last page) | `:disabled`, `[data-disabled]`, `[aria-disabled="true"]` |
| Focus | 2px focus ring | `:focus-visible` |

## Behavior and accessibility

- Page blocks are buttons named "Page 5"; the current one has `aria-current="page"`.
- Previous and Next keep their words; they are never icon-only.
- `pageList(page, pageCount)` returns the pages to show (first, last, current and neighbors, with `'gap'` markers) if you build your own bar.
- Move focus to the top of the list (or announce the new range) after a page change.
- Forced colors: the current page takes `Highlight`.

## React

```tsx
import { Pagination } from '@meetingat10/design-system/react';

<Pagination page={page} pageCount={12} onPageChange={setPage} summary="Showing 41-50 of 118 posts" />
```

## Plain CSS

```html
<nav class="ds-pagination" aria-label="Pages">
  <p class="ds-pagination__summary">Showing 41-50 of 118 posts</p>
  <a class="ds-page ds-page--step" href="?page=4"><svg class="ds-icon ds-icon--16" aria-hidden="true"><use href="sprite.svg#ds-caret-left"/></svg>Previous</a>
  <a class="ds-page" href="?page=1" aria-label="Page 1">1</a>
  <span class="ds-page ds-page--gap" aria-hidden="true">...</span>
  <a class="ds-page" href="?page=5" aria-label="Page 5" aria-current="page">5</a>
  <a class="ds-page ds-page--step" href="?page=6">Next<svg class="ds-icon ds-icon--16" aria-hidden="true"><use href="sprite.svg#ds-caret-right"/></svg></a>
</nav>
```
