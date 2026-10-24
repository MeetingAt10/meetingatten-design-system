---
title: Empty State
description: Open, centered message when there is nothing to show yet, with one next step.
react: EmptyState
---
# Feedback / Empty State

**NOT IN FIGMA** as a component (Figma View State covers loading and errors in tables). Tile, H3-size heading (h2 by default), `text-secondary` description, one action. Open content, not a card (card rule).

## Copy

Say what is missing and what the user can do next ("No reports yet. Drafts you start appear here."). No blame, no promises about response times.

## React

```tsx
<EmptyState icon="report" title="No reports yet" description="Drafts you start appear here." action={<Button>Start a draft</Button>} />
```

## Reference markup

```html
<div class="ds-empty"><span class="ds-tile" aria-hidden="true">…</span><h2 class="ds-type-h3">No reports yet</h2><p class="ds-type-body">Drafts you start appear here.</p><button class="ds-btn ds-btn--primary">Start a draft</button></div>
```
