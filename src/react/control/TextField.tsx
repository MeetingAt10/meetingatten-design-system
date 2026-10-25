"use client";
import { TextField as AriaTextField, Input, type TextFieldProps as AriaTextFieldProps } from 'react-aria-components';
import { Field, type FieldProps } from './Field.js';
import { Icon, type IconName } from '../icon/Icon.js';
import { cx } from '../lib/cx.js';

export interface TextFieldProps extends Omit<AriaTextFieldProps, 'className' | 'children'>, Omit<FieldProps, 'children' | 'isRequired'> {
  placeholder?: string;
  /** Icon inside the start of the input. */
  icon?: IconName;
  /** 40px instead of 48px (44px on touch). */
  size?: 'sm' | 'md';
  className?: string;
}

/** Text field: one line of text with a label, help and an error that keeps the input. */
export function TextField({ label, description, errorMessage, placeholder, icon, size = 'md', className, ...rest }: TextFieldProps) {
  const input = <Input className={cx('ds-input', size === 'sm' && 'ds-input--sm')} placeholder={placeholder} />;
  return (
    <AriaTextField {...rest} className={cx('ds-field', className)}>
      <Field label={label} description={description} errorMessage={errorMessage} isRequired={rest.isRequired}>
        {icon ? (
          <div className="ds-input-group">
            <Icon name={icon} className="ds-input-group__icon" />
            {input}
          </div>
        ) : input}
      </Field>
    </AriaTextField>
  );
}
