"use client";
import { useState } from 'react';
import { TextField as AriaTextField, TextArea as AriaTextArea, type TextFieldProps as AriaTextFieldProps } from 'react-aria-components';
import { Field, type FieldProps } from './Field.js';
import { cx } from '../lib/cx.js';

export interface TextAreaProps extends Omit<AriaTextFieldProps, 'className' | 'children'>, Omit<FieldProps, 'children' | 'isRequired'> {
  placeholder?: string;
  /** Shows a live "120 / 500" count under the field (pair with `maxLength`). */
  showCount?: boolean;
  className?: string;
}

/** Text area: several lines of text; grows with its content up to a limit. */
export function TextArea({ label, description, errorMessage, placeholder, showCount, className, ...rest }: TextAreaProps) {
  const [length, setLength] = useState((rest.value ?? rest.defaultValue ?? '').length);
  return (
    <AriaTextField
      {...rest}
      onChange={(v) => { setLength(v.length); rest.onChange?.(v); }}
      className={cx('ds-field', className)}
    >
      <Field label={label} description={description} errorMessage={errorMessage} isRequired={rest.isRequired}>
        <AriaTextArea className="ds-input ds-textarea" placeholder={placeholder} />
      </Field>
      {showCount && (
        <span className="ds-field__count" aria-live="polite">
          {length}{rest.maxLength ? ` / ${rest.maxLength}` : ''}
        </span>
      )}
    </AriaTextField>
  );
}
