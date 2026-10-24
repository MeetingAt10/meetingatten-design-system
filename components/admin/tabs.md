# Tabs

| Anatomy | Notes |
|---|---|
| Tab list | Bottom 1px `line`, horizontal scroll if overflow |
| Tab | 14px medium, `ink-secondary`, 2px bottom indicator |
| Panel | Below list, `tabindex="0"` if it has no focusable child |

| State | Treatment |
|---|---|
| Default | `ink-secondary` |
| Hover | `ink` |
| Selected | `aria-selected="true"`, `ink`, 2px `action` indicator, semibold |
| Focus | Standard ring |
| Disabled | 45% opacity, `aria-disabled` |

Use tabs for views of the same object (All / Mine / Overdue). Use nav for different pages. Max 6 tabs. Counts go in text ("Overdue 3").

A11y (manual activation): `role="tablist"`, `role="tab"` with `aria-controls`, `role="tabpanel"` with `aria-labelledby`; roving `tabindex` (selected = 0, others = -1); Left/Right move, Home/End jump, Enter/Space activate.

```html
<div class="ds-tabs" role="tablist" aria-label="Request views">
  <button class="ds-tab" role="tab" id="t1" aria-selected="true" aria-controls="p1">All</button>
  <button class="ds-tab" role="tab" id="t2" aria-selected="false" aria-controls="p2" tabindex="-1">Overdue 3</button>
</div>
<div role="tabpanel" id="p1" aria-labelledby="t1" tabindex="0">...</div>
```
