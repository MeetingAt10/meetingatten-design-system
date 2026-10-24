import { DialogTrigger, type ModalOverlayProps } from 'react-aria-components';
export { DialogTrigger };
export interface ModalProps extends Omit<ModalOverlayProps, 'className' | 'children'> {
    /** Dialog heading and accessible name. Name the object and the consequence ("Discard draft?"). */
    title: React.ReactNode;
    /** Content, or a function receiving `close`. */
    children: React.ReactNode | ((options: {
        close: () => void;
    }) => React.ReactNode);
    /** Dialog role; `alertdialog` for destructive confirmations. */
    role?: 'dialog' | 'alertdialog';
    className?: string;
}
/** Feedback / Modal: blocks the page for a decision. Focus moves in and is trapped; Escape and the close button close it; focus returns to the trigger. */
export declare function Modal({ title, children, role, className, ...rest }: ModalProps): import("react").JSX.Element;
/** Two-column action row at the bottom of a Modal (secondary first, primary last). */
export declare function ModalActions({ children }: {
    children: React.ReactNode;
}): import("react").JSX.Element;
