import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Lecati from '@/components/lecati'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/lecati',
      name: 'lecati',
      component: Lecati
    }
  ]
})
