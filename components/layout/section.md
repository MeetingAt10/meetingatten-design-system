---
title: Section
description: A full-width page region with the density rhythm and a centered container, on the canvas, a paper band or a door-plate band.
react: Section
---
# Section

A section is a full-width region of a page. Its vertical padding follows the density setting, and it wraps its content in a [Container](container.md). It sits on the canvas, on a paper band between two rules, or on a navy door-plate band where color owns the whole region.

## When to use

- Use the canvas tone for most regions; let rules and headings separate them.
- Use `sheet` for a region that should read as one paper band across the page.
- Use `plate` once per page at most, usually for the closing call to action.
- Use `tight` for short regions such as a notice strip.
- Don't wrap a section in a card or put cards inside cards; use rules, headings and [Divider](divider.md).

## Anatomy

| Part | Class | Notes |
|---|---|---|
| Region | `.ds-section` | `padding-block` from `--ds-density-section-space`: 64px comfortable, 24px compact; 96px and 32px from 1024px |
| Container | `.ds-container` | Added by the React component unless `bleed` is set |
| Sheet band | `.ds-section--sheet` | Paper (`surface`) with a hairline rule above and below |
| Plate band | `.ds-section--plate` | Navy plate (`--ds-plate-bg`) with plate text (`--ds-plate-fg`); pale blue plate with dark text in the dark theme |
| Tight | `.ds-section--tight` | 32px padding, 48px from 1024px |

## States

| State | Looks | Set by |
|---|---|---|
| Comfortable | 64px padding, 96px from 1024px | `data-density="comfortable"` (default) |
| Compact | 24px padding, 32px from 1024px | `data-density="compact"` |
| Canvas | No fill, the page canvas shows | `tone="canvas"` (default) |
| Sheet | Paper band between rules | `tone="sheet"`, `.ds-section--sheet` |
| Plate | Color owns the region; `.ds-lead`, `.ds-secondary` and section header descriptions switch to the plate text color; secondary buttons turn into plate-colored outlines | `tone="plate"`, `.ds-section--plate` |
| Tight | Shorter padding regardless of density | `tight`, `.ds-section--tight` |

## Behavior and accessibility

- A `<section>` is a region landmark only when it has a name: give the [SectionHeader](section-header.md) an `id` and pass `aria-labelledby` to the section.
- On a plate band, use `variant="plate"` for the main [Button](../control/button.md); a primary navy button would disappear into the navy band. Plate text on the plate is checked at 4.5:1 in both themes.
- No motion: nothing changes under reduced motion.
- Forced colors: fills drop to the system canvas; the sheet band keeps its rules.

## React

```tsx
import { Section, SectionHeader, Button } from '@meetingat10/design-system/react';

<Section aria-labelledby="community-h">
  <SectionHeader id="community-h" title="This week in the community" description="Sample posts from the college community." />
  ...
</Section>

<Section tone="plate" aria-labelledby="start-h">
  <SectionHeader id="start-h" title="Your Access to the College of Computer Studies" actions={<Button variant="plate" icon="sign-in">Sign in</Button>} />
</Section>
```

`tone` is `canvas` (default), `sheet` or `plate`. `tight` shortens the padding. `bleed` skips the inner container for full-bleed content. Other HTML attributes pass through to the `<section>`.

## Plain CSS

```html
<section class="ds-section" aria-labelledby="community-h">
  <div class="ds-container">
    <header class="ds-section-header"><h2 class="ds-section-header__title" id="community-h">This week in the community</h2></header>
    ...
  </div>
</section>

<section class="ds-section ds-section--plate ds-section--tight" aria-labelledby="start-h">
  <div class="ds-container">
    <h2 class="ds-type-h2" id="start-h">Your Access to the College of Computer Studies</h2>
    <button class="ds-btn ds-btn--plate" type="button">Sign in</button>
  </div>
</section>
```
