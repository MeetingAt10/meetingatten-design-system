---
title: Forum Card
description: A community discussion in a collection; the whole card opens the thread and lifts on hover.
react: ForumCard
---
# Content / Forum Card

Community discussion, 824 x 231. Same anatomy as the Announcement Card with an accent (purple) topic chip. Purple never means permission or confidentiality.

## Figma source

| Component | Size (w x h) | Radius | Padding (t r b l) | Gap | Master fill |
|---|---|---|---|---|---|
| `ACCS 2026 / Content / Forum Card` | 824 x 231 | 8 | 24 / 24 / 24 / 24 | 12 | `#FFFFFF` |

Variant axes:
- None (single component)

## Anatomy

| Part | Spec |
|---|---|
| Tag chip | "Study together", `color/accent/bg` + `accent/fg` |
| Title | `H3` 20/28 |
| Meta | "Demo member · 6 sample replies · Open discussion" |
| Action | "Join the conversation →" |

## Figma copy

Title "What helped you understand recursion?" Body "A sample community question. Share a useful explanation or ask a follow-up—everyone starts somewhere."

## Accessibility

- Same as Announcement Card. Never place names, identifiers or restricted report content in community posts.

## React

```tsx
<ForumCard topic="Study together" title="What helped you understand recursion?" excerpt="A sample community question."
  author="Demo member" replies={6} status="Open discussion" href="/community/42" demo />
```

The title is the only link; its hit area stretches over the whole card (the card lifts on hover and shows the focus ring), so the link is named by the title alone. "Join the conversation" is a visual cue only.

## Reference markup

Classes come from `dist/components.css`. Live light and dark demos: this component's page on the design system site (`site/`).

```html
<article class="ds-card">
  <div class="ds-card__head"><span class="ds-badge ds-badge--accent">Study together</span><span class="ds-tag-mono">Demo</span></div>
  <h3 class="ds-type-h3">What helped you understand recursion?</h3>
  <p class="ds-type-body">A sample community question. Share a useful explanation or ask a follow-up—everyone starts somewhere.</p>
  <div class="ds-card__meta"><span>Demo member · 6 sample replies · Open discussion</span></div>
  <a class="ds-link" href="#">Join the conversation <svg class="ds-icon ds-icon--16" aria-hidden="true"><use href="#ds-chevron"/></svg></a>
</article>
```
