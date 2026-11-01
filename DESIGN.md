---
name: "@meetingat10/design-system"
description: "The faculty door, rebuilt as an interface: one package of tokens, CSS and React components for the ACCS landing, the ACCS portal and admin, and Meeting At 10."
colors:
  action-default: "#032E87"
  action-hover: "#022568"
  action-pressed: "#011B4F"
  on-action: "#FFFFFF"
  focus: "#2F5BEA"
  plate-bg: "#032E87"
  plate-fg: "#FFFFFF"
  highlight-schedule: "#EAF0FF"
  info-bg: "#EAF0FF"
  secondary-default: "#0A7A55"
  secondary-hover: "#075C41"
  secondary-fg: "#075C41"
  secondary-bg: "#E6F5EE"
  highlight-consult: "#CDEBDD"
  accent-default: "#9A5008"
  accent-hover: "#7C3F06"
  accent-fg: "#7C3F06"
  accent-bg: "#FCF1DF"
  highlight-community: "#F8E3BC"
  canvas: "#F7F6F1"
  surface: "#FFFFFF"
  text-primary: "#0C1730"
  text-secondary: "#4A5570"
  border-subtle: "#E4E1D6"
  border-default: "#6B7590"
  border-strong: "#4A5570"
  hatch-ink: "#6B7590"
  highlight-neutral: "#EFEDE5"
  disabled-bg: "#EFEDE5"
  disabled-fg: "#4A5570"
  inverse-bg: "#0C1730"
  inverse-fg: "#F7F6F1"
  now: "#B42318"
  danger-fg: "#B42318"
  danger-bg: "#FEF3F2"
  danger-action: "#B42318"
  danger-action-hover: "#9C1F16"
  success-fg: "#0A6B49"
  success-bg: "#E6F5EE"
  warning-fg: "#8A4B06"
  warning-bg: "#FFF6E0"
  highlight-mark: "#F5C451"
typography:
  display:
    fontFamily: "Plus Jakarta Sans Variable, Plus Jakarta Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 1.3rem + 3.6vw, 5rem)"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-0.032em"
  h1:
    fontFamily: "Plus Jakarta Sans Variable, Plus Jakarta Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2rem, 1.45rem + 1.5vw, 2.75rem)"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.03em"
  h2:
    fontFamily: "Plus Jakarta Sans Variable, Plus Jakarta Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 1.3rem + 0.6vw, 1.875rem)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.025em"
  h3:
    fontFamily: "Plus Jakarta Sans Variable, Plus Jakarta Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "-0.015em"
  h4:
    fontFamily: "Plus Jakarta Sans Variable, Plus Jakarta Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "-0.01em"
  body-large:
    fontFamily: "Inter Variable, Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0em"
  body:
    fontFamily: "Inter Variable, Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: "0em"
  body-small:
    fontFamily: "Inter Variable, Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.5714
    letterSpacing: "0em"
  label:
    fontFamily: "Inter Variable, Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.4286
    letterSpacing: "-0.005em"
  caption:
    fontFamily: "Inter Variable, Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.3333
    letterSpacing: "0em"
  code:
    fontFamily: "JetBrains Mono Variable, JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.5385
    letterSpacing: "0em"
  time:
    fontFamily: "JetBrains Mono Variable, JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.3333
    letterSpacing: "0.01em"
    fontFeature: "'tnum' 1, 'zero' 1"
rounded:
  tick: "4px"
  block: "8px"
  control: "10px"
  plate: "10px"
  sheet: "16px"
  overlay: "20px"
  frame: "24px"
  chip: "9999px"
  full: "9999px"
spacing:
  "2": "2px"
  "4": "4px"
  "8": "8px"
  "12": "12px"
  "16": "16px"
  "20": "20px"
  "24": "24px"
  "32": "32px"
  "40": "40px"
  "48": "48px"
  "64": "64px"
  "96": "96px"
components:
  button-primary:
    backgroundColor: "{colors.action-default}"
    textColor: "{colors.on-action}"
    rounded: "{rounded.control}"
    padding: "0 20px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.action-hover}"
  button-primary-active:
    backgroundColor: "{colors.action-pressed}"
  button-primary-disabled:
    backgroundColor: "{colors.disabled-bg}"
    textColor: "{colors.disabled-fg}"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.control}"
    padding: "0 20px"
    height: "48px"
  button-secondary-hover:
    backgroundColor: "{colors.highlight-schedule}"
  button-tertiary:
    textColor: "{colors.action-default}"
    rounded: "{rounded.control}"
    padding: "0 12px"
    height: "48px"
  button-tertiary-hover:
    backgroundColor: "{colors.highlight-schedule}"
  button-destructive:
    backgroundColor: "{colors.danger-action}"
    textColor: "{colors.on-action}"
    rounded: "{rounded.control}"
    padding: "0 20px"
    height: "48px"
  button-destructive-hover:
    backgroundColor: "{colors.danger-action-hover}"
  button-plate:
    backgroundColor: "{colors.plate-fg}"
    textColor: "{colors.plate-bg}"
    rounded: "{rounded.control}"
    padding: "0 20px"
    height: "48px"
  icon-button:
    textColor: "{colors.text-secondary}"
    rounded: "{rounded.control}"
    size: "40px"
  icon-button-hover:
    backgroundColor: "{colors.highlight-neutral}"
    textColor: "{colors.text-primary}"
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-primary}"
    typography: "{typography.body}"
    rounded: "{rounded.control}"
    padding: "0 16px"
    height: "48px"
  input-disabled:
    backgroundColor: "{colors.disabled-bg}"
    textColor: "{colors.disabled-fg}"
  block-schedule:
    backgroundColor: "{colors.action-default}"
    textColor: "{colors.on-action}"
    typography: "{typography.body-small}"
    rounded: "{rounded.block}"
    padding: "8px 12px"
  block-community:
    backgroundColor: "{colors.accent-default}"
    textColor: "{colors.on-action}"
  block-consult:
    backgroundColor: "{colors.secondary-default}"
    textColor: "{colors.on-action}"
  block-restricted:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-primary}"
  slot-open:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.secondary-fg}"
    rounded: "{rounded.block}"
    padding: "8px 12px"
  slot-chosen:
    backgroundColor: "{colors.secondary-default}"
    textColor: "{colors.on-action}"
  door-plate:
    backgroundColor: "{colors.plate-bg}"
    textColor: "{colors.plate-fg}"
    rounded: "{rounded.plate}"
    padding: "0 12px"
    height: "32px"
  door-plate-lg:
    padding: "0 16px"
    height: "48px"
  now-label:
    backgroundColor: "{colors.now}"
    textColor: "{colors.on-action}"
    rounded: "{rounded.chip}"
    padding: "1px 4px"
  nav-item:
    textColor: "{colors.text-secondary}"
    rounded: "{rounded.control}"
    padding: "0 12px"
    height: "40px"
  nav-item-hover:
    backgroundColor: "{colors.highlight-neutral}"
    textColor: "{colors.text-primary}"
  nav-item-current:
    backgroundColor: "{colors.action-default}"
    textColor: "{colors.on-action}"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.sheet}"
    padding: "20px"
  lane-chip:
    backgroundColor: "{colors.action-default}"
    textColor: "{colors.on-action}"
    rounded: "{rounded.chip}"
    padding: "0 8px"
    height: "22px"
  badge-status:
    backgroundColor: "{colors.highlight-neutral}"
    textColor: "{colors.text-primary}"
    typography: "{typography.caption}"
    rounded: "{rounded.chip}"
    padding: "0 8px"
    height: "24px"
  badge-role:
    textColor: "{colors.action-default}"
    rounded: "{rounded.chip}"
    padding: "0 8px"
    height: "24px"
  tag:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.block}"
    padding: "0 12px"
    height: "30px"
  tag-selected:
    backgroundColor: "{colors.highlight-schedule}"
    textColor: "{colors.action-default}"
  alert-info:
    backgroundColor: "{colors.info-bg}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.control}"
    padding: "12px 16px"
  toast:
    backgroundColor: "{colors.inverse-bg}"
    textColor: "{colors.inverse-fg}"
    rounded: "{rounded.sheet}"
    padding: "12px 8px 16px 16px"
  tooltip:
    backgroundColor: "{colors.inverse-bg}"
    textColor: "{colors.inverse-fg}"
    rounded: "{rounded.block}"
    padding: "4px 8px"
  modal:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.overlay}"
    width: "32rem"
  timetable:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.sheet}"
---

# Design System: @meetingat10/design-system

## Overview

**Creative North Star: "Office Hours"**

The system is the weekly consultation timetable taped to a faculty door in the College of Computer Studies, rebuilt as an interface. Every surface it serves (the ACCS landing, the ACCS portal and admin, the Meeting At 10 site and the showcase docs) is a paper-white sheet on a warm ivory canvas, ruled with hairlines that form real time grids, and its content arrives as blocks placed in time. A block's lane color owns its whole fill: navy for the schedule and for action, amber for community, emerald for consultations. The fourth lane, restricted reports, has no hue. It is hatched ink with words, drawn into the grid where everyone can see where the boundary runs.

The voice is structured and calm, and it reads at a glance. Plus Jakarta Sans at 800 with tight tracking gives headings the weight of a painted name plate, Inter carries reading and interface text, and JetBrains Mono appears only where a clock or a filing system would print. State is drawn as line form: a solid edge is open, a dashed edge is pending, hatching is taken or restricted, a strike is closed, and a word always comes with the line. The page you are on becomes a solid navy block. The present moment is a red line with the time on a small plate.

Cards and sheets rest on a hairline ring with soft navy-tinted layers; blocks being handled and overlays floating above the page deepen them, and translucent glass is used only where content floats over content (the sticky navbar and top bar, overlays and popovers), with a solid fallback. Motion is quick and physical: 120ms color changes, critically damped springs for anything that slides along a rule, overlays that fade, scale and rise on an exponential ease-out, and under reduced motion every state lands at once. The system must never feel playful or gamified, like a generic SaaS template, cold or bureaucratic, or slowed down by motion.

**The expressive layer.** The marketing surfaces (the ACCS landing, the Meeting At 10 site and the showcase) may add a slower, richer layer on top of the same world: headlines that rise word by word, sections that ease in on scroll, a faint aurora of cobalt, amber and emerald over the ruled time grid, and 3D glass renders floating beside the product in a constellation that follows the pointer. It is built from the same tokens (new durations, an emphasized ease, a reveal and a float distance, and an art shadow), lives in its own CSS and React files, is never used inside portal workflows, keeps content visible by default, and stops entirely under reduced motion. The renders are decoration, never a logo, a seal or a lane signal.

**Key Characteristics:**
- Paper-white sheets (12px corners, 1px hairline) on a cool canvas, flat at rest.
- Blocks placed in time: solid lane fills, 6px corners, a tabular mono time code on top.
- Three hued lanes and one unhued lane: navy schedule, amber community, emerald consultations, hatched restricted reports.
- State drawn in line form (solid, dashed, hatched, struck), always with a word.
- The Meeting At 10 calendar as the system's logo: a navy calendar whose paper page holds a blue appointment block with a white 10; in dark, a light frame around a navy page.
- The door plate as the ACCS wordmark: a navy name plate lettered in white Plus Jakarta Sans 800.
- A red now-line marks the present on every time grid.
- Light and dark themes with an OS fallback, comfortable and compact density, and every state kept visible under forced colors and reduced motion.

## Colors

The pinned ACCS palette (54 primitives) drives two semantic themes in which hue marks a lane, never a permission. Product code reads only the semantic and treatment tokens: each frontmatter key is a token name, written in code as `var(--ds-<key>)`, and the token check rejects raw hex in `src/` and `site/`. The values below are the light theme, the `:root` default.

### Primary
- **Door Plate Navy** (#032E87): the schedule lane and the color of action: primary buttons, the current navigation item, the chosen day, the current page number, checked boxes and switches, the door plate and the door-plate band (`plate-bg` shares the value). Text on it is white (#FFFFFF).
- **Pressed Navy** (#022568) and **Midnight Navy** (#011B4F): the hover and pressed steps of every solid navy control.
- **Cobalt Focus** (#2F5BEA): the 2px focus ring, the edge and halo of a focused input, the caret, and the sliding tab indicator.
- **Schedule Highlighter** (#EAF0FF): the navy wash for hovering options, rows and radio cards, for selected tags and for today's column; the info tint behind info alerts and badges (`info-bg`) shares the value.

### Secondary
- **Consultation Emerald** (#0A7A55): consultation and support blocks, open-slot edges, the chosen slot's fill, consult lane chips and tiles, and the meter's default fill. Text on it is white.
- **Deep Emerald** (#075C41): hover on emerald fills, and emerald text on paper such as an open slot's words.
- **Emerald Highlighter** (#CDEBDD) and **Emerald Tint** (#E6F5EE): the consult wash and the ground of consult badges.

### Tertiary
- **Community Amber** (#9A5008): community blocks, lane chips and tiles. Text on it is white. (#B25E09 is the brand amber, used for large display accents.)
- **Deep Amber** (#7C3F06): hover on amber fills, and amber text on paper.
- **Amber Highlighter** (#F8E3BC) and **Amber Tint** (#FCF1DF): the community wash and the ground of community badges.

### Neutral
- **Ivory Canvas** (#F7F6F1): the page ground behind every sheet, and the ground of the top bar and navbar (which turn translucent glass when sticky). The alternate band is #EFEDE5.
- **Paper** (#FFFFFF) and **Raised Paper** (#FDFCF9): sheets, cards, inputs, open and taken blocks, and overlays in light.
- **Navy Ink** (#0C1730): primary text, and the ink sheet behind toasts and tooltips, which carries Ivory text (#F7F6F1).
- **Slate** (#4A5570): secondary text, strong edges and disabled text.
- **Hairline** (`--ds-hairline`, ink at 8%; `--ds-hairline-strong`, ink at 14%): sheet rules, dividers, rings and grid rules. The solid warm rule (#E4E1D6) remains as `border-subtle`.
- **Rule Slate** (#6B7590): input edges, the restricted outline, and the hatch ink; at least 3:1 on every surface.
- **Neutral Highlighter** (#EFEDE5): count chips, the segmented track and the status-badge ground; the disabled ground (`disabled-bg`) shares the value.

### Status
- **Now-Line Red** (#B42318): the now-line, today dots and unread dots, plus error text, error edges and destructive fills. Destructive hover deepens to Deep Red (#9C1F16); danger alerts sit on Danger Tint (#FEF3F2).
- **Resolved Emerald** (#0A6B49) on **Emerald Tint** (#E6F5EE): success text, badges and alerts.
- **Caution Umber** (#8A4B06) on **Cream** (#FFF6E0): warning text, badges and alerts, and a meter near its limit.
- **Highlighter Yellow** (#F5C451): text selection, search hits and the default highlight mark.

### Identity
The Meeting At 10 logo keeps four colors of its own, outside the 54 primitives. They paint only the logo artwork, through the `logo-*` treatments, and never become interface color.
- **M10 Navy** (#031B38): the calendar frame and binding tabs on light grounds, and the page on dark grounds.
- **M10 Paper** (#F7F8FA): the calendar page on light grounds.
- **M10 Blue** (#0075FF): the appointment block on every ground, with a white (#FFFFFF) 10.
- **M10 Frost** (#E8EEF7): the frame and tabs on dark grounds.

### Dark Theme
Dark (`data-theme="dark"`, or the OS preference when no theme is set) changes values, never names. The canvas drops to near-black navy (#070D1C), sheets take #0D1529, overlays and raised paper sit on #121C35, text turns to #EAEEF7 and #A3ADC4, and hairlines to #222F4F. Solid fills turn pale with near-black ink (#070D1C): navy action becomes cobalt (#7C9BFF), amber #F2B154, emerald #3CCB98, so a block keeps its lane at full strength without glowing. The now-line becomes #FDA29B, the door plate pale blue with dark type, the logo's frame M10 Frost around an M10 Navy page, focus #7C9BFF, and each highlighter drops to the deepest step of its hue.

### Named Rules
**The Lane Owns the Block Rule.** Schedule is navy, community amber, consultations emerald. The lane color fills the whole block, chip or tile at full strength; it is never thinned to a stripe, a dot or a tinted edge.

**The No-Hue Boundary Rule.** The restricted reports lane has no hue: neutral ink, hatching and a word. Color never signals confidentiality, privacy or permission, and a lane color never implies access.

## Typography

**Display Font:** Plus Jakarta Sans (variable, with ui-sans-serif and system-ui fallbacks)
**Body Font:** Inter (variable, with ui-sans-serif and system-ui fallbacks)
**Label/Mono Font:** JetBrains Mono (variable, with ui-monospace, SFMono-Regular and Menlo fallbacks)

**Character:** Plus Jakarta Sans at 800 and 700 with tight negative tracking reads like lettering on a name plate, dense and sure of itself, while Inter keeps reading and controls quiet. JetBrains Mono is the clock: tabular, slashed-zero numerals for times, room codes and references.

### Hierarchy
- **Display** (800, clamp(2.75rem, 1.4rem + 3.2vw, 4.5rem), 1.02, -0.035em): the hero headline of the landing, the docs home and Meeting At 10, once per page; 44px rising to 72px.
- **H1** (800, clamp(2rem, 1.45rem + 1.5vw, 2.75rem), 1.1, -0.03em): page titles such as "Your week".
- **H2** (700, clamp(1.5rem, 1.3rem + 0.6vw, 1.875rem), 1.2, -0.025em): section headings.
- **H3** (700, 1.25rem, 1.3, -0.015em): card, agenda-row and dialog titles.
- **H4** (700, 1.0625rem, 1.4, -0.01em): small headings inside panels.
- **Body Large** (400, 1.125rem, 1.6): leads and section descriptions, held to about 34 to 40rem.
- **Body** (400, 1rem, 1.625): reading text and the comfortable-density default; long-form text stops at 680px.
- **Body Small** (400, 0.875rem, 1.5714): card bodies, block text, alert bodies and the compact-density default.
- **Label** (600, 0.875rem, 1.4286, -0.005em): field labels, tabs, navbar links, and alert and toast titles.
- **Caption** (500, 0.75rem, 1.3333): badges, meta rows and notes; navigation group labels use it at 600.
- **Code** (JetBrains Mono 400, 0.8125rem, 1.5385): code samples and inline code.
- **Time** (JetBrains Mono 500, 0.75rem, 1.3333, 0.01em, tabular, slashed zero): time codes (09:00-10:30), room codes (CCS 304) and references (DEMO-024).

Headings balance their lines and paragraphs avoid orphans. Faux bold is turned off, so load the weights in use: 800 and 700 for Plus Jakarta Sans, 400 to 600 for Inter and JetBrains Mono. Button labels use Inter 600 at 15px; inputs keep 16px text on every screen so phones never zoom. Tables, times and data use tabular numerals.

### Named Rules
**The Mono Is a Clock Rule.** JetBrains Mono appears only where a clock or a filing system would print: times, room codes, references, keys and code, always with tabular, slashed-zero numerals. Everything else is Inter or Plus Jakarta Sans.

**The Heading Carries Itself Rule.** Page and section headings stand alone, with no kicker or eyebrow above them: size, Plus Jakarta Sans weight (800 or 700) and space carry the hierarchy, and context goes in the description below. Two things that sit above titles are not kickers: the brand mark (the Meeting At 10 logo, or the door plate on ACCS surfaces), and the head line of a block or card (time code, lane chip), which is item metadata.

## Layout

The page is a 4, 8 and 12 column grid. Below 600px there are 4 columns with 16px gutters and margins; from 600px, 8 columns with 24px gutters and margins; from 1024px, 12 columns with 24px gutters and 32px margins; from 1440px the margins open to 48px. Content stops at 1280px and long-form text at 680px. A few components switch at 768px: navbar links leave the menu sheet, agenda rows gain a third column, and split section headers move their actions to the right.

Spacing sits on a 4px base and an 8px rhythm. Components use 4, 8, 12 and 16px inside, 20 to 24px for card and sheet padding, and 32 to 48px between groups; a 2px step closes the tightest gaps, such as the time, title and meta inside a block. Sections follow density: 64px (96px from 1024px) when comfortable, 24px (32px) when compact.

The vertical module is 8px as well. Controls are 40, 48 or 56px tall (at least 44px on coarse pointers), an hour row is 48px (40px compact), the hour column is 3.5rem, the portal sidebar 16rem, the portal top bar 64px, the public navbar 68px and the mobile header 56px.

Reflow keeps the task order intact. The app shell shows the sidebar and top bar from 1024px and a mobile header with drawer navigation below it. Dialogs become bottom sheets under 600px and steppers stack. The week sheet scrolls sideways with its hour column pinned and its day columns snapping (8rem minimum, 7.25rem on phones). The hero splits 5 to 7 from 1024px, copy on the left and the live artifact on the right at its working scale, and fills the first viewport under the navbar.

Density is a theme axis: comfortable sets Body text and roomy sections; compact sets Body Small text, tight sections, 40px hour rows and 40px inputs on fine pointers.

### Named Rules
**The Real Grid Rule.** Where a grid is drawn, it is a real, labeled time grid: hours down the side, days across the top. Hairlines are never decoration, and the hour row (48px, 40px compact) shares the 8px module with the controls.

## Elevation & Depth

Depth is layered and navy-tinted, never pure black. A card or sheet declares one elevation: a hairline ring (`0 0 0 1px`) that is part of a soft layered shadow, or the ring alone for flat sheets. It never has a 1px border plus a big soft shadow. Linked cards, blocks being handled and primary buttons deepen the layers on hover; overlays float on the deepest layers. In dark the shadows are deeper black-navy with a lighter ring. Glass (backdrop blur and saturation over a translucent surface) appears only on the sticky navbar and top bar, modals, drawers and popovers, with a solid surface under `prefers-reduced-transparency` and forced colors.

### Shadow Vocabulary
- **Ring** (`box-shadow: 0 0 0 1px #0C173014`): flat sheets and the secondary button.
- **Sheet** (`0 0 0 1px #0C173010, 0 1px 2px #0C17300D, 0 12px 32px -16px #0C173030`): cards at rest, tables, gallery tiles, showcase windows.
- **Lift** (`0 0 0 1px #0C173014, 0 2px 4px #0C173010, 0 20px 40px -16px #0C173047`): hovered linked cards, hovered blocks and slots, the chosen segment, the switch thumb and tooltips.
- **Overlay** (`0 0 0 1px #0C173014, 0 4px 8px #0C173010, 0 8px 16px -8px #0C173014, 0 28px 64px -24px #0C173047`): menus, listboxes, popovers, dialogs, drawers, toasts and overlay cards.
- **Button** (`0 1px 2px #032E8740, 0 8px 16px -8px #032E8759`): the navy shadow under primary buttons, together with the 1px top highlight.
- **Dark variants** (`sheet-dark`, `lift-dark`, `overlay-dark`, `ring-dark`, `btn-dark`): deeper black layers with a light ink ring.
- **Top highlight** (`box-shadow: inset 0 1px 0`, white at 22% in light and 30% in dark): the top edge of solid buttons, current navigation items, the chosen day and the current page number.

### Named Rules
**The Declared Once Rule.** At rest, every surface declares its elevation once: a hairline ring or a layered shadow, never a border plus a big soft shadow. Sheets rest on the ring, cards on the sheet shadow, overlays float on the overlay shadow, and a linked card deepens to the lift on hover. A line-form edge is a state mark, not a rule, and stays when its block lifts.

**The Earned Lift Rule.** Content never rests lifted: blocks, slots, buttons and linked cards cast the deeper lift only while hovered, dragged or chosen. The only parts resting on it are small pieces riding a track (the switch thumb, the chosen segment) and the tooltip plate. Elevation shows interaction and layering, never importance, security or privacy.

## Shapes

The form language is the rectangle of a printed timetable, softened to a precise, modern radius. Corners are set by material, edges are hairlines, and lines change form to carry state: solid, dashed, hatched or struck. Hatching is 1px diagonal hairlines at 135 degrees every 7px in the hatch ink (45% in light, 55% in dark, with a strong 80% and 90% variant for small markers), and words never sit directly on it: they ride on small paper labels with 2px corners. Two-pixel lines are reserved for position and time: the now-line, the selected-tab and current-link rules, the pending line under a button, the toast timer, and the stepper and case-timeline rails. Checkbox, radio and step-marker rings are 1.5px, and the highlighter mark rounds its ends by 2px.

### Named Rules
**The Material Radius Rule.** Radius follows the material, not the component: controls (buttons, inputs, tabs) 10px, blocks 8px, cards and sheets 16px, overlays 20px, large showcase frames 24px, chips and badges a full pill; tiny parts such as the checkbox and key caps use 4px. Full rounding is kept for dots and toggles: the now-dot, today and unread dots, avatars, radios, switches, step markers and progress tracks.

## Components

Every component is built from the same few materials (sheet, rule, block, hatch, highlighter, plate), and every interactive state is designed: default, hover, pressed, focus, disabled, error and pending. Focus is always a 2px Focus Blue ring with a 2px gap.

### Buttons
A button is a block you press.
- **Shape:** 10px control radius; 48px tall by default, 40px small (44px on touch) and 56px large, with 20px side padding (16px small, 24px large); the label is Inter 600 at 15px with an optional 20px icon.
- **Primary:** a crisp Door Plate Navy block with white text, the top highlight and a navy shadow. One per task region.
- **Hover / Focus:** hover deepens to Pressed Navy and lifts 2px on the snappy spring; pressing drops to Midnight Navy and scales to 98%; focus draws the cobalt ring. Color changes take 120ms.
- **Pending:** the fill stays, a clock-hand spinner replaces the leading icon, and a 2px line sweeps along the bottom edge; the button refuses repeat presses.
- **Secondary:** a paper block with a hairline ring and ink text; hover lifts it onto raised paper with a stronger ring; disabled keeps only a faint ring on a clear ground.
- **Tertiary (ghost):** navy text on no ground with 12px padding; hover takes the Schedule Highlighter.
- **Destructive:** a solid Now-Line Red block, only for real removal; hover deepens to Deep Red and lifts like primary.
- **Plate:** inverted, navy text on a white block, for use inside the door-plate band.
- **Disabled (solid variants):** the disabled ground with Slate text and no lift.
- **Icon button:** a 40px square (44px on touch, 48px medium) holding one Slate icon; hover takes the Neutral Highlighter, and pressed or expanded takes the info tint with a navy icon. It always has an accessible name and a tooltip with the same words; an unread marker is an 8px Now-Line Red dot ringed in paper.

### Chips
- **Status badge:** 24px tall, a full pill, caption text on the Neutral Highlighter, led by an 8px marker whose line form carries the state (solid, dashed, hatched or struck square) next to the word. Tone tints (success, warning, danger, info, community, consult) reinforce the word and never replace it.
- **Role badge:** an outlined plate (1px navy inset edge, navy 600 text) for "Student" or "Faculty"; a role is never presented as a privacy signal.
- **Severity:** one to three rising bars plus a word, a family separate from status.
- **Lane chip:** a small solid pill (22px, white caption at 600) naming the lane on a card; the restricted chip is paper with a hatched swatch and a 1px Rule Slate edge.
- **Tags:** 30px pills with a hairline ring on paper; a selected tag takes a navy ring, the Schedule Highlighter and navy text.

### Cards / Containers
- **Corner Style:** 16px (sheet); overlay cards 20px; showcase frames 24px.
- **Background:** Paper on the Ivory Canvas.
- **Shadow Strategy:** the sheet shadow at rest (a hairline ring inside soft layers). A linked card deepens to the lift shadow on hover, rises 2px, underlines its title and steps its arrow 3px forward (see Elevation & Depth).
- **Border:** none; the ring is part of the shadow.
- **Internal Padding:** 20px (32px on overlay cards); a meta row closes the card above a Hairline.
- **Use:** one card per item in a collection (announcement, post, record) or a floating panel, never nested, and the whole card is one link named by its title. The plain sheet is the general paper container (24px padding), and full-width paper bands carry a Hairline top and bottom.

### Inputs / Fields
- **Style:** 48px tall (40px small or compact on fine pointers, at least 44px on touch), Paper, a 1px Rule Slate edge (3:1), 10px corners, 16px body text and a Slate placeholder. Text areas start at 128px and grow with their content up to 24rem.
- **Focus:** the edge turns Cobalt, a 2px ring sits 1px outside it and a soft cobalt halo fades in; hover strengthens the edge.
- **Error / Disabled:** an error turns the edge and ring Now-Line Red, and the message (icon plus words naming the problem and the fix) sits below while the typed text stays. Disabled controls show a dashed edge on the disabled ground with readable Slate text; read-only keeps only a Hairline on a clear ground.
- **Field anatomy:** a persistent label in the Label style above, an optional description in Body Small Slate, the control, then the error. Required fields say "(required)" in words; a placeholder never replaces a label.
- **Choices:** checkboxes are 20px with a 1.5px edge and 4px corners and fill navy as the check strokes in on the snappy spring; radios are rings whose dot springs in; radio cards are block choices with a description, selected with a navy edge and the Schedule Highlighter; switches are 44 by 24px pills that fill navy while the thumb springs across and stretches while pressed.
- **Select and listbox:** the trigger is shaped like the text input and its caret turns over when open; options are ruled rows on a floating sheet, the focused row takes the Schedule Highlighter, and the selected one gets a check and weight.

### Navigation
- **Sidebar (portal):** a 16rem paper rail with a Hairline end rule, the door plate on top, navigation groups under sentence-case group labels in Slate, and the signed-in person with a role badge at the foot. It becomes a drawer below 1024px.
- **Navigation item:** 40px (44px on touch), 8px corners, Label-weight text in Slate. Hover takes the Neutral Highlighter; the current page becomes the solid navy block with white text, the icon in its fill weight and the top highlight.
- **Top bar (portal):** 64px on the Ivory Canvas (translucent glass when sticky) with a Hairline under it, the page title in Plus Jakarta Sans 700 at 18px, and tools (search, notifications, account) on the right.
- **Navbar (public sites):** 68px and sticky, on the Ivory Canvas (translucent glass when sticky) with a Hairline under it: the brand left (the logo, or the door plate on ACCS sites), a few links in the middle, one primary action. Links take the Neutral Highlighter on hover, and the current link carries a 2px navy rule on the navbar's bottom edge. Below 768px the links move into a menu sheet.
- **Tabs:** labels on a ruled header; the selected tab's 2px navy rule slides between tabs on the smooth spring.
- **Segmented control:** a Neutral Highlighter track with a 1px Hairline inset edge; the chosen segment is a paper chip on the lift shadow that slides between options.
- **Pagination:** page blocks, with the current page as the solid navy block; Previous and Next keep their words.
- **Stepper:** a timeline. Completed steps sit on a solid navy line with filled markers, the current step is a navy ring with a center dot, and upcoming steps sit on a dashed line. Labels always show, and it stacks vertically below 600px.
- **Breadcrumbs:** the current page is plain text, never a link.
- **Mobile:** a 56px sticky header (menu, door plate, one or two actions) with drawer navigation below 1024px.

### Time Block
The unit of the world.
- **Anatomy:** a 6px-cornered block with 8px by 12px padding: the time code on top in the Time style, the title in Inter 600 at 14px (up to three lines), and meta in Caption. Short blocks shed meta first, then title lines, then set time and title on one line.
- **Lanes:** schedule (Door Plate Navy, the default), community (Community Amber), consultations (Consultation Emerald) and restricted (paper with hatching and a 1px Rule Slate edge, no hue). Text on solid lanes is white, near-black in dark.
- **Line forms:** open is paper with a solid edge and text in the lane color; pending is the same with a dashed edge; taken is hatched paper with Slate text; disabled strikes the title. Words on hatching sit on small paper labels.
- **Interaction:** an interactive block lifts 2px onto the lift shadow on hover and fills with its lane color when chosen. Inside a group, hovering, focusing or choosing a block dims its neighbors to 55% over 200ms.
- **Entrance:** blocks drop 6px into their cells once on the snappy spring, staggered 25ms, starting from a visible state.

### Week Sheet and Now-Line
- **Grid:** a 12px-cornered sheet with a 3.5rem pinned hour column labeled in the Time style, day heads (weekday in Label, date in Plus Jakarta Sans 700 at 20px), Hairline hour rules with lighter half-hour rules, and 48px hour rows (40px compact). Blocks sit at their start and length, and concurrent blocks share the column width.
- **Today:** the column takes the today tint, and its date sits on a small door plate.
- **Now-line:** a 2px Now-Line Red line with an 8px dot across today's column, its time on a small red plate (JetBrains Mono 600, white) in the hour gutter, where the hour label it would cover is hidden. It glides for 1s, linear, each time the clock updates (every 30 seconds); under reduced motion it steps without the glide.
- **Restricted band:** under the grid, a hatched band with a Rule Slate top rule holds one paper label: an ink "Reports" chip with a lock, then the words ("Restricted: you see only your own records").
- **Slot picker:** the consultation slot picker uses the same grammar. A day strip's chosen day is a solid navy block that slides between days (today marked by a 4px red dot, days without slots struck), and slots are open (solid teal edge, "Open"), chosen (teal fill swiped in from the left over 320ms, with a check), booked (hatched) or unavailable (struck), each with its word and a legend.

### Logo
The Meeting At 10 calendar mark is the system's main logo: a calendar with two binding tabs whose page holds one blue appointment block with a white 10, followed by the name.
- **Style:** the mark at 24, 32, 48 or 64px beside the name in Plus Jakarta Sans 800 at 15, 17, 24 or 32px, with an optional code in JetBrains Mono after a half-opacity hairline divider ("DS 1.0"). Light grounds get an M10 Navy frame around an M10 Paper page; dark grounds an M10 Frost frame around an M10 Navy page, so the calendar keeps its outline. On an inverse bar or a door-plate band the frame and page swap. The block and numeral never change, and forced colors redraw the mark in system colors.
- **Use:** the docs header, footer and home hero, the favicon, the home-screen icon and Open Graph images, and the Meeting At 10 site. The component, or the light, dark and auto files as exported: never redrawn, recolored, stretched or given effects. At least 24px in interface (16px as a favicon), with clear space of a quarter of the mark's height. ACCS surfaces keep the door plate.

### Door Plate
The name plate from a faculty door: the ACCS wordmark until an ACCS logo is approved, and the form of page-title plates and room labels.
- **Style:** a Door Plate Navy plate (pale blue with near-black type and a 1px top highlight in dark) with 6px corners, the name in white Plus Jakarta Sans 800 at 17px, an optional room or version code in JetBrains Mono after a half-opacity hairline divider ("CCS 304", "DS 1.0"), and an optional caption tagline. It is 32px tall, 26px small, and 48px large with a 24px name.
- **Use:** one color only, never a lane color, and never styled as a seal or crest. Role badges borrow its outlined form. The proposed ACCS logo files are used as exported, never redrawn or recolored.

### Feedback
- **Inline alert:** a tinted sheet (tone tint, 8px corners, 12px by 16px padding) whose icon sits on a 28px solid block in the tone color, with the title in Label and the body in Body Small, both in ink. No side stripe.
- **Toast:** the ink sheet (12px corners, overlay shadow) rising 8px from the bottom edge over 320ms. A 2px line along its bottom shows the time left and pauses while hovered or focused. It is never the only place an error lives.
- **Dialog:** a 16px-cornered sheet over the scrim that rises 8px on the exponential ease-out over 320ms and leaves on the exit ease; below 600px it becomes a bottom sheet on the gentle spring. Actions sit under a Hairline, aligned to the end.
- **Drawer:** a sheet sliding in from the end edge (the bottom on phones) over the scrim, for filters, record details and mobile navigation.
- **Popover and tooltip:** popovers are floating sheets (12px corners) that emerge 6px from their trigger's side; tooltips are small ink plates (6px corners, Inter 500 at 13px) that name icon-only controls.
- **Privacy notice:** a sheet with a 1px Rule Slate edge and a hatched top band holding a 32px ink lock block and the title on a paper label, then plain words on what is known and what is not promised. Neutral ink, no hue.
- **Progress and meter:** progress is a 6px track on the disabled ground whose navy fill springs to its value; a meter is a 10px ruled scale with a tick every 10%, filled emerald, Caution Umber when high and Now-Line Red when full. Words carry the reading.
- **Loading and empty:** the spinner is a clock hand sweeping in the current color; skeleton text lines pulse on the Neutral Highlighter and block placeholders are dashed outlines; empty states draw an empty ruled sheet (geometry, not illustration) with a title, one line on why, and the next step.

### Agenda, Highlight and Plate Band
- **Agenda:** features or steps as ruled schedule rows: a lane chip (a 28px solid block with 6px corners, caption at 600, naming a time or lane), the title in H3 with Body text, and a standalone link, with Hairlines between rows and 24px row padding (32px from 768px).
- **Highlight:** a flat highlighter wash behind the words that matter (Highlighter Yellow by default, lane tones available) that swipes in from the left over 480ms; the under variant paints a 0.42em band along the lower part of the line, for display headlines.
- **Door-plate band:** a full-width Door Plate Navy section with white text and the plate button, usually the closing call to action.

### Icons
- Phosphor icons in the current color at 16, 20, 24 and 32px. Weight carries meaning: regular for interface icons, fill for the selected or current item, duotone for lane and category tiles, where the 20% layer reads as highlighter. The plain-CSS layer ships a curated sprite of 80 icons in all three weights.
- **Tile:** a 40px solid block with 8px corners holding one lane icon (32px with 6px corners small, 56px with 12px corners large); restricted tiles are hatched paper.

### Named Rules
**The Line Form Rule.** Status and availability are drawn as lines: solid for open, active or done; dashed for pending, draft or upcoming; hatched for taken or restricted; struck for disabled, closed, unavailable or withdrawn. A word always comes with the line.

**The Current Is Solid Rule.** The page you are on, the chosen day and the current page number become the solid navy block, with the icon in its fill weight; a chosen time block or slot fills solid in its own lane color. Hovering a navigation item, option or row takes a highlighter wash instead.

**The Now Is a Line Rule.** The present moment on a time grid is a 2px Now-Line Red line with an 8px dot and the time on a small red plate. It glides as the clock updates and drops the glide under reduced motion.

## Do's and Don'ts

### Do:
- **Do** write every color as a semantic or treatment token (`var(--ds-action-default)`, `var(--ds-hatch)`); the frontmatter keys are those token names, and the token check rejects raw hex in product code.
- **Do** put scheduled things on a ruled sheet as blocks in lanes: the lane color as the whole fill, the time code on top in tabular JetBrains Mono, the title in Inter 600, meta last.
- **Do** pair every line form with a word ("Open", "Awaiting confirmation", "Booked", "Unavailable") and every status tone with a label.
- **Do** hatch taken and restricted areas (1px diagonal hairlines every 7px) and set their words on small paper labels so the lines never cross text.
- **Do** keep one solid navy primary button per task region, and use the ruled secondary and the tertiary wash for everything else.
- **Do** make the current page, the chosen day and the current page number the solid navy block with a fill-weight icon, and let a chosen block or slot fill with its own lane color.
- **Do** keep the 2px focus ring with its 2px gap (Cobalt #2F5BEA, #7C9BFF in dark) visible on every interactive element.
- **Do** keep controls on the 8px module (40, 48 or 56px), at least 44px on coarse pointers, with 16px text in inputs.
- **Do** let color and hover changes take 120ms, slide indicators on the smooth spring, raise overlays 8px on the exponential ease-out, and land every state instantly under reduced motion.
- **Do** use the Meeting At 10 calendar logo as the system's own mark (the theme-aware `Logo`, or the light, dark and auto files as exported), and the door plate (navy plate, white Plus Jakarta Sans 800) as the ACCS wordmark until an ACCS logo is approved.

### Don't:
- **Don't** add a colored stripe along the side of a card, alert or row; alerts are tinted sheets with a solid icon block. The 2px lines the world draws (the now-line, selected-tab and current-link rules, stepper and case-timeline rails) mark time and position, not decoration.
- **Don't** put a kicker or eyebrow label above a page or section heading; context goes in the description beneath it. The door plate is the ACCS wordmark, not a kicker.
- **Don't** give a resting surface both a rule and a shadow.
- **Don't** let hue alone carry status, severity, availability or permission, and never give the restricted lane a hue.
- **Don't** set labels, headings, navigation or buttons in JetBrains Mono.
- **Don't** nest cards, or build page structure from rows of same-size icon cards; use Agenda rows, sections, rules and headings.
- **Don't** use gradient text, glass, glow or colored shadows in the interface; the hatch and the ruled grid are the only drawn patterns. The one exception is the expressive layer on marketing surfaces: the brand renders, the aurora and the spotlight glow, which are decoration and never carry state.
- **Don't** use emoji or Unicode glyphs as icons; use the Phosphor set and its weights.
- **Don't** hold content back until it animates in; entrances start from a visible state, and only overlays fade. Scroll reveals in the expressive layer are the same promise: without scroll-driven animation, or under reduced motion, everything renders in its final state.
- **Don't** recolor the door plate with a lane color, style it as a seal or crest, or redraw the proposed ACCS logo files.
- **Don't** put the light Meeting At 10 artwork on a dark ground, recolor the mark beyond its light, dark and auto versions, or use its identity colors in the interface.
- **Don't** use more than one door-plate band on a page.
