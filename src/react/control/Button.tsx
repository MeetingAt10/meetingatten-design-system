"use client";
import { Button as AriaButton, type ButtonProps as AriaButtonProps } from 'react-aria-components';
import { cx } from '../lib/cx.js';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'destructive';

export interface ButtonProps extends Omit<AriaButtonProps, 'className' | 'isPending' | 'children'> {
  /** Visual intent. One primary action per task region; destructive only for real removal. */
  variant?: ButtonVariant;
  /** `sm` is the 44px control height; default is 48px. */
  size?: 'md' | 'sm';
  /** Full width. */
  block?: boolean;
  /** Shows a spinner, announces the pending state and blocks repeat activation while staying focusable. */
  loading?: boolean;
  className?: string;
  children?: React.ReactNode;
}

/** Control / Button. Renders `.ds-btn` classes; behavior and accessibility from React Aria. */
export function Button({ variant = 'primary', size = 'md', block, loading, className, children, ...rest }: ButtonProps) {
  return (
    <AriaButton
      {...rest}
      isPending={loading}
      className={cx('ds-btn', `ds-btn--${variant}`, size === 'sm' && 'ds-btn--sm', block && 'ds-btn--block', className)}
    >
      {loading && <span className="ds-spinner" aria-hidden="true" />}
      {children}
    </AriaButton>
  );
}
