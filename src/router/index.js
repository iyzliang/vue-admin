import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../layout/layout'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import routes from './routes'

Vue.use(VueRouter)

// 主框架路由
const frameIn = [
  {
    path: '/',
    component: Layout,
    children: routes
  }
]

const frameOut = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login/index')
  },
  {
    path: '*',
    name: '404',
    component: () => import('@/views/Error/404')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    ...frameIn,
    ...frameOut
  ]
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  if (to.name === from.name) {
    NProgress.done()
    next(false)
  } else {
    next()
  }
})

router.afterEach(to => {
  NProgress.done()
})

export default router
