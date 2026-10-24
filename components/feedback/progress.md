---
title: Progress
description: Labeled progress bar, determinate or indeterminate, with the value shown as text.
react: Progress
---
# Feedback / Progress

**NOT IN FIGMA** (repo-owned). For uploads and multi-step processing where the user waits on a known amount of work.

## Anatomy

| Part | Spec |
|---|---|
| Head | `Label` 14/20 left, value (`Body small`, `text-secondary`) right |
| Track | 8px high, `radius-chip`, `disabled-bg` |
| Fill | `action-default`; contrast against the track is checked at 3:1 (non-text) in both themes |
| Indeterminate | 40% fill sliding across; static full fill under reduced motion |

## Usage

- Prefer determinate progress whenever the amount of work is known.
- Do not promise time ("almost done"); show the value.

## Accessibility

`role="progressbar"` with `aria-valuenow` / min / max and a visible label as its name. Indeterminate progress omits `aria-valuenow`.

## React

```tsx
<Progress label="Upload" value={40} />
<Progress label="Syncing" isIndeterminate />
```

## Reference markup

```html
<div class="ds-progress" role="progressbar" aria-labelledby="p" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">
  <span class="ds-progress__head"><span class="ds-label" id="p">Upload</span><span class="ds-progress__value">40%</span></span>
  <span class="ds-progress__track"><span class="ds-progress__fill" style="width:40%"></span></span>
</div>
```
