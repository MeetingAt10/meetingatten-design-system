export interface AppShellProps {
    /** Usually a Sidebar (shown from 1024px). */
    sidebar?: React.ReactNode;
    /** Usually a TopBar (shown from 1024px). */
    topBar?: React.ReactNode;
    /** Wordmark for the mobile header (below 1024px). */
    mobileBrand?: React.ReactNode;
    /** Navigation for the mobile drawer (usually the same NavItems as the sidebar). */
    mobileNav?: React.ReactNode;
    /** Actions on the right of the mobile header. */
    mobileActions?: React.ReactNode;
    /** Page content. */
    children: React.ReactNode;
    /** Element for the content column; `div` when the shell is embedded in a page that already has a `<main>` (previews, docs). */
    contentAs?: 'main' | 'div';
    /** id of the content column, the target of a skip link. */
    contentId?: string;
    /** Workspace density (`compact` for dense admin screens). */
    density?: 'comfortable' | 'compact';
    className?: string;
}
/** App shell: sidebar beside the top bar and content on desktop; a mobile header with a navigation drawer below 1024px. */
export declare function AppShell({ sidebar, topBar, mobileBrand, mobileNav, mobileActions, children, contentAs: Content, contentId, density, className }: AppShellProps): import("react").JSX.Element;
