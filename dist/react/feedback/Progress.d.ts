import { type ProgressBarProps } from 'react-aria-components';
export interface ProgressProps extends Omit<ProgressBarProps, 'className' | 'children' | 'aria-label'> {
    /** Visible label (also the accessible name). */
    label: string;
    /** Show the formatted value (for example "40%") next to the label. Default true; never shown when indeterminate. */
    showValue?: boolean;
    className?: string;
}
/** Progress: labeled bar, determinate (`value`) or `isIndeterminate`. */
export declare function Progress({ label, showValue, className, ...rest }: ProgressProps): import("react").JSX.Element;
