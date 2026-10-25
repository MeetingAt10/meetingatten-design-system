---
title: Tag Group
description: Topics and active filters as ruled chips; selectable tags take the schedule wash and removable tags carry a remove button.
react: TagGroup
---
# Tag Group

A tag group shows topics or active filters as small ruled chips under one label. Tags can be selectable (they take the schedule highlighter wash) or removable (a small remove button at the end). A lane tint marks community or consultation topics; it names a topic, never a permission.

## When to use

- Use it for active filters people can remove one by one ("Algorithms", "Thesis").
- Use it for a set of topics people pick from, with `selectionMode`.
- Use `lane` to tint community or consultation topics.
- Don't use it for statuses; use a [Badge](../badge/status.md). Don't use it for actions; use a [Button](button.md).
- Don't use a lane tint to suggest that a topic is private or restricted.

## Anatomy

| Part | Class | Notes |
|---|---|---|
| Group | `.ds-tag-group` | Label, optional description, the list; 8px gap |
| Label | `.ds-field__label` | Always visible ("Active filters", "Topics") |
| List | `.ds-tag-list` | Wrapping row, 8px gap |
| Tag | `.ds-tag` | 30px tall, 12px side padding, radius 6, `border-default` rule on paper, Inter 500 14/20 |
| Lane tint | `.ds-tag--community`, `.ds-tag--consult` | Violet or teal rule and ink |
| Remove | `.ds-tag__remove` | 22px button with a 16px `x` icon, secondary ink, neutral wash on hover |
| Empty | `.ds-field__description` | `emptyMessage` shown when there are no tags |

## States

| State | Looks | Set by |
|---|---|---|
| Default | Ruled chip on paper | none |
| Hover | Rule darkens to `border-strong` | `:hover`, `[data-hovered]` |
| Focus | 2px focus ring with a 2px gap | `[data-focus-visible]` |
| Selected | Navy rule, schedule wash, navy ink | `selectionMode` on the group; `[aria-selected="true"]`, `[data-selected]` |
| Removable | Tighter end padding with the remove button | `onRemove` on the group; `[data-allows-removing]` |
| Disabled | Dashed rule, disabled ink | `isDisabled` or `disabledKeys`; `[aria-disabled="true"]`, `[data-disabled]` |

## Behavior and accessibility

- React Aria `TagGroup`: a grid of tags named by the label. Arrow keys move between tags; Delete or Backspace removes a removable tag; with `selectionMode`, Space or Enter selects.
- The remove button is read with its tag ("Remove Algorithms"), and keyboard users hear how to remove with Delete or Backspace.
- After a removal, say what changed where the results are ("12 posts match").
- Forced colors: tags keep a `CanvasText` edge; disabled tags use `GrayText`.

## React

```tsx
import { useState } from 'react';
import { TagGroup, Tag } from '@meetingat10/design-system/react';

function ActiveFilters() {
  const [tags, setTags] = useState(['Algorithms', 'Web', 'Thesis']);
  return (
    <TagGroup label="Active filters" emptyMessage="No filters. Showing everything."
      onRemove={(keys) => setTags((t) => t.filter((x) => !keys.has(x)))}>
      {tags.map((t) => <Tag key={t} id={t} lane={t === 'Thesis' ? 'consult' : undefined}>{t}</Tag>)}
    </TagGroup>
  );
}
```

`TagGroup` takes `label`, `description`, `items`, `emptyMessage` and React Aria props (`selectionMode`, `selectedKeys`, `onSelectionChange`, `onRemove`, `disabledKeys`). `Tag` takes `id`, `lane`, `textValue` and `isDisabled`.

## Plain CSS

```html
<div class="ds-tag-group">
  <p class="ds-field__label" id="filters">Active filters</p>
  <div class="ds-tag-list" role="list" aria-labelledby="filters">
    <div class="ds-tag" role="listitem" data-allows-removing>
      Algorithms
      <button class="ds-tag__remove" type="button" aria-label="Remove Algorithms">
        <svg class="ds-icon ds-icon--16" aria-hidden="true"><use href="sprite.svg#ds-x"/></svg>
      </button>
    </div>
    <div class="ds-tag ds-tag--consult" role="listitem">Thesis</div>
  </div>
</div>
```

Plain markup uses a simple list with remove buttons; the React version adds the grid keyboard pattern.
