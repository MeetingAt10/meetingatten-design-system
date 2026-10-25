export interface KbdProps {
    /** One key ("K") or several keys pressed together (["Ctrl", "K"]). */
    keys: string | string[];
    className?: string;
}
/** Keyboard key: keycaps for a shortcut, read as one phrase ("Ctrl K"). */
export declare function Kbd({ keys, className }: KbdProps): import("react").JSX.Element;
