export interface SidebarProps {
    /** Accessible name of the navigation landmark. */
    label?: string;
    /** Logo at the top. */
    logo?: React.ReactNode;
    /** Bottom area, for example the role badge and its note. */
    footer?: React.ReactNode;
    /** NavItem elements. */
    children: React.ReactNode;
    className?: string;
}
/** Navigation / Sidebar: 240px admin navigation from 1024px; hidden below (use MobileHeader there). */
export declare function Sidebar({ label, logo, footer, children, className }: SidebarProps): import("react").JSX.Element;
/** Small note under the role badge, for example "Own reports only · proposed permission". */
export declare function SidebarNote({ children }: {
    children: React.ReactNode;
}): import("react").JSX.Element;
