import { type ValidationResult } from 'react-aria-components';
export interface FieldProps {
    /** Persistent visible label (never replaced by a placeholder). */
    label: React.ReactNode;
    /** Help text under the control. */
    description?: React.ReactNode;
    /** Error text; shown only while the field is invalid. Say what happened and keep the user's input. */
    errorMessage?: string | ((validation: ValidationResult) => string);
    /** Adds "(required)" in text after the label. */
    isRequired?: boolean;
    children: React.ReactNode;
}
/** Label, control, help and error for a React Aria field. TextField, TextArea, Select, ComboBox, RadioGroup and DatePicker use it; use it inside any other React Aria field to match. */
export declare function Field({ label, description, errorMessage, isRequired, children }: FieldProps): import("react").JSX.Element;
