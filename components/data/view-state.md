# Data / View State

Empty, Loading and Error views, 541 x 240. Recovery actions use existing Button variants. Loading and error for links, navigation, tabs, search results and radio groups belong to the destination or data region.

## Figma source

| Component | Size (w x h) | Radius | Padding (t r b l) | Gap | Master fill |
|---|---|---|---|---|---|
| `ACCS 2026 / Data / View State` | 541 x 240 | 8 | 24 / 24 / 24 / 24 | 16 | `#FFFFFF` |

Variant axes:
- Condition: Empty / Loading / Error (3 variants)

## Anatomy

| Part | Spec |
|---|---|
| Container | `radius-card` (12), padding 24, gap 16, `card-bg`, `card-shadow` |
| Icon | `Icon / Forum` (empty), spinner (loading), `Icon / Alert` (error), 24px |
| Title | `H3` |
| Body / skeleton | `Body`; skeleton bars in `color/disabled/bg` |
| Action | Secondary button |

## Conditions

| State | Treatment (tokens) |
|---|---|
| Condition=Empty | "No conversations yet" / "Start with a question or explore the community guidelines." / Explore guidelines |
| Condition=Loading | "Loading conversations" / skeleton / "Loading… · announce once; no focus movement" |
| Condition=Error | "We couldn’t load this view" / "Your work has not been submitted. Try again when you’re ready." / Try again |

## Accessibility

- Mark the busy region (`aria-busy`); skeletons are decorative; announce loading once, never move focus.
- Keep retry reachable and do not reset the user’s place; show a meaningful empty state and a nontechnical recovery action.

## Reference markup

Classes come from `dist/components.css`. Live light and dark demos: this component's page on the design system site (`site/`).

```html
<section class="ds-view-state ds-view-state--error"><svg class="ds-icon ds-icon--24" aria-hidden="true"><use href="#ds-alert"/></svg>
  <h3 class="ds-type-h3">We couldn’t load this view</h3>
  <p>Your work has not been submitted. Try again when you’re ready.</p>
  <button class="ds-btn ds-btn--secondary">Try again</button></section>
```
