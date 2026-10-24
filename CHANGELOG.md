# Changelog

Format: [Keep a Changelog](https://keepachangelog.com). Versioning: [SemVer](https://semver.org); while `0.x`, breaking changes bump the minor and are marked **BREAKING**.

## [0.5.0] - 2026-10-25

Phase 3: ACCS patterns, completing the 55-component catalog. Spec: `context/deltas/2026-10-25-v0.5.0-phase3.md`.

### Added
- `AnnouncementCard`, `ForumCard` (whole card one link, named by its title), `ConsultationSlotPicker` (day toggle group + one slot radio group, loading and error messages), `CaseTimeline`, `ReportsTable` (caption, column headers, reference as row header, named actions, empty message), `ReportRecord`, `PrivacyNotice`.
- CSS: React Aria selected state on `.ds-day` and `.ds-slot`, `.ds-card__action`, `.ds-record__facts`, row-header cells in `.ds-table`.
- Site: demos for all patterns; examples use them (Reports Table on desktop, Report Records on mobile).

### Fixed
- `.ds-notice__foot` now gets its caption font (the `.ds-notice p` rule overrode it).

## [0.4.0] - 2026-10-25

Phase 2: navigation and overlays. Spec: `context/deltas/2026-10-25-v0.4.0-phase2.md`.

### Added
- Navigation: `Navbar` (mobile menu panel), `Sidebar` + `NavItem` + `SidebarNote`, `AppShell`, `TopBar`, `MobileHeader`, `Tabs` / `TabList` / `Tab` / `TabPanel`, `Breadcrumbs`, `Pagination` (+ `pageList`), `Stepper`, `MenuButton` + `MenuItem`, `Footer`.
- Feedback: `Alert`, `ToastRegion` + `toast()` (React Aria toast, `UNSTABLE_` in 1.22.1, pinned), `Modal` + `ModalActions` + `DialogTrigger`, `Drawer`, `Tooltip`, `Popover`, `EmptyState`.
- CSS: `.ds-navbar`, `.ds-breadcrumbs`, `.ds-pagination`, `.ds-stepper`, `.ds-footer`, `.ds-modal-overlay`, `.ds-drawer`, `.ds-tooltip`, `.ds-popover-panel`, `.ds-empty`, `.ds-toast-region`, `.ds-tab-panel`, `.ds-option--danger`, `.ds-visually-hidden`.
- Site: demos for all Phase 2 components; examples now use the package's AppShell, Sidebar, TopBar, Tabs, Navbar, Breadcrumbs, MenuButton, Alert, EmptyState, Footer and toasts.

### Changed
- `.ds-toast` icon color applies only to its leading icon (`> .ds-icon`), so the inverse close button keeps its own color.

## [0.3.0] - 2026-10-24

Soft layers on the locked ACCS palette, a repo-owned treatments tier, strict Tailwind, split component CSS in cascade layers, the React layer with 31 Phase 1 components, and the public showcase site. Spec: `context/deltas/archive/2026-10-24-v0.3.0-rebuild.md`.

### BREAKING
- Removed the Meeting At 10 themes (`meetingatten`, `meetingatten-dark`), the `sun` and `paper` primitives, `themes/meetingatten/` and `templates/meetingatten-home.html`. The team site uses the ACCS themes.
- Themes are `data-theme="light"` and `data-theme="dark"`; without the attribute the page follows `prefers-color-scheme`. Removed theme names: `accs-landing`, `accs-admin`, `accs-admin-dark`, `accs-light`, `accs-dark`, and the `.theme-*` classes.
- Removed the legacy `--accs-*` CSS variables; use `--ds-*`.
- Removed `.ds-body--app`; set `data-density="compact"` instead.
- `preview/` and `templates/` removed; the site replaces them. `templates` dropped from the package `files`.
- `.ds-stack` no longer stretches its children when a sibling grid column is taller (`align-content: start`).
- `themes/accs-admin/` and `themes/accs-landing/` replaced by `themes/light-dark.md` and `themes/density.md`.

- Tailwind is strict: `--color-*: initial`, Figma primitives no longer exposed (`bg-neutral-500`, `bg-brand-*`), legacy `ink`, `ink-secondary`, `line` removed. `rounded-overlay` and `shadow-raised` (elevation) replaced by `rounded-card` (12px) and `shadow-card` / `shadow-overlay`.

- Component CSS moved from `src/components.css` to `src/css/**` (one file per component); `dist/components.css` is now wrapped in `@layer ds.base, ds.components, ds.utilities`, so app CSS overrides it without `!important`.
- Soft layers: cards, table container, report record and view state are borderless with `card-shadow` and radius 12; modal, toast and listbox use `overlay-shadow`; inline alert and consultation slot radius 8. `.ds-card--raised` removed (cards are raised by default).

### Added
- GitHub Actions: `ci.yml` (checks, types, tests, committed-build diff, site build on every PR) and `deploy-site.yml` (tag push deploys the site to S3 + CloudFront through AWS OIDC; inert until the infra variables exist).
- `site/`: public showcase (Next.js 16 static export). Renders the markdown specs with live light/dark demos (component demos plus color swatches and the type scale), props tables generated from the TypeScript types, four example pages (landing, admin overview, sign-in, report detail), per-page title, description, canonical URL and Open Graph image, `sitemap.xml` and `robots.txt`.
- React layer: `@meetingat10/design-system/react` (React Aria Components 1.22.1, compiled with `tsc` to `dist/react/`, `"use client"` kept), starting with `Button` (variants, `size`, `block`, `loading`). `npm test` (Vitest + Testing Library + axe), `npm run typecheck`.
- Interactive cards (`a.ds-card`, `button.ds-card`, `.ds-card[data-interactive]`) lift 2px on hover; reduced motion keeps only the shadow change.
- `.ds-wash`, `.ds-tile` (+ `--secondary`, `--accent`, `--neutral`), `.ds-features` / `.ds-feature`, `.ds-divider`.
- React Aria state attributes (`[data-hovered]`, `[data-pressed]`, `[data-focus-visible]`, `[data-disabled]`) matched alongside native and forced states; `--ds-ring` focus-ring variable; `--ds-size-eyebrow(-line)`.
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
