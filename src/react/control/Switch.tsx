"use client";
import { Switch as AriaSwitch, type SwitchProps as AriaSwitchProps } from 'react-aria-components';
import { cx } from '../lib/cx.js';

export interface SwitchProps extends Omit<AriaSwitchProps, 'className' | 'children'> {
  /** What the switch controls ("Show my name on posts"). */
  children: React.ReactNode;
  /** Shows "On" / "Off" beside the label as well. */
  showState?: boolean;
  className?: string;
}

/** Switch: a setting that takes effect immediately (use Checkbox in forms that are submitted). The thumb springs across. */
export function Switch({ children, showState, className, ...rest }: SwitchProps) {
  return (
    <AriaSwitch {...rest} className={cx('ds-switch', className)}>
      {({ isSelected }) => (
        <>
          <span className="ds-switch__track" aria-hidden="true" />
          <span>{children}</span>
          {showState && <span className="ds-switch__state" aria-hidden="true">{isSelected ? 'On' : 'Off'}</span>}
        </>
      )}
    </AriaSwitch>
  );
}
