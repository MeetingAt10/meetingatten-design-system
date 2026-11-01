---
title: Avatar
description: A person's photo or initials in a circle on a lane wash, alone or as an overlapping group with a count.
react: Avatar
---
# Avatar

An avatar shows a person's photo, or their initials on a highlighter wash, in a circle. It repeats a name for recognition; the name itself always appears in text nearby. A group overlaps a few avatars with a cutout ring and ends with a "+N" count.

## When to use

- Use it beside an author or participant name (posts, sidebars, record history).
- Use `AvatarGroup` for a short list of participants named once as a group.
- Use `decorative` when the name is printed right next to the avatar.
- Don't use it as a role, status or permission signal; use [Role Badge](../badge/role.md) for roles.
- Don't use photos or names of real students in examples. Use invented Filipino names.

## Anatomy

| Part | Class | Notes |
|---|---|---|
| Circle | `.ds-avatar` | 36px; schedule wash with navy initials in Plus Jakarta Sans 700 |
| Sizes | `.ds-avatar--24`, `--32`, `--48`, `--64` | 36px has no modifier |
| Lane washes | `.ds-avatar--community`, `--consult`, `--neutral` | Community and consult washes with lane ink; neutral wash with primary text |
| Photo | `img` | Covers the circle; `alt=""` because the avatar itself carries the name |
| Group | `.ds-avatar-group` | Avatars overlap by 8px with a 2px ring in `--ring-gap` (default `--ds-surface`) |
| Count | `.ds-avatar--more` | "+N" on the neutral wash, Inter 600 |

## States

| State | Looks | Set by |
|---|---|---|
| Initials | Up to two initials on the lane wash; text in parentheses is skipped | no `src` |
| Photo | The image fills the circle | `src` |
| Named | Announced as an image with the person's name | default (`role="img"`, `aria-label`) |
| Decorative | Hidden from assistive tech | `decorative` |

## Behavior and accessibility

- An avatar has no keyboard behavior.
- A group is one image named once, for example "Ana Santos, Ben Cruz, Cara Lim and 2 others"; its avatars and the count are hidden from assistive tech.
- The lane wash is decoration; it never means permission.
- Set `--ring-gap` on a parent to the ground color when a group sits on the canvas or another fill, so the cutout ring matches.
- Forced colors: the wash drops out; the initials stay as text.

## React

```tsx
import { Avatar, AvatarGroup, initials } from '@meetingat10/design-system/react';

<Avatar name="Ana Santos" size={24} />
<Avatar name="Ben Cruz" size={32} lane="community" />
<Avatar name="Cara Lim" lane="consult" />
<Avatar name="Paolo Dizon" decorative />
<AvatarGroup names={['Ana Santos', 'Ben Cruz', 'Cara Lim', 'Dan Reyes', 'Eve Tan']} max={3} />

initials('Ana Santos'); // "AS"
```

`size` defaults to 36 and `lane` to `schedule`. `AvatarGroup` takes `names`, `max` (default 3), `size` (default 32) and `lane`.

## Plain CSS

```html
<span class="ds-avatar" role="img" aria-label="Ana Santos">AS</span>
<span class="ds-avatar ds-avatar--48 ds-avatar--consult" role="img" aria-label="Cara Lim">CL</span>

<span class="ds-avatar-group" role="img" aria-label="Ana Santos, Ben Cruz, Cara Lim and 2 others">
  <span class="ds-avatar ds-avatar--32" aria-hidden="true">AS</span>
  <span class="ds-avatar ds-avatar--32" aria-hidden="true">BC</span>
  <span class="ds-avatar ds-avatar--32" aria-hidden="true">CL</span>
  <span class="ds-avatar ds-avatar--32 ds-avatar--more" aria-hidden="true">+2</span>
</span>
```
