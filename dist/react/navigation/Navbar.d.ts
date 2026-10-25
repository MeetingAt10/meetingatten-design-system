export interface NavbarLink {
    label: string;
    href: string;
    /** Marks the link for the current page (`aria-current="page"`, a 2px rule under it). */
    current?: boolean;
}
export interface NavbarProps {
    /** Wordmark: a DoorPlate on ACCS surfaces, the Logo on Meeting At 10. */
    brand: React.ReactNode;
    brandHref?: string;
    /** Accessible name of the brand link when `brand` has no text. */
    brandLabel?: string;
    links: NavbarLink[];
    /** Usually the one primary action, for example "Sign in". */
    actions?: React.ReactNode;
    /** Accessible name of the navigation landmark. */
    label?: string;
    /** Sits over the hero without a rule or fill (landing). */
    transparent?: boolean;
    className?: string;
}
/** Navbar: the landing and Meeting At 10 top navigation. Below 768px the links move into a drawer. */
export declare function Navbar({ brand, brandHref, brandLabel, links, actions, label, transparent, className }: NavbarProps): import("react").JSX.Element;
