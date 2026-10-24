import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: { environment: 'jsdom', include: ['src/react/**/*.test.tsx'], setupFiles: ['src/react/test/setup.ts'] },
});
