import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/',
  plugins: [react()],
  server: {
    proxy: {
      '/proxy-script': {
        target: 'http://r.rrzs.ru',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/proxy-script/, ''),
      },
    },
  },
});
