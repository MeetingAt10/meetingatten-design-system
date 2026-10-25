import { TooltipTrigger, type TooltipProps as AriaTooltipProps } from 'react-aria-components';
export { TooltipTrigger };
export interface TooltipProps extends Omit<AriaTooltipProps, 'className' | 'children'> {
    /** Short text. Never the only place for essential information, and never interactive. */
    children: React.ReactNode;
    className?: string;
}
/**
 * Tooltip: the ink plate naming an icon control. Put it inside a TooltipTrigger after a focusable React Aria trigger:
 * `<TooltipTrigger><IconButton .../><Tooltip>Notifications</Tooltip></TooltipTrigger>` (IconButton does this for you).
 */
export declare function Tooltip({ children, placement, offset, className, ...rest }: TooltipProps): import("react").JSX.Element;
