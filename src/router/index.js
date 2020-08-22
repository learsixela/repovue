import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
//import Prueba from '../views/otros/Prueba.vue'

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
    {path: '/prueba',name: 'Prueba', component: () => import('../views/otros/Prueba.vue')},
    {path: '/ejercicio',name: 'Ejercicio', component: () => import('../views/otros/Ejercicio.vue')},
    {path: '/lista',name: 'Lista', component: () => import('../views/otros/Milista.vue')},

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
