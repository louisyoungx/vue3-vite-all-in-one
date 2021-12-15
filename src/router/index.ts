import { createRouter, createWebHashHistory } from 'vue-router'
import home from '../pages/home.vue'

const routes = [
  {
    path: '/',
    component: home,
  },
]

export default createRouter({
  history: createWebHashHistory(),
  routes,
})
