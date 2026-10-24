---
title: App Shell
description: Admin layout: sidebar beside a column of top bar and main content.
react: AppShell
---
# Navigation / App Shell

Sidebar (240px, from 1024px) and a column holding the TopBar and `<main>` (content max 1200px with the grid margins). Use with `data-density="compact"`. When the shell is embedded in a page that already has a `<main>` (docs, previews), pass `contentAs="div"` so there is only one main landmark.

## React

```tsx
<AppShell sidebar={<Sidebar>…</Sidebar>} topBar={<TopBar title="College workspace" />}>
  <h1 className="ds-type-h1">Your college, connected.</h1>
</AppShell>
```

## Reference markup

```html
<div class="ds-app"><nav class="ds-sidebar">…</nav><div class="ds-app__main"><header class="ds-topbar">…</header><main class="ds-app__content">…</main></div></div>
```
