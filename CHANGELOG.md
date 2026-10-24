# Changelog

Format: [Keep a Changelog](https://keepachangelog.com). Versioning: [SemVer](https://semver.org); while `0.x`, breaking changes bump the minor and are marked **BREAKING**.

## [Unreleased]

Work toward 0.3.0 (see `context/deltas/2026-10-24-v0.3.0-rebuild.md`).

### BREAKING
- Removed the Meeting At 10 themes (`meetingatten`, `meetingatten-dark`), the `sun` and `paper` primitives, `themes/meetingatten/` and `templates/meetingatten-home.html`. The team site uses the ACCS themes.
- Themes are `data-theme="light"` and `data-theme="dark"`; without the attribute the page follows `prefers-color-scheme`. Removed theme names: `accs-landing`, `accs-admin`, `accs-admin-dark`, `accs-light`, `accs-dark`, and the `.theme-*` classes.
- Removed the legacy `--accs-*` CSS variables; use `--ds-*`.
- Removed `.ds-body--app`; set `data-density="compact"` instead.
- `themes/accs-admin/` and `themes/accs-landing/` replaced by `themes/light-dark.md` and `themes/density.md`.

- Tailwind is strict: `--color-*: initial`, Figma primitives no longer exposed (`bg-neutral-500`, `bg-brand-*`), legacy `ink`, `ink-secondary`, `line` removed. `rounded-overlay` and `shadow-raised` (elevation) replaced by `rounded-card` (12px) and `shadow-card` / `shadow-overlay`.

### Added
- `tokens/treatments.json`: repo-owned look tokens `card-bg`, `card-shadow`, `card-shadow-hover`, `overlay-shadow`, `wash-accent|secondary|info`, `scrim`, `lift`, `radius-card|tile|control|chip`, emitted as `--ds-*` per theme; Tailwind `bg-card`, `wash-*`, `shadow-card(-hover)`, `shadow-overlay`, `rounded-tile`.
- `npm run check:tokens` (part of `npm run check`); text-on-wash contrast checks.
- `data-density="comfortable|compact"` with `--ds-density-text-*` and `--ds-density-section-space(-desktop)` (aliases of existing Body large / Body and space tokens).

## [0.2.0] - 2026-10-24

Rebuilt on the Figma page "ACCS Design System - 2026" (file `HhZBfgDKt4aMudftxOP4Jg`). The earlier invented ACCS direction is removed.

### BREAKING
- Tokens, themes and CSS variables use the Figma names: `color/action/default` -> `--ds-action-default`, `color/text-primary` -> `--ds-text-primary`, `color/secondary/bg` -> `--ds-secondary-bg`, `type/h1` -> `--ds-type-h1-*`, `space/16` -> `--ds-space-16`, `radius/6` -> `--ds-radius-6`.
- Removed: invented `blue/ink/teal/sun(ACCS)/green/amber/red/rose/olive/sky` scales, `viz-*` tokens, the 11-step type scale (`text-xs..7xl`), the 4px-multiple `space-*` keys, `radius-pill`, and the old themes. `--accs-radius-card` is now 8px (Figma card radius) instead of 12px.
- Purple is restored as the Figma `accent` family; teal is `secondary`.
- Tailwind breakpoints are `tablet` / `desktop` / `wide` (600 / 1024 / 1440), defaults removed. Components renamed to match Figma (`.ds-btn--destructive`, `.ds-badge--*`, ...); `components/admin/*` replaced by `components/<category>/*`.
- Theme names: `accs-landing` and `accs-admin` (Figma LIGHT), `accs-admin-dark` (DARK), `meetingatten`, `meetingatten-dark`.

### Added
- `scripts/import-figma.mjs` (regenerates Figma-sourced tokens), `scripts/parity.mjs` (verifies all values and writes `docs/figma-parity.md`), Figma export in `figma/` with slices.
- Specs for all 48 Figma components, including Announcement Card, Forum Card, Consultation Slot, Case Timeline, Privacy Notice, Reports Table, Report Record, View State, Role/Status/Severity badges, Sidebar, Top Bar, Mobile Header, Inline Alert.
- Official logos in `assets/logo/`; placeholder icon sprite in `assets/icons/` (Figma icon geometry pending).
- Templates and preview rebuilt in the Figma frames' visual language, with real ACCS copy.

### Changed
- Meeting At 10 themes rebuilt on the same token structure and type scale (sun secondary, paper canvas, ink actions); hero punctuation spacing fixed.
- Docs synced with the Figma frame text (foundations, voice, accessibility, iconography, responsive).

## [0.1.0] - 2026-10-24

Initial invented direction (superseded by 0.2.0).
