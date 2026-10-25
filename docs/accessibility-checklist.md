# Accessibility checklist

A pass/fail list for every pull request: WCAG 2.2 AA as a target, not a certification claim. Copy it into the PR description and mark pass, fail or n/a.

Automated checks catch part of it: `npm test` runs axe on every component (0 violations expected), and the site is checked with axe in a real browser in light and dark. Keyboard, screen reader, zoom, reduced-motion and forced-colors checks stay manual.

## Release criteria

| Criterion | Requirement | Pass |
|---|---|---|
| Contrast | 4.5:1 text; 3:1 large text, control boundaries, focus ring, now-line and meaningful graphics, in both themes and every state. `npm run check:contrast` passes | [ ] |
| Targets | 24px minimum; 44px on coarse pointers; 8px between touch targets; visible labels are clickable | [ ] |
| Reflow | 320px wide and 200% text without clipped labels or lost actions; only tables and the timetable scroll sideways, inside their own region | [ ] |
| Keyboard | Logical order, skip link, visible and unobscured 2px focus ring, no traps | [ ] |
| Line forms | Every solid, dashed, hatched or struck state has a visible word or icon next to it | [ ] |
| Color | No color-only status, severity, availability or lane meaning | [ ] |
| Reduced motion | With `prefers-reduced-motion: reduce`, nothing travels or loops and every state still reads | [ ] |
| Forced colors | With forced colors on, focus, edges, current and selected states and indicators stay visible | [ ] |

## By component

| Component | Keyboard and focus | Screen reader and content | Pass |
|---|---|---|---|
| Buttons and links | Tab reaches each; Enter activates; Space activates buttons | Links navigate, buttons act; verb-and-object names; pending and disabled are exposed | [ ] |
| Text fields, selects, combobox, date picker | Normal editing keys work; arrows choose; Escape closes lists | Persistent label, description and error are associated; required and invalid announced; entered text kept | [ ] |
| Checkbox, radio, switch | Space toggles; arrows move within a radio group | Groups have a label; the label states the full choice | [ ] |
| Segmented control, tag group | Arrows move between options or tags; Delete removes a removable tag | Group named; selected option and removals announced | [ ] |
| Tabs, navigation, breadcrumbs, pagination | Arrows within tabs; Tab enters the panel; current link stays in order | Selected tab, current page (`aria-current`) and landmarks named | [ ] |
| Menu and command palette | Arrows move, Enter chooses, Escape closes and returns focus; Ctrl or Cmd+K opens the palette | Items named; destructive items say so; every palette item also exists in visible navigation | [ ] |
| Calendar and consultation slots | Arrows move by day; slots form one radio group; day strip arrows move and Space chooses | Full date, time zone, availability and selected state announced; booked and unavailable slots say so in words | [ ] |
| Timetable and time blocks | Interactive blocks reachable by Tab; taken and disabled blocks are not | Day columns named with the full date; blocks named with time, title and state; hour rules and the now-line are decoration, and the current time appears in text where it matters | [ ] |
| Cards, badges, tiles | Only real actions take focus; a linked card has one link (its title) | Cards have headings; badges are text with a marker; decorative tiles hidden | [ ] |
| Alerts, toasts, view states | Focus stays put unless recovery needs it; F6 reaches the toast region | Polite status for updates, alert only for urgent errors; errors never live only in a toast | [ ] |
| Modal, drawer, popover, tooltip | Focus moves in and is contained in modals; Escape closes; focus returns to the trigger | Dialog named by its title; tooltips repeat a visible or accessible name and hold nothing interactive; a swipeable sheet also has a close button | [ ] |
| Disclosure and accordion | Enter or Space toggles; the trigger is inside a heading | Expanded state exposed | [ ] |
| Tables and report records | Wide tables are focusable regions; sort buttons work by keyboard | Caption, column headers and row headers; sort state announced; selection also stated in words; records keep each field label | [ ] |
| Progress, meter, spinner, skeleton | Not focusable | Progress and meter named and valued ("5 of 8"); loading regions `aria-busy`; skeletons hidden; loading announced once in text | [ ] |
| Case timeline and privacy notice | Events read in order; policy text reachable | Actor roles and dates explicit; identity visibility never inferred from permission labels | [ ] |

## Reduced motion

Emulate it (DevTools, Rendering, "prefers-reduced-motion: reduce") and check:

| Check | Pass |
|---|---|
| Blocks do not drop or glide; the timetable layout does not animate | [ ] |
| The now-line jumps instead of gliding; highlights and slot fills appear at once | [ ] |
| The spinner hand rests and the pending line, skeleton pulse and toast timer do not loop; the words still say "Saving", "Loading" | [ ] |
| Toasts and the bottom sheet close with their buttons (no swipe needed) | [ ] |
| Progress and meter values change without rolling digits | [ ] |

## Forced colors

Emulate it (DevTools, Rendering, "forced-colors: active") or use Windows High Contrast:

| Check | Pass |
|---|---|
| A 2px `Highlight` focus outline on every control | [ ] |
| Cards, sheets, the timetable, tables, dialogs, popovers, toasts, blocks, slots and badges keep a visible edge | [ ] |
| Pending blocks and the drop zone show dashed edges; taken, booked and restricted ones dotted edges | [ ] |
| Current nav item, current page, selected day, slot, block, option and table row take `Highlight` | [ ] |
| Tab, segment and day indicators, progress and meter fills, the now-line and the toast timer stay visible | [ ] |
| Switch, checkbox and radio states read; disabled controls use `GrayText` | [ ] |
| States drawn only with fills or background images (highlights, hatching, severity bars) also carry words | [ ] |

## Errors and live regions

Say what went wrong and how to fix it next to the field, and keep the entered values. On a failed submit, give a linked error summary and a deliberate focus target. Tell network failures apart from validation failures. Do not announce every keystroke or skeleton update. Never put sensitive details in errors, analytics, URLs or live-region messages.

## Restricted-report flows

| Check | Pass |
|---|---|
| The privacy notice is on the page, not in a tooltip | [ ] |
| Submission stays disabled until scope and policy are confirmed (enforced on the backend) | [ ] |
| No promise of anonymity, security, response time or finality | [ ] |
| Neutral notifications; no record content in subject lines, previews, titles or search | [ ] |
| The restricted lane is hatched and labeled in words, never signaled by color | [ ] |
