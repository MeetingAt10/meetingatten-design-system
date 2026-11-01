---
title: Role Badge
description: An outlined plate naming a person's role, such as Student or Faculty; never a permission, privacy or status signal.
react: RoleBadge
---
# Role Badge

A role badge names what someone is in the college: "Student", "Faculty", "Department staff". It is the door plate drawn as a rule: no fill, a 1px plate-colored ring and navy text. A role is not a permission or privacy signal.

## When to use

- Use it beside a person's name: the sidebar footer, a post author, the role on a record's activity.
- Keep the word short and factual.
- Don't use it to imply access ("Reviewer" does not mean someone can open a record), confidentiality or status.
- Don't style roles as status or severity, and don't add a marker.

## Anatomy

| Part | Class | Notes |
|---|---|---|
| Plate | `.ds-badge.ds-badge--role` | 24px tall, radius 4, 8px padding, no fill, 1px inset ring in `plate-bg`, `action-default` text, caption size at weight 600 |

## States

| State | Looks | Set by |
|---|---|---|
| Default | Outlined plate with navy text | none |
| Dark theme | The ring and text switch to the pale-blue plate and action colors | `data-theme="dark"` |

There is no hover, focus or selected state: a role badge is not interactive.

## Behavior and accessibility

- Plain text in a `span`: no role and no focus. Screen readers read the word.
- Put it next to the person's name; it describes the person, not what they can open.
- Write permission in words elsewhere, for example a sidebar note: "Own reports only".
- No motion.
- Forced colors: the plate keeps a `CanvasText` edge.

## React

```tsx
import { RoleBadge } from '@meetingat10/design-system/react';

<RoleBadge>Student</RoleBadge>
<RoleBadge>Faculty</RoleBadge>
<RoleBadge>Department staff</RoleBadge>
```

`RoleBadge` takes only `children` and `className`.

## Plain CSS

```html
<span class="ds-badge ds-badge--role">Student</span>
<span class="ds-badge ds-badge--role">Faculty</span>
```
