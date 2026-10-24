import { type IconName } from './icons.js';
export type { IconName };
export interface IconProps {
    name: IconName;
    /** 16, 20 (default) or 24px. */
    size?: 16 | 20 | 24;
    /** Accessible name. Omit for decorative icons next to visible text (then hidden from assistive tech). */
    label?: string;
    className?: string;
}
/** Icon from the Figma set. Inline SVG: no sprite needed in the page. Strokes follow `currentColor`. */
export declare function Icon({ name, size, label, className }: IconProps): import("react").JSX.Element;
