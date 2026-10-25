# Principles

How the Meeting At 10 design system decides: the Office Hours world, the product principles, the craft rules and the three surfaces.

ACCS is Access for College of Computer Studies (spoken "Access"). Tagline: **Your Access to the College of Computer Studies**. It is a service identity, not an institutional seal: expand the name on first mention, keep the tagline exact, and never imply an official seal or endorsement.

## The brand should feel

| Professional, not bureaucratic | Trustworthy, not absolute | Modern, not decorative | Accessible, not exclusive | Structured, not rigid |
|---|---|---|---|---|

It must not feel playful or gamified, like a generic SaaS template, cold, or slowed down by motion.

## The world: Office Hours

The weekly consultation timetable taped to a CCS faculty door, rebuilt as an interface language.

| Element | Expression |
|---|---|
| Sheet | Paper-white surface on a cool canvas, one 1px hairline rule, no shadow at rest |
| Rules | Hairlines; where a grid is drawn it is a real, labeled time grid (hours, days), never decoration |
| Block | The unit of content: a radius-6 rectangle whose lane color owns the whole fill; time code in tabular JetBrains Mono on top, title in Inter 600, meta below |
| Lanes | schedule = navy (action), community = violet (accent), consult = teal (secondary), restricted = hatched ink with no hue |
| Highlighter | Flat washes behind text and rows for selection, search hits and emphasis, swiped in from the left |
| Hatch | Diagonal hairlines on taken, restricted or unavailable areas, always with a word |
| Door plate | Navy plate with white Plus Jakarta Sans 800 (pale blue plate in dark): the ACCS wordmark until a logo is approved |
| Now-line | A 2px line and dot in `now` (danger 700 light, danger 300 dark), labeled with the time |
| Line forms | solid = open or active, dashed = pending or draft, hatched = taken or restricted, struck = disabled or closed; always paired with a word |
| Current item | A solid navy block with a fill-weight icon; hover is a highlighter wash |

Signature interaction: the now-line glides across today; choosing a block lifts it and dims its neighbors one step; picking a slot draws a fill from the left. Motion grammar: [motion.md](../foundations/motion.md).

## System principles

| # | Principle | In practice |
|---|---|---|
| 1 | Everything is placed in time, and trust comes before decoration | The page is a ruled sheet and content arrives as blocks in lanes. Ownership, status, privacy and next steps stay clearer than any effect; materials come only from tokens and never carry meaning alone |
| 2 | State is part of the contract | Default, hover, pressed, focus, disabled, error and pending are all designed; pending blocks repeat actions; line forms always come with words |
| 3 | Persistent labels, useful errors | A placeholder never replaces a label; required fields say so in words; errors say what happened and keep the user's text |
| 4 | Permission is not confidentiality | A role badge is not a privacy signal; restricted access does not mean anonymous; backend enforcement is required |
| 5 | Honest claims | No promises of anonymity, security, response time or finality; synthetic content is labeled `DEMO` or "sample" |
| 6 | One primary action per task region | Destructive intent only for real removal; name the object and whether it can be undone |
| 7 | Color reinforces, never carries | Status, severity and availability use words, symbols or line forms; lanes never mean permission |
| 8 | Follow the task, not the viewport | Task order and safety copy survive reflow; safety copy never truncates |
| 9 | Accessibility is a target, not a claim | WCAG 2.2 AA target, not certification; test keyboard, screen readers, zoom, reduced motion and forced colors |
| 10 | Tokens, not hex | Components use semantic and treatment tokens only; `tokens/` is the source and `check:tokens` enforces it |

## Craft rules

| Rule | Instead |
|---|---|
| No eyebrow or kicker labels above headings | Let the heading carry its own weight; put context in the description |
| No colored side stripes over 1px on cards or alerts | A tinted sheet with a solid icon block ([Alert](../components/feedback/inline-alert.md)) |
| No same-size icon-card columns as page structure | [Agenda](../components/layout/agenda.md) rows |
| No hero-metric template, gradient text or decorative glass | The product at work: a timetable with synthetic, labeled content |
| Monospace only for times, codes, references, keys and code | Inter for everything else |
| Elevation declared once | A rule border or a shadow, never both |
| Cards only for collection items and floating panels, never nested | Sections, rules and headings on detail pages |
| No emoji; no Unicode glyphs as icons | The curated [icon vocabulary](iconography.md) |

## Surfaces

The three surfaces weigh equally (confirmed 2026-10-25).

| Aspect | ACCS landing | ACCS portal and admin | Meeting At 10 |
|---|---|---|---|
| Repo | `accs-landing` (Next.js 16) | `accs-system/frontend` (Vite SPA) | `meeting@10-website` (Next.js 16) |
| Visitor mode | Persuade | Operate | Persuade |
| Theme and density | light and dark, `comfortable` | light and dark, `compact` | light and dark, `comfortable` |
| Signature | This week's ruled sheet with the now-line and the hatched reports band | Sidebar with the current item as a solid block; timetables, tables and records | A day sheet anchored on the 10:00 rule |
| Voice | Community: casual and encouraging | Neutral and operational; reports serious | Direct, dry, short sentences |

## Governance

| Stage | Meaning |
|---|---|
| 01 Proposed (current) | A reviewable reference. Record the owner, date, evidence, open questions and rationale for every changed token or component |
| 02 Reviewed (future gate) | Design, accessibility, engineering and policy owners review together |
| 03 Approved (future gate) | Explicit institutional authorization, documented privacy and access rules, and implementation testing |

A new version never silently changes access policy or anonymity behavior. Open gates: ACCS logo selection; institutional review of the identity; small-size readability and multilingual behavior of the type; permissions and privacy (recipients, anonymity, access, retention, redaction); implementation (backend authorization, keyboard and assistive technology tests, policy-gated submission); a custom domain for the showcase site.
