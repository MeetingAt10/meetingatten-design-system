"use client";
import { Checkbox as AriaCheckbox, type CheckboxProps as AriaCheckboxProps } from 'react-aria-components';
import { cx } from '../lib/cx.js';

export interface CheckboxProps extends Omit<AriaCheckboxProps, 'className' | 'children'> {
  children: React.ReactNode;
  className?: string;
}

/** Control / Checkbox: independent on/off choice. Supports `isIndeterminate`. */
export function Checkbox({ children, className, ...rest }: CheckboxProps) {
  return (
    <AriaCheckbox {...rest} className={cx('ds-check', className)}>
      <span className="ds-check__box" aria-hidden="true" />
      {children}
    </AriaCheckbox>
  );
}
