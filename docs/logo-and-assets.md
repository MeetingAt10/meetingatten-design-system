# Logo and assets

The Meeting At 10 calendar logo is the design system's main logo (user decision 2026-10-25). ACCS surfaces (landing, portal, admin) keep the door plate as the ACCS wordmark, and the proposed ACCS logo files are still not approved.

## Meeting At 10 logo

A navy calendar with two binding tabs; its paper page holds one blue appointment block with a white "10". It is the user's artwork, used as drawn, and it names the system: Meeting At 10 Design System. The package name stays `@meetingat10/design-system`.

| File | Use | Minimum size |
|---|---|---|
| `assets/logo/meeting-at-10.svg` | The original artwork, for light grounds: navy frame and tabs (`#031B38`), paper page (`#F7F8FA`), blue block (`#0075FF`), white 10 | 24px in interface, 16px as a favicon |
| `assets/logo/meeting-at-10-dark.svg` | For dark grounds: light frame and tabs (`#E8EEF7`) around a navy page (`#031B38`); same block and numeral | 24px in interface, 16px as a favicon |
| `assets/logo/meeting-at-10-auto.svg` | Shows the light or the dark artwork by the OS color scheme; for favicons | 16px |

Each file is a 512 x 512 square. They ship in the package: import them from `@meetingat10/design-system/assets/logo/<file>`, or copy them into the app's public folder. Navy, paper, blue and frost are the identity colors (`color.identity.m10-*`), kept apart from the 54-primitive palette and never used as interface color ([color](../foundations/color.md)); the numeral is white.

### Light, dark and inverse grounds

| Ground | Use |
|---|---|
| A page with a theme | The `Logo` component: its frame and page follow `data-theme` and the OS fallback |
| Light ground, static image | `meeting-at-10.svg` |
| Dark ground, static image | `meeting-at-10-dark.svg` |
| Inverse bar or door-plate band | `<Logo inverse />`: the frame and page swap (a light frame around a navy page on a dark bar in the light theme, a navy frame around a paper page on a light bar in dark) |
| Follows the OS (favicons, READMEs) | `meeting-at-10-auto.svg`, or a `<picture>` with a dark source. Both follow the OS, not the page's `data-theme`, so inside pages use the component |

Never put the light artwork on a dark ground: the navy frame disappears and the calendar loses its outline.

```html
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="meeting-at-10-dark.svg">
  <img src="meeting-at-10.svg" width="72" height="72" alt="Meeting At 10">
</picture>
```

### Favicon, app icon and Open Graph image

| Asset | Rule |
|---|---|
| Favicon | `meeting-at-10-auto.svg` as an SVG icon (`<link rel="icon" type="image/svg+xml" href="/logo/meeting-at-10-auto.svg">`); it switches to the dark artwork with the OS |
| App icon (apple touch icon) | 180 x 180 PNG: the original artwork, about 136px, centered on its own paper (`m10-paper`), because iOS paints transparent corners black |
| Open Graph image | 1200 x 630 on the navy plate: `meeting-at-10-dark.svg` at 64px beside the name, then the page title and description in white. No gradients; text at least 4.5:1 |

The design system site uses all three.

### React and plain CSS

| Use | Markup |
|---|---|
| Header and footer brand | `<Logo />` |
| Hero plate | `<Logo size="lg" code="DS 1.0" />` |
| Inverse bar | `<Logo size="sm" code="DS 1.0" inverse />` |
| Mark alone | `<Logo markOnly label="Meeting At 10" />` |
| Plain CSS | `<span class="ds-logo">` with the inline mark, the name and an optional code |

Spec: [Logo](../components/identity/logo.md). The component draws the mark inline, so it follows the theme and forced colors; an `<img>` of a file follows neither the page theme nor forced colors.

### Clear space and misuse

| Rule | Value |
|---|---|
| Clear space | At least a quarter of the mark's height on every side (8px at 32px); the component's gap to the name meets it |
| Minimum size | 24px in interface; 16px only as a favicon |
| Don't redraw | Use the component or the files as exported |
| Don't recolor | Only the light, dark and auto versions; the identity colors stay in the logo |
| Don't stretch | Keep the square |
| Don't add effects | No shadow, glow, outline or bevel |
| Don't mix brands | The calendar mark is not the ACCS brand; the ACCS marks never appear on Meeting At 10 surfaces |

## Door plate: the ACCS wordmark

On ACCS surfaces the brand is the faculty-door name plate: "ACCS" in Plus Jakarta Sans 800 on the plate colors (navy with white text in light, pale blue with dark text in dark), with an optional room code or tagline. It is text, so it scales, themes and reads in forced colors without extra artwork. It stays the ACCS wordmark until an ACCS logo is approved.

| Use | Markup |
|---|---|
| Navbar, sidebar, footer | `<DoorPlate />`, `<DoorPlate code="CCS" />` |
| Mobile header | `<DoorPlate size="sm" />` |
| Hero | `<DoorPlate size="lg" tagline="Access for College of Computer Studies" />` |
| Plain CSS | `<span class="ds-plate"><span class="ds-plate__name">ACCS</span></span>` |

Spec: [Door Plate](../components/identity/door-plate.md). When the plate is the only brand text in a link, name the link ("ACCS home").

## Proposed ACCS logo files

The linked-C direction: two open C forms meet through a shared link. It is **proposed, not approved**; institutional logo approval is pending. Do not call it final and do not imply an official seal or endorsement. Show it only where the team has agreed to, for example in a review.

| File | Use | Minimum size |
|---|---|---|
| `assets/logo/logo-horizontal.svg` | Symbol, ACCS and "Access for College of Computer Studies" | 240px wide |
| `assets/logo/logo-stacked.svg` | Narrow placements | 160px wide |
| `assets/logo/logo-compact-minimum.svg` | Symbol and ACCS wordmark | 130px wide |

Use the files as exported, as images with `.ds-logo-file` (32px tall by default; set `--logo-h` to change it) or `.ds-logo-file--compact` (28px). Mark-only minimum 24 x 16px; omit the tagline below 480px. Give the image `alt="ACCS"` when it stands alone and `alt=""` when the name is already in adjacent text.

| Treatment | Rule |
|---|---|
| Full color | `#032E87` on white or the light canvas; the only version in the repo |
| Dark surfaces | The files do not adapt to the dark theme or forced colors; place the mark on a light `surface` plate, or use the door plate |
| Recoloring | Never recolor or redraw the mark |
| Clear space | 2x on all sides, where x is the mark's stem thickness; no content, rules or imagery inside it |
| Misuse | Don't stretch, use low-contrast pairs, add decorative accents, or add shadow, glow, outline or bevel |

## Other assets

| Asset | Status |
|---|---|
| Favicon, app icons, Open Graph images | Meeting At 10 surfaces, including this site, carry the calendar mark (see above). ACCS surfaces derive theirs from an approved ACCS logo once there is one; until then they use the door-plate wordmark on the plate colors |
| Illustrations | None. Empty states use drawn geometry (an empty ruled sheet), not illustrations |
| Photos | Only with consent. Examples use initials on invented names |
| Icons | [Iconography](iconography.md) |
