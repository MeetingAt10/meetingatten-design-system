import { type ButtonProps as AriaButtonProps } from 'react-aria-components';
export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'destructive';
export interface ButtonProps extends Omit<AriaButtonProps, 'className' | 'isPending' | 'children'> {
    /** Visual intent. One primary action per task region; destructive only for real removal. */
    variant?: ButtonVariant;
    /** `sm` is the 44px control height; default is 48px. */
    size?: 'md' | 'sm';
    /** Full width. */
    block?: boolean;
    /** Shows a spinner, announces the pending state and blocks repeat activation while staying focusable. */
    loading?: boolean;
    className?: string;
    children?: React.ReactNode;
}
/** Control / Button. Renders `.ds-btn` classes; behavior and accessibility from React Aria. */
export declare function Button({ variant, size, block, loading, className, children, ...rest }: ButtonProps): import("react").JSX.Element;
