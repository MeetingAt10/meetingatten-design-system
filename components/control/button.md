---
title: Button
description: Four intents (primary, secondary, tertiary, destructive) with hover, pressed, focus, disabled and loading states.
react: Button
---
# Control / Button

Four intents x six states. Default control size 48px. Read across: state. Read down: intent. Errors never live on the button; persistent adjacent alerts carry them.

## Figma source

| Component | Size (w x h) | Radius | Padding (t r b l) | Gap | Master fill |
|---|---|---|---|---|---|
| `ACCS 2026 / Control / Button Primary` | 224 x 48 | 6 | 0 / 16 / 0 / 16 | 8 | `#032E87` |
| `ACCS 2026 / Control / Button Secondary` | 224 x 48 | 6 | 0 / 16 / 0 / 16 | 8 | `#FFFFFF` |
| `ACCS 2026 / Control / Button Tertiary` | 224 x 48 | 6 | 0 / 16 / 0 / 16 | 8 | - |
| `ACCS 2026 / Control / Button Destructive` | 224 x 48 | 6 | 0 / 16 / 0 / 16 | 8 | `#B42318` |

Variant axes:
- **Control / Button Primary** State: Default / Hover / Pressed / Focus / Disabled / Loading (6 variants)
- **Control / Button Secondary** State: Default / Hover / Pressed / Focus / Disabled / Loading (6 variants)
- **Control / Button Tertiary** State: Default / Hover / Pressed / Focus / Disabled / Loading (6 variants)
- **Control / Button Destructive** State: Default / Hover / Pressed / Focus / Disabled / Loading (6 variants)

## Anatomy

| Part | Spec |
|---|---|
| Container | height 48, padding 0 / 16, gap 8, radius 6 (`radius/6`), label style `Label` 14/20 / 600 |
| Spinner | 16px, `currentColor`, shown only in Loading |
| Mobile | keep at least 44px; full-width on 390px and below |

## Intent x state (tokens)

| State | Treatment (tokens) |
|---|---|
| **Primary** default / hover / pressed | `color/action/default` / `action/hover` / `action/pressed` fill, `color/on-action` text |
| **Secondary** default | `color/surface` fill, `color/action/default` text, 1px `color/border-default` |
| **Secondary** hover / pressed | `color/info/bg` fill; pressed adds `color/border-strong` 2px edge |
| **Tertiary** default / hover / pressed | transparent; `color/info/bg` on hover and pressed; text `color/action/default` |
| **Destructive** default / hover / pressed | `color/danger/action` / `action-hover` / `action-pressed` fill, `color/danger/on-action` text |
| Focus (all) | 3px `color/focus` ring, 2px gap in surface color |
| Disabled (all) | `color/disabled/bg`, `color/disabled/fg`, 1px `color/border-subtle` |
| Loading (all) | intent fill kept, label "Loading…" + spinner, `aria-busy="true"` |

## Figma copy

Primary "Continue"; Secondary "Cancel"; Tertiary "Learn more"; Destructive "Remove draft"; Loading "Loading…". Product examples: "Browse community", "Review sample selection", "Keep draft", "Discard draft", "Try again".

## Usage (from the Figma frames)

- One primary action per task region.
- Reserve destructive intent for actual removal, not ordinary navigation.
- A destructive confirmation must name the object and explain whether the action is reversible.
- Loading prevents repeat activation; disabled controls remain labeled and explain why where the reason is not obvious.

## Accessibility

- Native `<button>` for actions, `<a>` for navigation: links navigate, buttons act. Enter and Space activate buttons.
- Action-oriented accessible name; expose disabled and busy state (`disabled` or `aria-disabled`, `aria-busy`).
- Visible focus ring: 3px `color/focus` with a 2px surface-colored gap; never remove it on keyboard input and keep it unobscured by sticky chrome.

## React

```tsx
import { Button } from "@meetingat10/design-system/react";

<Button onPress={save}>Continue</Button>
<Button variant="secondary">Cancel</Button>
<Button variant="destructive" onPress={remove}>Remove draft</Button>
<Button loading>Loading…</Button>
<Button isDisabled>Continue</Button>
<Button size="sm" block>Review sample selection</Button>
```

React Aria `Button` underneath: Enter/Space activation, `data-hovered` / `data-pressed` / `data-focus-visible` / `data-disabled` for the CSS states. `loading` sets React Aria's pending state (announced, still focusable, repeat presses blocked) and shows the spinner.

## Reference markup

Classes come from `dist/components.css`. Live matrices: `preview/index.html`.

```html
<button class="ds-btn ds-btn--primary">Continue</button>
<button class="ds-btn ds-btn--secondary">Cancel</button>
<button class="ds-btn ds-btn--tertiary">Learn more</button>
<button class="ds-btn ds-btn--destructive">Remove draft</button>
<button class="ds-btn ds-btn--primary" aria-busy="true"><span class="ds-spinner"></span>Loading…</button>
<button class="ds-btn ds-btn--primary" disabled>Continue</button>
```
