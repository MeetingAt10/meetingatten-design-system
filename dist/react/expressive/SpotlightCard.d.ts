import { type Lane } from '../lib/lanes.js';
export interface SpotlightCardProps extends Omit<React.HTMLAttributes<HTMLElement>, 'onPointerMove' | 'onPointerLeave'> {
    /** Element to render when there is no `href`; default `div`. */
    as?: 'div' | 'article' | 'li';
    /** Makes the whole card one link (an `a` element). Keep its content short: it becomes the link's name. */
    href?: string;
    /** Glow and edge color; default schedule (navy). */
    lane?: Exclude<Lane, 'restricted'>;
    /** Tilts toward the pointer (up to 6 degrees) and lifts on hover. */
    tilt?: boolean;
}
/** SpotlightCard: a Card whose lane-colored glow follows the pointer, optionally tilting. Marketing surfaces; the glow is hover-only and never carries information. */
export declare function SpotlightCard({ as, href, lane, tilt, className, ...rest }: SpotlightCardProps): import("react").JSX.Element;
