import { it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { axeViolations } from './a11y.js';

it('axe harness reports real violations (guards against a silently passing helper)', async () => {
  const { container } = render(<button type="button" />);
  expect((await axeViolations(container)).join()).toMatch(/^button-name/);
});
