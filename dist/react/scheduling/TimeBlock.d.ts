import { type IconName } from '../icon/Icon.js';
import { type Lane } from '../lib/lanes.js';
/** Availability in line form: scheduled (solid fill), open (solid outline), pending (dashed), taken (hatched), disabled (struck). */
export type BlockForm = 'scheduled' | 'open' | 'pending' | 'taken' | 'disabled';
export interface TimeBlockProps {
    /** Time code ("10:00-10:30"), set in tabular mono. */
    time?: string;
    dateTime?: string;
    title: React.ReactNode;
    /** Room, host or lane in words. */
    meta?: React.ReactNode;
    lane?: Lane;
    form?: BlockForm;
    /** The state in words; defaults by form ("Open", "Awaiting confirmation", "Booked", "Unavailable"). */
    stateLabel?: string;
    icon?: IconName;
    /** Makes the block a link. */
    href?: string;
    /** Makes the block a button (with `isSelected` it is a toggle). */
    onPress?: () => void;
    isSelected?: boolean;
    isDisabled?: boolean;
    /** Accessible name when the block is interactive (defaults to time + title). */
    'aria-label'?: string;
    /** Drop into place once on first paint (transform only; content is visible throughout). */
    enter?: boolean;
    className?: string;
}
/** Time block: the unit of the Office Hours world. The lane color owns the whole block; availability shows in line form and words. */
export declare function TimeBlock({ time, dateTime, title, meta, lane, form, stateLabel, icon, href, onPress, isSelected, isDisabled, enter, className, ...rest }: TimeBlockProps): import("react").JSX.Element;
