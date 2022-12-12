import { defineConfig } from 'vite';
import eslintPlugin from 'vite-plugin-eslint';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/online-telecom/',
  plugins: [react(), eslintPlugin()]
});
