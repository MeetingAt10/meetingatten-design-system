import { type ListBoxItemProps } from 'react-aria-components';
import { type IconName } from '../icon/Icon.js';
export interface SelectOptionProps extends Omit<ListBoxItemProps, 'className' | 'children'> {
    children: React.ReactNode;
    /** Second line under the label. */
    description?: React.ReactNode;
    /** Icon before the label. */
    icon?: IconName;
    className?: string;
}
/** Select option: one row in a Select or ComboBox list; the selected row shows a check. Pass `textValue` when children are not plain text. */
export declare function SelectOption({ children, description, icon, className, ...rest }: SelectOptionProps): import("react").JSX.Element;
