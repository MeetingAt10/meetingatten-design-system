---
title: Top Bar
description: 72px admin header with the workspace title and tools such as search and notifications.
react: TopBar
---
# Navigation / Top Bar

Desktop and tablet header, 72px high. At 768 the sidebar becomes top navigation.

## Figma source

| Component | Size (w x h) | Radius | Padding (t r b l) | Gap | Master fill |
|---|---|---|---|---|---|
| `ACCS 2026 / Navigation / Top Bar` | 1408 x 72 | 0 | 12 / 24 / 12 / 24 | 0 | `#FFFFFF` |

Variant axes:
- None (single component)

## Anatomy

| Part | Spec |
|---|---|
| Container | min-height 72, padding 12 / 24, `color/surface`, bottom border `color/border-subtle` |
| Title | `H4` 16/24 / 600: "College workspace" |
| Search | [Control / Search](../control/search.md) 280 x 44 |
| Notifications | [Icon Button](../control/icon-button.md) with `Icon / Bell` |

## Accessibility

- `<header>` landmark; search labelled; bell button exposes a name and, when there are updates, a text count.
- Notifications never expose record content (see Privacy rules in `docs/voice-and-tone.md`).

## React

```tsx
<TopBar title="College workspace" tools={<><Search label="Search community" /><IconButton icon="bell" label="Notifications" /></>} />
```

The title is the workspace name, not the page heading; keep the page's h1 in the content.

## Reference markup

Classes come from `dist/components.css`. Live light and dark demos: this component's page on the design system site (`site/`).

```html
<header class="ds-topbar"><h2 class="ds-topbar__title">College workspace</h2>
  <div class="ds-topbar__tools"><label class="ds-search"><svg class="ds-icon ds-icon--16" aria-hidden="true"><use href="#ds-search"/></svg><input type="search" placeholder="Search community" aria-label="Search community"></label>
  <button class="ds-icon-btn" aria-label="Notifications"><svg class="ds-icon ds-icon--20" aria-hidden="true"><use href="#ds-bell"/></svg></button></div></header>
```
