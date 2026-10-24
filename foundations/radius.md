# Radius

Source: the Figma "ACCS 2026 / Dimensions" scale (0, 4, 6, 8, 12) and Foundations 03.2. **The steps are Figma's; which component uses which step is repo-owned** (treatments, see [treatments.md](treatments.md)): soft containers, crisp controls.

| Treatment | Step | Use | Components |
|---|---|---|---|
| `radius-card` | `radius/12` | Containers | Card, Modal, scrim, Reports Table container, Report Record, View State |
| `radius-tile` | `radius/8` | Tiles and small floating surfaces | Tile, Inline Alert, Privacy Notice, Toast, Consultation Slot, Select listbox |
| `radius-control` | `radius/6` | Controls | Buttons, icon button, text field, text area, select trigger, select option, search, link, nav item, day |
| `radius-chip` | `radius/4` | Chips | Badge / Role, Status, Severity; checkbox box; skeleton |
| `radius/0` | 0 | Table cells | Reports Table cells |

Figma's original mapping (cards 8, overlays 12, controls 6, chips 4) changed for cards and alerts in 0.3.0 to give the soft-layers look; no new radius value was added. Pills are reserved for compact counts, not every surface.

Tailwind: `rounded-card` (12), `rounded-tile` (8), `rounded-control` (6), `rounded-chip` (4).
