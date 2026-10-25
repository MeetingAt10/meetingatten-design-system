import { type ButtonProps as AriaButtonProps } from 'react-aria-components';
import { type IconName } from '../icon/Icon.js';
export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'destructive' | 'plate';
export interface ButtonProps extends Omit<AriaButtonProps, 'className' | 'isPending' | 'children'> {
    /** Visual intent. One primary action per task region; destructive only for real removal; `plate` on a door-plate band. */
    variant?: ButtonVariant;
    /** `sm` 40px (44px on touch), `md` 48px (default), `lg` 56px. */
    size?: 'sm' | 'md' | 'lg';
    /** Full width. */
    block?: boolean;
    /** Keeps the label, shows the clock spinner and a sweeping line, announces the pending state and blocks repeat presses. */
    loading?: boolean;
    /** Icon before the label. */
    icon?: IconName;
    /** Icon after the label (for example `arrow-right` on a forward action). */
    iconEnd?: IconName;
    /** Renders a link that looks like the button (navigation, not an action). */
    href?: string;
    target?: string;
    rel?: string;
    className?: string;
    children?: React.ReactNode;
}
/** Button: a block you press. Behavior and accessibility from React Aria (press, keyboard, pending). */
export declare function Button({ variant, size, block, loading, icon, iconEnd, href, target, rel, className, children, ...rest }: ButtonProps): import("react").JSX.Element;
