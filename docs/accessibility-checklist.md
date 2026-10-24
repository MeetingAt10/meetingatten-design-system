# Accessibility checklist (WCAG 2.2 AA)

Copy into the PR description. Every row is pass / fail / n/a.

| # | Check | Pass |
|---|---|---|
| 1 | `npm run check:contrast` passes (new tokens have pairs in `tokens/contrast-pairs.json`) | [ ] |
| 2 | Text 4.5:1, large text and UI/graphics 3:1, in every affected theme including dark | [ ] |
| 3 | Status/role/error is never color-only | [ ] |
| 4 | Everything works with keyboard only; order matches visual order | [ ] |
| 5 | Visible focus on every interactive element (2px `focus` ring, 3:1) | [ ] |
| 6 | Focus is not hidden by sticky bars (scroll-padding set) | [ ] |
| 7 | Targets at least 24x24 CSS px (36 admin / 44 public preferred) | [ ] |
| 8 | Inputs have visible `<label>`, hint and error linked via `aria-describedby`; invalid uses `aria-invalid` | [ ] |
| 9 | Errors announced (`role="alert"` or focus moved); toasts use `role="status"` / `alert` | [ ] |
| 10 | Modals: focus trapped, Esc closes, focus returns, `aria-labelledby` | [ ] |
| 11 | Tables: `<caption>` or label, `<th scope>`, sortable headers are buttons with `aria-sort` | [ ] |
| 12 | Tabs, selects, nav use native or correct ARIA patterns; current page has `aria-current="page"` | [ ] |
| 13 | One `<h1>`, no skipped heading levels, landmarks present (`header nav main footer`) | [ ] |
| 14 | Images have alt (empty if decorative); icons `aria-hidden` unless meaningful | [ ] |
| 15 | Reflows at 320px and 400% zoom without 2-D scrolling (tables may scroll in container) | [ ] |
| 16 | Text resizes to 200% without loss; no fixed-height text containers | [ ] |
| 17 | `prefers-reduced-motion` respected; no flashing; nothing auto-plays | [ ] |
| 18 | `lang` set on `<html>`; page titles unique | [ ] |
| 19 | Dark mode checked with a screen reader pass on the changed flow | [ ] |
| 20 | Grievance flows: no timeouts without warning, confidentiality text is readable and not hidden in tooltips | [ ] |
