import { type CheckboxProps as AriaCheckboxProps } from 'react-aria-components';
export interface CheckboxProps extends Omit<AriaCheckboxProps, 'className' | 'children'> {
    children: React.ReactNode;
    className?: string;
}
/** Control / Checkbox: independent on/off choice. Supports `isIndeterminate`. */
export declare function Checkbox({ children, className, ...rest }: CheckboxProps): import("react").JSX.Element;
