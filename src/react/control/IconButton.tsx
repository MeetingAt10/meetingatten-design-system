"use client";
import { Button as AriaButton, type ButtonProps as AriaButtonProps } from 'react-aria-components';
import { Icon, type IconName } from '../icon/Icon.js';
import { cx } from '../lib/cx.js';

export interface IconButtonProps extends Omit<AriaButtonProps, 'className' | 'children' | 'aria-label'> {
  icon: IconName;
  /** Required accessible name (the button has no visible text). */
  label: string;
  /** Inverse appearance for dark chrome (toast, inverse surfaces). */
  inverse?: boolean;
  className?: string;
}

/** Control / Icon Button, 44x44. */
export function IconButton({ icon, label, inverse, className, ...rest }: IconButtonProps) {
  return (
    <AriaButton {...rest} aria-label={label} className={cx('ds-icon-btn', inverse && 'ds-icon-btn--inverse', className)}>
      <Icon name={icon} />
    </AriaButton>
  );
}
