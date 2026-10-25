import { type RadioGroupProps as AriaRadioGroupProps, type RadioProps as AriaRadioProps } from 'react-aria-components';
import { type FieldProps } from './Field.js';
export interface RadioGroupProps extends Omit<AriaRadioGroupProps, 'className' | 'children'>, Omit<FieldProps, 'children' | 'isRequired'> {
    children: React.ReactNode;
    /** Lay options out in a row (short labels only). */
    row?: boolean;
    className?: string;
}
/** Radio group: choose exactly one; arrow keys move between options. */
export declare function RadioGroup({ label, description, errorMessage, children, row, className, ...rest }: RadioGroupProps): import("react").JSX.Element;
export interface RadioProps extends Omit<AriaRadioProps, 'className' | 'children'> {
    children: React.ReactNode;
    /** Second line under the label (also turns a `card` radio into a two-line choice). */
    description?: React.ReactNode;
    /** A block-shaped choice with a rule around it (meeting type, plan). */
    card?: boolean;
    className?: string;
}
/** Radio: one option inside a RadioGroup; the center dot springs in when chosen. */
export declare function Radio({ children, description, card, className, ...rest }: RadioProps): import("react").JSX.Element;
