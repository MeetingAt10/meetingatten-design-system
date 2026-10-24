---
title: Menu
description: A button that opens a short list of actions; destructive items use the danger color.
react: MenuButton
---
# Navigation / Menu

**NOT IN FIGMA** (repo-owned). The list reuses the Select listbox and option styles in the shared popover (`overlay-shadow`, `radius-tile`). Destructive items use `danger/fg` and must be confirmed in a Modal.

## Accessibility

`role="menu"` with `menuitem`s; Enter, Space or ArrowDown opens; arrows move; Enter chooses; Escape closes and returns focus to the button.

## React

```tsx
<MenuButton label="Draft actions" onAction={(id) => run(id)}>
  <MenuItem id="keep">Keep draft</MenuItem>
  <MenuItem id="discard" danger>Discard draft</MenuItem>
</MenuButton>
<MenuButton label="More actions" iconOnly>…</MenuButton>
```

## Reference markup

```html
<div class="ds-popover"><div class="ds-listbox ds-menu" role="menu"><div class="ds-option" role="menuitem">Keep draft</div><div class="ds-option ds-option--danger" role="menuitem">Discard draft</div></div></div>
```
