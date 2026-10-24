---
title: Field
description: The label, help text and error layout shared by every form control.
react: Field
---
# Control / Field

The Figma Text Field, Text Area and Select share one anatomy: persistent `Label` 14/20 above, the control, then `Body small` help text in `text-secondary`, replaced in meaning by an error in `danger/fg` while invalid.

## Rules (Figma 06)

- The placeholder never replaces the label.
- Required fields say so in text: "(required)".
- Errors say what happened and how to fix it, and keep what the user typed.

## React

`Field` is used inside the React Aria field components (TextField, TextArea, Select, ComboBox, RadioGroup, DatePicker). Use it to give any other React Aria field the same layout:

```tsx
import { NumberField, Input } from "react-aria-components";

<NumberField className="ds-field">
  <Field label="Credits" description="Between 1 and 6.">
    <Input className="ds-input" />
  </Field>
</NumberField>
```

## Reference markup

```html
<div class="ds-field">
  <label class="ds-label" for="e">College email <span class="ds-secondary">(required)</span></label>
  <input class="ds-input" id="e" aria-describedby="e-h">
  <p class="ds-field__msg" id="e-h">Use your college account.</p>
</div>
```
