export interface SidebarProps {
    /** Accessible name of the navigation landmark. */
    label?: string;
    /** Wordmark at the top: a DoorPlate on ACCS surfaces, the Logo on Meeting At 10. */
    brand?: React.ReactNode;
    /** Bottom area: the signed-in person, their role and a note. */
    footer?: React.ReactNode;
    /** NavItem elements, optionally grouped with SidebarSection. */
    children: React.ReactNode;
    className?: string;
}
/** Sidebar: the workspace rail from 1024px (AppShell moves it into a drawer below). */
export declare function Sidebar({ label, brand, footer, children, className }: SidebarProps): import("react").JSX.Element;
/** A labeled group of NavItems inside the Sidebar. */
export declare function SidebarSection({ label, children }: {
    label: string;
    children: React.ReactNode;
}): import("react").JSX.Element;
/** Small note in the sidebar footer, for example "Own reports only (proposed permission)". */
export declare function SidebarNote({ children }: {
    children: React.ReactNode;
}): import("react").JSX.Element;
