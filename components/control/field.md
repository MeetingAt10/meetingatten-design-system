---
title: Field
description: The label, description, control and error layout shared by every form control.
react: Field
demo: TextField
---
# Field

A field stacks a persistent label, an optional description, the control and the error, in that order. Required fields say so in words, and errors name the problem and the fix while the entered text stays. Every design system form control uses it; use it directly only when you wrap another React Aria field.

## When to use

- Use the components that already include it: [TextField](text-field.md), [TextArea](text-area.md), [Select](select.md), [ComboBox](combobox.md), [CheckboxGroup](checkbox.md), [RadioGroup](radio.md), [DatePicker](date-picker.md).
- Use `Field` directly inside another React Aria field (for example a `NumberField`) so it gets the same label, help and error.
- Use `.ds-fieldset` with a `legend` to group radios or checkboxes in plain markup.
- Don't replace the label with a placeholder, and don't mark required fields with an asterisk alone.

## Anatomy

| Part | Class | Notes |
|---|---|---|
| Field | `.ds-field` | Grid with an 8px gap; set on the React Aria field element |
| Label | `.ds-field__label` | Label style (Inter 600 14/20), always visible |
| Hint | `.ds-field__hint` | "(required)" or "(optional)" after the label, secondary ink |
| Description | `.ds-field__description` | Body small, secondary ink, tucked 4px under the label |
| Control | `.ds-input`, `.ds-select-trigger`, `.ds-date-field`, ... | The control itself |
| Error | `.ds-field__error` | Danger ink, body small 500, a 16px filled `warning-circle` icon first |
| Foot | `.ds-field__foot` | Row for the error and a count |
| Count | `.ds-field__count` | Inter 500 12px with tabular figures, pushed to the end |
| Fieldset | `.ds-fieldset` | No border; the `legend` takes the label style |

## States

| State | Looks | Set by |
|---|---|---|
| Default | Label, description, control | none |
| Required | "(required)" in words after the label | `isRequired`, `.ds-field__hint` |
| Invalid | Error line under the control; the control's rule turns danger; the entered text stays | `isInvalid` with `errorMessage`, a failed `validate`, or native constraints; `aria-invalid="true"` |
| Disabled | The control goes dashed on the disabled ground; the label stays readable | `isDisabled` on the field |
| Read-only | The control keeps only a hairline rule | `isReadOnly` on the field |

## Behavior and accessibility

- React Aria links the label to the control and adds `aria-describedby` for the description and the error, and `aria-invalid` while invalid.
- The error line renders only while the field is invalid. Write what happened and how to fix it: "Couldn't find CCS 10. Check the code; your text is kept."
- `errorMessage` can be a function of the validation result, so one field can explain several problems. Without it, the validation messages from the browser or your `validate` function are shown.
- Distinguish a network failure from a validation failure in the words, and never put sensitive details in an error.
- In forced colors the error keeps its words and icon, so the state survives without color.

## React

```tsx
import { Field, TextField } from '@meetingat10/design-system/react';
import { NumberField, Input } from 'react-aria-components';

// Inside the design system controls, Field is already there:
<TextField label="Subject" description="Shown to the faculty member you book." isRequired />

// Around another React Aria field:
<NumberField className="ds-field" minValue={1} maxValue={4} defaultValue={1} isRequired>
  <Field label="Attendees" description="Up to four, including you." isRequired
    errorMessage="Choose between 1 and 4 attendees.">
    <Input className="ds-input" />
  </Field>
</NumberField>
```

`Field` renders the label, description, children and error; the wrapping React Aria field owns the state. An app that imports from `react-aria-components` directly must pin the same version as the design system (1.22.1).

## Plain CSS

```html
<div class="ds-field">
  <label class="ds-field__label" for="subject">Subject <span class="ds-field__hint">(required)</span></label>
  <p class="ds-field__description" id="subject-desc">Shown to the faculty member you book.</p>
  <input class="ds-input" id="subject" required aria-describedby="subject-desc subject-err" aria-invalid="true">
  <p class="ds-field__error" id="subject-err">
    <svg class="ds-icon ds-icon--16" aria-hidden="true"><use href="sprite.svg#ds-warning-circle-fill"/></svg>
    Add a subject so the faculty member knows what to prepare.
  </p>
</div>

<fieldset class="ds-fieldset">
  <legend>Meeting type</legend>
  <div class="ds-radio-group">
    <label class="ds-radio"><input type="radio" class="ds-check__input" name="type" value="online"><span class="ds-radio__ring" aria-hidden="true"></span>Online</label>
    <label class="ds-radio"><input type="radio" class="ds-check__input" name="type" value="campus"><span class="ds-radio__ring" aria-hidden="true"></span>On campus</label>
  </div>
</fieldset>
```
