---
title: Highlight
description: A highlighter stroke behind the words that matter, swiped in from the left when it first appears.
react: Highlight
---
# Highlight

A highlight is a flat highlighter stroke behind a few words: a search hit, the phrase a heading turns on, the term a sentence is about. It swipes in from the left when it first appears. It is the same stroke the page uses for text selection. It replaces the old decorative wash.

## When to use

- Use the default yellow `mark` for search hits and the one phrase that matters in a heading.
- Use a lane tone (`community`, `consult`, `schedule`) when the words name that lane.
- Use `under` on display headlines, where a full-height stroke is too heavy.
- Don't highlight whole sentences or several phrases in one heading; one stroke per heading.
- Don't let the highlight carry meaning alone; the sentence must make sense without it.

## Anatomy

| Part | Class | Notes |
|---|---|---|
| Mark | `.ds-highlight` | A `<mark>` with a flat stroke (`--ds-highlight-mark`: warning 300 in light, warning 950 in dark), 2px radius, text color inherited; the stroke continues across line breaks |
| Lane tones | `.ds-highlight--community`, `--consult`, `--schedule` | `--ds-highlight-community`, `--ds-highlight-consult`, `--ds-highlight-schedule` |
| Under | `.ds-highlight--under` | Stroke on the lower 0.42em of the line only |
| Stroke color | `--hl` | Custom property the tone classes set |

## States

| State | Looks | Set by |
|---|---|---|
| Entering | The stroke grows from the left over 480ms (deliberate, ease-out), once | first render (`@starting-style`) |
| Shown | Full stroke behind the words | default |
| Lane tone | Amber, emerald or navy wash instead of yellow | `tone`, tone class |
| Under | Stroke under the lower part of the letters | `under`, `.ds-highlight--under` |

## Behavior and accessibility

- Renders `<mark>`. Most screen readers read the words without announcing the mark, so the surrounding text must carry the meaning.
- Text on every highlight tone (primary text, secondary text and the navy action color) is checked at 4.5:1 in both themes.
- The swipe runs when the element first appears (inserted or shown), not when it scrolls into view.
- Reduced motion: the stroke appears at once.
- Forced colors: the stroke is a background image, which forced colors removes, and there is no fallback, so the emphasis disappears and the words remain.

## React

```tsx
import { Highlight } from '@meetingat10/design-system/react';

<h2 className="ds-type-h2">Community access does <Highlight under>not</Highlight> grant report access.</h2>

<p>2 results for <Highlight>recursion</Highlight> in the community.</p>

<p>Book a <Highlight tone="consult">consultation</Highlight> during office hours.</p>
```

`tone` is `mark` (default), `community`, `consult` or `schedule`.

## Plain CSS

```html
<h2 class="ds-type-h2">Community access does <mark class="ds-highlight ds-highlight--under">not</mark> grant report access.</h2>
<p>2 results for <mark class="ds-highlight">recursion</mark> in the community.</p>
<p>Book a <mark class="ds-highlight ds-highlight--consult">consultation</mark> during office hours.</p>
```
