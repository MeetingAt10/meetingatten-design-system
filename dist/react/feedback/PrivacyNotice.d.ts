export interface PrivacyNoticeProps {
    /** The restriction, named plainly ("Restricted record"). */
    title: string;
    /** Heading level; default 2. */
    level?: 2 | 3;
    /** What is known and what is not promised. Keep permission and identity visibility as separate statements; restricted access does not mean anonymous. */
    children: React.ReactNode;
    /** Footnote, for example "Submission is disabled until recipients and access rules are confirmed." */
    foot?: React.ReactNode;
    className?: string;
}
/** Privacy notice: the boundary, stated on the page (never in a tooltip). A hatched band with a lock; neutral ink, no hue. */
export declare function PrivacyNotice({ title, level, children, foot, className }: PrivacyNoticeProps): import("react").JSX.Element;
