"use client";
import { Tooltip as AriaTooltip, OverlayArrow, TooltipTrigger, type TooltipProps as AriaTooltipProps } from 'react-aria-components';
import { cx } from '../lib/cx.js';

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
export function Tooltip({ children, placement = 'top', offset = 8, className, ...rest }: TooltipProps) {
  return (
    <AriaTooltip {...rest} placement={placement} offset={offset} className={cx('ds-tooltip', className)}>
      <OverlayArrow>
        <svg width={10} height={6} viewBox="0 0 10 6" className="ds-tooltip__arrow" aria-hidden="true"><path d="M0 0 L5 6 L10 0" /></svg>
      </OverlayArrow>
      {children}
    </AriaTooltip>
  );
}
