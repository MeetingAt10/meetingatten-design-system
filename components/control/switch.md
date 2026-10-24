---
title: Switch
description: On/off setting that takes effect immediately.
react: Switch
---
# Control / Switch

**NOT IN FIGMA** (repo-owned). 40x24 track (fully rounded, the one place a pill shape is used), 16px thumb; off: `surface` track with `border-default` boundary and thumb; on: `action-default` track, `on-action` thumb. Boundaries meet 3:1 in both themes. Row height 44px.

## Usage

Use for settings that apply at once (notifications, display preferences). Inside a form that is submitted, use Checkbox.

## Accessibility

`role="switch"` with `aria-checked`; Space toggles. The visible text is the name; do not change the label when toggled.

## React

```tsx
<Switch defaultSelected>Email updates</Switch>
```

## Reference markup

```html
<label class="ds-switch is-checked"><input type="checkbox" role="switch" checked><span class="ds-switch__track" aria-hidden="true"></span>Email updates</label>
```
