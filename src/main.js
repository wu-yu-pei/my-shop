import { createApp } from 'vue';
import App from './App.vue';

// pinia
import pinia from './store';

// unocss
import 'uno.css';
import './assets/css/index.css';

// normalize.css
import 'normalize.css';

// router and layouts
import generatedRoutes from '~pages';
import { createRouter, createWebHistory } from 'vue-router';
import { setupLayouts } from 'virtual:generated-layouts';

const routes = setupLayouts(generatedRoutes);
const router = createRouter({
  routes,
  history: createWebHistory(),
});

// fix
router.afterEach((to, from) => {
  if (to.path !== '/') {
    document.body.scrollIntoView();
  }
});

createApp(App).use(pinia).use(router).mount('#app');
