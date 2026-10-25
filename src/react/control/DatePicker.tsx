"use client";
import { DatePicker as AriaDatePicker, Group, DateInput, DateSegment, Button, Popover, Dialog, type DatePickerProps as AriaDatePickerProps, type DateValue } from 'react-aria-components';
import { Field, type FieldProps } from './Field.js';
import { Calendar } from './Calendar.js';
import { Icon } from '../icon/Icon.js';
import { cx } from '../lib/cx.js';

export interface DatePickerProps<T extends DateValue> extends Omit<AriaDatePickerProps<T>, 'className' | 'children'>, Omit<FieldProps, 'children' | 'isRequired'> {
  className?: string;
}

/** Date picker: type the date segment by segment, or pick it from the calendar popover. */
export function DatePicker<T extends DateValue>({ label, description, errorMessage, className, ...rest }: DatePickerProps<T>) {
  return (
    <AriaDatePicker {...rest} className={cx('ds-field', 'ds-date-picker', className)}>
      <Field label={label} description={description} errorMessage={errorMessage} isRequired={rest.isRequired}>
        <Group className="ds-date-field">
          <DateInput className="ds-date-field__input">{(segment) => <DateSegment segment={segment} className="ds-date-segment" />}</DateInput>
          <Button className="ds-icon-btn" aria-label="Open calendar">
            <Icon name="calendar" size={20} />
          </Button>
        </Group>
      </Field>
      <Popover className="ds-popover" offset={6}>
        <Dialog className="ds-popover__dialog ds-date-picker__popover" aria-label="Calendar">
          <Calendar />
        </Dialog>
      </Popover>
    </AriaDatePicker>
  );
}
