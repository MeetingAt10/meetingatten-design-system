"use client";
import { Select as AriaSelect, SelectValue, Button, Popover, ListBox, type SelectProps as AriaSelectProps } from 'react-aria-components';
import { Field, type FieldProps } from './Field.js';
import { Icon } from '../icon/Icon.js';
import { cx } from '../lib/cx.js';

export interface SelectProps<T extends object> extends Omit<AriaSelectProps<T>, 'className' | 'children'>, Omit<FieldProps, 'children' | 'isRequired'> {
  /** Items for a dynamic list; pair with a render function child. */
  items?: Iterable<T>;
  /** `SelectOption` elements, or a function rendering one per item. */
  children: React.ReactNode | ((item: T) => React.ReactNode);
  className?: string;
}

/** Select: pick one option from a short list. The trigger matches the text input; the list floats on a sheet. */
export function Select<T extends object>({ label, description, errorMessage, items, children, className, ...rest }: SelectProps<T>) {
  return (
    <AriaSelect {...rest} className={cx('ds-field', 'ds-select', className)}>
      <Field label={label} description={description} errorMessage={errorMessage} isRequired={rest.isRequired}>
        <Button className="ds-select-trigger">
          <SelectValue className="ds-select-trigger__value">
            {({ isPlaceholder, selectedText, defaultChildren }) => (isPlaceholder || !selectedText ? defaultChildren : selectedText)}
          </SelectValue>
          <Icon name="caret-down" size={16} className="ds-select-trigger__caret" />
        </Button>
      </Field>
      <Popover className="ds-popover" offset={6}>
        <ListBox className="ds-listbox" items={items}>{children}</ListBox>
      </Popover>
    </AriaSelect>
  );
}
