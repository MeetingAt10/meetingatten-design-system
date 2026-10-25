"use client";
import { Button as AriaButton, TooltipTrigger, type ButtonProps as AriaButtonProps } from 'react-aria-components';
import { Icon, type IconName } from '../icon/Icon.js';
import { Tooltip } from '../feedback/Tooltip.js';
import { cx } from '../lib/cx.js';

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
export function IconButton({ icon, label, variant = 'quiet', size = 'sm', dot, tooltip = true, className, ...rest }: IconButtonProps) {
  const button = (
    <AriaButton
      {...rest}
      aria-label={label}
      className={cx('ds-icon-btn', variant !== 'quiet' && `ds-icon-btn--${variant}`, size === 'md' && 'ds-icon-btn--md', className)}
    >
      <Icon name={icon} size={size === 'md' ? 24 : 20} />
      {dot && <span className="ds-icon-btn__dot" aria-hidden="true" />}
    </AriaButton>
  );
  if (!tooltip) return button;
  return (
    <TooltipTrigger delay={500} closeDelay={100}>
      {button}
      <Tooltip>{label}</Tooltip>
    </TooltipTrigger>
  );
}
