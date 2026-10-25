"use client";
import { ListBoxItem, Text, type ListBoxItemProps } from 'react-aria-components';
import { Icon, type IconName } from '../icon/Icon.js';
import { cx } from '../lib/cx.js';

export interface SelectOptionProps extends Omit<ListBoxItemProps, 'className' | 'children'> {
  children: React.ReactNode;
  /** Second line under the label. */
  description?: React.ReactNode;
  /** Icon before the label. */
  icon?: IconName;
  className?: string;
}

/** Select option: one row in a Select or ComboBox list; the selected row shows a check. Pass `textValue` when children are not plain text. */
export function SelectOption({ children, description, icon, className, ...rest }: SelectOptionProps) {
  return (
    <ListBoxItem
      {...rest}
      textValue={rest.textValue ?? (typeof children === 'string' ? children : undefined)}
      className={cx('ds-option', className)}
    >
      {icon && <Icon name={icon} size={16} />}
      <span className="ds-option__text">
        <Text slot="label">{children}</Text>
        {description && <Text slot="description" className="ds-option__description">{description}</Text>}
      </span>
      <Icon name="check" size={16} weight="bold" className="ds-option__check" />
    </ListBoxItem>
  );
}
