export interface AppShellProps {
    /** Usually a Sidebar. */
    sidebar?: React.ReactNode;
    /** Usually a TopBar (and a MobileHeader for small screens). */
    topBar?: React.ReactNode;
    /** Page content, rendered inside `<main>`. */
    children: React.ReactNode;
    /** Element for the content column; `div` when the shell is embedded in a page that already has a `<main>` (previews, docs). */
    contentAs?: 'main' | 'div';
    className?: string;
}
/** App shell: sidebar beside a column of top bar and main content (admin). */
export declare function AppShell({ sidebar, topBar, children, contentAs: Content, className }: AppShellProps): import("react").JSX.Element;
