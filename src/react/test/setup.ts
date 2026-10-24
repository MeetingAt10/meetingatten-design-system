import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';

// No vitest globals, so Testing Library cannot register its own cleanup.
afterEach(cleanup);
