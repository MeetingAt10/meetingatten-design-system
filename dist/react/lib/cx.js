/** Joins class names, skipping falsy values. */
export const cx = (...names) => names.filter(Boolean).join(' ');
