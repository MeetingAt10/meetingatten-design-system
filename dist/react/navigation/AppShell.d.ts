export interface AppShellProps {
    /** Usually a Sidebar. */
    sidebar?: React.ReactNode;
    /** Usually a TopBar (and a MobileHeader for small screens). */
    topBar?: React.ReactNode;
    /** Page content, rendered inside `<main>`. */
    children: React.ReactNode;
    className?: string;
}
/** App shell: sidebar beside a column of top bar and main content (admin). */
export declare function AppShell({ sidebar, topBar, children, className }: AppShellProps): import("react").JSX.Element;
