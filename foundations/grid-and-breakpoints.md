# Grid and breakpoints

Four breakpoints, a 4, 8 or 12 column page grid, a 1280px content column and a 680px reading column.

Content grows naturally. Columns stack in task order on small screens, and safety copy never truncates.

## Breakpoints and grid

| Range | Token (min-width) | Columns | Gutter | Margin | Navigation |
|---|---|---|---|---|---|
| 320-599px | `--ds-breakpoint-mobile` 20rem | 4 | 16px | 16px | Mobile header, drawer navigation |
| 600-1023px | `--ds-breakpoint-tablet` 37.5rem | 8 | 24px | 24px | Mobile header; the landing navbar shows its links from 768px |
| 1024-1439px | `--ds-breakpoint-desktop` 64rem | 12 | 24px | 32px | Sidebar (16rem) and top bar |
| 1440px and up | `--ds-breakpoint-wide` 90rem | 12 | 24px | 48px | Sidebar and top bar |

| Width | Value | Token |
|---|---|---|
| Content column | 1280px | `--ds-grid-content-max` |
| Reading column | 680px | `--ds-grid-reading-max` |
| Sidebar | 16rem | `--ds-size-sidebar-w` |
| Time column (timetable) | 3.5rem | `--ds-size-time-col` |

Source: `tokens/foundations/grid.json`. Media queries cannot read CSS variables, so the CSS uses the literal values 600px, 1024px and 1440px (and 768px for the navbar links and agenda rows).

## Layout classes

| Class | Behavior |
|---|---|
| `.ds-container` | Centered column: 1280px plus the margin for the current breakpoint. `--reading` (680px), `--wide` (1440px) |
| `.ds-cols` | One column on phones; two from 600px. From 1024px: `--3`, `--4`, `--main` (2fr + 1fr), `--split` (5fr + 7fr, the hero split) |
| `.ds-section` | Vertical density rhythm (see [density.md](../themes/density.md)) |
| `.ds-only-mobile`, `.ds-only-desktop` | Hide below or from 1024px |

React: [Container](../components/layout/container.md), [Grid](../components/layout/grid.md), [Section](../components/layout/section.md), [AppShell](../components/navigation/app-shell.md).

## Responsive behavior

| Pattern | Phones | From 1024px |
|---|---|---|
| App shell | Mobile header, navigation in a drawer | Sidebar beside the top bar and content |
| Timetable | Scrolls sideways with the time column pinned; opens on today | The whole week fits |
| Reports | [ReportRecord](../components/data/report-record.md) rows | [ReportsTable](../components/data/reports-table.md) |
| Hero | Copy, then the timetable below | Copy on 5 columns, timetable on 7 |
| Modal | Bottom sheet | Centered dialog |
| Stepper | Vertical list | Horizontal timeline from 600px |

## Rules

| Rule | Detail |
|---|---|
| Task order | When columns stack, the task order and safety copy stay intact |
| Reflow | Works at 320px wide and 200% text without two-dimensional page scrolling (wide tables and the timetable scroll inside their own region) |
| Truncation | Truncate only optional metadata, never labels, errors, states or safety guidance |
| Measure | Prose stops at 680px even on wide screens |

## Tailwind

Breakpoints are `tablet:` (600px), `desktop:` (1024px) and `wide:` (1440px); Tailwind's defaults are removed. Containers: `max-w-content` (currently 75rem in `dist/tailwind.css`, not yet 1280px), `max-w-reading` (680px), `w-sidebar` (16rem).
