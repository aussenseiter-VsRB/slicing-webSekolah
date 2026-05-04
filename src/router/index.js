import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/feature/home/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/feature/home/HomePage.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/feature/about/AboutPage.vue'),
    },
    {
      path: '/programs',
      name: 'programs',
      component: () => import('@/feature/programs/ProgramsPage.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/feature/contact/ContactPage.vue'),
    },
  ],
})

export default router
