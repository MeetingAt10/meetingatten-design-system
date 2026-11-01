---
title: View State
description: What a data region shows while it is loading, empty, failed or restricted, with the state in words and a next step.
react: ViewState
---
# View State

A view state fills a data region (a table, a feed, a list of records) when there is nothing ready to show: it is loading, it is empty, it failed, or it is restricted. A tile or spinner and the words carry the state together, and there is always a next step or a plain "nothing to do".

## When to use

- Use it inside the region that is loading or empty, so the rest of the page keeps working.
- Use `restricted` when the person cannot open the content, and say who can in plain words.
- Use `error` with a way to try again; keep the person's place and input.
- Don't use it for a whole page or section that has nothing yet; use [Empty State](../feedback/empty-state.md).
- Don't promise what the system cannot guarantee (response times, anonymity).

## Anatomy

| Part | Class | Notes |
|---|---|---|
| Region | `.ds-view-state` | Centered column, 40px 24px padding, 8px gap |
| Indicator | `.ds-tile` (large) or `.ds-spinner` | Spinner (32px) for loading; neutral `tray` tile for empty; danger `warning-circle` tile for error; hatched `lock` tile for restricted |
| Title | `.ds-view-state__title` | H4 style, in a paragraph (not a heading) |
| Body | `.ds-view-state__body` | Body small, secondary text, max 28rem |
| Actions | `.ds-view-state__actions` | One next step, centered |

## States

| State | Looks | Set by |
|---|---|---|
| Loading | Clock spinner, title such as "Loading reports"; the region is busy | `kind="loading"` (`role="status"`, `aria-busy="true"`) |
| Empty | Neutral tray tile, what is missing and what to do | `kind="empty"` (`role="status"`) |
| Error | Danger tile, what failed and how to try again | `kind="error"` (`role="alert"`) |
| Restricted | Hatched lock tile (no hue), who can open it | `kind="restricted"` (`role="status"`) |

## Behavior and accessibility

- The region is a live region: errors are announced at once (`alert`), the other states politely (`status`). Announce once; never move focus.
- The tile is decorative; the title and body carry the state.
- Keep retry reachable and do not reset filters, scroll position or typed text.
- Restricted is drawn with hatching and words, never a color; restricted access does not mean anonymous.
- Reduced motion: the spinner hand rests; the words still say "Loading".
- Forced colors: tiles keep a `CanvasText` edge; the words carry each state.

## React

```tsx
import { Button, ViewState } from '@meetingat10/design-system/react';

<ViewState kind="loading" title="Loading reports" />
<ViewState
  kind="empty" title="No reports yet" description="Drafts you save appear here."
  actions={<Button size="sm" icon="plus">New draft</Button>}
/>
<ViewState
  kind="error" title="Couldn't load reports" description="Check your connection and try again. Nothing was submitted."
  actions={<Button size="sm" variant="secondary">Try again</Button>}
/>
<ViewState kind="restricted" title="This record is restricted" description="Only you and the assigned reviewers can open it (proposed permission)." />
```

`kind` and `title` are required.

## Plain CSS

```html
<div class="ds-view-state" role="status">
  <span class="ds-tile ds-tile--lg ds-tile--neutral" aria-hidden="true">
    <svg class="ds-icon"><use href="sprite.svg#ds-tray-duotone"/></svg>
  </span>
  <p class="ds-view-state__title">No reports yet</p>
  <p class="ds-view-state__body">Drafts you save appear here.</p>
  <div class="ds-view-state__actions">
    <button class="ds-btn ds-btn--primary ds-btn--sm" type="button">New draft</button>
  </div>
</div>

<div class="ds-view-state" role="status" aria-busy="true">
  <span class="ds-spinner ds-spinner--32" aria-hidden="true"></span>
  <p class="ds-view-state__title">Loading reports</p>
</div>
```
