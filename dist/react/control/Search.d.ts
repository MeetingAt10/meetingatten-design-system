import { type SearchFieldProps } from 'react-aria-components';
export interface SearchProps extends Omit<SearchFieldProps, 'className' | 'children'> {
    /** Accessible name. Visible when `showLabel` is set; otherwise it names the field for assistive tech only. */
    label: string;
    showLabel?: boolean;
    placeholder?: string;
    /** 40px instead of 48px. */
    size?: 'sm' | 'md';
    className?: string;
}
/** Search: a text field with a magnifier and a clear button; Escape clears, Enter submits (`onSubmit`). */
export declare function Search({ label, showLabel, placeholder, size, className, ...rest }: SearchProps): import("react").JSX.Element;
