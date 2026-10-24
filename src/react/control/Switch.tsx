"use client";
import { Switch as AriaSwitch, type SwitchProps as AriaSwitchProps } from 'react-aria-components';
import { cx } from '../lib/cx.js';

export interface SwitchProps extends Omit<AriaSwitchProps, 'className' | 'children'> {
  children: React.ReactNode;
  className?: string;
}

/** Switch: a setting that takes effect immediately (use Checkbox inside forms that are submitted). */
export function Switch({ children, className, ...rest }: SwitchProps) {
  return (
    <AriaSwitch {...rest} className={cx('ds-switch', className)}>
      <span className="ds-switch__track" aria-hidden="true" />
      {children}
    </AriaSwitch>
  );
}
