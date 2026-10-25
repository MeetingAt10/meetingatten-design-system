"use client";
import { RadioGroup as AriaRadioGroup, Radio as AriaRadio, type RadioGroupProps as AriaRadioGroupProps, type RadioProps as AriaRadioProps } from 'react-aria-components';
import { Field, type FieldProps } from './Field.js';
import { cx } from '../lib/cx.js';

export interface RadioGroupProps extends Omit<AriaRadioGroupProps, 'className' | 'children'>, Omit<FieldProps, 'children' | 'isRequired'> {
  children: React.ReactNode;
  /** Lay options out in a row (short labels only). */
  row?: boolean;
  className?: string;
}

/** Radio group: choose exactly one; arrow keys move between options. */
export function RadioGroup({ label, description, errorMessage, children, row, className, ...rest }: RadioGroupProps) {
  return (
    <AriaRadioGroup {...rest} className={cx('ds-field', className)}>
      <Field label={label} description={description} errorMessage={errorMessage} isRequired={rest.isRequired}>
        <div className={cx('ds-radio-group', row && 'ds-radio-group--row')}>{children}</div>
      </Field>
    </AriaRadioGroup>
  );
}

export interface RadioProps extends Omit<AriaRadioProps, 'className' | 'children'> {
  children: React.ReactNode;
  /** Second line under the label (also turns a `card` radio into a two-line choice). */
  description?: React.ReactNode;
  /** A block-shaped choice with a rule around it (meeting type, plan). */
  card?: boolean;
  className?: string;
}

/** Radio: one option inside a RadioGroup; the center dot springs in when chosen. */
export function Radio({ children, description, card, className, ...rest }: RadioProps) {
  return (
    <AriaRadio {...rest} className={cx('ds-radio', card && 'ds-radio--card', className)}>
      <span className="ds-radio__ring" aria-hidden="true" />
      {description ? (
        <span className="ds-check__text">
          <span>{children}</span>
          <span className="ds-check__description">{description}</span>
        </span>
      ) : children}
    </AriaRadio>
  );
}
