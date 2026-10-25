"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { MotionConfig } from 'motion/react';
import { RouterProvider, I18nProvider } from 'react-aria-components';
import { spring } from '../lib/motion.js';
/**
 * Wrap the app once. Sets the motion defaults (spring transitions, OS reduced-motion respected), client-side
 * routing for links and the locale. Components also work without it; they then use browser defaults.
 */
export function DesignSystemProvider({ children, navigate, useHref, locale, reducedMotion = 'user' }) {
    let content = _jsx(MotionConfig, { reducedMotion: reducedMotion, transition: spring.smooth, children: children });
    if (locale)
        content = _jsx(I18nProvider, { locale: locale, children: content });
    if (navigate)
        content = _jsx(RouterProvider, { navigate: navigate, useHref: useHref, children: content });
    return content;
}
