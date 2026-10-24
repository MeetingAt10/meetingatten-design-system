import { type ModalOverlayProps } from 'react-aria-components';
export interface DrawerProps extends Omit<ModalOverlayProps, 'className' | 'children'> {
    title: React.ReactNode;
    children: React.ReactNode | ((options: {
        close: () => void;
    }) => React.ReactNode);
    /** Side the sheet opens from. */
    placement?: 'end' | 'start';
    className?: string;
}
/** Feedback / Drawer: side sheet for secondary work (filters, details). Behaves like Modal: focus trapped, Escape closes. Open it with DialogTrigger or `isOpen`. */
export declare function Drawer({ title, children, placement, className, ...rest }: DrawerProps): import("react").JSX.Element;
