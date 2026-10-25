---
title: Command Palette
description: One search over destinations and actions in a modal sheet, opened with Ctrl+K or Cmd+K.
react: CommandPalette
---
# Command Palette

The command palette is one search over pages and actions. Ctrl+K (Cmd+K on macOS) opens a modal sheet with a large search field, results grouped by section with their icon, description and shortcut, and a key hint line at the bottom.

## When to use

- Use it once per app, for fast jumps between destinations and frequent actions.
- Add `keywords` so people find things by other words ("office hours" for Consultations).
- Don't make it the only way to reach something; every item also lives in the visible navigation.

## Anatomy

| Part | Class | Notes |
|---|---|---|
| Scrim and sheet | `.ds-modal-overlay`, `.ds-modal.ds-command` | 40rem wide, near the top; a bottom sheet on phones |
| Search | `.ds-command__search`, `.ds-command__input` | Magnifier, 56px input in body large, an `Esc` keycap |
| Results | `.ds-listbox.ds-command__results` | Sections (`.ds-listbox__section`, `.ds-listbox__header`) of `.ds-option` rows |
| Shortcut | `.ds-option__keys` > `.ds-kbd` | Right-aligned |
| Empty | `.ds-listbox__empty` | "No pages or actions match. Try another word." |
| Hints | `.ds-command__foot` | Keys to move, open and close; hidden from assistive tech |

## States

| State | Looks | Set by |
|---|---|---|
| Closed | Nothing rendered | `isOpen={false}` |
| Open | Scrim fades in, sheet rises | Ctrl+K / Cmd+K, or `isOpen` |
| Result focus | Schedule highlighter wash | `[data-focused]` |
| No matches | Empty message | filter returns nothing |

## Behavior and accessibility

- Uncontrolled, Ctrl+K or Cmd+K toggles it anywhere on the page. With `isOpen` it is controlled and the shortcut is off; open it from your own button.
- A modal dialog named "Command palette": focus goes to the search field ("Search commands"), arrow keys move through results, Enter runs one, Escape or the scrim closes. Focus returns to where it was.
- Filtering matches the label and keywords, ignoring case and accents. `onAction` receives the item `id` after the palette closes.
- Reduced motion: no rise; it appears at once.

## React

```tsx
import { CommandPalette } from '@meetingat10/design-system/react';

<CommandPalette
  onAction={(id) => run(id)}
  items={[
    { id: 'community', label: 'Community', section: 'Go to', icon: 'chats' },
    { id: 'consultations', label: 'Consultations', section: 'Go to', icon: 'chalkboard', keywords: ['office hours', 'booking'] },
    { id: 'new-post', label: 'New post', section: 'Actions', icon: 'pencil', shortcut: 'N' },
  ]}
/>
```

`placeholder` defaults to "Search pages and actions". Show the shortcut somewhere visible, for example a [Kbd](../control/kbd.md) in the top bar.

## Plain CSS

```html
<div class="ds-modal-overlay">
  <section class="ds-modal ds-command" role="dialog" aria-label="Command palette">
    <div class="ds-command__search">
      <svg class="ds-icon" aria-hidden="true"><use href="sprite.svg#ds-search"/></svg>
      <input class="ds-command__input" type="search" aria-label="Search commands" placeholder="Search pages and actions">
      <kbd class="ds-kbd">Esc</kbd>
    </div>
    <div class="ds-listbox ds-command__results" role="listbox">
      <div class="ds-listbox__section"><div class="ds-listbox__header">Go to</div>
        <div class="ds-option" role="option"><svg class="ds-icon ds-icon--16" aria-hidden="true"><use href="sprite.svg#ds-chats"/></svg><span class="ds-option__text">Community</span></div>
      </div>
    </div>
    <footer class="ds-command__foot" aria-hidden="true"><span><kbd class="ds-kbd">↑</kbd><kbd class="ds-kbd">↓</kbd> to move</span><span><kbd class="ds-kbd">Enter</kbd> to open</span><span><kbd class="ds-kbd">Esc</kbd> to close</span></footer>
  </section>
</div>
```
