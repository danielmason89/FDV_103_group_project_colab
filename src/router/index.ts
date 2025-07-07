import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Page1View.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'page1',
      component: HomeView,
    },
    {
      path: '/page2',
      name: 'page2',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Page2View.vue'),
    },
    {
      path: '/page3',
      name: 'page3',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Page3Form1.vue'),
    },
    {
      path: '/page3-form2',
      name: 'page3-form2',
      component: () => import('../views/Page3Form2.vue'),
    },
    {
      path: '/page3-form3',
      name: 'page3-form3',
      component: () => import('../views/Page3Form3.vue'),
    },
    {
      path: '/page3-success',
      name: 'page3-success',
      component: () => import('../views/Page3Success.vue'),
    },
    {
      path: '/page3-failure',
      name: 'page3-failure',
      component: () => import('../views/Page3Failure.vue'),
    },
  ],
})

export default router
