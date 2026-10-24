---
title: Skeleton
description: Placeholder line for loading views; decorative, the region carries the loading status.
react: Skeleton
---
# Data / Skeleton

Part of the Figma View State (Loading). 12px line, `radius-chip`, `disabled-bg`; `short` is 30% wide.

## Accessibility

Skeleton lines are hidden from assistive tech. Mark the loading region with `aria-busy="true"` and keep a short text status ("Loading reports").

## React

```tsx
<div aria-busy="true"><p className="ds-secondary">Loading reports</p><Skeleton /><Skeleton short /></div>
```

## Reference markup

```html
<span class="ds-skeleton" aria-hidden="true"></span>
<span class="ds-skeleton ds-skeleton--short" aria-hidden="true"></span>
```
