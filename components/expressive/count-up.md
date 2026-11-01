---
title: CountUp
description: A number that rolls up from 0 when it scrolls into view, with the final value always in the text.
react: CountUp
---
# CountUp

CountUp shows a real number rolling up from 0 the first time at least 40% of it is in the viewport. The rolling digits come from `@number-flow/react`, the same library that rolls [Progress](../feedback/progress.md) and [Meter](../feedback/meter.md) values. It belongs to the [expressive layer](../../foundations/motion.md).

## When to use

- Use it for counts that are true and computed (components, tokens, icons), in a row of two to four on a marketing page.
- Pair each number with a plain-language label under it.
- Don't invent figures. Count only numbers the product can back.
- Don't use it for values the user acts on (balances, deadlines, queue positions) or in the portal.

## Anatomy

| Part | Name | Notes |
|---|---|---|
| Wrapper | the element with your `className` | Holds both parts |
| Reading text | `.ds-visually-hidden` | `prefix + value + suffix`, always the final value |
| Visible number | `aria-hidden` span | NumberFlow, showing 0 until visible, then the value |

## States

| State | Looks | Set by |
|---|---|---|
| Waiting | Shows 0 | before the number scrolls into view |
| Counting | Digits roll to the value | at least 40% visible |
| Done | The value | after the roll |
| Immediate | The value, no roll | reduced motion, or no `IntersectionObserver` |

## Behavior and accessibility

- The final value is in the server HTML as visually hidden text, so assistive technology and a page without JavaScript always have the number. Sighted users without JavaScript see 0, so do not use it for a number that matters on its own.
- The rolling digits are `aria-hidden`; the number is announced once.
- `prefers-reduced-motion: reduce` shows the value at once.

## React

```tsx
import { CountUp } from '@meetingat10/design-system/react';

<p className="ds-type-display"><CountUp value={components} suffix="+" /></p>
<p className="ds-type-body-small ds-secondary">components</p>
```

CountUp is a client component and depends on `@number-flow/react`, which the package already declares.

## Plain CSS

There is no plain-CSS version. Print the number as text; the rolling is done by NumberFlow.
