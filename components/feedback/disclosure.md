---
title: Disclosure and Accordion
description: Ruled rows that open in place, alone or grouped as an accordion, with a turning caret and a panel height that springs.
react: Disclosure
---
# Disclosure and Accordion

A disclosure is a ruled row that opens in place: an FAQ answer, a group of filters, a section of a record. The caret turns and the panel height springs open. An accordion groups disclosures and keeps one open at a time unless you allow more.

## When to use

- Use it for answers, filters or record sections that people open one at a time.
- Wrap several in `Accordion`; add `allowsMultipleExpanded` when people compare sections.
- Write the title as the question or the section name.
- Don't hide required steps, errors or policy text in a closed panel; keep them visible.
- Don't nest accordions, and don't put each row in a card; the rules separate the rows.

## Anatomy

| Part | Class | Notes |
|---|---|---|
| Group | `.ds-disclosure-group` | The accordion; a hairline rule on top |
| Row | `.ds-disclosure` | One disclosure; a hairline rule below |
| Heading | `.ds-disclosure__heading` | `h3` by default (`level` 2, 3 or 4) |
| Trigger | `.ds-disclosure__trigger` | Full-width button, at least 56px tall, h4 style (Plus Jakarta Sans 700 17/24), radius 8 |
| Caret | `.ds-disclosure__caret` | 20px `caret-down`; turns 180 degrees when open |
| Panel | `.ds-disclosure__panel` | Body text in secondary color; its height springs between closed and open |
| Content | `.ds-disclosure__content` | 20px bottom padding, 12px between paragraphs |

## States

| State | Looks | Set by |
|---|---|---|
| Closed | Title row only; the caret points down | default, `aria-expanded="false"` |
| Open | The panel shows; the caret points up | `defaultExpanded`, `isExpanded`, `[data-expanded]`, `aria-expanded="true"` |
| Moving | The height springs on the smooth spring while the caret turns | `--disclosure-panel-height` (set by React Aria during the change) |
| Hover | The trigger takes the neutral highlighter wash | `:hover`, `[data-hovered]` |
| Focus | 2px focus ring with a 2px gap | `:focus-visible` |
| Disabled | Disabled text; cannot be opened | `isDisabled`, `:disabled`, `[data-disabled]` |

## Behavior and accessibility

- React Aria `Disclosure`, `DisclosurePanel` and `DisclosureGroup`: the trigger is a button inside a heading; Enter or Space toggles it; `aria-expanded` and `aria-controls` tie it to the panel (`role="group"`).
- Accordion: one row open at a time unless `allowsMultipleExpanded`. Control it with `expandedKeys` and `onExpandedChange`, or start with `defaultExpandedKeys`; give each `Disclosure` an `id`.
- Set `level` so the titles fit the page outline.
- Reduced motion: the panel and the caret change at once.
- Forced colors: the rules stay visible; the caret direction and the panel show open and closed.

## React

```tsx
import { Accordion, Disclosure } from '@meetingat10/design-system/react';

<Accordion defaultExpandedKeys={['live']}>
  <Disclosure id="live" title="Are these schedules live?">No. Every schedule on this page is a sample.</Disclosure>
  <Disclosure id="reports" title="Who can see my reports?">
    Recipients and access rules are still being confirmed. Restricted access does not mean anonymous.
  </Disclosure>
  <Disclosure id="length" title="How long is a consultation?">Slots in this sample are 30 minutes.</Disclosure>
</Accordion>

<Disclosure title="Record details" level={2} defaultExpanded>
  <p>Updated 21 Oct (sample).</p>
</Disclosure>
```

String `children` are wrapped in a paragraph. Other React Aria props pass through: `isExpanded`, `defaultExpanded`, `onExpandedChange` and `isDisabled` on `Disclosure`; `allowsMultipleExpanded`, `expandedKeys`, `defaultExpandedKeys` and `onExpandedChange` on `Accordion`.

## Plain CSS

```html
<div class="ds-disclosure-group">
  <div class="ds-disclosure" data-expanded>
    <h3 class="ds-disclosure__heading">
      <button class="ds-disclosure__trigger" type="button" aria-expanded="true" aria-controls="faq-live">
        Are these schedules live?
        <svg class="ds-icon ds-disclosure__caret" aria-hidden="true"><use href="sprite.svg#ds-caret-down"/></svg>
      </button>
    </h3>
    <div class="ds-disclosure__panel" id="faq-live" role="group">
      <div class="ds-disclosure__content"><p>No. Every schedule on this page is a sample.</p></div>
    </div>
  </div>
  <div class="ds-disclosure">
    <h3 class="ds-disclosure__heading">
      <button class="ds-disclosure__trigger" type="button" aria-expanded="false" aria-controls="faq-length">
        How long is a consultation?
        <svg class="ds-icon ds-disclosure__caret" aria-hidden="true"><use href="sprite.svg#ds-caret-down"/></svg>
      </button>
    </h3>
    <div class="ds-disclosure__panel" id="faq-length" role="group" hidden>
      <div class="ds-disclosure__content"><p>Slots in this sample are 30 minutes.</p></div>
    </div>
  </div>
</div>
```

In plain markup, toggle `aria-expanded` and `hidden` yourself. The height spring needs `--disclosure-panel-height` set to the measured height while the panel moves.
