import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/login'
import Dashboard from '@/components/dashboard'
import Create from '@/components/create'
import Restaurant from '@/components/restaurant'
import Signup from '@/components/signup'

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/create',
      name: 'Create',
      component: Create
    },
    {
      path: '/restaurant',
      name: 'Restaurant',
      component: Restaurant,
      props: true
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    }
  ]
})