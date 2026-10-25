# Iconography

Phosphor icons in `currentColor`, where the weight carries meaning: regular for UI, fill for selected or current, duotone for lane and category icons.

The React layer uses `@phosphor-icons/react` (2.1.10). The plain-CSS layer uses a sprite built from the same glyphs. Both draw from one curated vocabulary in `assets/icons/icons.json`.

## Weights

| Weight | Means | Where |
|---|---|---|
| `regular` (default) | Interface | Buttons, fields, menus, tabs, table sort |
| `fill` | Selected or current | Current nav item, alert and toast icons, field errors, the privacy lock, a selected time block's check |
| `duotone` | Lane or category | [Tile](../components/content/tile.md) (default), time block icons; the 20% layer reads as a highlighter |
| `bold` | Check marks only | The check in a selected option, a done step and a chosen slot, where it must read at 16px |

## Sizes

| Size | Class | Use |
|---|---|---|
| 16px | `.ds-icon--16` | Inline with text, badges, options, small buttons |
| 20px | `.ds-icon` (default) | Buttons, nav items, fields |
| 24px | `.ds-icon--24` | Medium icon buttons, the drop zone |
| 32px | `.ds-icon--32` | Large tiles and view states |

## React

```tsx
import { Icon } from '@meetingat10/design-system/react';
import { RocketLaunchIcon } from '@meetingat10/design-system/icons';

<Icon name="calendar" />
<Icon name="house" weight="fill" />
<Icon name="lock" size={16} label="Restricted" />
<Icon icon={RocketLaunchIcon} weight="duotone" />
```

- `name` takes a vocabulary name; `icon` takes any Phosphor component for glyphs outside it.
- Without `label` the icon is hidden from assistive tech (`aria-hidden`); with `label` it gets `role="img"` and that name.
- `<Icon name>` renders through Phosphor's server entry, so it also works in React Server Components. The full set at `@meetingat10/design-system/icons` re-exports Phosphor's standard entry, which reads React context: use those components in client components.
- `ICONS` (exported) maps every vocabulary name to its component.

## Plain CSS

The sprite `assets/icons/sprite.svg` has three symbols per name: `ds-NAME`, `ds-NAME-fill` and `ds-NAME-duotone` (256 x 256 view box, `currentColor`).

```html
<svg class="ds-icon" aria-hidden="true"><use href="sprite.svg#ds-calendar"/></svg>
<svg class="ds-icon" aria-hidden="true"><use href="sprite.svg#ds-house-fill"/></svg>
<svg class="ds-icon ds-icon--32" aria-hidden="true"><use href="sprite.svg#ds-chats-duotone"/></svg>
```

`<use>` only loads a sprite from the same origin. Copy `node_modules/@meetingat10/design-system/assets/icons/sprite.svg` into the app's public folder, or inline the sprite in the page and reference `#ds-calendar`.

## Vocabulary

Name, then the Phosphor glyph where it differs.

| Group | Names |
|---|---|
| Arrows and carets | `arrow-left`, `arrow-right`, `arrow-up-right`, `arrow-square-out`, `arrows-down-up`, `caret-down`, `caret-up`, `caret-left`, `caret-right`, `caret-up-down` |
| Actions | `plus`, `minus`, `pencil` (pencil-simple), `note` (note-pencil), `copy`, `trash`, `download` (download-simple), `upload` (upload-simple), `link` (link-simple), `paperclip`, `funnel` (funnel-simple), `search` (magnifying-glass), `x`, `x-circle`, `dots-three`, `list`, `list-checks`, `sort-ascending`, `sort-descending`, `push-pin`, `highlighter`, `archive` |
| Status | `check`, `check-circle`, `info`, `warning`, `warning-circle`, `question`, `flag`, `prohibit`, `circle-dashed`, `hourglass` (hourglass-medium) |
| Time and place | `calendar` (calendar-blank), `calendar-check`, `calendar-dots`, `clock`, `timer`, `map-pin`, `door` |
| Community and support | `chat` (chat-circle-text), `chats` (chats-circle), `megaphone` (megaphone-simple), `chalkboard` (chalkboard-teacher), `hand-heart`, `envelope` (envelope-simple), `bell` |
| People and study | `user`, `users` (users-three), `student`, `graduation-cap`, `books`, `notepad` |
| Files and privacy | `file` (file-text), `tray`, `lock` (lock-simple), `lock-open` (lock-simple-open), `eye`, `eye-slash` |
| App and system | `house`, `gear` (gear-six), `sign-in`, `sign-out`, `desktop`, `sun`, `moon`, `command`, `keyboard`, `code`, `git-branch`, `rocket` (rocket-launch) |

## Rules

| Rule | Detail |
|---|---|
| Words first | Pair unfamiliar icons with visible text; tooltips supplement a name, they never replace one |
| Icon-only controls | Always named: [IconButton](../components/control/icon-button.md) requires `label` |
| Decorative | Hidden from assistive tech |
| Status | A glyph plus a word, never color alone |
| No emoji, no Unicode glyphs | Never use characters such as check marks, crosses or arrows as icons; use the vocabulary |
| Color | `currentColor` only |
| Targets | An icon is not a touch target; wrap it in a 40px control (44px on touch) |
| Meaning | The lock marks a privacy topic, not a security or anonymity guarantee |

## Adding an icon

Add `"name": "phosphor-file-name"` to `assets/icons/icons.json` and run `npm run build`. The build regenerates `assets/icons/sprite.svg` (all three weights) and `src/react/icon/icons.ts`; commit both. Use Phosphor only; no second icon set.
