---
title: Card
description: Soft raised container for collection items and floating panels only; CardLink makes the whole card a link that lifts on hover.
react: Card
---
# Content / Card

Borderless, `card-bg`, `card-shadow`, `radius-card` (12), padding 24, gap 12. Dark: `raised` tone with a 1px top highlight.

## The card rule

| Use a card for | Do not use a card for |
|---|---|
| Items in a collection (announcements, forum posts, records in a list) | Feature rows: use Feature Row |
| Floating panels (sign-in over a wash; `overlay`) | Forms: put fields on the page under a Section Header |
| | Tables: the table has its own container |
| | Detail pages: headed sections with Divider |

Never put a card inside a card; at most one row of cards per section.

## Interactive cards

`CardLink` makes the whole card one link: it lifts 2px and steps to `card-shadow-hover` on hover (shadow only under reduced motion) and shows the focus ring. Keep other links and buttons out of a CardLink.

## React

```tsx
<Card>
  <CardHeader><Badge tone="info">Announcement</Badge><span className="ds-tag-mono">Demo</span></CardHeader>
  <h3 className="ds-type-h3">Make room for your next idea.</h3>
  <CardMeta>Community desk · illustrative</CardMeta>
</Card>

<CardLink href="/community/42"><h3 className="ds-type-h3">What helped you understand recursion?</h3></CardLink>
<Card as="div" overlay>…sign-in form…</Card>
```

## Reference markup

```html
<article class="ds-card">…</article>
<a class="ds-card" href="/community/42">…</a>
```
