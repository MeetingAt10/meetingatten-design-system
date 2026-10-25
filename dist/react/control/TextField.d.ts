import { type TextFieldProps as AriaTextFieldProps } from 'react-aria-components';
import { type FieldProps } from './Field.js';
import { type IconName } from '../icon/Icon.js';
export interface TextFieldProps extends Omit<AriaTextFieldProps, 'className' | 'children'>, Omit<FieldProps, 'children' | 'isRequired'> {
    placeholder?: string;
    /** Icon inside the start of the input. */
    icon?: IconName;
    /** 40px instead of 48px (44px on touch). */
    size?: 'sm' | 'md';
    className?: string;
}
/** Text field: one line of text with a label, help and an error that keeps the input. */
export declare function TextField({ label, description, errorMessage, placeholder, icon, size, className, ...rest }: TextFieldProps): import("react").JSX.Element;
