# Navigation / Sidebar

App sidebar, 240px, separate from the content grid. Persistent from 1024px; under 1024px navigation moves to the top.

## Figma source

| Component | Size (w x h) | Radius | Padding (t r b l) | Gap | Master fill |
|---|---|---|---|---|---|
| `ACCS 2026 / Navigation / Sidebar` | 240 x 421 | 0 | 24 / 24 / 24 / 24 | 28 | `#FFFFFF` |

Variant axes:
- None (single component)

## Anatomy

| Part | Spec |
|---|---|
| Container | 240 wide, padding 24, gap 28, `color/surface`, right border `color/border-subtle` |
| Logo | `ACCS 2026 / Identity / Logo Compact Minimum` |
| Items | four [Navigation / Item](item.md): Overview, Community, Consultations, My reports |
| Role block | [Role badge](../badge/role.md) + caption "Own reports only · proposed permission" |

## Accessibility

- `<nav aria-label>`; links, not buttons; current page `aria-current="page"` (the selected item also has a left bar and color change, never color alone).
- A role badge describes permission context; it is not enforcement.

## Reference markup

Classes come from `dist/components.css`. Live light and dark demos: this component's page on the design system site (`site/`).

```html
<nav class="ds-sidebar" aria-label="Main">
  <img class="ds-sidebar__logo" src="assets/logo/logo-compact-minimum.svg" alt="ACCS">
  <div class="ds-sidebar__nav">
    <a class="ds-nav-item" href="#" aria-current="page"><svg class="ds-icon ds-icon--20" aria-hidden="true"><use href="#ds-home"/></svg>Overview</a>
    <a class="ds-nav-item" href="#"><svg class="ds-icon ds-icon--20" aria-hidden="true"><use href="#ds-forum"/></svg>Community</a>
    <a class="ds-nav-item" href="#"><svg class="ds-icon ds-icon--20" aria-hidden="true"><use href="#ds-calendar"/></svg>Consultations</a>
    <a class="ds-nav-item" href="#"><svg class="ds-icon ds-icon--20" aria-hidden="true"><use href="#ds-report"/></svg>My reports</a>
  </div>
  <div class="ds-sidebar__role"><span class="ds-badge">Student</span><p class="ds-sidebar__note">Own reports only · proposed permission</p></div>
</nav>
```
