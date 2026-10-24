"use client";
import { ListBoxItem, type ListBoxItemProps } from 'react-aria-components';
import { Icon } from '../icon/Icon.js';

export interface SelectOptionProps extends Omit<ListBoxItemProps, 'className' | 'children'> {
  children: React.ReactNode;
}

/** Control / Select Option: one row in a Select or ComboBox list; shows a check when selected. Pass `textValue` when children are not plain text. */
export function SelectOption({ children, ...rest }: SelectOptionProps) {
  return (
    <ListBoxItem {...rest} textValue={rest.textValue ?? (typeof children === 'string' ? children : undefined)} className="ds-option">
      {({ isSelected }) => (
        <>
          {isSelected && <Icon name="check" size={16} />}
          {children}
        </>
      )}
    </ListBoxItem>
  );
}
