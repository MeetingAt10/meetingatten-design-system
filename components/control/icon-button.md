---
title: Icon Button
description: A square block holding one icon, always named, with the name repeated as a tooltip.
react: IconButton
---
# Icon Button

An icon button is a square block with one icon for a familiar action: notifications, more actions, close, filters. It always has an accessible name, and in React a tooltip shows the same words on hover and keyboard focus. Quiet by default; `solid` for the one primary icon action in a region.

## When to use

- Use it in toolbars, headers and rows where the icon is widely understood (`bell`, `x`, `dots-three`, `funnel`).
- Use `solid` for the one primary icon action of a region, such as "New post".
- Use `dot` for unread or attention, and say the state in `label` as well ("Notifications, 2 unread").
- Don't use it when the icon needs explaining; use a [Button](button.md) with a visible label.
- Don't put essential information only in the tooltip; it names the control and nothing more.

## Anatomy

| Part | Class | Notes |
|---|---|---|
| Block | `.ds-icon-btn` | 40px square (44px on coarse pointers), radius 8, quiet: secondary ink on no fill |
| Size | `.ds-icon-btn--md` | 48px square with a 24px icon |
| Outline | `.ds-icon-btn--outline` | Paper block with a solid `border-default` rule, primary ink |
| Solid | `.ds-icon-btn--solid` | Solid navy block (`action-default`), white icon |
| Icon | `.ds-icon` | 20px (24px in `--md`), regular weight |
| Dot | `.ds-icon-btn__dot` | 8px dot in the now color with a 2px surface ring, top right; decorative |
| Tooltip | `.ds-tooltip` | React only: the ink plate with the same words as the name ([Tooltip](../feedback/tooltip.md)) |

## States

| State | Looks | Set by |
|---|---|---|
| Default | Quiet: secondary ink; outline: ruled paper; solid: navy block | none |
| Hover | Quiet and outline take the neutral highlighter wash and primary ink; solid darkens to `action-hover` | `:hover`, `[data-hovered]`, `.is-hover` |
| Pressed | Moves down 1px; quiet takes the disabled ground; solid takes `action-pressed` | `:active`, `[data-pressed]`, `.is-pressed` |
| Toggled or open | Info ground with a navy icon | `[aria-pressed="true"]`, `[aria-expanded="true"]`, `[data-selected]` |
| Focus | 2px focus ring with a 2px gap | `:focus-visible` |
| Disabled | Disabled ink on no fill, no press step, `not-allowed` cursor | `isDisabled`, `:disabled`, `[data-disabled]` |
| Attention | The dot shows; the words live in the name | `dot`, `.ds-icon-btn__dot` |

## Behavior and accessibility

- React Aria `Button`: Enter and Space activate; press works the same for mouse, touch and keyboard.
- `label` is required. It becomes the `aria-label` and the tooltip text, so sighted and screen reader users get the same words.
- The tooltip opens after 500ms of hover, or at once on keyboard focus, and closes 100ms after the pointer leaves. Turn it off with `tooltip={false}` where it would cover content, for example inside a header that opens a drawer.
- The dot is hidden from assistive tech. Put the count or state in `label`.
- As a menu or popover trigger, the open state shows through `aria-expanded`.
- Reduced motion: the press step lands at once.
- Forced colors: outline and solid buttons keep a `CanvasText` edge; disabled icons use `GrayText`; focus is a 2px `Highlight` outline.

## React

```tsx
import { IconButton } from '@meetingat10/design-system/react';

<IconButton icon="bell" label="Notifications, 2 unread" dot />
<IconButton icon="dots-three" label="More actions" variant="outline" />
<IconButton icon="plus" label="New post" variant="solid" onPress={startPost} />
<IconButton icon="funnel" label="Filters" size="md" />
<IconButton icon="trash" label="Delete draft" isDisabled />
<IconButton icon="x" label="Close" tooltip={false} onPress={close} />
```

`variant` is `quiet` (default), `outline` or `solid`; `size` is `sm` (40px, default) or `md` (48px). Other React Aria `Button` props pass through, except `aria-label` (use `label`).

## Plain CSS

```html
<button class="ds-icon-btn" type="button" aria-label="Notifications, 2 unread">
  <svg class="ds-icon" aria-hidden="true"><use href="sprite.svg#ds-bell"/></svg>
  <span class="ds-icon-btn__dot" aria-hidden="true"></span>
</button>
<button class="ds-icon-btn ds-icon-btn--outline" type="button" aria-label="More actions" aria-haspopup="menu" aria-expanded="false">
  <svg class="ds-icon" aria-hidden="true"><use href="sprite.svg#ds-dots-three"/></svg>
</button>
<button class="ds-icon-btn ds-icon-btn--solid ds-icon-btn--md" type="button" aria-label="New post">
  <svg class="ds-icon ds-icon--24" aria-hidden="true"><use href="sprite.svg#ds-plus"/></svg>
</button>
```

The plain layer draws no tooltip; the `aria-label` is the name.
