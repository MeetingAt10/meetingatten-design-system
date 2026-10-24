import { type RadioGroupProps as AriaRadioGroupProps, type RadioProps as AriaRadioProps } from 'react-aria-components';
import { type FieldProps } from './Field.js';
export interface RadioGroupProps extends Omit<AriaRadioGroupProps, 'className' | 'children'>, Omit<FieldProps, 'children' | 'isRequired'> {
    children: React.ReactNode;
    className?: string;
}
/** Control / Radio group: choose exactly one; arrow keys move between options. */
export declare function RadioGroup({ label, description, errorMessage, children, className, ...rest }: RadioGroupProps): import("react").JSX.Element;
export interface RadioProps extends Omit<AriaRadioProps, 'className' | 'children'> {
    children: React.ReactNode;
    className?: string;
}
/** Control / Radio: one option inside a RadioGroup. */
export declare function Radio({ children, className, ...rest }: RadioProps): import("react").JSX.Element;
