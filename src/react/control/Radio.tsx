"use client";
import { RadioGroup as AriaRadioGroup, Radio as AriaRadio, type RadioGroupProps as AriaRadioGroupProps, type RadioProps as AriaRadioProps } from 'react-aria-components';
import { Field, type FieldProps } from './Field.js';
import { cx } from '../lib/cx.js';

export interface RadioGroupProps extends Omit<AriaRadioGroupProps, 'className' | 'children'>, Omit<FieldProps, 'children' | 'isRequired'> {
  children: React.ReactNode;
  className?: string;
}

/** Control / Radio group: choose exactly one; arrow keys move between options. */
export function RadioGroup({ label, description, errorMessage, children, className, ...rest }: RadioGroupProps) {
  return (
    <AriaRadioGroup {...rest} className={cx('ds-field', className)}>
      <Field label={label} description={description} errorMessage={errorMessage} isRequired={rest.isRequired}>
        <div className="ds-choices">{children}</div>
      </Field>
    </AriaRadioGroup>
  );
}

export interface RadioProps extends Omit<AriaRadioProps, 'className' | 'children'> {
  children: React.ReactNode;
  className?: string;
}

/** Control / Radio: one option inside a RadioGroup. */
export function Radio({ children, className, ...rest }: RadioProps) {
  return (
    <AriaRadio {...rest} className={cx('ds-check ds-check--radio', className)}>
      <span className="ds-check__box" aria-hidden="true" />
      {children}
    </AriaRadio>
  );
}
