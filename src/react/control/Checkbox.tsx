"use client";
import { Checkbox as AriaCheckbox, CheckboxGroup as AriaCheckboxGroup, type CheckboxProps as AriaCheckboxProps, type CheckboxGroupProps as AriaCheckboxGroupProps } from 'react-aria-components';
import { Field, type FieldProps } from './Field.js';
import { cx } from '../lib/cx.js';

export interface CheckboxProps extends Omit<AriaCheckboxProps, 'className' | 'children'> {
  /** The label. Omit it only when the name comes from elsewhere: `aria-label`, or a table's `slot="selection"`. */
  children?: React.ReactNode;
  /** Second line under the label. */
  description?: React.ReactNode;
  className?: string;
}

/** Checkbox: an independent on/off choice; the check is drawn in when it fills. Supports `isIndeterminate`. */
export function Checkbox({ children, description, className, ...rest }: CheckboxProps) {
  return (
    <AriaCheckbox {...rest} className={cx('ds-check', className)}>
      <span className="ds-check__box" aria-hidden="true">
        <svg viewBox="0 0 18 18"><polyline points="3.5 9.5 7.5 13 14.5 5" pathLength={1} /></svg>
        <span className="ds-check__dash" />
      </span>
      {description ? (
        <span className="ds-check__text">
          <span>{children}</span>
          <span className="ds-check__description">{description}</span>
        </span>
      ) : children}
    </AriaCheckbox>
  );
}

export interface CheckboxGroupProps extends Omit<AriaCheckboxGroupProps, 'className' | 'children'>, Omit<FieldProps, 'children' | 'isRequired'> {
  children: React.ReactNode;
  className?: string;
}

/** Checkbox group: several related choices under one label, with one error for the group. */
export function CheckboxGroup({ label, description, errorMessage, children, className, ...rest }: CheckboxGroupProps) {
  return (
    <AriaCheckboxGroup {...rest} className={cx('ds-field', className)}>
      <Field label={label} description={description} errorMessage={errorMessage} isRequired={rest.isRequired}>
        <div className="ds-check-group">{children}</div>
      </Field>
    </AriaCheckboxGroup>
  );
}
