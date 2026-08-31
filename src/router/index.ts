import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   redirect: '/finance',
    // },
    {
      path: '/',
      name: 'home',
      component: () => import('../views/home.vue'),
    },
    {
      path: '/sales',
      name: 'sales',
      component: () => import('../views/Sales.vue'),
    },
    {
      path: '/hr',
      name: 'hr',
      component: () => import('../views/HR.vue') || import('../views/home.vue'), // placeholder — replace with HR view
    },
    {
      path: '/mgmt',
      name: 'mgmt',
      component: () => import('../views/Mgmt.vue') || import('../views/home.vue'), // placeholder — replace with MGMT view
    },
    {
      path: '/activity',
      name: 'activity',
      component: () => import('../views/Activity.vue') || import('../views/home.vue'), // placeholder — replace with activity view
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],
})

export default router
