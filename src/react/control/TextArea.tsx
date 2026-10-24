"use client";
import { TextField as AriaTextField, TextArea as AriaTextArea } from 'react-aria-components';
import { Field } from './Field.js';
import type { TextFieldProps } from './TextField.js';
import { cx } from '../lib/cx.js';

export type TextAreaProps = TextFieldProps;

/** Control / Text Area: multi-line text with label, help and error. */
export function TextArea({ label, description, errorMessage, placeholder, className, ...rest }: TextAreaProps) {
  return (
    <AriaTextField {...rest} className={cx('ds-field', className)}>
      <Field label={label} description={description} errorMessage={errorMessage} isRequired={rest.isRequired}>
        <AriaTextArea className="ds-textarea" placeholder={placeholder} />
      </Field>
    </AriaTextField>
  );
}
