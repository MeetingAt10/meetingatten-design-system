import { type SearchFieldProps } from 'react-aria-components';
export interface SearchProps extends Omit<SearchFieldProps, 'className' | 'children' | 'aria-label'> {
    /** Accessible name (the search box has no visible label). */
    label: string;
    placeholder?: string;
    className?: string;
}
/** Control / Search: compact search box with a clear button. Escape clears. */
export declare function Search({ label, placeholder, className, ...rest }: SearchProps): import("react").JSX.Element;
