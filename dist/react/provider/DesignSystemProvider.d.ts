export interface DesignSystemProviderProps {
    children: React.ReactNode;
    /** Client-side navigation for every design system link (for example Next.js `router.push`). */
    navigate?: (href: string, routerOptions?: undefined) => void;
    /** Turns a route into a real href (for base paths). Used with `navigate`. */
    useHref?: (href: string) => string;
    /** Locale for dates, numbers and screen reader messages. Defaults to the browser locale. */
    locale?: string;
    /** Motion follows the OS reduced-motion setting by default (`user`). */
    reducedMotion?: 'user' | 'always' | 'never';
}
/**
 * Wrap the app once. Sets the motion defaults (spring transitions, OS reduced-motion respected), client-side
 * routing for links and the locale. Components also work without it; they then use browser defaults.
 */
export declare function DesignSystemProvider({ children, navigate, useHref, locale, reducedMotion }: DesignSystemProviderProps): import("react").JSX.Element;
