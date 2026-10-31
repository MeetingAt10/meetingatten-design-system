/** Pointer effects (parallax, spotlight, tilt) run only with a fine pointer and no reduced-motion request. */
export const pointerFx = () => typeof matchMedia === 'function' && !matchMedia('(prefers-reduced-motion: reduce), (pointer: coarse)').matches;
/** A CSS custom property set, typed for `style`. */
export const cssVars = (vars) => vars;
