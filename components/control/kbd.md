---
title: Kbd
description: Keycaps for a keyboard shortcut, read as one phrase.
react: Kbd
---
# Kbd

Kbd draws keycaps for a shortcut: `Ctrl` `K`, `Esc`. Keys are one of the few places monospace belongs. Use it in help text, menus, tooltips and the command palette footer.

## When to use

- Use it to show a shortcut next to the action it triggers, or in a sentence that teaches it.
- Show the key the platform uses (Ctrl on Windows and Linux, Cmd on macOS), or both.
- Write key names in words ("Enter", "Esc", "Shift", "Up"), not symbols.
- Don't make a shortcut the only way to do something; the action stays reachable with a pointer and Tab.

## Anatomy

| Part | Class | Notes |
|---|---|---|
| Key | `.ds-kbd` | 24px tall, at least 24px wide, 4px side padding, radius 4, paper with a hairline inset rule and a 2px bottom edge, JetBrains Mono 500 12px, secondary ink |
| Combination | `.ds-kbd-combo` | Wraps several keys 2px apart |
| In a menu row | `.ds-option__keys` | Pushes the keys to the end of a [menu item](../navigation/menu.md) |
| In a tooltip | `.ds-tooltip .ds-kbd` | Transparent key with an inverse-muted outline |

## States

| State | Looks | Set by |
|---|---|---|
| Single key | One keycap | `keys="Esc"` |
| Combination | Keycaps side by side, read as one phrase | `keys={['Ctrl', 'K']}` |
| On the ink plate | Outlined key on the tooltip's inverse ground | inside `.ds-tooltip` |

## Behavior and accessibility

- Renders `<kbd>`; a combination is a `<kbd>` holding one `<kbd>` per key, the HTML pattern for keys pressed together.
- Screen readers read the key names as text ("Ctrl K"), so the words matter more than the shape.
- Purely visual: it is not focusable and does nothing on its own.
- Forced colors: each key keeps a `CanvasText` edge.

## React

```tsx
import { Kbd } from '@meetingat10/design-system/react';

<p>Open the command palette with <Kbd keys={['Ctrl', 'K']} /> or <Kbd keys={['Cmd', 'K']} />.</p>
<Kbd keys="Esc" />
```

`keys` takes one key or an array of keys pressed together.

## Plain CSS

```html
<kbd class="ds-kbd-combo"><kbd class="ds-kbd">Ctrl</kbd><kbd class="ds-kbd">K</kbd></kbd>
<kbd class="ds-kbd">Esc</kbd>
```
