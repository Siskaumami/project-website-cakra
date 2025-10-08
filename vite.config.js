import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

// ⚙️ Konfigurasi untuk GitHub Pages
export default defineConfig({
  base: '/project-website-cakra/', // <- penting! sesuaikan dengan nama repo kamu
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
