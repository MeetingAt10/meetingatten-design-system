"use client";
import { TagGroup as AriaTagGroup, TagList, Tag as AriaTag, Label, Text, Button as AriaButton, type TagGroupProps as AriaTagGroupProps, type TagProps as AriaTagProps, type TagListProps } from 'react-aria-components';
import { Icon } from '../icon/Icon.js';
import { cx } from '../lib/cx.js';

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
export function TagGroup<T extends object>({ label, description, items, children, emptyMessage, className, ...rest }: TagGroupProps<T>) {
  return (
    <AriaTagGroup {...rest} className={cx('ds-tag-group', className)}>
      <Label className="ds-field__label">{label}</Label>
      {description && <Text slot="description" className="ds-field__description">{description}</Text>}
      <TagList className="ds-tag-list" items={items} renderEmptyState={emptyMessage ? () => <span className="ds-field__description">{emptyMessage}</span> : undefined}>
        {children}
      </TagList>
    </AriaTagGroup>
  );
}

export interface TagProps extends Omit<AriaTagProps, 'className' | 'children'> {
  children: React.ReactNode;
  /** Lane tint for topic tags. */
  lane?: 'community' | 'consult';
  className?: string;
}

/** One tag. Removable when the group has `onRemove`. */
export function Tag({ children, lane, className, ...rest }: TagProps) {
  const text = typeof children === 'string' ? children : rest.textValue;
  return (
    <AriaTag {...rest} textValue={text} className={cx('ds-tag', lane && `ds-tag--${lane}`, className)}>
      {({ allowsRemoving }) => (
        <>
          {children}
          {allowsRemoving && (
            <AriaButton slot="remove" className="ds-tag__remove" aria-label="Remove">
              <Icon name="x" size={16} />
            </AriaButton>
          )}
        </>
      )}
    </AriaTag>
  );
}
