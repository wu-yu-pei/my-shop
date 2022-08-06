import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

import Pages from 'vite-plugin-pages';
import Layouts from 'vite-plugin-vue-layouts';

import Unocss from 'unocss/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), Pages(), Unocss(), Layouts()],
  server: {
    port: 5173,
    open: true,
    http: true,
    ssr: false,
    // 设置代理
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:9999',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
