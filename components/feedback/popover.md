---
title: Popover
description: Small non-modal dialog next to its trigger for extra detail or a quick setting.
react: Popover
---
# Feedback / Popover

**NOT IN FIGMA** (repo-owned). `card-bg`, `overlay-shadow`, `radius-tile`, padding 16, max 320px. Unlike Modal it does not block the page; Escape or a click outside closes it.

## React

```tsx
<Popover trigger={<Button variant="tertiary">What is a policy gate?</Button>} title="Policy gate">
  <p>Submission stays disabled until recipients and access rules are confirmed.</p>
</Popover>
```

## Reference markup

```html
<div class="ds-popover"><section class="ds-popover-panel" role="dialog" aria-labelledby="p"><h4>Policy gate</h4><p>…</p></section></div>
```
