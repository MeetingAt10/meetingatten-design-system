import { type CalendarProps as AriaCalendarProps, type DateValue } from 'react-aria-components';
export interface CalendarProps<T extends DateValue> extends Omit<AriaCalendarProps<T>, 'className' | 'children'> {
    className?: string;
}
/** Calendar: a ruled month. Arrow keys move by day, Page Up/Down by month; today carries the now-dot. Values come from `@internationalized/date`. */
export declare function Calendar<T extends DateValue>({ className, ...rest }: CalendarProps<T>): import("react").JSX.Element;
