import { type ListBoxItemProps } from 'react-aria-components';
export interface SelectOptionProps extends Omit<ListBoxItemProps, 'className' | 'children'> {
    children: React.ReactNode;
}
/** Control / Select Option: one row in a Select or ComboBox list; shows a check when selected. Pass `textValue` when children are not plain text. */
export declare function SelectOption({ children, ...rest }: SelectOptionProps): import("react").JSX.Element;
