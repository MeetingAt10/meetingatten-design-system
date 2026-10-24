"use client";
import { Link as AriaLink, type LinkProps as AriaLinkProps } from 'react-aria-components';
import { cx } from '../lib/cx.js';

export interface CardLinkProps extends Omit<AriaLinkProps, 'className' | 'children'> {
  className?: string;
  children?: React.ReactNode;
}

/** Interactive card: the whole card is one link. Lifts 2px on hover (shadow only under reduced motion). Keep links out of its content. */
export function CardLink({ className, children, ...rest }: CardLinkProps) {
  return (
    <AriaLink {...rest} className={cx('ds-card', className)}>
      {children}
    </AriaLink>
  );
}
