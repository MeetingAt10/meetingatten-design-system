---
title: Top Bar
description: The workspace title strip on desktop, with the page title on the left and search and quick tools on the right.
react: TopBar
---
# Top Bar

The top bar is the sticky 64px strip above the content in the workspace: the page title on the left, search and quick tools on the right. It shows from 1024px; below that, [AppShell](app-shell.md) shows the [MobileHeader](mobile-header.md).

## When to use

- Use it in [AppShell](app-shell.md) for portal and admin pages.
- Use `titleAs="h1"` only when the strip is the page heading; otherwise the page keeps its own h1 and the strip title is a `p`.
- Don't put primary page actions here; they belong with the page content.

## Anatomy

| Part | Class | Notes |
|---|---|---|
| Strip | `.ds-topbar` | Sticky, 64px min height, canvas ground, hairline below, `--ds-z-sticky` |
| Title area | `.ds-topbar__title` | Grows to fill |
| Title | `.ds-topbar__heading` | Plus Jakarta Sans 700 18/24, one line with ellipsis |
| Search | `.ds-topbar__search` | Sizes a [Search](../control/search.md) field to 22rem (40vw at most) |
| Tools | `.ds-topbar__actions` | Icon buttons and menus, 4px apart |

## States

| State | Looks | Set by |
|---|---|---|
| Default | Title and tools | none |
| Scrolled | Stays pinned at the top of the content column | `position: sticky` |
| Below 1024px | Hidden inside AppShell | `.ds-shell .ds-topbar` |

## Behavior and accessibility

- A `<header>` landmark inside the content column.
- One h1 per page: use `titleAs="h1"` or a page-level heading, not both.
- Icon tools need names: [IconButton](../control/icon-button.md) requires `label`; put unread counts in the label ("Notifications, 2 unread").
- Keep focused content from sliding under the sticky strip (`scroll-padding-top` on the scroller).

## React

```tsx
import { TopBar, Search, IconButton } from '@meetingat10/design-system/react';

<TopBar
  title="Overview"
  tools={<>
    <Search label="Search ACCS" size="sm" placeholder="Search" className="ds-topbar__search" />
    <IconButton icon="bell" label="Notifications, 2 unread" dot />
  </>}
/>
```

## Plain CSS

```html
<header class="ds-topbar">
  <div class="ds-topbar__title"><h1 class="ds-topbar__heading">Overview</h1></div>
  <div class="ds-topbar__actions">
    <button class="ds-icon-btn" type="button" aria-label="Notifications, 2 unread"><svg class="ds-icon" aria-hidden="true"><use href="sprite.svg#ds-bell"/></svg><span class="ds-icon-btn__dot" aria-hidden="true"></span></button>
  </div>
</header>
```
