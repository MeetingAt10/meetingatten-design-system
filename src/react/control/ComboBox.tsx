"use client";
import { ComboBox as AriaComboBox, Input, Button, Popover, ListBox, type ComboBoxProps as AriaComboBoxProps } from 'react-aria-components';
import { Field, type FieldProps } from './Field.js';
import { Icon } from '../icon/Icon.js';
import { cx } from '../lib/cx.js';

export interface ComboBoxProps<T extends object> extends Omit<AriaComboBoxProps<T>, 'className' | 'children'>, Omit<FieldProps, 'children' | 'isRequired'> {
  items?: Iterable<T>;
  /** `SelectOption` elements, or a function rendering one per item. */
  children: React.ReactNode | ((item: T) => React.ReactNode);
  placeholder?: string;
  className?: string;
}

/** ComboBox: type to filter a longer list, then pick one option. */
export function ComboBox<T extends object>({ label, description, errorMessage, items, children, placeholder, className, ...rest }: ComboBoxProps<T>) {
  return (
    <AriaComboBox {...rest} className={cx('ds-field', className)}>
      <Field label={label} description={description} errorMessage={errorMessage} isRequired={rest.isRequired}>
        <div className="ds-combobox">
          <Input placeholder={placeholder} />
          <Button className="ds-field-button">
            <Icon name="chevron" size={16} />
          </Button>
        </div>
      </Field>
      <Popover className="ds-popover">
        <ListBox className="ds-listbox" items={items}>{children}</ListBox>
      </Popover>
    </AriaComboBox>
  );
}
