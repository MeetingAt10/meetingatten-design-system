"use client";
import { ProgressBar, Label, type ProgressBarProps } from 'react-aria-components';
import { cx } from '../lib/cx.js';

export interface ProgressProps extends Omit<ProgressBarProps, 'className' | 'children' | 'aria-label'> {
  /** Visible label (also the accessible name). */
  label: string;
  /** Show the formatted value (for example "40%") next to the label. Default true; never shown when indeterminate. */
  showValue?: boolean;
  className?: string;
}

/** Progress: labeled bar, determinate (`value`) or `isIndeterminate`. */
export function Progress({ label, showValue = true, className, ...rest }: ProgressProps) {
  return (
    <ProgressBar {...rest} className={cx('ds-progress', className)}>
      {({ percentage, valueText, isIndeterminate }) => (
        <>
          <span className="ds-progress__head">
            <Label className="ds-label">{label}</Label>
            {showValue && !isIndeterminate && <span className="ds-progress__value">{valueText}</span>}
          </span>
          <span className="ds-progress__track">
            <span className="ds-progress__fill" style={isIndeterminate ? undefined : { width: `${percentage ?? 0}%` }} />
          </span>
        </>
      )}
    </ProgressBar>
  );
}
