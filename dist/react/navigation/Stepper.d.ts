export interface StepperProps {
    /** Step names, in order. */
    steps: string[];
    /** Index of the current step, 0-based. Earlier steps show as completed. */
    current: number;
    /** Accessible name of the navigation landmark. */
    label?: string;
    className?: string;
}
/** Navigation / Stepper: progress through a multi-step task. Completed and upcoming are announced in text. */
export declare function Stepper({ steps, current, label, className }: StepperProps): import("react").JSX.Element;
