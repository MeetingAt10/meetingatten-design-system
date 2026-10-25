"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { Link as AriaLink } from 'react-aria-components';
import { cx } from '../lib/cx.js';
/** Card link: a card that is one link element (short cards with no other controls). Prefer `<Card link>` + `CardTitle href` when the card has a heading. */
export function CardLink({ className, children, ...rest }) {
    return (_jsx(AriaLink, { ...rest, className: cx('ds-card', 'ds-card--link', className), children: children }));
}
