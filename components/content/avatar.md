---
title: Avatar
description: Person's initials or photo in a 24, 32 or 40px circle.
react: Avatar
---
# Content / Avatar

**NOT IN FIGMA** (repo-owned). Identifies the author of a post or the person in a consultation. Never a role, permission or privacy signal.

## Anatomy

| Part | Spec |
|---|---|
| Container | circle; `sm` 24px (Caption), `md` 32px (Label), `lg` 40px |
| Initials | first letters of the first two words, `info-fg` on `info-bg` (contrast-checked) |
| Photo | `object-fit: cover` |

## Accessibility

The name is the accessible name (`alt` on photos, `role="img"` + `aria-label` on initials). Use synthetic names in demos.

## React

```tsx
<Avatar name="Demo Learner" />
<Avatar name="Demo Adviser" src="/demo/adviser.jpg" size="lg" />
```

## Reference markup

```html
<span class="ds-avatar" role="img" aria-label="Demo Learner">DL</span>
```
