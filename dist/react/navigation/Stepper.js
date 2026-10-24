import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Icon } from '../icon/Icon.js';
import { cx } from '../lib/cx.js';
/** Navigation / Stepper: progress through a multi-step task. Completed and upcoming are announced in text. */
export function Stepper({ steps, current, label = 'Progress', className }) {
    return (_jsx("nav", { "aria-label": label, className: className, children: _jsx("ol", { className: "ds-stepper", children: steps.map((step, i) => {
                const state = i < current ? 'complete' : i === current ? 'current' : 'upcoming';
                return (_jsxs("li", { className: "ds-step", "data-state": state, "aria-current": state === 'current' ? 'step' : undefined, children: [_jsx("span", { className: "ds-step__marker", "aria-hidden": "true", children: state === 'complete' ? _jsx(Icon, { name: "check", size: 16 }) : i + 1 }), _jsxs("span", { className: "ds-step__label", children: [step, state !== 'current' && _jsx("span", { className: "ds-visually-hidden", children: state === 'complete' ? ' (completed)' : ' (not started)' })] })] }, step));
            }) }) }));
}
