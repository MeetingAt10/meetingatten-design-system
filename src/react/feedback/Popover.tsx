"use client";
import { DialogTrigger, Popover as AriaPopover, Dialog, Heading, type PopoverProps as AriaPopoverProps } from 'react-aria-components';

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
export function Popover({ trigger, title, label, children, placement = 'bottom start' }: PopoverProps) {
  return (
    <DialogTrigger>
      {trigger}
      <AriaPopover placement={placement} offset={8} className="ds-popover">
        <Dialog className="ds-popover-panel" aria-label={title ? undefined : label}>
          {title && <Heading slot="title" className="ds-type-h4">{title}</Heading>}
          {children}
        </Dialog>
      </AriaPopover>
    </DialogTrigger>
  );
}
