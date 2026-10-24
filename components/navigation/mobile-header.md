# Navigation / Mobile Header

Compact header for 390 and 360 widths: 44px menu and notification controls, logo centered.

## Figma source

| Component | Size (w x h) | Radius | Padding (t r b l) | Gap | Master fill |
|---|---|---|---|---|---|
| `ACCS 2026 / Navigation / Mobile Header` | 390 x 72 | 0 | 12 / 16 / 12 / 16 | 0 | `#FFFFFF` |

Variant axes:
- None (single component)

## Anatomy

| Part | Spec |
|---|---|
| Container | min-height 72, padding 12 / 16, `color/surface` |
| Menu | Icon Button + `Icon / Menu`, 44 x 44 |
| Logo | `Logo Compact Minimum`, centered |
| Notifications | Icon Button + `Icon / Bell` |

## Accessibility

- The menu button exposes `aria-expanded`; the drawer traps focus only when modal; Escape closes and restores focus to the trigger.

## Reference markup

Classes come from `dist/components.css`. Live matrices: `preview/index.html`.

```html
<header class="ds-mobile-header">
  <button class="ds-icon-btn" aria-label="Menu" aria-expanded="false"><svg class="ds-icon ds-icon--20" aria-hidden="true"><use href="#ds-menu"/></svg></button>
  <img src="assets/logo/logo-compact-minimum.svg" alt="ACCS">
  <button class="ds-icon-btn" aria-label="Notifications"><svg class="ds-icon ds-icon--20" aria-hidden="true"><use href="#ds-bell"/></svg></button>
</header>
```
