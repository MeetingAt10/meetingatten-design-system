import { type DisclosureProps as AriaDisclosureProps, type DisclosureGroupProps as AriaDisclosureGroupProps } from 'react-aria-components';
export interface DisclosureProps extends Omit<AriaDisclosureProps, 'className' | 'children'> {
    /** The always-visible row label (a question, a section name). */
    title: React.ReactNode;
    /** Heading level of the title; default 3. */
    level?: 2 | 3 | 4;
    children: React.ReactNode;
    className?: string;
}
/** Disclosure: a ruled row that opens in place; the caret turns and the panel height springs. */
export declare function Disclosure({ title, level, children, className, ...rest }: DisclosureProps): import("react").JSX.Element;
export interface AccordionProps extends Omit<AriaDisclosureGroupProps, 'className'> {
    className?: string;
}
/** Accordion: a group of Disclosures. One open at a time unless `allowsMultipleExpanded`. */
export declare function Accordion({ className, ...rest }: AccordionProps): import("react").JSX.Element;
