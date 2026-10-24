# Principles

Source: Figma frames 01 Identity, 03 Foundations, 06 Accessibility and content. Everything authored in Figma is **PROPOSED**, not approved.

## The brand should feel

| Professional, not bureaucratic | Trustworthy, not absolute | Modern, not decorative | Accessible, not exclusive | Structured, not rigid |
|---|---|---|---|---|

ACCS = Access for College of Computer Studies (spoken "Access"). Tagline: **Your Access to the College of Computer Studies**. A service identity, not an institutional seal; use the full expansion on first mention and the exact tagline; never imply an official seal or approved endorsement.

## System principles

| # | Principle | In practice |
|---|---|---|
| 1 | Soft layers on a real structure | 8px rhythm, deliberate geometry, predictable responsive behavior, always-visible focus. Depth, tints and washes come only from locked tokens, look the same on every surface (Reports included) and never carry meaning; cards only for collection items and floating panels |
| 2 | State is part of the contract | Default, Hover, Pressed, Focus, Disabled, Error, Loading where applicable; loading prevents repeat activation |
| 3 | Persistent labels, useful errors | Placeholder never replaces a label; required fields use text; errors say what happened and keep the user's text |
| 4 | Permission is not confidentiality | A role badge is not a privacy signal; restricted access does not mean anonymous; backend enforcement is required |
| 5 | Honest claims | No promises of anonymity, security, response time or finality |
| 6 | One primary action per task region | Reserve destructive intent for real removal; name the object and reversibility |
| 7 | Color reinforces, never carries | Status uses words or symbols; severity and status are separate families |
| 8 | Follow the task, not the viewport | Preserve task order when columns stack; safety copy never truncates |
| 9 | Accessibility is a target, not a claim | WCAG 2.2 AA target, not certification; test keyboard, AT, zoom and reduced motion |
| 10 | Tokens, not hex | Components use semantic tokens only; the Figma names are the API |

## Surfaces

| Aspect | ACCS landing | ACCS admin | Meeting At 10 |
|---|---|---|---|
| Theme / density | `light`/`dark`, `comfortable` | `light`/`dark`, `compact` | `light`/`dark`, `comfortable` |
| Source | Figma tokens + patterns (no landing frame exists) | Figma tokens + product patterns | Figma tokens; own content and layout |
| Type focus | Display 36/44, Body large 16/26 | H1 30/38, Body 14/22, Label 14/20 | Same styles, own personality |
| Density | Spacious, 64-96 rhythm | Dense but calm, 24-32 rhythm | Spacious |

## Governance (06.5)

01 Proposed (current): reviewable reference, record owner, date, evidence, open questions and rationale for every changed token or component. 02 Reviewed (future gate): design, accessibility, engineering and policy owners review together. 03 Approved (future gate): explicit institutional authorization, documented privacy/access rules and implementation testing. A new version never silently changes access policy or anonymity behavior.

Unresolved release gates: logo selection; palette extensions and both semantic themes (contrast tests, institutional review); typography (role scale, small-size readability, multilingual behavior); permissions and privacy (recipients, anonymity, access/retention/redaction); implementation (backend authorization, keyboard/AT tests, policy-gated submission).
