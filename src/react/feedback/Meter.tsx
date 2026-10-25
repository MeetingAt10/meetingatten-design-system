"use client";
import { Meter as AriaMeter, Label, type MeterProps as AriaMeterProps } from 'react-aria-components';
import NumberFlow from '@number-flow/react';
import { cx } from '../lib/cx.js';

export interface MeterProps extends Omit<AriaMeterProps, 'className' | 'children' | 'aria-label'> {
  /** Visible label ("Slots taken"). */
  label: string;
  /** Reading in words, shown on the right ("5 of 8"). Defaults to the formatted percentage. */
  valueLabel?: string;
  /** Fill tone; words still carry the reading. `auto` turns warning at 75% and danger at 100%. */
  tone?: 'auto' | 'default' | 'high' | 'full';
  className?: string;
}

/** Meter: a known quantity in a range on a ruled scale (slots taken, storage used). */
export function Meter({ label, valueLabel, tone = 'auto', className, ...rest }: MeterProps) {
  return (
    <AriaMeter {...rest} valueLabel={valueLabel} className={({ percentage }) => {
      const t = tone === 'auto' ? (percentage >= 100 ? 'full' : percentage >= 75 ? 'high' : 'default') : tone;
      return cx('ds-meter', t !== 'default' && `ds-meter--${t}`, className);
    }}>
      {({ percentage }) => (
        <>
          <span className="ds-meter__head">
            <Label className="ds-meter__label">{label}</Label>
            <span className="ds-meter__value" aria-hidden="true">
              {valueLabel ?? <NumberFlow value={Math.round(percentage)} suffix="%" />}
            </span>
          </span>
          <span className="ds-meter__track">
            <span className="ds-meter__fill" style={{ '--value': percentage } as React.CSSProperties} />
          </span>
        </>
      )}
    </AriaMeter>
  );
}
