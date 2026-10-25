/** Modifier suffix for a lane class; `schedule` is every block's default. */
export const laneClass = (base, lane) => (lane && lane !== 'schedule' ? `${base}--${lane}` : undefined);
