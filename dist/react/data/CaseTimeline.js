import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
/** Data / Case Timeline: report events as an ordered list with actor roles and dates. */
export function CaseTimeline({ events, label = 'Case activity', className }) {
    return (_jsx("ol", { className: ['ds-timeline', className].filter(Boolean).join(' '), "aria-label": label, children: events.map((e, i) => (_jsxs("li", { children: [_jsx("span", { className: "ds-timeline__title", children: e.title }), _jsxs("span", { className: "ds-timeline__actor", children: [e.actor, e.date && _jsxs(_Fragment, { children: [" \u00B7 ", _jsx("time", { dateTime: e.dateTime, children: e.date })] })] }), e.body && _jsx("p", { className: "ds-timeline__body", children: e.body })] }, i))) }));
}
