export type AlertTone = 'info' | 'success' | 'warning' | 'error';
export interface AlertProps {
    tone?: AlertTone;
    title: React.ReactNode;
    children?: React.ReactNode;
    /** Default: `alert` for errors (announced at once), `status` otherwise. Use `note` for static guidance that is always on the page. */
    role?: 'alert' | 'status' | 'note';
    className?: string;
}
/** Feedback / Inline Alert: persistent message next to the content it is about, with a tone bar, icon and title. */
export declare function Alert({ tone, title, children, role, className }: AlertProps): import("react").JSX.Element;
