import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  layout: {},
  title: 'umi',
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/login', component: '@/pages/login/index' },
  ],
  fastRefresh: {},
});
