import { jsx as _jsx } from "react/jsx-runtime";
import { cx } from '../lib/cx.js';
import { cssVars } from './fx.js';
/** FloatingArt: a transparent 3D render with a soft ink shadow, a slow bob and optional pointer parallax. */
export function FloatingArt({ src, alt = '', width, height, depth, float = true, delay, priority, className, style }) {
    return (_jsx("img", { src: src, alt: alt, width: width, height: height, loading: priority ? 'eager' : 'lazy', decoding: "async", fetchPriority: priority ? 'high' : undefined, className: cx('ds-art', float && 'ds-art--float', className), style: { ...cssVars({ '--ds-depth': depth, '--ds-art-delay': delay === undefined ? undefined : `${delay}s` }), ...style } }));
}
