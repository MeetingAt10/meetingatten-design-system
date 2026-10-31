# Changelog

Format: [Keep a Changelog](https://keepachangelog.com). Versioning: [SemVer](https://semver.org); while `0.x`, breaking changes bump the minor and are marked **BREAKING**.

## [1.1.0] - 2026-11-01

Additive minor release: the "Office Hours, after hours" expressive layer for the marketing surfaces (the ACCS landing, the Meeting At 10 site and the showcase). No breaking changes; no existing component, token or class changed. The portal look is untouched.

### Added
- Motion tokens: durations `cinematic` (720ms), `stagger` (70ms), `ambient` (9000ms), `drift` (24000ms) and `marquee` (48000ms); ease `emphasized`; distances `reveal` (24px) and `float` (10px). Emitted as `--ds-motion-*` variables, in `tokens.json` and in `src/react/lib/motion.ts` (`duration`, `ease`, `distance`). Treatment `art-shadow` (`--ds-art-shadow`), the ink shadow under a render.
- CSS (`src/css/components/expressive/`, in `ds.components`): `.ds-reveal` (`--fade`, `--scale`, `--start`, `--end`, `--ds-reveal-index`), `.ds-word-rise` and `.ds-word-rise__word`, `.ds-art` and `.ds-art--float`, `.ds-parallax`, `.ds-aurora` and `.ds-aurora__blob`, `.ds-grid-backdrop`, `.ds-marquee` (`__track`, `__group`, `--reverse`), `.ds-spotlight` (`--community`, `--consult`, `--tilt`), `.ds-orbit` (`__core`, `__ring`, `__item`, `__upright`), `.ds-scroll-progress`. Scroll-driven effects sit in `@supports (animation-timeline: ...)`; every animation sits in `@media (prefers-reduced-motion: no-preference)`; content is visible by default.
- React: `Reveal`, `WordReveal`, `FloatingArt`, `ParallaxScene`, `Parallax`, `Marquee`, `SpotlightCard`, `Aurora`, `GridBackdrop`, `Orbit`, `CountUp` and `ScrollProgress`, plus the `imagery` record and `ImageryName` type (generated from `assets/imagery/imagery.json`).
- Imagery: twenty transparent 3D WebP renders in `assets/imagery/` (exported as `@meetingat10/design-system/assets/imagery/<name>.webp`), the manifest `imagery.json` and the keying script `scripts/key-imagery.py`.
- Docs: `foundations/imagery.md`; an "Expressive layer" section, new tokens and amended rules in `foundations/motion.md`; twelve component specs under `components/expressive/`; the Hero `art` guidance; an Expressive paragraph in `DESIGN.md`; this release in the README.
- Site: a redesigned home page that uses the layer (word-rise headline, aurora and grid backdrop, a constellation of floating renders, a marquee of component names, spotlight cards, count-up stats computed from the repo, scroll reveals and a progress bar), and a demo for each new component in the components gallery.

### Changed
- `foundations/motion.md` rules: decorative loops (float, aurora drift, orbit, marquee) are allowed only in the expressive layer, only on marketing surfaces, never inside portal workflows; all stop under reduced motion.

## [1.0.1] - 2026-10-25

Site only; the package is unchanged from 1.0.0.

### Changed
- The components index is a gallery of every component's default demo, grouped by category; each tile opens the component's page.

### Fixed
- The apple touch icon is served at `/apple-icon.png`; the CDN rewrote the extensionless `/apple-icon` to a page.

## [1.0.0] - 2026-10-25

**BREAKING.** The "Office Hours" redesign: every component and style rewritten around the weekly consultation timetable on a CCS faculty door. Spec: `context/deltas/2026-10-25-v1.0.0-office-hours.md`. Migration: `docs/migrating-apps.md`.

### BREAKING
- Figma is no longer a reference (user decision 2026-10-25). Removed `figma/`, `scripts/import-figma.mjs`, `scripts/parity.mjs`, `npm run import:figma`, `npm run check:parity`, `tokens/figma-known-failures.json`, `docs/figma-parity.md` and `assets/icons/figma/`. `tokens/` is the source.
- The system is named "Meeting At 10 Design System" in the site and docs (user decision 2026-10-25); the package name `@meetingat10/design-system` is unchanged. Its main logo is the Meeting At 10 calendar mark; ACCS surfaces keep the door plate as the ACCS wordmark.
- Icons are Phosphor. `Icon name` takes the curated vocabulary in `assets/icons/icons.json`; old names changed (`menu` to `list`, `chevron` to `caret-*`, `forum` to `chat`, `report` to `file`, `shield` to `lock`, `alert` to `warning`, `close` to `x`, `home` to `house`). The sprite has `#ds-NAME`, `#ds-NAME-fill` and `#ds-NAME-duotone` symbols.
- Removed `FeatureRow` and `Feature` (use `Agenda` and `AgendaItem`) and `Wash` (use `Highlight`, a highlighter text mark; there are no background washes).
- Removed `eyebrow` from `Hero` and `SectionHeader`, and `.ds-eyebrow`. `Hero`: `aside` and `wash` replaced by `art`, `plate` and `note`. `SectionHeader`: `action` renamed `actions`; adds `split` and `id`. `Section`: `band` and `wash` replaced by `tone` (`canvas`, `sheet`, `plate`), `tight`, `bleed`.
- `Alert` tone `error` renamed `danger`; adds `neutral`, `icon`, `actions`, `onDismiss`. `Badge` tones `secondary` and `accent` renamed `consult` and `community`; adds `form` (`solid`, `pending`, `restricted`, `taken`, `closed`), `marker`, `outline`. `Tile` tones `info`, `secondary`, `accent` became `schedule`, `consult`, `community`.
- Changed props: `Avatar size` is now 24, 32, 36, 48 or 64; `IconButton inverse` replaced by `variant`; `Link inline` replaced by `variant`; `Tooltip` no longer wraps its trigger (use `TooltipTrigger`); `Drawer placement` renamed `side` (adds `bottom`); `EmptyState icon` and `tone` removed; `FileUpload onSelect` renamed `onChange`; `Sidebar logo` renamed `brand`; `Skeleton short` replaced by `shape`, `width`, `height`; `ConsultationSlot state "available"` renamed `"open"`.
- Treatments rewritten: `card-bg`, `card-shadow`, `card-shadow-hover`, `wash-*`, `radius-card` and `radius-tile` replaced by the materials (`sheet-*`, `block-shadow`, `overlay-*`, `plate-shadow`, `btn-highlight`, `rule-minor`, `highlight-*`, `today-bg`, `hatch`, `hatch-strong`, `scrim`, `dim`, `lift`, `drop`, `rise`, `radius-sheet|block|control|chip|overlay|plate`). Tailwind: `bg-card`, `shadow-card*`, `wash-*`, `rounded-card`, `rounded-tile` removed; use `bg-surface`, `shadow-block`, `shadow-overlay`, `bg-highlight-*`, `rounded-*`, `hatch`, `plate`.
- CSS classes renamed or removed, among them `.ds-notice` (now `.ds-privacy`), `.ds-app*` (now `.ds-shell*`), `.ds-mono` (use `.ds-time`), `.ds-alert--error`, `.ds-badge--secondary|accent`, `.ds-tile--secondary|accent`, `.ds-avatar--sm|lg`, `.ds-icon-btn--inverse`. Full table in `docs/migrating-apps.md`.
- The proposed ACCS logo images use `.ds-logo-file` and `.ds-logo-file--compact` (were `.ds-logo` and `.ds-logo--compact`); `.ds-logo` is now the `Logo` component.
- New type scale: display (fluid, 800), H1 (fluid, 800), H2 (fluid, 700), H3 20px, H4 17px, body large 18/29, body 16/26, body small 14/22, label, caption, code, and the new `time` style. Density `comfortable` now uses Body text and 64/96px sections; `compact` uses Body small and 24/32px sections.

### Added
- The Office Hours world: sheets, rules, blocks in lanes (schedule, community, consult, restricted), highlighter washes, hatching, the door plate, the now-line, and line-form states (solid, dashed, hatched, struck) always paired with words.
- Theme tokens (palette unchanged): `now`, `hatch-ink`, `inverse-bg`, `inverse-fg`, `inverse-muted`, `plate-bg`, `plate-fg`. Foundations: space 2, 12, 20, 128; radius 2 and 16; sizes for the hour row (48, compact 40), time column, now-line, focus ring (2px, 2px gap) and rule; shadows `lift`, `overlay` and their dark versions; motion durations, eases, springs (CSS `linear()` curves with settle durations, and Motion configs) and distances; z-index `drawer` and `tooltip`.
- Libraries: `@phosphor-icons/react` (weights carry meaning; full set at `@meetingat10/design-system/icons`), `motion` (toast swipe and stack, drawer bottom-sheet swipe, timetable block drop and layout), `@number-flow/react` (Progress and Meter digits), fontsource variable fonts (`dist/fonts.css`, optional). React Aria `SelectionIndicator` slides the tab, segment and day indicators in CSS.
- `DesignSystemProvider` (MotionConfig `reducedMotion="user"`, RouterProvider `navigate` and `useHref`, `locale`); `duration`, `ease`, `spring`, `distance` exports; `Lane`, `Key`, `Selection` and `SortDescriptor` types.
- New components: `TimeBlock`, `NowLine` (with `useNow`, `hoursOf`, `clockOf`), `Timetable`, `DoorPlate`, `SegmentedControl` and `Segment`, `TagGroup` and `Tag`, `Kbd`, `CommandPalette`, `Disclosure` and `Accordion`, `Meter`, `Table` (with `TableHeader`, `Column`, `TableBody`, `TableRow`, `Cell`), `ViewState`, `Agenda` and `AgendaItem`, `Highlight`, `RoleBadge`, `Severity`, `CheckboxGroup`, `AvatarGroup`, `SidebarSection`, `MenuSection`, `MenuSeparator`, `ModalBody`, `TooltipTrigger`, and the card parts `CardLane`, `CardWhen`, `CardTitle`, `CardBody`, `CardAction`.
- New props: `Button` `size="lg"`, `icon`, `iconEnd`, `href` and the `plate` variant; `AppShell` `mobileBrand`, `mobileNav`, `mobileActions`, `contentId`, `density`; `TopBar` `titleAs`; `Container width`; `Grid columns` 4 and `split`; `Stack gap` 4 to 48; `Card link` and `flush`; `Modal size` and `role="alertdialog"`; and more in each spec.
- `src/css/base/motion.css` (shared keyframes, reduced-motion rule) and `.ds-sheet`, `.ds-time`, `.ds-prose`, `.ds-skip-link`, `.ds-isolate`.
- Site rebuilt in the new world: home week sheet, foundations with live springs and materials, component pages without Figma sections, and examples for the ACCS landing, admin overview, report detail, sign-in and Meeting At 10.
- `Logo`: the Meeting At 10 calendar mark beside the name, the system's main logo; sizes `sm`, `md`, `lg`, `xl`, plus `code`, `markOnly`, `inverse` and `label`. The mark follows the theme and is redrawn in system colors under forced colors.
- Logo files `assets/logo/meeting-at-10.svg` (the original artwork, light grounds), `meeting-at-10-dark.svg` (dark grounds) and `meeting-at-10-auto.svg` (follows the OS color scheme). Identity colors `color.identity.m10-navy`, `m10-paper`, `m10-blue`, `m10-frost` (logo only, outside the 54 primitives) and the treatments `logo-frame`, `logo-page`, `logo-frame-inverse`, `logo-page-inverse`, `logo-block`, `logo-numeral`.
- Site: the `Logo` in the header, footer, home hero and patterns bar; `meeting-at-10-auto.svg` as the favicon, an apple touch icon, and the mark on Open Graph images.

### Changed
- Every component restyled: Button (block shapes, pending sweep line), Checkbox (drawn check), Switch (spring thumb), Calendar (today dot, selected block, struck unavailable days), FileUpload (dashed drop sheet, progress lines), NavItem (current item is a solid navy block with a fill icon), Tabs (sliding rule), Pagination (current block), Stepper (timeline), Alert (tinted sheet with a solid icon block, no stripe), Toast (inverse sheet, timer line, swipe, stack of three), Drawer (side and bottom sheet), Tooltip (ink plate), EmptyState (empty ruled sheet), Progress (rolling value), Spinner (clock hand), PrivacyNotice (hatched band with a lock), Skeleton (dashed blocks), Card (flat sheet, lifts only when linked), Tile (solid lane block, duotone icon), CaseTimeline (vertical time rule), ConsultationSlotPicker (day strip, slot blocks in line forms).
- Focus ring is 2px with a 2px gap (was 3px). Sidebar is an `<aside>` named "{label} sidebar" around its navigation. Content max width is 1280px.
- `Table` with `selectionMode` adds a check column: "Select all" heads it when multiple, and each row's checkbox is named by its row header ("Select DEMO-024"), so selection never rests on the row tint. `Checkbox` children are optional for that slot. Dates in a `<time>` never break inside a table cell.
- A labeled `Divider` is plain text between drawn rules; it was `role="separator"`, whose text screen readers skip.
- `AnnouncementCard` links carry the card title as hidden text ("Read update: …"), so several cards on a page have distinct link names. `Footer` links use the router-aware Link. `RoleBadgeProps` is exported.
- Counts and readings (navigation, tab, day and field counts, progress and meter values, stepper numbers) are Inter with tabular figures; mono stays for times, codes and references. Unavailable consultation slots are drawn solid and struck (dashed means pending). In forced colors, severity bars keep their level (unlit bars are outlines).
- Docs rewritten for the new world; Figma provenance removed outside this changelog's history.

## [0.5.0] - 2026-10-25

Phase 3: ACCS patterns, completing the 55-component catalog. Spec: `context/deltas/archive/2026-10-25-v0.5.0-phase3.md`.

### Added
- `AnnouncementCard`, `ForumCard` (whole card one link, named by its title), `ConsultationSlotPicker` (day toggle group + one slot radio group, loading and error messages), `CaseTimeline`, `ReportsTable` (caption, column headers, reference as row header, named actions, empty message), `ReportRecord`, `PrivacyNotice`.
- CSS: React Aria selected state on `.ds-day` and `.ds-slot`, `.ds-card__action`, `.ds-record__facts`, row-header cells in `.ds-table`.
- Site: demos for all patterns; examples use them (Reports Table on desktop, Report Records on mobile).

### Fixed
- `.ds-notice__foot` now gets its caption font (the `.ds-notice p` rule overrode it).
- Accessibility sweep (axe in a real browser, every site page in light and dark, contrast included: 0 violations): `ForumCard` uses a stretched title link (`.ds-card--link`, `.ds-card__link`) so its link is named by the title alone; `ReportsTable` wraps the table in a focusable region named by its caption, so keyboard users can scroll it.

- With Tailwind, the design system's layers came after Tailwind's `utilities` (Tailwind declares its layers first), so utility classes such as `p-4` on a `Card` lost to the component's own styles. Tailwind apps now start their CSS with `@layer properties, theme, base, ds, components, utilities;` (README, site).
- Site: component pages have their own route, so guide and foundation pages no longer load the demo bundle (about 199 KB instead of 343 KB of gzipped JavaScript); the deploy workflow and the CloudFront exemption accept hashed Open Graph image names (`opengraph-image-<hash>`).

### Added
- `"sideEffects": ["*.css"]` in `package.json`, so app bundlers can drop components a page does not import.
- `docs/migrating-apps.md`: per-app steps for moving accs-landing, meeting@10-website and accs-system/frontend onto the package, and a known Next 16 Turbopack issue with `next/dynamic` around React Aria menu code.
- High contrast support (`forced-colors: active`): visible focus outline, container edges, and fill-only states redrawn with system colors (`src/css/base/forced-colors.css`; no change outside that mode). Checked with Chromium forced-colors emulation: button focus outline 2px, switch on-state and thumb visible, progress fill visible, selected tab underlined, cards edged.

### Added (for embedding and page headers)
- `AppShell` `contentAs="div"` for previews inside a page that already has a `<main>`; `SectionHeader` `level={1}` when it heads the page.

## [0.4.0] - 2026-10-25

Phase 2: navigation and overlays. Spec: `context/deltas/archive/2026-10-25-v0.4.0-phase2.md`.

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
