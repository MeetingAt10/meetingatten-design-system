# Accessibility checklist

Source: Figma 06.1-06.2. Target: **WCAG 2.2 AA, not certification.** Validate in context with real keyboard, assistive technology and browser zoom testing. Copy into the PR description; mark pass / fail / n/a.

## Release criteria (06.1)

| Criterion | Requirement | Pass |
|---|---|---|
| Contrast | 4.5:1 normal text; 3:1 large text (>= 24px regular or >= 18.66px bold), UI boundaries and meaningful graphics; all themes and states. `npm run check:contrast` passes | [ ] |
| Targets | 24px minimum (with WCAG exceptions); 44px+ recommended on mobile with 8px separation; the visible label is clickable | [ ] |
| Reflow | 320 CSS px viewport and 200% text enlargement without clipped labels or lost actions; no two-dimensional page scrolling | [ ] |
| Keyboard | Logical DOM order, skip link, visible and unobscured focus, no keyboard traps; reduced motion removes nonessential movement, never the state signal | [ ] |
| Settings | Layout copes with user text spacing, high contrast and forced-colors modes; tested at 200-400% zoom | [ ] |
| Color | No color-only status (words or symbols) | [ ] |

## Control-category expectations (06.2)

| Control category | Keyboard and focus | Screen reader and content | Pass |
|---|---|---|---|
| Buttons and links | Tab reaches each action; Enter activates; Space activates buttons | Native semantics, action-oriented name, disabled/busy state; links navigate, buttons act | [ ] |
| Inputs and textarea | Tab in logical order; preserve normal editing keys | Persistent label, hint and error associated; announce required/invalid; error summary links to fields | [ ] |
| Select / combobox | Native select preferred; arrows choose; Enter confirms; Escape closes | Announce expanded state, selected value and active option; do not intercept text editing | [ ] |
| Checkbox and radio | Space toggles checkbox; arrows move/select radio | `fieldset`/`legend` for groups; expose checked state; label includes the full choice meaning | [ ] |
| Tabs and navigation | Arrows within tabs; Tab enters panel; current link stays in sequence | Label tablist, tab and panel relations; expose selected tab and current page; drawer trigger exposes expanded state | [ ] |
| Calendar and slots | Keyboard date entry; arrows move within a documented grid | Announce full date, time zone, availability and selected state; a single slot uses a radio-group model | [ ] |
| Cards, chips and badges | Only actual actions receive focus; no ambiguous nested actions | Cards have headings; badges are text; status includes words or symbols | [ ] |
| Alerts, errors and toast | Keep focus unless recovery needs deliberate movement | Polite status for updates; assertive only for urgent errors; announce once, avoid duplicate live regions | [ ] |
| Modal and popover | Move focus inside modal; contain Tab; Escape closes when allowed | Dialog has name/description; background inert; return focus to trigger; do not trap focus in nonmodal content | [ ] |
| Tables and mobile records | Native table navigation; sort buttons expose sort state | Caption, column headers and row relationships; mobile records retain each field label and reading order | [ ] |
| Empty, loading and error | Keep retry reachable; do not reset the user's place | Mark busy region; skeletons decorative; meaningful empty state and nontechnical recovery action | [ ] |
| Timeline and privacy notice | Events read chronologically; policy text stays reachable | Ordered structure, explicit actor roles and dates; identity visibility not inferred from permission labels | [ ] |

## Errors and live regions

Explain what went wrong and how to fix it next to the field; retain entered values. On a failed submit provide a linked error summary and a deliberate focus destination. Distinguish network failure from validation failure. Do not announce every keystroke or skeleton update. Do not expose sensitive details in errors, analytics, URLs or live-region messages.

## High contrast (forced colors)

| Check | Pass |
|---|---|
| With Windows High Contrast (or DevTools: Rendering > Emulate forced-colors: active), keyboard focus is visible on every control | [ ] |
| Cards, dialogs, menus, toasts and tables keep a visible edge | [ ] |
| On/off, selected and current states stay distinguishable (switch, radio, selected day or page, current tab and nav item, progress) | [ ] |

## Restricted-report flows

| Check | Pass |
|---|---|
| Policy notice is durable and visible, not in a tooltip | [ ] |
| Submission stays disabled until scope and policy are confirmed (backend-enforced) | [ ] |
| No promise of anonymity, security, response time or finality | [ ] |
| Neutral notifications; no record content in subject lines, previews or titles | [ ] |
