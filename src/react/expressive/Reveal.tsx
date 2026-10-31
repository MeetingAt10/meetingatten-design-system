import { cx } from '../lib/cx.js';
import { cssVars } from './fx.js';

export interface RevealProps extends React.HTMLAttributes<HTMLElement> {
  /** Element to render; default `div`. */
  as?: 'div' | 'section' | 'li' | 'article' | 'header' | 'p' | 'span';
  /** How it enters: rise (default), fade, grow from smaller, or slide in from the start or end edge. */
  variant?: 'up' | 'fade' | 'scale' | 'start' | 'end';
  /** Position among siblings: each step starts its entrance 4% of the scroll range later. */
  index?: number;
}

/**
 * Reveal: content that eases in as it scrolls into view (marketing surfaces). Visible by default; static where
 * scroll-driven animation is unsupported or motion is reduced.
 */
export function Reveal({ as: Tag = 'div', variant = 'up', index, className, style, ...rest }: RevealProps) {
  return <Tag {...rest} className={cx('ds-reveal', `ds-reveal--${variant}`, className)} style={index === undefined ? style : { ...cssVars({ '--ds-reveal-index': index }), ...style }} />;
}
