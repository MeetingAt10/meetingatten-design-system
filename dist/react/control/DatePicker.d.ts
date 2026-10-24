import { type DatePickerProps as AriaDatePickerProps, type DateValue } from 'react-aria-components';
import { type FieldProps } from './Field.js';
export interface DatePickerProps<T extends DateValue> extends Omit<AriaDatePickerProps<T>, 'className' | 'children'>, Omit<FieldProps, 'children' | 'isRequired'> {
    className?: string;
}
/** DatePicker: type a date segment by segment, or pick it from the calendar popover. */
export declare function DatePicker<T extends DateValue>({ label, description, errorMessage, className, ...rest }: DatePickerProps<T>): import("react").JSX.Element;
