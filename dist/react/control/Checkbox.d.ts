import { type CheckboxProps as AriaCheckboxProps, type CheckboxGroupProps as AriaCheckboxGroupProps } from 'react-aria-components';
import { type FieldProps } from './Field.js';
export interface CheckboxProps extends Omit<AriaCheckboxProps, 'className' | 'children'> {
    /** The label. Omit it only when the name comes from elsewhere: `aria-label`, or a table's `slot="selection"`. */
    children?: React.ReactNode;
    /** Second line under the label. */
    description?: React.ReactNode;
    className?: string;
}
/** Checkbox: an independent on/off choice; the check is drawn in when it fills. Supports `isIndeterminate`. */
export declare function Checkbox({ children, description, className, ...rest }: CheckboxProps): import("react").JSX.Element;
export interface CheckboxGroupProps extends Omit<AriaCheckboxGroupProps, 'className' | 'children'>, Omit<FieldProps, 'children' | 'isRequired'> {
    children: React.ReactNode;
    className?: string;
}
/** Checkbox group: several related choices under one label, with one error for the group. */
export declare function CheckboxGroup({ label, description, errorMessage, children, className, ...rest }: CheckboxGroupProps): import("react").JSX.Element;
