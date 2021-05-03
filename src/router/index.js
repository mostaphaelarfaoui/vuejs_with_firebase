import Vue from 'vue'
import VueRouter from 'vue-router'
import signup from '../components/signup.vue'
import login from '../components/login.vue'
import fargotpassword from '../components/fargotpassword.vue'
import home from '../components/home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'signup',
    component: signup
  },
   {
    path: '/login',
    name: 'login',
    component: login
  },
   {
    path: '/fargotpassword',
    name: 'fargotpassword',
    component: fargotpassword
  },
   {
    path: '/home',
    name: 'home',
    component: home
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
