import { type PopoverProps as AriaPopoverProps } from 'react-aria-components';
export interface PopoverProps {
    /** A React Aria trigger, usually a Button or IconButton. */
    trigger: React.ReactElement;
    /** Heading and accessible name. Without it, pass `label`. */
    title?: React.ReactNode;
    label?: string;
    children: React.ReactNode;
    placement?: AriaPopoverProps['placement'];
}
/** Feedback / Popover: small non-modal dialog next to its trigger for extra detail or a quick setting. Escape or a click outside closes it. */
export declare function Popover({ trigger, title, label, children, placement }: PopoverProps): import("react").JSX.Element;
