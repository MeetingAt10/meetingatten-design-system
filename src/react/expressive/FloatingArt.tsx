import { cx } from '../lib/cx.js';
import { cssVars } from './fx.js';

export interface FloatingArtProps {
  /** Image URL, usually one of the package renders: `@meetingat10/design-system/assets/imagery/<name>.webp`. */
  src: string;
  /** Empty (decorative) by default; describe the render only when it carries meaning. */
  alt?: string;
  /** Intrinsic size in px; always set, so the render never shifts the layout. */
  width: number;
  height: number;
  /** Pointer parallax travel in px at the edge of a ParallaxScene; larger is nearer. Default 0. */
  depth?: number;
  /** Bobs slowly (reduced motion: still). Default true. */
  float?: boolean;
  /** Start offset of the bob in seconds, so renders in a group do not move in step. */
  delay?: number;
  /** Load now (the first viewport) instead of lazily. */
  priority?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

/** FloatingArt: a transparent 3D render with a soft ink shadow, a slow bob and optional pointer parallax. */
export function FloatingArt({ src, alt = '', width, height, depth, float = true, delay, priority, className, style }: FloatingArtProps) {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      fetchPriority={priority ? 'high' : undefined}
      className={cx('ds-art', float && 'ds-art--float', className)}
      style={{ ...cssVars({ '--ds-depth': depth, '--ds-art-delay': delay === undefined ? undefined : `${delay}s` }), ...style }}
    />
  );
}
