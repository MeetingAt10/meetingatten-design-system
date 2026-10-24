# Components

Specs mirror the 48 Figma components of the page "ACCS Design System - 2026" 1:1: same names (`ACCS 2026 / Category / Family`), variant axes, sizes, radii, paddings, gaps and copy. Figma states: Default, Hover, Pressed, Focus, Disabled, Error, Loading where applicable; Selected, Expanded, Availability and Appearance are separate axes. Focus means keyboard focus-visible; "active" is always named Pressed.

Styles: `src/css/components/<category>/<name>.css` (built to `dist/components.css`). React components: `src/react/<category>/<Name>.tsx` (built to `dist/react/`, imported from `@meetingat10/design-system/react`), on React Aria Components. Proposed, not approved. Complete token/component mapping: [docs/figma-parity.md](../docs/figma-parity.md). Live demos in light and dark: the design system site (`site/`).

| Figma component | Spec |
|---|---|
| `Control / Button Primary`, `Control / Button Secondary`, `Control / Button Tertiary`, `Control / Button Destructive` | [control/button.md](control/button.md) |
| `Control / Text Field` | [control/text-field.md](control/text-field.md) |
| `Control / Text Area` | [control/text-area.md](control/text-area.md) |
| `Control / Select` | [control/select.md](control/select.md) |
| `Control / Select Option` | [control/select-option.md](control/select-option.md) |
| `Control / Checkbox` | [control/checkbox.md](control/checkbox.md) |
| `Control / Radio` | [control/radio.md](control/radio.md) |
| `Control / Search` | [control/search.md](control/search.md) |
| `Control / Icon Button` | [control/icon-button.md](control/icon-button.md) |
| `Navigation / Sidebar` | [navigation/sidebar.md](navigation/sidebar.md) |
| `Navigation / Top Bar` | [navigation/top-bar.md](navigation/top-bar.md) |
| `Navigation / Mobile Header` | [navigation/mobile-header.md](navigation/mobile-header.md) |
| `Navigation / Item` | [navigation/item.md](navigation/item.md) |
| `Navigation / Link` | [navigation/link.md](navigation/link.md) |
| `Navigation / Tab` | [navigation/tab.md](navigation/tab.md) |
| `Badge / Role` | [badge/role.md](badge/role.md) |
| `Badge / Status` | [badge/status.md](badge/status.md) |
| `Badge / Severity` | [badge/severity.md](badge/severity.md) |
| `Content / Announcement Card` | [content/announcement-card.md](content/announcement-card.md) |
| `Content / Forum Card` | [content/forum-card.md](content/forum-card.md) |
| `Scheduling / Consultation Slot` | [scheduling/consultation-slot.md](scheduling/consultation-slot.md) |
| `Data / Case Timeline` | [data/case-timeline.md](data/case-timeline.md) |
| `Data / Reports Table` | [data/reports-table.md](data/reports-table.md) |
| `Data / Report Record` | [data/report-record.md](data/report-record.md) |
| `Data / View State` | [data/view-state.md](data/view-state.md) |
| `Feedback / Privacy Notice` | [feedback/privacy-notice.md](feedback/privacy-notice.md) |
| `Feedback / Toast` | [feedback/toast.md](feedback/toast.md) |
| `Feedback / Modal` | [feedback/modal.md](feedback/modal.md) |
| `Feedback / Inline Alert` | [feedback/inline-alert.md](feedback/inline-alert.md) |
| `Identity / Logo Horizontal`, `Identity / Logo Stacked`, `Identity / Logo Compact Minimum` | [identity/logo.md](identity/logo.md) |
| `Icon / Search`, `Icon / Menu`, `Icon / Chevron`, `Icon / Bell`, `Icon / Calendar`, `Icon / Forum`, `Icon / Report`, `Icon / Shield`, `Icon / Check`, `Icon / Alert`, `Icon / Close`, `Icon / User`, `Graphic / Navigation Overview` | [icon/icon.md](icon/icon.md) |

## Container and N/A rules (from Figma 08)

- Announcement/Forum Card, Reports Table, Report Record, Sidebar, Top Bar, Mobile Header and Toast keep their master IDs; their action controls are native exposed instances and the static body has no Hover/Pressed state.
- Error on buttons is N/A: persistent adjacent alerts carry errors. Loading for links, navigation, tabs, search results and radio groups belongs to the destination or data region.
- Disabled menus cannot be expanded. No Booked+Selected or Unavailable+Enabled slot combinations.

## Repo-owned components (NOT IN FIGMA, Phase 1)

| Component | React | Spec |
|---|---|---|
| Field | `Field` | [control/field.md](control/field.md) |
| ComboBox | `ComboBox` | [control/combobox.md](control/combobox.md) |
| Switch | `Switch` | [control/switch.md](control/switch.md) |
| DatePicker, Calendar | `DatePicker`, `Calendar` | [control/date-picker.md](control/date-picker.md) |
| FileUpload | `FileUpload` | [control/file-upload.md](control/file-upload.md) |
| Spinner | `Spinner` | [feedback/spinner.md](feedback/spinner.md) |
| Progress | `Progress` | [feedback/progress.md](feedback/progress.md) |
| Avatar | `Avatar` | [content/avatar.md](content/avatar.md) |
| Tile | `Tile` | [content/tile.md](content/tile.md) |
| Card, CardLink | `Card`, `CardHeader`, `CardMeta`, `CardLink` | [content/card.md](content/card.md) |
| Skeleton | `Skeleton` | [data/skeleton.md](data/skeleton.md) |
| Container, Stack, Grid | `Container`, `Stack`, `Grid` | [layout/container.md](layout/container.md), [layout/stack.md](layout/stack.md), [layout/grid.md](layout/grid.md) |
| Section, Section Header | `Section`, `SectionHeader` | [layout/section.md](layout/section.md), [layout/section-header.md](layout/section-header.md) |
| Hero, Feature Row, Wash, Divider | `Hero`, `FeatureRow` + `Feature`, `Wash`, `Divider` | [layout/hero.md](layout/hero.md), [layout/feature-row.md](layout/feature-row.md), [layout/wash.md](layout/wash.md), [layout/divider.md](layout/divider.md) |

## Phase 2: navigation and overlays (0.4.0)

| Component | React | Spec |
|---|---|---|
| Navbar | `Navbar` | [navigation/navbar.md](navigation/navbar.md) |
| App Shell | `AppShell` | [navigation/app-shell.md](navigation/app-shell.md) |
| Breadcrumbs | `Breadcrumbs` | [navigation/breadcrumbs.md](navigation/breadcrumbs.md) |
| Pagination | `Pagination` | [navigation/pagination.md](navigation/pagination.md) |
| Stepper | `Stepper` | [navigation/stepper.md](navigation/stepper.md) |
| Menu | `MenuButton`, `MenuItem` | [navigation/menu.md](navigation/menu.md) |
| Footer | `Footer` | [navigation/footer.md](navigation/footer.md) |
| Drawer | `Drawer` | [feedback/drawer.md](feedback/drawer.md) |
| Tooltip | `Tooltip` | [feedback/tooltip.md](feedback/tooltip.md) |
| Popover | `Popover` | [feedback/popover.md](feedback/popover.md) |
| Empty State | `EmptyState` | [feedback/empty-state.md](feedback/empty-state.md) |

React components for the Figma components above: `Button`, `IconButton`, `TextField`, `TextArea`, `Select` + `SelectOption`, `Search`, `Checkbox`, `RadioGroup` + `Radio`, `Link`, `Badge`, `Icon`, `Sidebar` + `NavItem`, `TopBar`, `MobileHeader`, `Tabs`, `Alert` (Inline Alert), `ToastRegion` + `toast()`, `Modal`. ACCS patterns (Phase 3, 0.5.0): `AnnouncementCard`, `ForumCard`, `ConsultationSlotPicker`, `CaseTimeline`, `ReportsTable`, `ReportRecord`, `PrivacyNotice` (specs in the table above). View State stays CSS-only; use `EmptyState` for empty views. All 55 catalog components are now in `@meetingat10/design-system/react`.
