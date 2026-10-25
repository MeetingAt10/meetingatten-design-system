import { type IconName } from '../icon/Icon.js';
export type AlertTone = 'info' | 'success' | 'warning' | 'danger' | 'neutral';
export interface AlertProps {
    tone?: AlertTone;
    title: React.ReactNode;
    children?: React.ReactNode;
    /** Icon on the tone block (defaults by tone). */
    icon?: IconName;
    /** Buttons or links under the text ("Try again"). */
    actions?: React.ReactNode;
    /** A close control, for dismissible notes. */
    onDismiss?: () => void;
    /** Default: `alert` for danger (announced at once), `status` otherwise. Use `note` for static guidance that is always on the page. */
    role?: 'alert' | 'status' | 'note';
    className?: string;
}
/** Inline alert: a persistent message next to the content it is about, its icon on a solid block in the tone color. */
export declare function Alert({ tone, title, children, icon, actions, onDismiss, role, className }: AlertProps): import("react").JSX.Element;
