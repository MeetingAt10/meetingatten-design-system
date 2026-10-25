---
title: Tabs
description: Views of one page on a ruled header, where the selected tab carries a 2px navy rule that slides between tabs.
react: Tabs
---
# Tabs

Tabs switch between views of one page (Latest, Saved, My posts). The labels sit on a ruled header and the selected tab carries a 2px navy rule that slides along the rule to the new tab.

## When to use

- Use them for two to six peer views of the same content.
- Use a `count` for items in a view, and an icon only when it helps scanning.
- Use [SegmentedControl](../control/segmented-control.md) for a compact view switch (Week, Day, List).
- Don't use tabs for steps in a flow; use [Stepper](stepper.md). Don't use them for site navigation; use links.

## Anatomy

| Part | Class | Notes |
|---|---|---|
| Tabs | `.ds-tabs` | Grid, 20px between the list and the panel |
| List | `.ds-tabs__list` | Hairline below; scrolls sideways when it overflows |
| Tab | `.ds-tab` | 44px tall, label 600 14px, top corners radius 8 |
| Count | `.ds-tab__count` | Inter 500 12px with tabular figures, on the neutral wash |
| Indicator | `.ds-tab__indicator` | 2px navy rule, slides on the smooth spring (React Aria `SelectionIndicator`) |
| Panel | `.ds-tabs__panel` | Fades in on change |

## States

| State | Looks | Set by |
|---|---|---|
| Default | Secondary text | none |
| Hover | Neutral wash, primary text | `:hover`, `[data-hovered]`, `.is-hover` |
| Selected | Primary text and the navy rule | `[aria-selected="true"]`, `[data-selected]` |
| Focus | 2px focus ring, inset | `:focus-visible` |
| Disabled | Disabled text | `isDisabled`, `[aria-disabled="true"]`, `[data-disabled]` |

## Behavior and accessibility

- React Aria tabs: arrow keys move between tabs, Home and End jump, Tab moves into the panel. Give `TabList` an `aria-label`.
- The selected tab is announced; the rule and the text weight both mark it.
- Loading and errors for a view belong inside its panel.
- Reduced motion: the rule jumps to the new tab and the panel appears at once.
- Forced colors: the indicator paints itself in `Highlight`.

## React

```tsx
import { Tabs, TabList, Tab, TabPanel } from '@meetingat10/design-system/react';

<Tabs>
  <TabList aria-label="Feed">
    <Tab id="latest" icon="chats" count={12}>Latest</Tab>
    <Tab id="saved" icon="push-pin">Saved</Tab>
    <Tab id="archived" isDisabled>Archived</Tab>
  </TabList>
  <TabPanel id="latest">Twelve new posts since Monday (sample).</TabPanel>
  <TabPanel id="saved">Posts you pinned.</TabPanel>
</Tabs>
```

`selectedKey`, `defaultSelectedKey` and `onSelectionChange` on `Tabs` come from React Aria.

## Plain CSS

```html
<div class="ds-tabs">
  <div class="ds-tabs__list" role="tablist" aria-label="Feed">
    <button class="ds-tab" role="tab" aria-selected="true" aria-controls="p-latest" id="t-latest">Latest<span class="ds-tab__count">12</span><span class="ds-tab__indicator"></span></button>
    <button class="ds-tab" role="tab" aria-selected="false" aria-controls="p-saved" id="t-saved" tabindex="-1">Saved<span class="ds-tab__indicator"></span></button>
  </div>
  <div class="ds-tabs__panel" role="tabpanel" id="p-latest" aria-labelledby="t-latest">...</div>
</div>
```

Plain markup draws the indicator only on the selected tab (no slide); wire the arrow keys yourself.
