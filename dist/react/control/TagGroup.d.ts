import { type TagGroupProps as AriaTagGroupProps, type TagProps as AriaTagProps, type TagListProps } from 'react-aria-components';
export interface TagGroupProps<T extends object> extends Omit<AriaTagGroupProps, 'className' | 'children'> {
    /** Visible label ("Topics", "Active filters"). */
    label: React.ReactNode;
    description?: React.ReactNode;
    items?: Iterable<T>;
    children: TagListProps<T>['children'];
    /** Shown when there are no tags. */
    emptyMessage?: string;
    className?: string;
}
/** Tag group: topics or active filters. Arrow keys move between tags; Delete or Backspace removes a removable tag. */
export declare function TagGroup<T extends object>({ label, description, items, children, emptyMessage, className, ...rest }: TagGroupProps<T>): import("react").JSX.Element;
export interface TagProps extends Omit<AriaTagProps, 'className' | 'children'> {
    children: React.ReactNode;
    /** Lane tint for topic tags. */
    lane?: 'community' | 'consult';
    className?: string;
}
/** One tag. Removable when the group has `onRemove`. */
export declare function Tag({ children, lane, className, ...rest }: TagProps): import("react").JSX.Element;
