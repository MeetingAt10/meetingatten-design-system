import type { TextFieldProps } from './TextField.js';
export type TextAreaProps = TextFieldProps;
/** Control / Text Area: multi-line text with label, help and error. */
export declare function TextArea({ label, description, errorMessage, placeholder, className, ...rest }: TextAreaProps): import("react").JSX.Element;
