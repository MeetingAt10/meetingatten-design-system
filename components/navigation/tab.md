# Navigation / Tab

Selected=False/True x five states, 128 x 48. Route loading and errors belong to the tab panel.

## Figma source

| Component | Size (w x h) | Radius | Padding (t r b l) | Gap | Master fill |
|---|---|---|---|---|---|
| `ACCS 2026 / Navigation / Tab` | 128 x 48 | 0 | 0 / 16 / 0 / 16 | 0 | `#FFFFFF` |

Variant axes:
- Selected: False / True; State: Default / Hover / Pressed / Focus / Disabled (10 variants)

## States

| State | Treatment (tokens) |
|---|---|
| Default | `color/text-primary` |
| Hover | `color/info/bg` |
| Pressed | `color/info/bg` + 1px `color/border-default` |
| Focus | 3px focus ring |
| Disabled | `color/disabled/bg`, `color/disabled/fg` |
| Selected=True | `color/action/default` text, 2px underline, weight change (underline and weight, never color alone) |

## Figma copy

Overview, Forum, Consultations.

## Accessibility

- Label the tablist, tab and panel relations; expose the selected tab (`aria-selected`).
- Arrow keys move within the tablist; Tab enters the active panel.

## Reference markup

Classes come from `dist/components.css`. Live light and dark demos: this component's page on the design system site (`site/`).

```html
<div class="ds-tabs" role="tablist" aria-label="Community">
  <button class="ds-tab" role="tab" aria-selected="true">Overview</button>
  <button class="ds-tab" role="tab" aria-selected="false" tabindex="-1">Forum</button>
  <button class="ds-tab" role="tab" aria-selected="false" tabindex="-1">Consultations</button>
</div>
```
