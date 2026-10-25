---
title: Link
description: Navigation in text or on its own, with an underline that thickens on hover and an arrow that steps forward on standalone links.
react: Link
---
# Link

A link takes people somewhere else: another page, a section, an outside site. Links navigate and buttons act. Inline links sit in running text with a 1px underline; standalone links ("Read update") stand alone with an arrow.

## When to use

- Use `inline` (default) inside sentences.
- Use `standalone` for a single next step under a block of content.
- Use `quiet` in dense lists where the underline would be noise (it still underlines on hover).
- Use `external` for links that open a new tab; they say so.
- Don't use a link to run an action on the page; use [Button](../control/button.md).

## Anatomy

| Part | Class | Notes |
|---|---|---|
| Link | `.ds-link` | `action-default` text, weight 500, 1px underline at 0.22em offset |
| Standalone | `.ds-link--standalone` | Weight 600, no underline at rest, trailing 16px icon |
| Quiet | `.ds-link--quiet` | Inherits the text color; underline in `border-default` |
| Icon | `.ds-icon.ds-icon--16` | `arrow-right` by default, `arrow-up-right` for external links |

Plain `<a>` without a class inside `.ds-body` gets the inline link look from the base styles.

## States

| State | Looks | Set by |
|---|---|---|
| Default | Underlined navy text (standalone: no underline) | none |
| Hover | Underline thickens to 2px; standalone shows a 1px underline and the arrow steps 3px forward | `:hover`, `[data-hovered]`, `.is-hover` |
| Focus | 2px focus ring with a 2px gap | `:focus-visible` |
| Disabled | Disabled text, dashed underline | `isDisabled`, `[aria-disabled="true"]`, `[data-disabled]` |

## Behavior and accessibility

- React Aria `Link`: Enter follows the link; with [DesignSystemProvider](../../README.md) `navigate`, it routes on the client.
- The text names the destination ("Privacy and access", not "click here").
- `external` adds `target="_blank"`, `rel="noreferrer"` and visually hidden text "(opens in a new tab)".
- Reduced motion: the arrow step lands at once.
- Forced colors: links use the system link color; disabled links use `GrayText`.

## React

```tsx
import { Link } from '@meetingat10/design-system/react';

<p>Read the <Link href="/privacy">privacy and access notes</Link> before posting.</p>
<Link href="/announcements/12" variant="standalone">Read update</Link>
<Link href="/reset" variant="quiet">Forgot password?</Link>
<Link href="https://example.org/handbook" external>CCS handbook (sample)</Link>
```

`icon` swaps the trailing icon for standalone or external links. Other React Aria `Link` props pass through.

## Plain CSS

```html
<a class="ds-link" href="/privacy">Privacy and access</a>
<a class="ds-link ds-link--standalone" href="/announcements/12">Read update<svg class="ds-icon ds-icon--16" aria-hidden="true"><use href="sprite.svg#ds-arrow-right"/></svg></a>
<a class="ds-link" href="https://example.org/handbook" target="_blank" rel="noreferrer">CCS handbook<span class="ds-visually-hidden"> (opens in a new tab)</span><svg class="ds-icon ds-icon--16" aria-hidden="true"><use href="sprite.svg#ds-arrow-up-right"/></svg></a>
```
