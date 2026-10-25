---
title: Drawer
description: A sheet that slides in from an edge over a scrim for secondary work that keeps the page in view; a swipeable bottom sheet on phones.
react: Drawer
---
# Drawer

A drawer is a sheet that slides in from the end edge, the start edge or the bottom, over a scrim. Use it for secondary work that keeps the page in view: filters, record details, mobile navigation. The bottom sheet can be swiped down to close.

## When to use

- Use `side="end"` (default) for filters and record details beside the content.
- Use `side="start"` for navigation; [App Shell](../navigation/app-shell.md) uses it for the mobile menu.
- Use `side="bottom"` for short choices on phones.
- Don't use it for a decision that must block the page; use a [Modal](modal.md).
- Don't keep the only copy of important information in a drawer; the page must make sense with it closed.

## Anatomy

| Part | Class | Notes |
|---|---|---|
| Overlay | `.ds-drawer-overlay` | Fixed scrim (`--ds-scrim`), `z-index` drawer (300) |
| Sheet | `.ds-drawer` | Full height at the end edge, `min(28rem, 100vw - 48px)` wide, overlay background and overlay shadow |
| Start side | `.ds-drawer--start` | Slides from the start edge |
| Bottom sheet | `.ds-drawer--bottom` | Full width, up to 88% of the viewport height, rounded top (radius 16) |
| Handle | `.ds-drawer__handle` | 36x4px grip at the top of the bottom sheet; decorative |
| Dialog | `.ds-drawer__dialog` | `role="dialog"`; `display: contents` |
| Head | `.ds-drawer__head` | 64px row with the title and "Close", ruled below |
| Title | `.ds-drawer__title` | Plus Jakarta Sans 700 18/24; names the dialog |
| Body | `.ds-drawer__body` | 24px padding, 16px gap; scrolls |
| Footer | `.ds-drawer__foot` | Ruled action row, right-aligned |

## States

| State | Looks | Set by |
|---|---|---|
| Entering | Slides in on the gentle spring; the scrim fades in | `[data-entering]` |
| Exiting | Slides out on the exit ease; the scrim fades out | `[data-exiting]` |
| End | From the end edge | `side="end"` (default) |
| Start | From the start edge | `side="start"`, `.ds-drawer--start` |
| Bottom | From the bottom, with a handle | `side="bottom"`, `.ds-drawer--bottom` |
| Swiping | The bottom sheet follows a downward drag; it closes past 120px or on a fast flick, and springs back otherwise | drag (Motion), `side="bottom"`; off under reduced motion |

## Behavior and accessibility

- React Aria `ModalOverlay`, `Modal` and `Dialog`: focus moves into the sheet and stays there, the page behind is inert, and focus returns to the trigger.
- Escape closes it unless `isKeyboardDismissDisabled` is set; a click on the scrim closes it (`isDismissable` defaults to true).
- The title names the dialog. "Close" is always there, so swiping is never the only way out.
- Buttons with `slot="close"` in the `footer` close the drawer when pressed. `children` can also be a function that receives `close`.
- Elevation is declared once: overlay shadow, no rule.
- Reduced motion: no slide and no swipe; the sheet appears and leaves at once.
- Forced colors: the sheet keeps a `CanvasText` edge.

## React

```tsx
import { Button, Checkbox, CheckboxGroup, DialogTrigger, Drawer } from '@meetingat10/design-system/react';

<DialogTrigger>
  <Button variant="secondary" icon="funnel">Filters</Button>
  <Drawer
    title="Filter reports"
    footer={<><Button variant="secondary" slot="close">Cancel</Button><Button slot="close" onPress={applyFilters}>Apply filters</Button></>}
  >
    <CheckboxGroup label="Status" defaultValue={['draft']}>
      <Checkbox value="draft">Draft</Checkbox>
      <Checkbox value="review">In review</Checkbox>
      <Checkbox value="resolved">Resolved</Checkbox>
    </CheckboxGroup>
  </Drawer>
</DialogTrigger>

<DialogTrigger>
  <Button variant="secondary" icon="calendar">Wed 21 Oct</Button>
  <Drawer title="Wed 21 Oct" side="bottom">Three open slots (sample).</Drawer>
</DialogTrigger>
```

`side` is `end` (default), `start` or `bottom`. Other `ModalOverlay` props (`isOpen`, `onOpenChange`, `isDismissable`, `isKeyboardDismissDisabled`) pass through.

## Plain CSS

```html
<div class="ds-drawer-overlay">
  <section class="ds-drawer" role="dialog" aria-modal="true" aria-labelledby="filters-title">
    <header class="ds-drawer__head">
      <h2 class="ds-drawer__title" id="filters-title">Filter reports</h2>
      <button class="ds-icon-btn" type="button" aria-label="Close">
        <svg class="ds-icon" aria-hidden="true"><use href="sprite.svg#ds-x"/></svg>
      </button>
    </header>
    <div class="ds-drawer__body">
      <!-- filters -->
    </div>
    <footer class="ds-drawer__foot">
      <button class="ds-btn ds-btn--secondary" type="button">Cancel</button>
      <button class="ds-btn ds-btn--primary" type="button">Apply filters</button>
    </footer>
  </section>
</div>
```

For a bottom sheet, add `.ds-drawer--bottom` and put `<div class="ds-drawer__handle" aria-hidden="true"></div>` first in the sheet. The plain layer has no swipe; focus handling and Escape are yours.
