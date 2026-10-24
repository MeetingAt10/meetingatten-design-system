"use client";
import { TooltipTrigger, Tooltip as AriaTooltip, type TooltipProps as AriaTooltipProps } from 'react-aria-components';

export interface TooltipProps {
  /** Short text. Never the only place for essential information, and never interactive. */
  content: React.ReactNode;
  /** A focusable React Aria trigger, usually an IconButton. */
  children: React.ReactElement;
  /** Hover delay in ms (keyboard focus shows it at once). */
  delay?: number;
  placement?: AriaTooltipProps['placement'];
}

/** Feedback / Tooltip: label for an icon control, on the inverse surface. Shows on hover and keyboard focus; Escape hides it. */
export function Tooltip({ content, children, delay = 600, placement = 'top' }: TooltipProps) {
  return (
    <TooltipTrigger delay={delay}>
      {children}
      <AriaTooltip placement={placement} offset={6} className="ds-tooltip">{content}</AriaTooltip>
    </TooltipTrigger>
  );
}
