---
title: Segmented Control
description: One choice among two to five views, with a paper chip that slides to the chosen segment.
react: SegmentedControl
---
# Segmented Control

A segmented control switches between two to five views of the same content: Week, Day, List. The segments sit in a neutral highlighter tray and a paper chip slides under the chosen one. It changes the view in place; it does not navigate.

## When to use

- Use it to change how one set of content is shown (Week / Day / List, All / Community / Announcements).
- Use `block` to stretch the segments across a narrow column.
- Don't use it for form answers; use a [RadioGroup](radio.md).
- Don't use it for separate pages or panels with their own content; use [Tabs](../navigation/tab.md).
- Don't use more than five segments; use a [Select](select.md).

## Anatomy

| Part | Class | Notes |
|---|---|---|
| Tray | `.ds-segmented` | Neutral highlighter ground with a hairline inset rule, 3px padding, radius 10; scrolls sideways if it must |
| Block width | `.ds-segmented--block` | Segments share the full width |
| Segment | `.ds-segment` | 34px tall (40px on coarse pointers), 12px side padding, label style, secondary ink |
| Icon | `.ds-icon` | Optional 16px icon before the label |
| Chip | `.ds-segment__indicator` | Paper chip with the lift shadow behind the chosen segment; slides on the smooth spring |

## States

| State | Looks | Set by |
|---|---|---|
| Default | Secondary ink on the tray | none |
| Hover | Primary ink | `:hover`, `[data-hovered]` |
| Chosen | Primary ink on the paper chip | `[aria-checked="true"]`, `[aria-pressed="true"]`, `[data-selected]` |
| Focus | 2px focus ring with a 2px gap | `:focus-visible` |
| Disabled | Disabled ink, `not-allowed` cursor | `isDisabled`, `:disabled`, `[data-disabled]` |

## Behavior and accessibility

- React Aria `ToggleButtonGroup` in single selection: role `radiogroup`, each segment role `radio` with `aria-checked`. Arrow keys move between segments; Space or Enter chooses. One segment is always chosen.
- Give the group an `aria-label` that names what it controls ("Schedule view").
- The chip is React Aria's `SelectionIndicator`, animated in CSS (`translate` and `width`). In plain markup it shows only on the chosen segment.
- Reduced motion: the chip jumps to the new segment.
- Forced colors: the tray keeps a `CanvasText` edge; the chip paints itself in `Highlight` and the chosen label turns `HighlightText`.

## React

```tsx
import { SegmentedControl, Segment } from '@meetingat10/design-system/react';

<SegmentedControl aria-label="Schedule view" selectedKey={view} onSelectionChange={setView}>
  <Segment id="week" icon="calendar">Week</Segment>
  <Segment id="day" icon="clock">Day</Segment>
  <Segment id="list" icon="list-checks">List</Segment>
</SegmentedControl>

<SegmentedControl aria-label="Feed" defaultSelectedKey="all" block>
  <Segment id="all">All</Segment>
  <Segment id="community">Community</Segment>
  <Segment id="announcements">Announcements</Segment>
</SegmentedControl>
```

`onSelectionChange` receives the chosen key. Each `Segment` needs an `id`; it accepts `icon` and `isDisabled`.

## Plain CSS

```html
<div class="ds-segmented" role="radiogroup" aria-label="Schedule view">
  <button class="ds-segment" type="button" role="radio" aria-checked="true">Week<span class="ds-segment__indicator"></span></button>
  <button class="ds-segment" type="button" role="radio" aria-checked="false">Day<span class="ds-segment__indicator"></span></button>
  <button class="ds-segment" type="button" role="radio" aria-checked="false">List<span class="ds-segment__indicator"></span></button>
</div>
```

In plain markup, move `aria-checked` and handle the arrow keys yourself.
