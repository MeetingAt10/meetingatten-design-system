---
title: Tooltip
description: Short label for an icon control on the inverse surface; shows on hover and keyboard focus.
react: Tooltip
---
# Feedback / Tooltip

**NOT IN FIGMA** (repo-owned). `text-primary` fill with `canvas` text (the toast contrast pair), Caption 12/16, `radius-chip`, max 240px.

## Usage

Label icon-only controls and add a short hint. Never put essential information or links in a tooltip: touch users may never see it.

## React

```tsx
<Tooltip content="Notifications"><IconButton icon="bell" label="Notifications" /></Tooltip>
```

## Reference markup

```html
<div class="ds-tooltip" role="tooltip">Notifications</div>
```
