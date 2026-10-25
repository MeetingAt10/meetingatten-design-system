import { type IconName, type IconWeight } from '../icon/Icon.js';
import type { Lane } from '../lib/lanes.js';
export type TileTone = Lane | 'neutral' | 'success' | 'warning' | 'danger';
export interface TileProps {
    icon: IconName;
    tone?: TileTone;
    /** 32, 40 (default) or 56px. */
    size?: 'sm' | 'md' | 'lg';
    /** Duotone by default: its 20% layer reads as a highlighter on the block. */
    weight?: IconWeight;
    /** Accessible name; without it the tile is decorative (pair it with a visible heading). */
    label?: string;
    className?: string;
}
/** Tile: a small solid block in the lane color holding one icon. */
export declare function Tile({ icon, tone, size, weight, label, className }: TileProps): import("react").JSX.Element;
