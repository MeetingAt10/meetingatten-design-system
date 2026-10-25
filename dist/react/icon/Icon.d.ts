import type { Icon as PhosphorIcon, IconWeight } from '@phosphor-icons/react';
import { type IconName } from './icons.js';
export type { IconName, IconWeight, PhosphorIcon };
export interface IconProps {
    /** A name from the curated vocabulary (assets/icons/icons.json). */
    name?: IconName;
    /** Any Phosphor icon component, for glyphs outside the vocabulary: `icon={RocketLaunchIcon}`. */
    icon?: PhosphorIcon;
    /** 16, 20 (default), 24 or 32px. */
    size?: 16 | 20 | 24 | 32;
    /** `regular` for UI, `fill` for selected or current, `duotone` for lane and category icons. */
    weight?: IconWeight;
    /** Accessible name. Omit for decorative icons next to visible text (then hidden from assistive tech). */
    label?: string;
    className?: string;
}
/** Icon: Phosphor glyphs in currentColor. Weight carries emphasis: fill marks the current item. */
export declare function Icon({ name, icon, size, weight, label, className }: IconProps): import("react").JSX.Element | null;
