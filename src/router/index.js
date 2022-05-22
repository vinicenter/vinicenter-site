import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import('@/views/projects/ProjectsView.vue'),
  },
  {
    path: '/projects/:id',
    name: 'single project',
    component: () => import('@/views/projects/SingleProjectView.vue'),
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import('@/views/blog/BlogView.vue'),
  },
  {
    path: '/blog/:id',
    name: 'single blog',
    component: () => import('@/views/blog/SingleBlogView.vue'),
  },
  {
    path: '/donate',
    name: 'donate',
    component: () => import('@/views/donate/DonateView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
