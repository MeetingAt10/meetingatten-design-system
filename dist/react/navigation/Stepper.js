import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Icon } from '../icon/Icon.js';
import { cx } from '../lib/cx.js';
const STATE = { done: 'Done', current: 'Current step', upcoming: 'Not started' };
/** Stepper: progress through a short flow, drawn as a timeline. Every step says its state in words. */
export function Stepper({ steps, current, label = 'Progress', className }) {
    return (_jsx("ol", { className: cx('ds-stepper', className), "aria-label": label, children: steps.map((s, i) => {
            const step = typeof s === 'string' ? { label: s } : s;
            const state = i < current ? 'done' : i === current ? 'current' : 'upcoming';
            return (_jsxs("li", { className: cx('ds-step', `ds-step--${state}`), "aria-current": state === 'current' ? 'step' : undefined, children: [_jsx("span", { className: "ds-step__marker", "aria-hidden": "true", children: state === 'done' ? _jsx(Icon, { name: "check", size: 16, weight: "bold" }) : state === 'current' ? '' : i + 1 }), _jsxs("span", { className: "ds-step__text", children: [_jsx("span", { className: "ds-step__label", children: step.label }), _jsx("span", { className: "ds-step__state", children: step.description ?? STATE[state] }), step.description && _jsx("span", { className: "ds-visually-hidden", children: STATE[state] })] })] }, step.label));
        }) }));
}
