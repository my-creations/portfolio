import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'node',
    globals: true,
    include: ['tests/unit/**/*.test.js'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'lcov'],
      include: ['scripts/**/*.js', 'lib/**/*.js'],
    },
    poolOptions: {
      threads: {
        singleThread: true,
      },
    },
  },
});
