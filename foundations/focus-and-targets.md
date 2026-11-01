# Focus and targets

Keyboard focus is a 2px ring with a 2px gap on every interactive element; targets are at least 24px, and at least 44px on coarse pointers.

## Focus ring

| Item | Rule |
|---|---|
| Ring | A 2px `--ds-focus` outline (`--ds-size-focus-ring`) with a 2px offset (`--ds-size-focus-offset`), on `:focus-visible` inside `.ds-body` |
| Colors | `#2F5BEA` in light (6.08:1 on surface), `#7C9BFF` in dark (8.03:1) |
| Drawn as an outline | It never fights a component's own shadow. `--ds-ring` is the box-shadow form for the rare element whose outline would be clipped; its gap color comes from `--ring-gap` (default `surface`) |
| Mouse and touch | No ring for pointer focus (`:focus:not(:focus-visible)`) |
| Inputs | Focus turns the rule to the focus color and adds the ring at a 1px offset |
| Inside scroll areas | Options, tabs, table rows and cells draw the ring inset (-2px offset) so it is never clipped |
| Composite controls | Checkbox, radio and switch draw the ring on the box, ring or track; a linked card draws it around the whole card when its title link has focus |
| Inverse surfaces | Toasts use `--ds-inverse-focus` |
| Forced colors | A 2px `Highlight` outline with a 2px offset, on every control |

Never remove the ring without a visible replacement. Keep sticky chrome (top bar, navbar, mobile header) from covering the focused element: give scroll containers a `scroll-padding-top` equal to the sticky height.

## Skip link

`.ds-skip-link` sits off screen until it receives keyboard focus, then appears at the top left on the plate colors. Point it at the main content (`AppShell` takes a `contentId` for this target).

```html
<a class="ds-skip-link" href="#content">Skip to content</a>
```

## Targets

| Item | Size | Token |
|---|---|---|
| Minimum target | 24px (WCAG 2.5.8) | `--ds-size-target-min` |
| Coarse pointers | At least 44px through `@media (pointer: coarse)` | `--ds-size-touch-min` |
| Checkbox and radio box | 20px; the whole label is the target | `--ds-size-check` |
| Switch track | 44 x 24px; the label is part of the target | `--ds-size-switch-w`, `--ds-size-switch-h` |
| Spacing | Keep at least 8px between neighboring targets on touch screens | |

## Control heights

| Control | Fine pointer | Coarse pointer |
|---|---|---|
| Button | 48px (`sm` 40, `lg` 56) | `sm` grows to 44 |
| Text field, select, date field | 48px (40 in compact density) | 48 (`sm` grows to 44) |
| Icon button | 40px (`md` 48) | 44 |
| Nav item, listbox option, page button, calendar day | 40px | 44 |
| Tab | 44px | 44 |
| Segment | 34px inside a 40px track | 40 inside a 46px track |
| Disclosure row, command palette search | 56px | 56 |

Text inputs use 16px text on touch screens, so phones never zoom on focus.

## Rules

| Rule | Detail |
|---|---|
| Visible and unobscured | Focus is always visible and never hidden behind sticky chrome |
| Labels are targets | Checkbox, radio and switch labels toggle the control |
| Reading order | Focus order follows the visual order; reflowed layouts keep the task order |
| Dialogs | Focus moves into modals and drawers, stays there, and returns to the trigger on close (React Aria) |
| Icon-only controls | Always named; [IconButton](../components/control/icon-button.md) shows the name as a tooltip |
