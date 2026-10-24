---
title: Drawer
description: Side sheet over the scrim for secondary work such as filters or record details.
react: Drawer
---
# Feedback / Drawer

**NOT IN FIGMA** (repo-owned). Full-height sheet, `min(26rem, 100%)` wide, `card-bg`, `overlay-shadow`, padding 32 / 24, over the `scrim`. Opens from the end (right) by default or the start.

## Accessibility

A modal dialog: named by its title, focus trapped, Escape or a click on the scrim closes it, focus returns to the trigger.

## React

```tsx
<DialogTrigger>
  <Button variant="secondary">Filters</Button>
  <Drawer title="Filter reports">…</Drawer>
</DialogTrigger>
```

## Reference markup

```html
<div class="ds-drawer-overlay"><section class="ds-drawer" role="dialog" aria-labelledby="d">…</section></div>
```
