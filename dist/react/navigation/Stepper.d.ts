export interface StepperStep {
    label: string;
    /** Short note under the label ("2 of 3 fields"). */
    description?: string;
}
export interface StepperProps {
    /** Steps, in order. */
    steps: Array<string | StepperStep>;
    /** Index of the current step, 0-based. Earlier steps are done. */
    current: number;
    /** Accessible name of the list. */
    label?: string;
    className?: string;
}
/** Stepper: progress through a short flow, drawn as a timeline. Every step says its state in words. */
export declare function Stepper({ steps, current, label, className }: StepperProps): import("react").JSX.Element;
