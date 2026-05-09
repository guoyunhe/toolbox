/// <reference types="vitest" />
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import adsense from 'vite-plugin-adsense';

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    process: '{ "env": {} }',
    global: 'window',
  },
  resolve: {
    tsconfigPaths: true,
  },
  server: {
    host: true,
    port: 3000,
    open: true,
  },
  plugins: [react(), adsense()],
  // https://vitest.dev/config/
  test: {
    coverage: {
      reporter: ['text', 'json', 'html'],
    },
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
  },
});
