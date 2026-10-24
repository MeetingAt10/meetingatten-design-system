"use client";
import { Calendar as AriaCalendar, CalendarGrid, CalendarCell, Heading, Button, type CalendarProps as AriaCalendarProps, type DateValue } from 'react-aria-components';
import { Icon } from '../icon/Icon.js';
import { cx } from '../lib/cx.js';

export interface CalendarProps<T extends DateValue> extends Omit<AriaCalendarProps<T>, 'className' | 'children'> {
  className?: string;
}

/** Calendar: month grid for picking a date; arrow keys move by day, Page Up/Down by month. Values come from `@internationalized/date`. */
export function Calendar<T extends DateValue>({ className, ...rest }: CalendarProps<T>) {
  return (
    <AriaCalendar {...rest} className={cx('ds-calendar', className)}>
      <header className="ds-calendar__header">
        <Button slot="previous" className="ds-icon-btn ds-calendar__prev">
          <Icon name="chevron" size={16} />
        </Button>
        <Heading className="ds-calendar__title" />
        <Button slot="next" className="ds-icon-btn">
          <Icon name="chevron" size={16} />
        </Button>
      </header>
      <CalendarGrid>{(date) => <CalendarCell date={date} className="ds-calendar__cell" />}</CalendarGrid>
    </AriaCalendar>
  );
}
