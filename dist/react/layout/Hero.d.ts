export interface HeroProps {
    eyebrow?: React.ReactNode;
    /** The page's h1. */
    title: React.ReactNode;
    lead?: React.ReactNode;
    /** One primary and at most one secondary action. */
    actions?: React.ReactNode;
    /** Preview column from 1024px (for example a short stack of collection cards). */
    aside?: React.ReactNode;
    /** Decorative washes behind the hero. Default true. */
    wash?: boolean;
    className?: string;
}
/** Hero: page opener with eyebrow, h1, lead, actions and an optional preview. */
export declare function Hero({ eyebrow, title, lead, actions, aside, wash, className }: HeroProps): import("react").JSX.Element;
