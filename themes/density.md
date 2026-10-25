# Density

`data-density` sets the running text, the section rhythm and the timetable hour rows. It adds no new values; it points at existing type, space and size tokens.

| Setting | `comfortable` (default, `:root`) | `compact` |
|---|---|---|
| Use | ACCS landing, Meeting At 10, sign-in, reading pages | Portal and admin screens (`accs-system/frontend`) |
| Running text (`--ds-density-text-*`) | Body 16/26 | Body small 14/22 |
| Section rhythm (`--ds-density-section-space`, `-desktop`) | 64px, 96px from 1024px | 24px, 32px from 1024px |
| Hour rows (`--ds-density-hour-row`) | 48px | 40px |
| Text fields, selects (fine pointers) | 48px | 40px with 14px text |
| Table cells | 12px vertical padding | 8px |
| Timetable day heads | 12px / 8px padding | 8px / 4px |

Colors come from the theme ([light-dark.md](light-dark.md)). Coarse pointers keep their 44px minimum in both settings.

## Setting it

```html
<html data-density="compact">
```

It works on any element. `.ds-body` and every element with `data-density` inside it re-apply the density text (font is inherited as a computed value, so it has to be set again where density changes). `.ds-section` uses the section rhythm and the timetable reads the hour row. [AppShell](../components/navigation/app-shell.md) takes `density="compact"` and sets the attribute on the shell.

## Compact guidance

| Topic | Guidance |
|---|---|
| Controls | Same components; fields and selects drop to 40px on fine pointers, buttons keep their sizes |
| Data | Tables over walls of cards on desktop; [ReportRecord](../components/data/report-record.md) rows on phones |
| Navigation | Sidebar (16rem) and 64px top bar from 1024px; mobile header and drawer below |
| Roles | Role badge and a note in the sidebar ("Own reports only (proposed permission)"); a role is not a privacy or status signal |
| Reports | Restricted-report pages keep the [PrivacyNotice](../components/feedback/privacy-notice.md) on the page, keep submission disabled until policy is confirmed, and use neutral titles and notifications |
| Schedule | 40px hour rows draw an 08:00 to 17:00 day in 360px instead of 432px |

## Comfortable guidance

| Pattern | Guidance |
|---|---|
| First viewport | Door plate, a display headline, one supporting line, the primary "Sign in" beside "Browse the community"; the week's timetable on the right with the hatched reports band and the now-line ([Hero](../components/layout/hero.md)) |
| Lanes | Community, consultations and reports as [Agenda](../components/layout/agenda.md) rows, never three same-size icon cards |
| Headings | No eyebrow or kicker above any heading |
| Proof | The interface at work with synthetic, labeled content (`DEMO`, "sample") |
| Privacy | State the boundary on the page: "Community access does not grant report access." |
| Footer | Door plate, a short description, link columns and "Proposed, not approved" while the identity is unapproved |

| Do | Don't |
|---|---|
| One primary action per region | Two solid primary buttons side by side |
| Honest copy ("sample", "proposed", "illustrative") | "Secure", "anonymous", "reply within 24 hours" |
| Keep the tagline exact: Your Access to the College of Computer Studies | Reword the tagline or imply an official seal |
| Label synthetic content `DEMO` | Real student names or data |

Examples on the design system site: ACCS landing, admin overview, report detail, sign-in and Meeting At 10 (`site/app/_site/examples/`).
