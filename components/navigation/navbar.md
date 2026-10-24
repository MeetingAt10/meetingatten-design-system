---
title: Navbar
description: Landing top navigation: brand, links, one primary action; links move into a menu panel under 1024px.
react: Navbar
---
# Navigation / Navbar

**NOT IN FIGMA** as a component (Figma 05 shows the landing nav as a pattern). 72px, `border-subtle` bottom edge, brand left, text links (`ds-link`), one primary action ("Sign in"). Under 1024px the links collapse behind a 44px menu IconButton (`aria-expanded`, `aria-controls`); Escape closes the panel.

## Accessibility

The `<nav>` is named (default "Main"); the current page link has `aria-current="page"`. Give an image-only brand a `brandLabel`.

## React

```tsx
<Navbar brand={<img src={logo} alt="" />} brandLabel="ACCS home"
  links={[{ label: "Community", href: "/community", current: true }, { label: "Consultations", href: "/consultations" }]}
  actions={<Button>Sign in</Button>} />
```

## Reference markup

```html
<nav class="ds-navbar" aria-label="Main"><a class="ds-navbar__brand" href="/">ACCS</a><ul class="ds-navbar__links"><li><a class="ds-link" href="/community" aria-current="page">Community</a></li></ul><div class="ds-navbar__actions">…</div></nav>
```
