import { type BlockForm } from './TimeBlock.js';
import type { Lane } from '../lib/lanes.js';
import type { IconName } from '../icon/Icon.js';
export interface TimetableDay {
    id: string;
    /** Short weekday ("Mon"). */
    label: string;
    /** Day of the month ("19"). */
    date?: string;
    /** Full name for assistive tech ("Monday 19 October"). */
    fullLabel?: string;
    isToday?: boolean;
}
export interface TimetableEvent {
    id: string;
    /** The day's id. */
    day: string;
    /** Decimal hours (9.5 = 09:30). */
    start: number;
    end: number;
    title: string;
    /** Shown time code; defaults to "09:30-10:30". */
    time?: string;
    meta?: string;
    lane?: Lane;
    form?: BlockForm;
    stateLabel?: string;
    icon?: IconName;
    href?: string;
    onPress?: () => void;
    isSelected?: boolean;
}
export interface TimetableProps {
    /** Accessible name of the timetable ("This week, sample schedule"). */
    label: string;
    days: TimetableDay[];
    events: TimetableEvent[];
    /** First and last hour of the grid (default 8 to 17). */
    startHour?: number;
    endHour?: number;
    /** The now-line on today: `live` follows the clock (default), a number pins it (decimal hours), `false` hides it. */
    now?: 'live' | number | false;
    /** Hatched band under the grid, for the restricted lane ("Reports: you see only your own records"). */
    band?: React.ReactNode;
    /** Heading level of the day heads; default 3. */
    headingLevel?: 2 | 3 | 4;
    /** Hovering or choosing a block dims its neighbours one step (default true). */
    isolate?: boolean;
    /** Blocks drop into their cells on first paint and glide when the schedule changes (default true; off under reduced motion). */
    animate?: boolean;
    className?: string;
}
/** Timetable: a ruled week (or day) sheet of time blocks, the now-line on today, and a hatched restricted band. Each day is a labeled section with its blocks in time order. */
export declare function Timetable({ label, days, events, startHour, endHour, now, band, headingLevel, isolate, animate, className }: TimetableProps): import("react").JSX.Element;
