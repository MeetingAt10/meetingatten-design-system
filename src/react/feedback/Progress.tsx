"use client";
import { ProgressBar, Label, type ProgressBarProps } from 'react-aria-components';
import NumberFlow from '@number-flow/react';
import { cx } from '../lib/cx.js';

export interface ProgressProps extends Omit<ProgressBarProps, 'className' | 'children' | 'aria-label'> {
  /** Visible label (also the accessible name). */
  label: string;
  /** Show the value next to the label (digits roll to each new value). Default true; hidden when indeterminate. */
  showValue?: boolean;
  /** Line under the bar ("3 of 8 files"). */
  hint?: React.ReactNode;
  tone?: 'default' | 'success' | 'danger';
  className?: string;
}

/** Progress: a ruled track whose navy fill springs to the value; determinate (`value`) or `isIndeterminate`. */
export function Progress({ label, showValue = true, hint, tone = 'default', className, ...rest }: ProgressProps) {
  return (
    <ProgressBar {...rest} className={cx('ds-progress', tone !== 'default' && `ds-progress--${tone}`, className)}>
      {({ percentage, isIndeterminate }) => (
        <>
          <span className="ds-progress__head">
            <Label className="ds-progress__label">{label}</Label>
            {showValue && !isIndeterminate && (
              <span className="ds-progress__value" aria-hidden="true">
                <NumberFlow value={Math.round(percentage ?? 0)} suffix="%" />
              </span>
            )}
          </span>
          <span className="ds-progress__track">
            <span className="ds-progress__fill" style={isIndeterminate ? undefined : ({ '--value': percentage ?? 0 } as React.CSSProperties)} />
          </span>
          {hint && <span className="ds-progress__hint">{hint}</span>}
        </>
      )}
    </ProgressBar>
  );
}
