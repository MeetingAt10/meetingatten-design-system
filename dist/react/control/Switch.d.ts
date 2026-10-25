import { type SwitchProps as AriaSwitchProps } from 'react-aria-components';
export interface SwitchProps extends Omit<AriaSwitchProps, 'className' | 'children'> {
    /** What the switch controls ("Show my name on posts"). */
    children: React.ReactNode;
    /** Shows "On" / "Off" beside the label as well. */
    showState?: boolean;
    className?: string;
}
/** Switch: a setting that takes effect immediately (use Checkbox in forms that are submitted). The thumb springs across. */
export declare function Switch({ children, showState, className, ...rest }: SwitchProps): import("react").JSX.Element;
