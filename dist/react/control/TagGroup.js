"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { TagGroup as AriaTagGroup, TagList, Tag as AriaTag, Label, Text, Button as AriaButton } from 'react-aria-components';
import { Icon } from '../icon/Icon.js';
import { cx } from '../lib/cx.js';
/** Tag group: topics or active filters. Arrow keys move between tags; Delete or Backspace removes a removable tag. */
export function TagGroup({ label, description, items, children, emptyMessage, className, ...rest }) {
    return (_jsxs(AriaTagGroup, { ...rest, className: cx('ds-tag-group', className), children: [_jsx(Label, { className: "ds-field__label", children: label }), description && _jsx(Text, { slot: "description", className: "ds-field__description", children: description }), _jsx(TagList, { className: "ds-tag-list", items: items, renderEmptyState: emptyMessage ? () => _jsx("span", { className: "ds-field__description", children: emptyMessage }) : undefined, children: children })] }));
}
/** One tag. Removable when the group has `onRemove`. */
export function Tag({ children, lane, className, ...rest }) {
    const text = typeof children === 'string' ? children : rest.textValue;
    return (_jsx(AriaTag, { ...rest, textValue: text, className: cx('ds-tag', lane && `ds-tag--${lane}`, className), children: ({ allowsRemoving }) => (_jsxs(_Fragment, { children: [children, allowsRemoving && (_jsx(AriaButton, { slot: "remove", className: "ds-tag__remove", "aria-label": "Remove", children: _jsx(Icon, { name: "x", size: 16 }) }))] })) }));
}
