---
title: Feature Row
description: Open columns of features (tile, heading, text, link) instead of a row of cards.
react: FeatureRow
---
# Layout / Feature Row

One column on mobile, two from 600px, three from 1024px. Each Feature is open: Tile, H3, `text-secondary` body, optional Link. This replaces the "three cards in a row" pattern (card rule).

## React

```tsx
<FeatureRow>
  <Feature icon="forum" tone="secondary" title="Community" href="/community" linkLabel="Join the conversation">Casual and encouraging.</Feature>
  <Feature icon="calendar" tone="accent" title="Consultations">Empathetic and clear.</Feature>
  <Feature icon="report" title="Reports">Serious and structured.</Feature>
</FeatureRow>
```

Put a Section Header (h2) above it; features default to h3.

## Reference markup

```html
<div class="ds-features"><article class="ds-feature"><span class="ds-tile ds-tile--secondary" aria-hidden="true">…</span><h3 class="ds-type-h3">Community</h3><p class="ds-type-body ds-secondary">…</p></article></div>
```
