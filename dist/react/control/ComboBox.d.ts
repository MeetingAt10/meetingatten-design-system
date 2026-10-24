import { type ComboBoxProps as AriaComboBoxProps } from 'react-aria-components';
import { type FieldProps } from './Field.js';
export interface ComboBoxProps<T extends object> extends Omit<AriaComboBoxProps<T>, 'className' | 'children'>, Omit<FieldProps, 'children' | 'isRequired'> {
    items?: Iterable<T>;
    /** `SelectOption` elements, or a function rendering one per item. */
    children: React.ReactNode | ((item: T) => React.ReactNode);
    placeholder?: string;
    className?: string;
}
/** ComboBox: type to filter a longer list, then pick one option. */
export declare function ComboBox<T extends object>({ label, description, errorMessage, items, children, placeholder, className, ...rest }: ComboBoxProps<T>): import("react").JSX.Element;
