"use client";
import { Calendar as AriaCalendar, CalendarGrid, CalendarGridHeader, CalendarHeaderCell, CalendarGridBody, CalendarCell, Heading, Button, type CalendarProps as AriaCalendarProps, type DateValue } from 'react-aria-components';
import { Icon } from '../icon/Icon.js';
import { cx } from '../lib/cx.js';

export interface CalendarProps<T extends DateValue> extends Omit<AriaCalendarProps<T>, 'className' | 'children'> {
  className?: string;
}

/** Calendar: a ruled month. Arrow keys move by day, Page Up/Down by month; today carries the now-dot. Values come from `@internationalized/date`. */
export function Calendar<T extends DateValue>({ className, ...rest }: CalendarProps<T>) {
  return (
    <AriaCalendar {...rest} className={cx('ds-calendar', className)}>
      <header className="ds-calendar__head">
        <Button slot="previous" className="ds-icon-btn" aria-label="Previous month">
          <Icon name="caret-left" size={16} />
        </Button>
        <Heading className="ds-calendar__title" />
        <Button slot="next" className="ds-icon-btn" aria-label="Next month">
          <Icon name="caret-right" size={16} />
        </Button>
      </header>
      <CalendarGrid className="ds-calendar__grid">
        <CalendarGridHeader>{(day) => <CalendarHeaderCell>{day}</CalendarHeaderCell>}</CalendarGridHeader>
        <CalendarGridBody>{(date) => <CalendarCell date={date} className="ds-calendar__cell" />}</CalendarGridBody>
      </CalendarGrid>
    </AriaCalendar>
  );
}
