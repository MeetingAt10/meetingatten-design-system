import { type TileTone } from '../content/Tile.js';
import type { IconName } from '../icon/Icon.js';
export interface EmptyStateProps {
    icon?: IconName;
    tone?: TileTone;
    title: React.ReactNode;
    /** Heading level; default 2. */
    level?: 2 | 3;
    /** What is missing and why, in plain words. */
    description?: React.ReactNode;
    /** One next step, for example a Button or Link. */
    action?: React.ReactNode;
    className?: string;
}
/** Feedback / Empty State: nothing to show yet, with one next step. Open content, not a card. */
export declare function EmptyState({ icon, tone, title, level, description, action, className }: EmptyStateProps): import("react").JSX.Element;
