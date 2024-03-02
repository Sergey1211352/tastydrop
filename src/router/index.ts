import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/:id-:name',
      name: 'case',
      props: true,
      component: () => import('../views/CaseView.vue')
    },
    {
      path: '/upgrade',
      name: 'upgrade',
      props: true,
      component: () => import('../views/UpgradeView.vue')
    },
    {
      path: '/contract',
      name: 'contract',
      props: true,
      component: () => import('../views/ContractView.vue')
    },
    {
      path: '/gift',
      name: 'gift',
      props: true,
      component: () => import('../views/GiftView.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      props: true,
      component: () => import('../views/ProfileView.vue')
    },
    {
      path: '/login',
      name: 'login',
      props: true,
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/sigin',
      name: 'sigin',
      props: true,
      component: () => import('../views/SiginView.vue')
    },

  ]
})

export default router
