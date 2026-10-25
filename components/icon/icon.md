---
title: Icon
description: Phosphor icons in currentColor, named from a curated vocabulary, with weights that carry meaning.
react: Icon
---
# Icon

Icons come from Phosphor (MIT). `<Icon name>` draws a glyph from the curated vocabulary of 80 names in `assets/icons/icons.json`; the plain-CSS layer uses the sprite built from the same list. Weight carries meaning: regular for UI, fill for the selected or current item, duotone for lane and category icons. Icons support words; they never carry status alone.

## When to use

- Use an icon beside a word to speed up scanning: navigation items, buttons, empty states.
- Use regular weight by default, fill for the selected or current item, and duotone for lane and category icons ([Tile](../content/tile.md), [TimeBlock](../scheduling/time-block.md)).
- Use a name from the vocabulary. For a glyph outside it, import the Phosphor component from `@meetingat10/design-system/icons` (or propose adding it to `icons.json`).
- Don't use an icon alone for an action; use [IconButton](../control/icon-button.md), which has a name and a tooltip.
- Don't use emoji or Unicode glyphs (arrows, check marks, crosses) as icons, and don't let an icon be the only sign of a status.

## Anatomy

| Part | Class | Notes |
|---|---|---|
| Glyph | `.ds-icon` | 20px, `fill: currentColor`, aligned to the text baseline |
| Sizes | `.ds-icon--16`, `--24`, `--32` | 16 in badges, small buttons and table cells; 20 default; 24 and 32 in large tiles and view states |
| Regular | `#ds-NAME`, `weight="regular"` | The UI default |
| Fill | `#ds-NAME-fill`, `weight="fill"` | The selected or current item; glyphs on solid blocks (alert, toast, privacy lock) |
| Duotone | `#ds-NAME-duotone`, `weight="duotone"` | Lane and category icons; the 20% layer reads as a highlighter |
| Vocabulary | `assets/icons/icons.json` | 80 ACCS names mapped to Phosphor files; builds `assets/icons/sprite.svg` (240 symbols) and the `ICONS` map |

Some vocabulary names differ from the Phosphor file they map to: `search` is `magnifying-glass`, `calendar` is `calendar-blank`, `users` is `users-three`. The live demo above shows every name in each weight; the [iconography guide](../../docs/iconography.md) lists them by group.

## States

| State | Looks | Set by |
|---|---|---|
| Regular | Outline glyph | `weight="regular"` (default), `#ds-NAME` |
| Fill | Solid glyph | `weight="fill"`, `#ds-NAME-fill` |
| Duotone | Outline plus a 20% layer | `weight="duotone"`, `#ds-NAME-duotone` |
| Bold | Heavier strokes; used only for check marks (selected option, done step, chosen slot) | `weight="bold"` (React only; the sprite has no bold symbols) |
| Decorative | Hidden from assistive tech | no `label`: `aria-hidden="true"` |
| Meaningful | Read as an image with a name | `label="..."`: `role="img"` and `aria-label` |

## Behavior and accessibility

- Icons are decorative by default (`aria-hidden="true"`, `focusable="false"`). Pass `label` only when the icon stands alone and means something; prefer visible text.
- Icons are not touch targets. Put actions in a control that is at least 24px, and 44px on touch screens.
- Color is `currentColor`, so an icon takes the color of its text. Status always has a word. The lock means "this is about privacy", not a security guarantee.
- `<Icon>` renders through Phosphor's server-safe entry, so it also works in React Server Components. Components from `@meetingat10/design-system/icons` use Phosphor's React context; render them in client components.
- No motion: icons do not animate on their own.
- Forced colors: glyphs follow the system text color.

## React

```tsx
import { Icon, ICONS, type IconName } from '@meetingat10/design-system/react';
import { RocketLaunchIcon } from '@meetingat10/design-system/icons';

<Icon name="calendar" />
<Icon name="house" weight="fill" />
<Icon name="chats" weight="duotone" size={24} />
<Icon name="lock" size={16} label="Restricted record" />
<Icon icon={RocketLaunchIcon} />

const vocabulary = Object.keys(ICONS) as IconName[];
```

`size` is 16, 20 (default), 24 or 32. `name` takes a vocabulary name; `icon` takes any Phosphor icon component and wins over `name`.

## Plain CSS

```html
<svg class="ds-icon" aria-hidden="true" focusable="false"><use href="sprite.svg#ds-calendar"/></svg>
<svg class="ds-icon" aria-hidden="true" focusable="false"><use href="sprite.svg#ds-house-fill"/></svg>
<svg class="ds-icon ds-icon--24" aria-hidden="true" focusable="false"><use href="sprite.svg#ds-chats-duotone"/></svg>
<svg class="ds-icon ds-icon--16" role="img" aria-label="Restricted record"><use href="sprite.svg#ds-lock"/></svg>
```

Copy `assets/icons/sprite.svg` from the package to your public folder (an external `<use>` file must come from the same origin), or inline the sprite once in the page and use `href="#ds-NAME"`.
