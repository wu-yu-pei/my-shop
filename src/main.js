import { createApp } from 'vue';
import App from './App.vue';

// pinia
import store from './store';

// unocss
import 'uno.css';

// router and layouts
import generatedRoutes from '~pages';
import { createRouter, createWebHistory } from 'vue-router';
import { setupLayouts } from 'virtual:generated-layouts';

const routes = setupLayouts(generatedRoutes);
const router = createRouter({
  routes,
  history: createWebHistory(),
});

createApp(App).use(store).use(router).mount('#app');
