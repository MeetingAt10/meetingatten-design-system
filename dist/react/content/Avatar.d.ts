import type { Lane } from '../lib/lanes.js';
export interface AvatarProps {
    /** Person's name: the accessible name, and the source of the initials. */
    name: string;
    /** Photo URL. Without it the avatar shows initials. */
    src?: string;
    /** 24, 32, 36 (default), 48 or 64px. */
    size?: 24 | 32 | 36 | 48 | 64;
    /** Tint of the initials avatar. */
    lane?: Exclude<Lane, 'restricted'> | 'neutral';
    /** Decorative when the name is already printed beside it. */
    decorative?: boolean;
    className?: string;
}
export declare const initials: (name: string) => string;
/** Avatar: a photo or initials on the lane wash. */
export declare function Avatar({ name, src, size, lane, decorative, className }: AvatarProps): import("react").JSX.Element;
export interface AvatarGroupProps {
    names: string[];
    /** How many avatars to show before "+N". */
    max?: number;
    size?: AvatarProps['size'];
    lane?: AvatarProps['lane'];
    className?: string;
}
/** Avatar group: overlapping avatars with a "+N" count; the whole group is named once ("Ana, Ben and 3 others"). */
export declare function AvatarGroup({ names, max, size, lane, className }: AvatarGroupProps): import("react").JSX.Element;
