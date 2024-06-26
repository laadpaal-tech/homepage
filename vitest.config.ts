import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr(), react(), tsconfigPaths()],
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: ['./setup-vitest-env.js'],
    coverage: {
      exclude: [
        '**/dist',
        '**/.pnp.*',
        'setup-vitest-env.js',
        '**/*.test.{js,jsx,ts,tsx}'
      ]
    },
    include: ['**/*.test.{js,jsx,ts,tsx}']
  }
})
