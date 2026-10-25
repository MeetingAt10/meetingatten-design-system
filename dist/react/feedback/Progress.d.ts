import { type ProgressBarProps } from 'react-aria-components';
export interface ProgressProps extends Omit<ProgressBarProps, 'className' | 'children' | 'aria-label'> {
    /** Visible label (also the accessible name). */
    label: string;
    /** Show the value next to the label (digits roll to each new value). Default true; hidden when indeterminate. */
    showValue?: boolean;
    /** Line under the bar ("3 of 8 files"). */
    hint?: React.ReactNode;
    tone?: 'default' | 'success' | 'danger';
    className?: string;
}
/** Progress: a ruled track whose navy fill springs to the value; determinate (`value`) or `isIndeterminate`. */
export declare function Progress({ label, showValue, hint, tone, className, ...rest }: ProgressProps): import("react").JSX.Element;
