import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import { MotionGlobalConfig } from 'motion/react';

// No vitest globals, so Testing Library cannot register its own cleanup.
afterEach(cleanup);

// Animations finish instantly in tests.
MotionGlobalConfig.skipAnimations = true;

// jsdom gaps used by motion, NumberFlow and React Aria.
if (!window.matchMedia) {
  window.matchMedia = (query: string) => ({
    matches: false, media: query, onchange: null,
    addListener() {}, removeListener() {}, addEventListener() {}, removeEventListener() {}, dispatchEvent: () => false,
  }) as MediaQueryList;
}
if (!('ResizeObserver' in window)) {
  (window as unknown as { ResizeObserver: unknown }).ResizeObserver = class { observe() {} unobserve() {} disconnect() {} };
}
if (!Element.prototype.animate) {
  Element.prototype.animate = function animate() {
    return { finished: Promise.resolve(), cancel() {}, finish() {}, play() {}, pause() {}, addEventListener() {}, removeEventListener() {} } as unknown as Animation;
  };
}
if (!Element.prototype.getAnimations) Element.prototype.getAnimations = () => [];
const g = globalThis as unknown as { CSS?: { supports?: (...a: unknown[]) => boolean; escape?: (s: string) => string } };
g.CSS ??= {};
g.CSS.supports ??= () => false;
g.CSS.escape ??= (s: string) => s;
