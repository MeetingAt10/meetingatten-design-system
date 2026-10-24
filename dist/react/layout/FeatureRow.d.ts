import { type TileTone } from '../content/Tile.js';
import type { IconName } from '../icon/Icon.js';
export interface FeatureRowProps {
    children: React.ReactNode;
    className?: string;
}
/** Feature Row: open columns (1 / 2 / 3 by breakpoint) of Feature items. No card around each item. */
export declare function FeatureRow({ children, className }: FeatureRowProps): import("react").JSX.Element;
export interface FeatureProps {
    icon: IconName;
    tone?: TileTone;
    title: React.ReactNode;
    /** Heading level; default 3. */
    level?: 3 | 4;
    children?: React.ReactNode;
    href?: string;
    linkLabel?: React.ReactNode;
}
/** Feature: tile, heading, short text and an optional link. */
export declare function Feature({ icon, tone, title, level, children, href, linkLabel }: FeatureProps): import("react").JSX.Element;
