---
title: Grid
description: Responsive columns: 2 equal, 3 equal, or main + side; one column on mobile.
react: Grid
---
# Layout / Grid

Columns collapse to one under 600px while keeping task order (principle 8: follow the task, not the viewport). `main` is 2fr + 1fr from 1024px, for content plus a side panel.

## React

```tsx
<Grid columns="main">
  <section>…</section>
  <aside>…</aside>
</Grid>
```

## Reference markup

```html
<div class="ds-cols ds-cols--main">…</div>
```
