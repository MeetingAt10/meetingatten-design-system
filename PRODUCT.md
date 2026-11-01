# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

The design system's direct users are the capstone team building three web surfaces, which the user weighs equally (confirmed 2026-10-25):

- **ACCS landing:** prospective and current College of Computer Studies (CCS) students and faculty learning what ACCS is and signing in.
- **ACCS portal and admin:** students posting in the community, booking consultation slots and drafting or tracking their own reports; faculty hosting consultations; department staff moderating and handling restricted reports. Used on phones between classes and on laptops at a desk.
- **Meeting At 10 site:** visitors to the team's own site.

The documentation site (`site/`, design.<domain>) is read by the team and anyone evaluating the system.

## Product purpose

One package of tokens, CSS and React components gives all three surfaces the same look and behavior, so the team builds screens instead of styling them. Success means each surface looks designed for this college rather than templated, and stays accessible and fast.

## Positioning

ACCS (Access for College of Computer Studies, spoken "Access"; tagline "Your Access to the College of Computer Studies") puts community participation and confidential grievance reporting in one college workspace and keeps the two apart. Community access never implies report access.

## Operating context

- Consumers: Next.js 16 apps (accs-landing, meeting@10-website) and a Vite SPA (accs-system/frontend), via `@meetingat10/design-system` (git tag install), Tailwind 4 optional.
- Delivery: tagged releases; the documentation site deploys to AWS (S3 and CloudFront) from a GitHub Actions workflow on `v*` tags.
- The repo owns everything now. Figma is no longer a reference (user decision 2026-10-25).

## Capabilities and constraints

- React 19 layer on React Aria Components (keyboard, focus and screen reader behavior); plain-CSS layer usable without React; themes `data-theme=light|dark` with OS fallback and `data-density=comfortable|compact`.
- The user allows rewriting every component and style, and adding icon and motion libraries (2026-10-25).
- User decision 2026-11-01: ACCS and Meeting@10 are presented as live production platforms for QCU CCS, with no disclaimers. Examples still contain no fabricated metrics, testimonials or endorsements, and no real student data.
- From the repo's product docs (not re-confirmed as fixed for the redesign; claims stay uninventable regardless): no promises of anonymity, security, response time or finality; "permission is not confidentiality"; reports copy is serious and neutral, community copy casual and encouraging, support copy empathetic and clear; no emoji in UI.
- Undecided: the final ACCS logo (the `logo-*.svg` files in `assets/logo/` are proposed, not approved); custom domain for the documentation site.

## Brand commitments

- Keep the ACCS palette: the 54 color primitives (deep navy brand `#032E87`, navy-black ink `#0C1730`, ivory canvas `#F7F6F1`, cobalt focus `#2F5BEA`, emerald secondary, amber accent, neutral, status ramps; remapped for v1.2.0 on 2026-11-01) and the light/dark semantic mapping (confirmed 2026-10-25).
- Keep the fonts: Plus Jakarta Sans (display), Inter (body), JetBrains Mono (code) (confirmed 2026-10-25).
- The system must not feel playful, gamified, templated, cold, bureaucratic or slowed by motion (confirmed 2026-10-25).
- Name: ACCS, expanded on first mention; no invented seals, awards or endorsements. Meeting At 10 voice: direct, dry, short sentences.
- The system is the Meeting At 10 Design System (package `@meetingat10/design-system`), and its main logo is the Meeting At 10 calendar mark in `assets/logo/meeting-at-10*.svg` (user decision 2026-10-25). ACCS surfaces keep the door plate as the ACCS wordmark.

## Evidence on hand

- Meeting At 10 logo: `assets/logo/meeting-at-10.svg` (the user's artwork), `meeting-at-10-dark.svg`, `meeting-at-10-auto.svg`.
- Proposed ACCS logo SVGs: `assets/logo/logo-horizontal.svg`, `logo-stacked.svg`, `logo-compact-minimum.svg`.
- Realistic example content in `site/app/_site/` (announcements, forum questions, consultation slots, `CCS-2026-0xxx` report references).
- No real users, testimonials, metrics, approvals or institutional endorsements exist; do not fabricate them.

## Product principles

1. Ownership, status, privacy and next steps stay clearer than any effect.
2. Say what is known, what is pending and what is disabled.
3. Every interactive state is designed, and loading prevents repeat actions.
4. Color reinforces and never carries meaning alone. Status and severity also use words or symbols.
5. When a layout reflows, task order and safety copy stay intact.

## Accessibility and inclusion

WCAG 2.2 AA as a target (not a certification claim): keyboard, screen reader, 200% zoom, reduced motion and Windows high contrast (forced colors) are tested; touch targets at least 44px on mobile.
