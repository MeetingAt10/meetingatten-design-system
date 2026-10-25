---
title: Menu
description: A button that opens a short list of actions on a floating sheet; destructive actions use danger ink and sit last.
react: MenuButton
---
# Menu

A menu button opens a short list of actions on a floating sheet: rows with an icon, a label, an optional description and a keyboard shortcut. Destructive actions use danger ink and sit last, after a rule.

## When to use

- Use it for secondary actions on an item ("Keep editing", "Copy reference", "Discard draft").
- Use `iconOnly` (the `dots-three` button) in dense rows and cards.
- Don't use it to pick a value; use [Select](../control/select.md). Don't use it for navigation between pages; use links.

## Anatomy

| Part | Class | Notes |
|---|---|---|
| Trigger | `.ds-btn` or `.ds-icon-btn` | Secondary [Button](../control/button.md) with a caret, or an [IconButton](../control/icon-button.md) |
| Caret | `.ds-menu-trigger__caret` | Turns over while open |
| Sheet | `.ds-popover` + `.ds-listbox.ds-menu` | Overlay shadow, at least 13rem wide |
| Item | `.ds-option` | 40px rows (44px on coarse pointers), radius 6 |
| Description | `.ds-option__description` | Caption under the label |
| Shortcut | `.ds-option__keys` > `.ds-kbd` | Right-aligned keycap |
| Danger | `.ds-option--danger` | Danger ink, danger wash on focus |
| Section | `.ds-listbox__section`, `.ds-listbox__header` | Titled group, ruled from the previous group |
| Separator | `.ds-listbox__separator` | Hairline |

## States

| State | Looks | Set by |
|---|---|---|
| Item hover or focus | Schedule highlighter wash | `:hover`, `[data-hovered]`, `[data-focused]` |
| Keyboard focus | 2px inset focus ring | `[data-focus-visible]` |
| Disabled item | Disabled text | `isDisabled`, `[data-disabled]` |
| Open | Caret turned; sheet rises from the trigger | `[aria-expanded="true"]` |

## Behavior and accessibility

- React Aria menu: Enter, Space or the arrow keys open it; arrows move, typing jumps to a label, Enter chooses, Escape closes and returns focus.
- `onAction` receives the chosen item's `id`. Confirm destructive actions in a [Modal](../feedback/modal.md) that names the object.
- An icon-only trigger is named by `label` ("More actions").
- Forced colors: the focused item takes `Highlight`.

## React

```tsx
import { MenuButton, MenuItem, MenuSection, MenuSeparator } from '@meetingat10/design-system/react';

<MenuButton label="Draft actions" onAction={(id) => handle(id)}>
  <MenuSection title="Draft">
    <MenuItem id="edit" icon="pencil" shortcut="E">Keep editing</MenuItem>
    <MenuItem id="copy" icon="copy" description="DEMO-024">Copy reference</MenuItem>
  </MenuSection>
  <MenuSeparator />
  <MenuItem id="discard" icon="trash" danger>Discard draft</MenuItem>
</MenuButton>

<MenuButton label="More actions" iconOnly>
  <MenuItem id="link" icon="link">Copy link</MenuItem>
</MenuButton>
```

`variant` styles the text trigger (default `secondary`); `placement` defaults to `bottom start`.

## Plain CSS

```html
<button class="ds-btn ds-btn--secondary" type="button" aria-haspopup="menu" aria-expanded="true">Draft actions<svg class="ds-icon ds-icon--16 ds-menu-trigger__caret" aria-hidden="true"><use href="sprite.svg#ds-caret-down"/></svg></button>
<div class="ds-popover">
  <div class="ds-listbox ds-menu" role="menu">
    <div class="ds-option" role="menuitem"><svg class="ds-icon ds-icon--16" aria-hidden="true"><use href="sprite.svg#ds-pencil"/></svg><span class="ds-option__text">Keep editing</span><kbd class="ds-option__keys"><kbd class="ds-kbd">E</kbd></kbd></div>
    <div class="ds-listbox__separator" role="separator"></div>
    <div class="ds-option ds-option--danger" role="menuitem"><svg class="ds-icon ds-icon--16" aria-hidden="true"><use href="sprite.svg#ds-trash"/></svg><span class="ds-option__text">Discard draft</span></div>
  </div>
</div>
```
