---
title: Footer
description: Site footer with brand, link columns and the proposed-status note.
react: Footer
---
# Navigation / Footer

`surface` band with a 3px `action-default` top rule; columns of inline links, each column a named `<nav>`; mono status note ("Proposed, not approved").

## React

```tsx
<Footer brand={<img src={logo} alt="ACCS" />} description="Your Access to the College of Computer Studies."
  columns={[{ title: "Product", links: [{ label: "Community", href: "/community" }] }]}
  note="ACCS · Proposed, not approved" />
```

## Reference markup

```html
<footer class="ds-footer"><div class="ds-container ds-footer__grid">…<nav aria-label="Product"><p class="ds-type-label">Product</p><ul class="ds-footer__links">…</ul></nav></div></footer>
```
