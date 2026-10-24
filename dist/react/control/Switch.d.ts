import { type SwitchProps as AriaSwitchProps } from 'react-aria-components';
export interface SwitchProps extends Omit<AriaSwitchProps, 'className' | 'children'> {
    children: React.ReactNode;
    className?: string;
}
/** Switch: a setting that takes effect immediately (use Checkbox inside forms that are submitted). */
export declare function Switch({ children, className, ...rest }: SwitchProps): import("react").JSX.Element;
