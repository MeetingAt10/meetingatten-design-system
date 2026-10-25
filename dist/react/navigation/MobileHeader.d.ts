export interface MobileHeaderProps {
    /** Left slot, usually the menu IconButton. */
    start?: React.ReactNode;
    /** Right slot, for example notifications. */
    end?: React.ReactNode;
    /** Wordmark. */
    children: React.ReactNode;
    className?: string;
}
/** Mobile header: menu, wordmark and actions in a sticky 56px bar. */
export declare function MobileHeader({ start, end, children, className }: MobileHeaderProps): import("react").JSX.Element;
