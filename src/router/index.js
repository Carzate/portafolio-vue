import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/portafolio',
    name: 'Portafolio',
    component: () => import('../views/Portafolio.vue')
  },
  {
    path: '/urbaby',
    name: 'Urbaby',
    component: () => import('../views/Urbaby.vue')
  },
  {
    path: '/akurat',
    name: 'Akurat',
    component: () => import('../views/Akurat.vue')
  },
  {
    path: '/kumon',
    name: 'Kumon',
    component: () => import('../views/Kumon.vue')
  },
  {
    path: '/jetsurf',
    name: 'Jetsurf',
    component: () => import('../views/Jetsurf.vue')
  },
  {
    path: '/cultiva',
    name: 'Cultiva',
    component: () => import('../views/Cultiva.vue')
  },
  {
    path: '/hospital',
    name: 'Hospital',
    component: () => import('../views/Hospital.vue')
  },
  {
    path: '/nico',
    name: 'Nico',
    component: () => import('../views/Nico.vue')
  },
  {
    path: '/rafa',
    name: 'Rafa',
    component: () => import('../views/Rafa.vue')
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component: () => import('../views/Contacto.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
