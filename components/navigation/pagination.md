---
title: Pagination
description: Previous, numbered pages with gaps, and next, for long lists.
react: Pagination
---
# Navigation / Pagination

**NOT IN FIGMA** (repo-owned). Pages are 44px buttons; the current page is filled `action-default` and marked `aria-current="page"`. Shows the first and last page and the neighbors of the current one, with "…" gaps (`pageList`).

## Usage

Prefer it for tables of records (reports); keep filters and the current page in the URL.

## React

```tsx
<Pagination page={page} pageCount={12} onPageChange={setPage} />
```

## Reference markup

```html
<nav class="ds-pagination" aria-label="Pagination">…<ul><li><button class="ds-pagination__page" aria-current="page" aria-label="Page 1">1</button></li>…</ul>…</nav>
```
