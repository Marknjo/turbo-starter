// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'jsdom',
    setupFiles: './test-setup.js',
    reporters: 'verbose',
    coverage: {
      provider: 'istanbul', // or 'v8'
    },
  },
})
