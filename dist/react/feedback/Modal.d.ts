import { DialogTrigger, type ModalOverlayProps } from 'react-aria-components';
export { DialogTrigger };
export interface ModalProps extends Omit<ModalOverlayProps, 'className' | 'children'> {
    /** Heading and accessible name. Name the object and the consequence ("Discard this draft?"). */
    title: React.ReactNode;
    /** Content, or a function receiving `close`. Put buttons in ModalActions. */
    children: React.ReactNode | ((options: {
        close: () => void;
    }) => React.ReactNode);
    /** `alertdialog` for destructive confirmations (no close button; the actions decide). */
    role?: 'dialog' | 'alertdialog';
    /** 32rem (default) or 44rem. */
    size?: 'md' | 'lg';
    className?: string;
}
/** Modal: blocks the page for a decision. It rises into place (a bottom sheet on phones); focus is trapped; Escape closes; focus returns to the trigger. */
export declare function Modal({ title, children, role, size, className, ...rest }: ModalProps): import("react").JSX.Element;
/** The body of a Modal: explanatory text and fields. */
export declare function ModalBody({ children }: {
    children: React.ReactNode;
}): import("react").JSX.Element;
/** The ruled action row at the bottom of a Modal (secondary first, primary last). */
export declare function ModalActions({ children }: {
    children: React.ReactNode;
}): import("react").JSX.Element;
