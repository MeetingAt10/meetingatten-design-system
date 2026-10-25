---
title: Button
description: A block you press to act, in primary, secondary, tertiary, destructive and plate intents.
react: Button
---
# Button

A button is a block you press to do something: save, book, sign in, discard. Links navigate and buttons act; use a button only when something happens on this page. Give each task region one primary button.

## When to use

- Use primary for the one main action of a task region ("Sign in", "Book a time").
- Use secondary for the other actions beside it, and tertiary for low-emphasis actions in dense rows.
- Use destructive only for real removal, and confirm it in a [Modal](../feedback/modal.md) that names the object.
- Use `plate` on a door-plate band or another inverse surface.
- Don't use a button to go to another page; use [Link](../navigation/link.md), or `href` when it must look like a button. Don't use it for an icon-only action; use [IconButton](icon-button.md).

## Anatomy

| Part | Class | Notes |
|---|---|---|
| Block | `.ds-btn` | 48px tall, radius 8 (`--ds-radius-control`), Inter 600 15/20, 8px gap |
| Primary | `.ds-btn--primary` | Solid navy block (`action-default`), white text |
| Secondary | `.ds-btn--secondary` | Paper block with a solid `border-default` rule |
| Tertiary | `.ds-btn--tertiary` | Navy text on no fill; takes the schedule highlighter wash on hover |
| Destructive | `.ds-btn--destructive` | Solid danger block (`danger-action`) |
| Plate | `.ds-btn--plate` | Plate colors reversed, for door-plate bands |
| Size | `.ds-btn--sm`, `.ds-btn--lg` | 40px (44px on coarse pointers) and 56px |
| Full width | `.ds-btn--block` | Fills its container |
| Icons | `.ds-icon` | 20px start or end icon (16px in `--sm`), regular weight |
| Spinner | `.ds-spinner` | Clock hand in `currentColor`, replaces the start icon while pending |
| Pending line | `::after` | 2px line sweeping along the bottom edge while pending |

## States

| State | Looks | Set by |
|---|---|---|
| Default | Intent fill and label | none |
| Hover | Primary and destructive darken and lift 2px with the lift shadow; secondary and tertiary take the schedule wash | `:hover`, `[data-hovered]`, `.is-hover` |
| Pressed | Moves down 1px; primary and destructive take their pressed fill; secondary gets a navy rule on the info ground | `:active`, `[data-pressed]`, `.is-pressed` |
| Focus | 2px focus ring with a 2px gap | `:focus-visible` |
| Pending | Fill kept, spinner shown, a line sweeps the bottom edge, cursor `progress`; the label stays | `loading`, `[data-pending]`, `[aria-busy="true"]` |
| Disabled | Disabled ground and readable disabled text, no lift; secondary goes to a dashed rule on no fill | `isDisabled`, `:disabled`, `[data-disabled]`, `[aria-disabled="true"]` |

## Behavior and accessibility

- React Aria `Button`: Enter and Space activate; press events work the same for mouse, touch and keyboard.
- Name the action with a verb and object ("Discard draft", not "OK"). Errors never live on the button; put them in an [Alert](../feedback/inline-alert.md) or the field.
- `loading` sets React Aria's pending state: the button stays focusable, repeat presses are blocked and screen readers hear that it is busy.
- Disabled buttons keep a readable label. Say why the action is unavailable near the button when the reason is not obvious.
- With `href`, the button renders a link (navigation, not an action) and uses the router from [DesignSystemProvider](../../README.md).
- Reduced motion: the lift, the press step and the sweeping line stop; state changes land at once.
- Forced colors: every button keeps a `CanvasText` edge; disabled text and edges use `GrayText`.

## React

```tsx
import { Button } from '@meetingat10/design-system/react';

<Button icon="sign-in" onPress={signIn}>Sign in</Button>
<Button variant="secondary">Browse the community</Button>
<Button variant="tertiary" iconEnd="arrow-right">Learn more</Button>
<Button variant="destructive" icon="trash" onPress={askToDiscard}>Discard draft</Button>
<Button loading>Saving draft</Button>
<Button size="sm" block isDisabled>Submit report</Button>
<Button href="/community" variant="secondary">Open the community</Button>
```

`variant` defaults to `primary` and `size` to `md`. `icon` and `iconEnd` take names from the curated icon vocabulary. Other React Aria `Button` props (`onPress`, `isDisabled`, `type`, `slot`) pass through.

## Plain CSS

```html
<button class="ds-btn ds-btn--primary" type="button">
  <svg class="ds-icon" aria-hidden="true"><use href="sprite.svg#ds-sign-in"/></svg>Sign in
</button>
<button class="ds-btn ds-btn--secondary" type="button">Browse the community</button>
<button class="ds-btn ds-btn--tertiary" type="button">Learn more</button>
<button class="ds-btn ds-btn--destructive" type="button">Discard draft</button>
<button class="ds-btn ds-btn--primary" type="button" aria-busy="true">
  <span class="ds-spinner" aria-hidden="true"></span>Saving draft
</button>
<button class="ds-btn ds-btn--primary ds-btn--sm ds-btn--block" type="button" disabled>Submit report</button>
<a class="ds-btn ds-btn--secondary" href="/community">Open the community</a>
```

In plain markup, block repeat presses yourself while `aria-busy="true"` is set.
