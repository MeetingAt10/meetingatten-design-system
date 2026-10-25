"use client";
import {
  Disclosure as AriaDisclosure, DisclosurePanel, DisclosureGroup as AriaDisclosureGroup, Heading, Button as AriaButton,
  type DisclosureProps as AriaDisclosureProps, type DisclosureGroupProps as AriaDisclosureGroupProps,
} from 'react-aria-components';
import { Icon } from '../icon/Icon.js';
import { cx } from '../lib/cx.js';

export interface DisclosureProps extends Omit<AriaDisclosureProps, 'className' | 'children'> {
  /** The always-visible row label (a question, a section name). */
  title: React.ReactNode;
  /** Heading level of the title; default 3. */
  level?: 2 | 3 | 4;
  children: React.ReactNode;
  className?: string;
}

/** Disclosure: a ruled row that opens in place; the caret turns and the panel height springs. */
export function Disclosure({ title, level = 3, children, className, ...rest }: DisclosureProps) {
  return (
    <AriaDisclosure {...rest} className={cx('ds-disclosure', className)}>
      <Heading level={level} className="ds-disclosure__heading">
        <AriaButton slot="trigger" className="ds-disclosure__trigger">
          {title}
          <Icon name="caret-down" size={20} className="ds-disclosure__caret" />
        </AriaButton>
      </Heading>
      <DisclosurePanel className="ds-disclosure__panel">
        <div className="ds-disclosure__content">{typeof children === 'string' ? <p>{children}</p> : children}</div>
      </DisclosurePanel>
    </AriaDisclosure>
  );
}

export interface AccordionProps extends Omit<AriaDisclosureGroupProps, 'className'> {
  className?: string;
}

/** Accordion: a group of Disclosures. One open at a time unless `allowsMultipleExpanded`. */
export function Accordion({ className, ...rest }: AccordionProps) {
  return <AriaDisclosureGroup {...rest} className={cx('ds-disclosure-group', className)} />;
}
