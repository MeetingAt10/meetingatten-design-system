---
title: WordReveal
description: A headline whose words rise out of a clipped line on page load, one after another, read once by screen readers.
react: WordReveal
---
# WordReveal

WordReveal splits a headline into words and lifts each one out of a clipped line with a 70ms stagger on the emphasized ease. It runs once on page load with CSS only. It belongs to the [expressive layer](../../foundations/motion.md): the hero headline of a marketing page.

## When to use

- Use it for the display headline of a landing or marketing hero, once per page.
- Keep the text short (under about twelve words): each word starts 70ms after the previous one.
- Don't use it for body text, for headings further down the page or inside the portal.
- Style it with the type classes you already use (`ds-type-display`, `ds-hero__title`); it adds only the motion.

## Anatomy

| Part | Class | Notes |
|---|---|---|
| Headline | `.ds-word-rise` | The element you chose with `as`; carries your type classes |
| Reading text | `.ds-visually-hidden` | The full text, once, for assistive technology |
| Word | `.ds-word-rise__word` | Inline block that clips its inner span; `--i` is the word's position |
| Word inner | `span` | Rises from 105% to 0 over 720ms |

## States

| State | Looks | Set by |
|---|---|---|
| Rising | Each word slides up out of the clip, 70ms after the previous | page load |
| Resting | The headline reads as normal text | after the last word, and under reduced motion |

## Behavior and accessibility

- The visible words are `aria-hidden`; a visually hidden copy of the whole text gives the heading one clean accessible name. A screen reader never reads the headline word by word.
- The words are in the server HTML, so the headline is in place without JavaScript. The animation is CSS only, so there is nothing to hydrate.
- The clip box has 0.1em of padding above and below, so ascenders and descenders are not cut.
- Under `prefers-reduced-motion: reduce` no animation is declared and the words rest in place.
- Use `as="h1"` once per page; use `as="h2"` (the default) for a section headline.

## React

```tsx
import { WordReveal } from '@meetingat10/design-system/react';

<WordReveal as="h1" className="ds-type-display" text="The faculty door, rebuilt as an interface." />
```

`as` is `h1`, `h2` (default), `p` or `span`. WordReveal has no hooks, so it also renders in React Server Components.

## Plain CSS

```html
<h1 class="ds-word-rise ds-type-display">
  <span class="ds-visually-hidden">The faculty door</span>
  <span aria-hidden="true">
    <span class="ds-word-rise__word" style="--i: 0"><span>The</span></span>
    <span class="ds-word-rise__word" style="--i: 1"><span>faculty</span></span>
    <span class="ds-word-rise__word" style="--i: 2"><span>door</span></span>
  </span>
</h1>
```
