---
title: Stepper
description: Progress through a multi-step task; completed and upcoming steps are announced in text.
react: Stepper
---
# Navigation / Stepper

**NOT IN FIGMA** (repo-owned). 32px markers: upcoming `border-default` outline with the number, current `action-default` outline, completed `action-default` fill with a check; connectors follow. Under 600px only the current step's label shows.

## Accessibility

`aria-current="step"` on the current step; completed and upcoming steps carry hidden "(completed)" / "(not started)" text, so color is never the only signal.

## React

```tsx
<Stepper steps={["Topic", "Time", "Review", "Done"]} current={1} />
```

## Reference markup

```html
<nav aria-label="Progress"><ol class="ds-stepper"><li class="ds-step" data-state="complete">…</li><li class="ds-step" data-state="current" aria-current="step">…</li></ol></nav>
```
