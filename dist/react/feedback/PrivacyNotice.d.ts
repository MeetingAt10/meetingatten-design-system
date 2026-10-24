export interface PrivacyNoticeProps {
    title: string;
    /** Heading level; default 2. */
    level?: 2 | 3;
    /** Keep permission and identity visibility as separate statements; restricted access does not mean anonymous. */
    children: React.ReactNode;
    /** Footnote, for example "Sensitive submission is disabled until scope and policy are confirmed." */
    foot?: React.ReactNode;
    className?: string;
}
/** Feedback / Privacy Notice: durable policy text on report pages; never hidden in tooltips. */
export declare function PrivacyNotice({ title, level, children, foot, className }: PrivacyNoticeProps): import("react").JSX.Element;
