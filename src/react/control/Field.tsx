"use client";
import { Label, Text, FieldError, type ValidationResult } from 'react-aria-components';
import { Icon } from '../icon/Icon.js';

export interface FieldProps {
  /** Persistent visible label (never replaced by a placeholder). */
  label: React.ReactNode;
  /** Help text under the label. */
  description?: React.ReactNode;
  /** Error text, shown while the field is invalid. Say what happened and how to fix it; the user's input stays. */
  errorMessage?: string | ((validation: ValidationResult) => string);
  /** Adds "(required)" in words after the label. */
  isRequired?: boolean;
  children: React.ReactNode;
}

/** Field: label, description, control and error for any React Aria field (TextField, Select, ComboBox, RadioGroup, DatePicker). */
export function Field({ label, description, errorMessage, isRequired, children }: FieldProps) {
  return (
    <>
      <Label className="ds-field__label">
        {label}
        {isRequired && <span className="ds-field__hint">(required)</span>}
      </Label>
      {description && <Text slot="description" className="ds-field__description">{description}</Text>}
      {children}
      <FieldError className="ds-field__error">
        {(validation) => (
          <>
            <Icon name="warning-circle" size={16} weight="fill" />
            <span>{typeof errorMessage === 'function' ? errorMessage(validation) : errorMessage ?? validation.validationErrors.join(' ')}</span>
          </>
        )}
      </FieldError>
    </>
  );
}
