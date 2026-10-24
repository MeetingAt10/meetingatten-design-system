# Components

Specs mirror the 48 Figma components of the page "ACCS Design System - 2026" 1:1: same names (`ACCS 2026 / Category / Family`), variant axes, sizes, radii, paddings, gaps and copy. Figma states: Default, Hover, Pressed, Focus, Disabled, Error, Loading where applicable; Selected, Expanded, Availability and Appearance are separate axes. Focus means keyboard focus-visible; "active" is always named Pressed.

Reference styles: `src/components.css` (built to `dist/components.css`), static reference only: not production behavior and not approved. Complete token/component mapping: [docs/figma-parity.md](../docs/figma-parity.md). Live state matrices: `preview/index.html`.

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
