import { type SelectProps as AriaSelectProps } from 'react-aria-components';
import { type FieldProps } from './Field.js';
export interface SelectProps<T extends object> extends Omit<AriaSelectProps<T>, 'className' | 'children'>, Omit<FieldProps, 'children' | 'isRequired'> {
    /** Items for a dynamic list; pair with a render function child. */
    items?: Iterable<T>;
    /** `SelectOption` elements, or a function rendering one per item. */
    children: React.ReactNode | ((item: T) => React.ReactNode);
    className?: string;
}
/** Select: pick one option from a short list. The trigger matches the text input; the list floats on a sheet. */
export declare function Select<T extends object>({ label, description, errorMessage, items, children, className, ...rest }: SelectProps<T>): import("react").JSX.Element;
