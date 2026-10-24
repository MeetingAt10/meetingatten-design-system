"use client";
import { Link as AriaLink, type LinkProps as AriaLinkProps } from 'react-aria-components';
import { cx } from '../lib/cx.js';

export interface LinkProps extends Omit<AriaLinkProps, 'className' | 'children'> {
  /** Inline link inside running text (underlined) instead of the 44px standalone link. */
  inline?: boolean;
  className?: string;
  children?: React.ReactNode;
}

/** Navigation / Link. Links navigate; use Button for actions. */
export function Link({ inline, className, children, ...rest }: LinkProps) {
  return (
    <AriaLink {...rest} className={cx(inline ? 'ds-link-inline' : 'ds-link', className)}>
      {children}
    </AriaLink>
  );
}
