import { createRouter, createWebHistory } from 'vue-router';
import SalesPoint from '../views/SalesPoint.vue'
import SalesPoint2 from '../views/SalesPoint2.vue'
import tesBG from '../views/tesBG.vue'

const routes = [
  {
    path: '/',
    name: 'SalesPoint',
    component: SalesPoint
  },

  {
    path: '/tes',
    name: 'tesBG',
    component: tesBG
  },

  {
    path: '/2',
    name: 'SalesPoint2',
    component: SalesPoint2
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router
