"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Button as AriaButton, Link as AriaLink } from 'react-aria-components';
import { Icon } from '../icon/Icon.js';
import { laneClass } from '../lib/lanes.js';
import { cx } from '../lib/cx.js';
const STATE_WORDS = { open: 'Open', pending: 'Awaiting confirmation', taken: 'Booked', disabled: 'Unavailable' };
/** Time block: the unit of the Office Hours world. The lane color owns the whole block; availability shows in line form and words. */
export function TimeBlock({ time, dateTime, title, meta, lane, form = 'scheduled', stateLabel, icon, href, onPress, isSelected, isDisabled, enter, className, ...rest }) {
    const state = stateLabel ?? STATE_WORDS[form];
    const cls = cx('ds-block', laneClass('ds-block', lane), form !== 'scheduled' && `ds-block--${form}`, enter && 'ds-block--enter', className);
    const body = (_jsxs(_Fragment, { children: [time && _jsx("time", { className: "ds-block__time", dateTime: dateTime, children: time }), _jsx("span", { className: "ds-block__title", children: title }), (meta || state) && (_jsxs("span", { className: "ds-block__meta", children: [state && _jsx("span", { children: state }), meta && _jsx("span", { children: meta })] })), (icon || isSelected) && _jsx(Icon, { name: isSelected ? 'check-circle' : icon, size: 16, weight: isSelected ? 'fill' : 'duotone', className: "ds-block__icon" })] }));
    const disabled = isDisabled || form === 'taken' || form === 'disabled';
    if (href)
        return _jsx(AriaLink, { href: href, className: cls, "aria-label": rest['aria-label'], isDisabled: disabled, children: body });
    if (onPress) {
        return (_jsx(AriaButton, { onPress: onPress, className: cls, "aria-label": rest['aria-label'], "aria-pressed": isSelected, isDisabled: disabled, children: body }));
    }
    return _jsx("article", { className: cls, children: body });
}
