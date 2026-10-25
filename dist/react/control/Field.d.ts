import { type ValidationResult } from 'react-aria-components';
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
export declare function Field({ label, description, errorMessage, isRequired, children }: FieldProps): import("react").JSX.Element;
