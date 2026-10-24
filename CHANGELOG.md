# Changelog

Format: [Keep a Changelog](https://keepachangelog.com). Versioning: [SemVer](https://semver.org); while `0.x`, breaking changes bump the minor and are marked **BREAKING**.

## [0.1.0] - 2026-10-24

### Added
- DTCG foundations: color scales (blue, ink, teal, sun, paper, status, dataviz), typography, spacing, radius, elevation, motion, z-index, breakpoints.
- Five themes: `accs-landing`, `accs-admin`, `accs-admin-dark`, `meetingatten`, `meetingatten-dark` (59 semantic tokens each, including dataviz).
- Build to `dist/tokens.css`, `tailwind.css` (Tailwind 4 `@theme`), `components.css`, `tokens.json`, `tokens.js`; legacy `--accs-*` aliases.
- WCAG AA contrast gate over 63 declared pairs per theme.
- Admin component specs (10), static templates (landing, admin shell, auth, Meeting At 10 home), preview page.
- Docs: principles, voice, logo and assets (logo pending approval), data visualization, iconography, accessibility checklist.

### Changed (vs. v0.1 proposal and per-repo tokens)
- Purple removed; teal is the single ACCS accent. `--accs-accent-*` now maps to teal.
- New Meeting At 10 identity (paper, ink, sunrise orange).
