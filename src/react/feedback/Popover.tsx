"use client";
import { DialogTrigger, Popover as AriaPopover, Dialog, Heading, OverlayArrow, type PopoverProps as AriaPopoverProps } from 'react-aria-components';

export interface PopoverProps {
  /** A React Aria trigger, usually a Button or IconButton. */
  trigger: React.ReactElement;
  /** Heading and accessible name. Without it, pass `label`. */
  title?: React.ReactNode;
  label?: string;
  children: React.ReactNode;
  placement?: AriaPopoverProps['placement'];
  /** Show the pointer toward the trigger. */
  arrow?: boolean;
}

/** Popover: a small non-modal dialog beside its trigger for extra detail or a quick setting. Escape or a click outside closes it. */
export function Popover({ trigger, title, label, children, placement = 'bottom start', arrow }: PopoverProps) {
  return (
    <DialogTrigger>
      {trigger}
      <AriaPopover placement={placement} offset={arrow ? 12 : 8} className="ds-popover">
        {arrow && (
          <OverlayArrow>
            <svg width={14} height={8} viewBox="0 0 14 8" className="ds-popover__arrow" aria-hidden="true"><path d="M0 0 L7 8 L14 0" /></svg>
          </OverlayArrow>
        )}
        <Dialog className="ds-popover__dialog" aria-label={title ? undefined : label}>
          {title && <Heading slot="title" className="ds-popover__title">{title}</Heading>}
          {children}
        </Dialog>
      </AriaPopover>
    </DialogTrigger>
  );
}
