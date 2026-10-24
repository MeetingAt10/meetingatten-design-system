"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { Link as AriaLink } from 'react-aria-components';
import { cx } from '../lib/cx.js';
/** Interactive card: the whole card is one link. Lifts 2px on hover (shadow only under reduced motion). Keep links out of its content. */
export function CardLink({ className, children, ...rest }) {
    return (_jsx(AriaLink, { ...rest, className: cx('ds-card', className), children: children }));
}
