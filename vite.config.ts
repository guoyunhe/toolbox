/// <reference types="vitest" />
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import adsense from 'vite-plugin-adsense';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    process: '{ "env": {} }',
    global: 'window',
  },
  server: {
    host: true,
    port: 3000,
    open: true,
  },
  plugins: [react(), tsconfigPaths(), adsense()],
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
