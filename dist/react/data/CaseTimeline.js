import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cx } from '../lib/cx.js';
const STATE_WORDS = { done: 'Done', current: 'Current', pending: 'Pending', restricted: 'Restricted step' };
/** Case timeline: a record's history on a vertical time rule; solid through what happened, dashed into what is pending. */
export function CaseTimeline({ events, label = 'Case activity', className }) {
    return (_jsx("ol", { className: cx('ds-timeline', className), "aria-label": label, children: events.map((e, i) => {
            const state = e.state ?? 'done';
            return (_jsxs("li", { className: cx('ds-timeline__event', `ds-timeline__event--${state}`), "aria-current": state === 'current' ? 'step' : undefined, children: [_jsx("span", { className: "ds-timeline__time", children: e.date ? _jsx("time", { dateTime: e.dateTime, children: e.date }) : null }), _jsx("span", { className: "ds-timeline__marker", "aria-hidden": "true" }), _jsxs("div", { className: "ds-timeline__content", children: [_jsxs("p", { className: "ds-timeline__title", children: [e.title, _jsxs("span", { className: "ds-visually-hidden", children: [" (", STATE_WORDS[state], ")"] })] }), e.body && _jsx("p", { className: "ds-timeline__body", children: e.body }), e.actor && _jsx("p", { className: "ds-timeline__actor", children: e.actor })] })] }, i));
        }) }));
}
