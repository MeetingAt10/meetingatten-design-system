import { type TextFieldProps as AriaTextFieldProps } from 'react-aria-components';
import { type FieldProps } from './Field.js';
export interface TextFieldProps extends Omit<AriaTextFieldProps, 'className' | 'children'>, Omit<FieldProps, 'children' | 'isRequired'> {
    placeholder?: string;
    className?: string;
}
/** Control / Text Field: one-line text input with label, help and error. */
export declare function TextField({ label, description, errorMessage, placeholder, className, ...rest }: TextFieldProps): import("react").JSX.Element;
