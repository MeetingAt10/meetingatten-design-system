"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ToggleButtonGroup, ToggleButton, SelectionIndicator } from 'react-aria-components';
import { Icon } from '../icon/Icon.js';
import { cx } from '../lib/cx.js';
/** Segmented control: one choice among 2-5 views; the paper chip slides to the chosen segment. */
export function SegmentedControl({ selectedKey, defaultSelectedKey, onSelectionChange, block, children, className, ...rest }) {
    return (_jsx(ToggleButtonGroup, { ...rest, selectionMode: "single", disallowEmptySelection: true, selectedKeys: selectedKey !== undefined ? [selectedKey] : undefined, defaultSelectedKeys: defaultSelectedKey !== undefined ? [defaultSelectedKey] : undefined, onSelectionChange: (keys) => { const [k] = [...keys]; if (k !== undefined)
            onSelectionChange?.(k); }, className: cx('ds-segmented', block && 'ds-segmented--block', className), children: children }));
}
/** One option of a SegmentedControl. */
export function Segment({ icon, children, className, ...rest }) {
    return (_jsxs(ToggleButton, { ...rest, className: cx('ds-segment', className), children: [_jsx(SelectionIndicator, { className: "ds-segment__indicator" }), icon && _jsx(Icon, { name: icon, size: 16 }), children] }));
}
