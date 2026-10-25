import { type MeterProps as AriaMeterProps } from 'react-aria-components';
export interface MeterProps extends Omit<AriaMeterProps, 'className' | 'children' | 'aria-label'> {
    /** Visible label ("Slots taken"). */
    label: string;
    /** Reading in words, shown on the right ("5 of 8"). Defaults to the formatted percentage. */
    valueLabel?: string;
    /** Fill tone; words still carry the reading. `auto` turns warning at 75% and danger at 100%. */
    tone?: 'auto' | 'default' | 'high' | 'full';
    className?: string;
}
/** Meter: a known quantity in a range on a ruled scale (slots taken, storage used). */
export declare function Meter({ label, valueLabel, tone, className, ...rest }: MeterProps): import("react").JSX.Element;
