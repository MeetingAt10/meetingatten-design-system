---
title: Breadcrumbs
description: Where the page sits, as a slash-separated trail whose last item is the current page in plain text.
react: Breadcrumbs
---
# Breadcrumbs

Breadcrumbs show where a page sits in the hierarchy: My reports / Drafts / DEMO-024. Earlier items are links; the last item is the current page in plain text.

## When to use

- Use them on detail pages two or more levels deep (a report record, a forum thread).
- Don't use them as the only way back on phones; keep a clear back link or navigation.
- Don't put report subjects or names in a crumb; use the reference.

## Anatomy

| Part | Class | Notes |
|---|---|---|
| List | `.ds-breadcrumbs` | Ordered list, body small, wraps |
| Item | `.ds-breadcrumbs__item` | A `/` in `border-default` after every item but the last |
| Link | `.ds-breadcrumbs__link` | Secondary text, underline on hover |
| Current | `[aria-current="page"]` | Primary text, weight 600, not a link |

## States

| State | Looks | Set by |
|---|---|---|
| Link hover | Primary text with an underline | `:hover`, `[data-hovered]` |
| Current | Bold primary text | the item without `href` |
| Focus | 2px focus ring | `:focus-visible` |

## Behavior and accessibility

- A `<nav>` named by `label` (default "Breadcrumbs") around a React Aria breadcrumb list.
- The current page is marked `aria-current="page"`; the separators are drawn in CSS and not read.
- Long trails wrap instead of truncating.

## React

```tsx
import { Breadcrumbs } from '@meetingat10/design-system/react';

<Breadcrumbs items={[
  { label: 'My reports', href: '/reports' },
  { label: 'Drafts', href: '/reports/drafts' },
  { label: 'DEMO-024' },
]} />
```

## Plain CSS

```html
<nav aria-label="Breadcrumbs">
  <ol class="ds-breadcrumbs">
    <li class="ds-breadcrumbs__item"><a class="ds-breadcrumbs__link" href="/reports">My reports</a></li>
    <li class="ds-breadcrumbs__item"><a class="ds-breadcrumbs__link" href="/reports/drafts">Drafts</a></li>
    <li class="ds-breadcrumbs__item"><span aria-current="page">DEMO-024</span></li>
  </ol>
</nav>
```
