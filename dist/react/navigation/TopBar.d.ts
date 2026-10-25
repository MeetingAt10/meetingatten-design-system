export interface TopBarProps {
    /** Page title shown in the strip. */
    title?: React.ReactNode;
    /** Element for the title: `p` (default, the page keeps its own h1) or `h1` when the strip is the page heading. */
    titleAs?: 'p' | 'h1';
    /** Search, notifications and other tools, right-aligned. */
    tools?: React.ReactNode;
    className?: string;
}
/** Top bar: the workspace title strip with tools on the right. */
export declare function TopBar({ title, titleAs: Title, tools, className }: TopBarProps): import("react").JSX.Element;
