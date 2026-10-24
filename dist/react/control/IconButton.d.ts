import { type ButtonProps as AriaButtonProps } from 'react-aria-components';
import { type IconName } from '../icon/Icon.js';
export interface IconButtonProps extends Omit<AriaButtonProps, 'className' | 'children' | 'aria-label'> {
    icon: IconName;
    /** Required accessible name (the button has no visible text). */
    label: string;
    /** Inverse appearance for dark chrome (toast, inverse surfaces). */
    inverse?: boolean;
    className?: string;
}
/** Control / Icon Button, 44x44. */
export declare function IconButton({ icon, label, inverse, className, ...rest }: IconButtonProps): import("react").JSX.Element;
