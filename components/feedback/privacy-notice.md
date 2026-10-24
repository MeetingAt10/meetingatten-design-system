---
title: Privacy Notice
description: Durable policy text on report pages: permission and identity visibility as separate statements.
react: PrivacyNotice
---
# Feedback / Privacy Notice

Durable policy notice, 799 x 153. Serious, structured; states what is known, what is pending and what is disabled. Shield/lock denotes a privacy topic, not a security or anonymity guarantee.

## Figma source

| Component | Size (w x h) | Radius | Padding (t r b l) | Gap | Master fill |
|---|---|---|---|---|---|
| `ACCS 2026 / Feedback / Privacy Notice` | 799 x 153 | 8 | 16 / 16 / 16 / 16 | 8 | `#FFFBEB` |

Variant axes:
- None (single component)

## Anatomy

| Part | Spec |
|---|---|
| Container | radius 8, padding 16, gap 8, `color/warning/bg`, 1px `color/warning/fg` |
| Title | lock icon + `Label` in `color/warning/fg` |
| Body | `Body small` |
| Footnote | `Caption` in `color/warning/fg` |

## Figma copy

Title "Policy confirmation required". Body "Access permission: assigned reviewers only (proposed). Identity visibility: recipients and anonymity behavior are not yet confirmed. These are separate decisions; restricted access does not mean anonymous. Backend enforcement is required." Foot "Sensitive submission is disabled until scope and policy are confirmed."

## Accessibility

- Policy text stays reachable and is not hidden in tooltips; identity visibility is not inferred from permission labels.

## React

```tsx
<PrivacyNotice title="Policy confirmation required" foot="Sensitive submission is disabled until scope and policy are confirmed.">
  Access permission: assigned reviewers only (proposed). Identity visibility: recipients and anonymity behavior are not yet confirmed.
  Restricted access does not mean anonymous. Backend enforcement is required.
</PrivacyNotice>
```

## Reference markup

Classes come from `dist/components.css`. Live light and dark demos: this component's page on the design system site (`site/`).

```html
<aside class="ds-notice" aria-labelledby="pn"><h3 class="ds-notice__title" id="pn"><svg class="ds-icon ds-icon--16" aria-hidden="true"><use href="#ds-lock"/></svg>Policy confirmation required</h3>
  <p>Access permission: assigned reviewers only (proposed). Identity visibility: recipients and anonymity behavior are not yet confirmed. These are separate decisions; restricted access does not mean anonymous. Backend enforcement is required.</p>
  <p class="ds-notice__foot">Sensitive submission is disabled until scope and policy are confirmed.</p></aside>
```
