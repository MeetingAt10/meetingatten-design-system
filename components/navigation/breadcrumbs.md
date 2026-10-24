---
title: Breadcrumbs
description: Path to the current page; the last item is the current page and not a link.
react: Breadcrumbs
---
# Navigation / Breadcrumbs

**NOT IN FIGMA** (repo-owned). `Body small`; links in `action-default`, chevron separators in `text-secondary`, the current page in `text-primary` 600. Targets keep at least 24px height.

## React

```tsx
<Breadcrumbs items={[{ label: "My reports", href: "/reports" }, { label: "DEMO-024" }]} />
```

## Reference markup

```html
<nav aria-label="Breadcrumbs"><ol class="ds-breadcrumbs"><li class="ds-breadcrumb"><a class="ds-breadcrumb__link" href="/reports">My reports</a>…</li><li class="ds-breadcrumb"><span class="ds-breadcrumb__link" aria-current="page">DEMO-024</span></li></ol></nav>
```
