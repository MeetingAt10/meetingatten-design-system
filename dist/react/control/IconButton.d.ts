import { type ButtonProps as AriaButtonProps } from 'react-aria-components';
import { type IconName } from '../icon/Icon.js';
export interface IconButtonProps extends Omit<AriaButtonProps, 'className' | 'children' | 'aria-label'> {
    icon: IconName;
    /** Required accessible name, also shown as the tooltip. */
    label: string;
    /** `quiet` (default), `outline` or `solid` (the one primary icon action). */
    variant?: 'quiet' | 'outline' | 'solid';
    /** 40px (default) or 48px. */
    size?: 'sm' | 'md';
    /** Shows a dot (for example unread notifications). Put the count or state in `label` too. */
    dot?: boolean;
    /** Shows the label as a tooltip on hover and focus (default true). */
    tooltip?: boolean;
    className?: string;
}
/** Icon button: one icon, always named; the tooltip repeats the name for sighted mouse and keyboard users. */
export declare function IconButton({ icon, label, variant, size, dot, tooltip, className, ...rest }: IconButtonProps): import("react").JSX.Element;
