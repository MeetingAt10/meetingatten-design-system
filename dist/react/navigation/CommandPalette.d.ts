import { type Key } from 'react-aria-components';
import { type IconName } from '../icon/Icon.js';
export interface CommandItem {
    id: string;
    label: string;
    /** Group heading ("Go to", "Actions"). */
    section: string;
    icon?: IconName;
    /** Second line, for example where the destination lives. */
    description?: string;
    /** Extra words that should match the search ("schedule" for Consultations). */
    keywords?: string[];
    /** Shortcut shown on the right. */
    shortcut?: string;
}
export interface CommandPaletteProps {
    items: CommandItem[];
    /** Called with the chosen item's id; the palette closes. */
    onAction: (id: Key) => void;
    /** Controlled open state. Without it, Ctrl+K / Cmd+K toggles the palette. */
    isOpen?: boolean;
    onOpenChange?: (isOpen: boolean) => void;
    placeholder?: string;
}
/** Command palette: Ctrl+K / Cmd+K opens one search over destinations and actions; arrow keys move, Enter runs, Escape closes. */
export declare function CommandPalette({ items, onAction, isOpen: controlled, onOpenChange, placeholder }: CommandPaletteProps): import("react").JSX.Element;
