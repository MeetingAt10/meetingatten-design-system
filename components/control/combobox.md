---
title: ComboBox
description: Text input that filters a longer list, then picks one option.
react: ComboBox
---
# Control / ComboBox

**NOT IN FIGMA** (repo-owned). Same box as the Text Field (44px, `border-default`, `radius-control`) with a trailing chevron button; the list is the Select listbox in the shared popover.

## Usage

Use for lists too long to scan (courses, advisers). For five or fewer options use RadioGroup; for a short list use Select.

## Accessibility

`role="combobox"` input with `aria-expanded` and an owned listbox; arrow keys move through options without leaving the input; Enter selects; Escape closes.

## React

```tsx
<ComboBox label="Course" items={courses}>
  {(c) => <SelectOption id={c.id}>{c.name}</SelectOption>}
</ComboBox>
```

## Reference markup

```html
<div class="ds-field">
  <label class="ds-label" for="c">Course</label>
  <div class="ds-combobox"><input id="c" role="combobox" aria-expanded="false"><button class="ds-field-button" aria-label="Show suggestions">…</button></div>
</div>
```
