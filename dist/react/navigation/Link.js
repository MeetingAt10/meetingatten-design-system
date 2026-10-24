"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { Link as AriaLink } from 'react-aria-components';
import { cx } from '../lib/cx.js';
/** Navigation / Link. Links navigate; use Button for actions. */
export function Link({ inline, className, children, ...rest }) {
    return (_jsx(AriaLink, { ...rest, className: cx(inline ? 'ds-link-inline' : 'ds-link', className), children: children }));
}
