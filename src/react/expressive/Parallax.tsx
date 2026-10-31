import { cx } from '../lib/cx.js';
import { cssVars } from './fx.js';

export interface ParallaxProps extends React.HTMLAttributes<HTMLElement> {
  /** Element to render; default `div`. */
  as?: 'div' | 'section' | 'figure' | 'span';
  /** Travel in px each way while it crosses the viewport (negative moves with the scroll). Default 40. */
  depth?: number;
}

/** Parallax: drifts against the scroll while it crosses the viewport. Static where scroll-driven animation is unsupported or motion is reduced. */
export function Parallax({ as: Tag = 'div', depth, className, style, ...rest }: ParallaxProps) {
  return <Tag {...rest} className={cx('ds-parallax', className)} style={depth === undefined ? style : { ...cssVars({ '--ds-depth': depth }), ...style }} />;
}
