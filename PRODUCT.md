# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

The design system's direct users are the capstone team building three web surfaces, which the user weighs equally (confirmed 2026-10-25):

- **ACCS landing:** prospective and current College of Computer Studies (CCS) students and faculty learning what ACCS is and signing in.
- **ACCS portal and admin:** students posting in the community, booking consultation slots and drafting or tracking their own reports; faculty hosting consultations; department staff moderating and handling restricted reports. Used on phones between classes and on laptops at a desk.
- **Meeting At 10 site:** visitors to the team's own site.

The public showcase site (`site/`, design.<domain>) is read by the team and anyone evaluating the system.

## Product Purpose

One package (tokens, CSS and React components) that gives all three surfaces the same polished, accessible look and behavior, so the team builds screens instead of styling them. Success: every surface looks deliberately designed, never plain or template-like, and stays accessible and fast.

## Positioning

ACCS (Access for College of Computer Studies, spoken "Access"; tagline "Your Access to the College of Computer Studies") puts everyday community participation and confidential grievance reporting in one college workspace, and keeps the boundary between them explicit: community access never implies report access.

## Operating Context

- Consumers: Next.js 16 apps (accs-landing, meeting@10-website) and a Vite SPA (accs-system/frontend), via `@meetingat10/design-system` (git tag install), Tailwind 4 optional.
- Delivery: tagged releases; the showcase site deploys to AWS (S3 and CloudFront) from a GitHub Actions workflow on `v*` tags.
- The repo owns everything now. Figma is no longer a reference (user decision 2026-10-25).

## Capabilities and Constraints

- React 19 layer on React Aria Components (keyboard, focus and screen reader behavior); plain-CSS layer usable without React; themes `data-theme=light|dark` with OS fallback and `data-density=comfortable|compact`.
- The user allows rewriting every component and style, and adding icon and motion libraries (2026-10-25).
- Content in demos is synthetic and labeled (`DEMO`, "sample", "illustrative"); no real student data or names.
- From the repo's product docs (not re-confirmed as fixed for the redesign; claims stay uninventable regardless): no promises of anonymity, security, response time or finality; "permission is not confidentiality"; reports copy is serious and neutral, community copy casual and encouraging, support copy empathetic and clear; no emoji in UI.
- Undecided: the final ACCS logo (the `logo-*.svg` files in `assets/logo/` are proposed, not approved); custom domain for the showcase site.

## Brand Commitments

- Keep the ACCS palette: the 54 color primitives (deep navy brand `#032E87`, ink `#172033`, teal secondary, violet accent, neutral, status ramps) and the light/dark semantic mapping (confirmed 2026-10-25).
- Keep the fonts: Plus Jakarta Sans (display), Inter (body), JetBrains Mono (code) (confirmed 2026-10-25).
- Must not feel playful or gamified, like a generic SaaS template, cold or bureaucratic, or slowed down by motion (confirmed 2026-10-25).
- Name: ACCS, expanded on first mention; never imply an official seal or institutional endorsement. Meeting At 10 voice: direct, dry, short sentences.
- The system is the Meeting At 10 Design System (package `@meetingat10/design-system`), and its main logo is the Meeting At 10 calendar mark in `assets/logo/meeting-at-10*.svg` (user decision 2026-10-25). ACCS surfaces keep the door plate as the ACCS wordmark.

## Evidence on Hand

- Meeting At 10 logo: `assets/logo/meeting-at-10.svg` (the user's artwork), `meeting-at-10-dark.svg`, `meeting-at-10-auto.svg`.
- Proposed ACCS logo SVGs: `assets/logo/logo-horizontal.svg`, `logo-stacked.svg`, `logo-compact-minimum.svg`.
- Synthetic demo content in `site/app/_site/` (announcements, forum questions, consultation slots, `DEMO-0xx` report records).
- No real users, testimonials, metrics, approvals or institutional endorsements exist; do not fabricate them.

## Product Principles

1. Trust before decoration: ownership, status, privacy and next steps stay clearer than any effect.
2. Honest claims: say what is known, what is pending and what is disabled.
3. State is part of the contract: every interactive state is designed, and loading prevents repeat actions.
4. Color reinforces, never carries: status and severity use words or symbols too.
5. Follow the task: when layouts reflow, task order and safety copy survive intact.

## Accessibility & Inclusion

WCAG 2.2 AA as a target (not a certification claim): keyboard, screen reader, 200% zoom, reduced motion and Windows high contrast (forced colors) are tested; touch targets at least 44px on mobile.
