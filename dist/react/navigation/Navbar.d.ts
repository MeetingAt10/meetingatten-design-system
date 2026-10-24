export interface NavbarLink {
    label: string;
    href: string;
    /** Marks the link for the current page (`aria-current="page"`). */
    current?: boolean;
}
export interface NavbarProps {
    /** Logo or wordmark. */
    brand: React.ReactNode;
    brandHref?: string;
    /** Accessible name of the brand link, when `brand` is an image without text. */
    brandLabel?: string;
    links: NavbarLink[];
    /** Usually one primary action, for example "Sign in". */
    actions?: React.ReactNode;
    /** Accessible name of the navigation landmark. */
    label?: string;
    className?: string;
}
/** Navbar: landing top navigation. Under 1024px the links move into a panel opened by the menu button; Escape closes it. */
export declare function Navbar({ brand, brandHref, brandLabel, links, actions, label, className }: NavbarProps): import("react").JSX.Element;
