export interface MobileHeaderProps {
    /** Left slot, usually the menu IconButton. */
    start?: React.ReactNode;
    /** Right slot, for example notifications. */
    end?: React.ReactNode;
    /** Centered logo or wordmark. */
    children: React.ReactNode;
    className?: string;
}
/** Navigation / Mobile Header: 72px bar with 44px controls on both sides and the logo centered. */
export declare function MobileHeader({ start, end, children, className }: MobileHeaderProps): import("react").JSX.Element;
