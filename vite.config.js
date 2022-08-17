import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

import Pages from 'vite-plugin-pages';
import Layouts from 'vite-plugin-vue-layouts';

import Unocss from 'unocss/vite';

import externalGlobals from 'rollup-plugin-external-globals';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), Pages(), Unocss(), Layouts()],
  build: {
    rollupOptions: {
      external: ['Vue', 'axios', 'vue-router', 'Pinia', 'VueDemi'],
      plugins: [
        externalGlobals({
          vue: 'Vue',
          axios: 'axios',
          Pinia: 'Pinia',
          VueDemi: 'VueDemi',
          'vue-router': 'VueRouter',
        }),
      ],
    },
  },
  server: {
    port: 5173,
    open: true,
    http: true,
    ssr: false,
    // 设置代理
    proxy: {
      '/api': {
        target: 'https://localhost:9999',
        secure: false,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
