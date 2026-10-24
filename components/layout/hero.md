---
title: Hero
description: Page opener with eyebrow, h1, lead, actions and an optional preview column, on a wash.
react: Hero
---
# Layout / Hero

Display headline (the page's only h1), Body large lead, one primary and at most one secondary action, optional preview column (7fr / 5fr from 1024px). Washes behind it by default.

Keep the exact tagline "Your Access to the College of Computer Studies"; label synthetic preview content `DEMO`.

## React

```tsx
<Hero
  eyebrow="Student · community access"
  title="Your Access to the College of Computer Studies"
  lead="Find a conversation, catch an update or make space for a question."
  actions={<><Button>Browse community</Button><Button variant="secondary">Explore consultation</Button></>}
  aside={<>{/* up to two collection cards */}</>}
/>
```

## Reference markup

```html
<div class="ds-wash"><section class="ds-container ds-hero"><div><p class="ds-eyebrow">…</p><h1 class="ds-type-display ds-hero__title">…</h1>…</div></section></div>
```
