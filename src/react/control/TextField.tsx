"use client";
import { TextField as AriaTextField, Input, type TextFieldProps as AriaTextFieldProps } from 'react-aria-components';
import { Field, type FieldProps } from './Field.js';
import { cx } from '../lib/cx.js';

export interface TextFieldProps extends Omit<AriaTextFieldProps, 'className' | 'children'>, Omit<FieldProps, 'children' | 'isRequired'> {
  placeholder?: string;
  className?: string;
}

/** Control / Text Field: one-line text input with label, help and error. */
export function TextField({ label, description, errorMessage, placeholder, className, ...rest }: TextFieldProps) {
  return (
    <AriaTextField {...rest} className={cx('ds-field', className)}>
      <Field label={label} description={description} errorMessage={errorMessage} isRequired={rest.isRequired}>
        <Input className="ds-input" placeholder={placeholder} />
      </Field>
    </AriaTextField>
  );
}
