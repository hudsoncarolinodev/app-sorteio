import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicial from '../views/Inicial.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Inicial',
    component: Inicial
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
