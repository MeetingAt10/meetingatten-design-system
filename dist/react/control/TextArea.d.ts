import { type TextFieldProps as AriaTextFieldProps } from 'react-aria-components';
import { type FieldProps } from './Field.js';
export interface TextAreaProps extends Omit<AriaTextFieldProps, 'className' | 'children'>, Omit<FieldProps, 'children' | 'isRequired'> {
    placeholder?: string;
    /** Shows a live "120 / 500" count under the field (pair with `maxLength`). */
    showCount?: boolean;
    className?: string;
}
/** Text area: several lines of text; grows with its content up to a limit. */
export declare function TextArea({ label, description, errorMessage, placeholder, showCount, className, ...rest }: TextAreaProps): import("react").JSX.Element;
