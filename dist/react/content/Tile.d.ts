import { type IconName } from '../icon/Icon.js';
export type TileTone = 'info' | 'secondary' | 'accent' | 'neutral';
export interface TileProps {
    icon: IconName;
    tone?: TileTone;
    className?: string;
}
/** Tile: 48px decorative icon on a semantic tint. Pair it with a visible heading; the tile itself is hidden from assistive tech. */
export declare function Tile({ icon, tone, className }: TileProps): import("react").JSX.Element;
