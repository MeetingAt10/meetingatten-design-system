# Content / Announcement Card

Community announcement, 824 x 200 in the catalog. Casual and encouraging. The static body has no Hover/Pressed state; its action is a native Link instance.

## Figma source

| Component | Size (w x h) | Radius | Padding (t r b l) | Gap | Master fill |
|---|---|---|---|---|---|
| `ACCS 2026 / Content / Announcement Card` | 824 x 200 | 8 | 24 / 24 / 24 / 24 | 12 | `#FFFFFF` |

Variant axes:
- None (single component)

## Anatomy

| Part | Spec |
|---|---|
| Container | radius 8, padding 24, gap 12, `color/surface`, 1px `color/border-subtle` |
| Tag chip | "Announcement", `color/info/bg` + `info/fg`, radius 4 |
| DEMO label | `Code` mono caption, right aligned |
| Title | `H3` 20/28 |
| Body | `Body` 14/22 |
| Meta + link | "Community desk · illustrative" + "Read update →" |

## Figma copy

Title "Make room for your next idea." Body "Explore the proposed peer study circle and share a topic you’d like to learn together."

## Accessibility

- Cards have headings; only the action link receives focus; do not nest ambiguous actions.

## Reference markup

Classes come from `dist/components.css`. Live matrices: `preview/index.html`.

```html
<article class="ds-card">
  <div class="ds-card__head"><span class="ds-badge ds-badge--info">Announcement</span><span class="ds-tag-mono">Demo</span></div>
  <h3 class="ds-type-h3">Make room for your next idea.</h3>
  <p class="ds-type-body">Explore the proposed peer study circle and share a topic you’d like to learn together.</p>
  <div class="ds-card__meta"><span>Community desk · illustrative</span><a class="ds-link" href="#">Read update <svg class="ds-icon ds-icon--16" aria-hidden="true"><use href="#ds-chevron"/></svg></a></div>
</article>
```
