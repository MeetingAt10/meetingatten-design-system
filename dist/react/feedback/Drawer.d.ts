import { type ModalOverlayProps } from 'react-aria-components';
export interface DrawerProps extends Omit<ModalOverlayProps, 'className' | 'children'> {
    title: React.ReactNode;
    children: React.ReactNode | ((options: {
        close: () => void;
    }) => React.ReactNode);
    /** Edge it slides from: `end` (default), `start`, or `bottom` (a bottom sheet you can swipe down to close). */
    side?: 'end' | 'start' | 'bottom';
    /** Ruled action row at the bottom. */
    footer?: React.ReactNode;
    className?: string;
}
/** Drawer: a sheet for secondary work that keeps the page in view (filters, record details, mobile navigation). Focus is trapped; Escape and the scrim close it. */
export declare function Drawer({ title, children, side, footer, className, ...rest }: DrawerProps): import("react").JSX.Element;
