import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'layout',
    redirect: '/homePage',
    component: () => import('../views/layout/index.vue'),
    children: [
      {
        path: 'homePage',
        name: 'homePage',
        meta: {
          isAdmin: true,
          breadList: [{path: '/homePage', name: '首页'}]
        },
        component: () => import('@/views/homePage/homePage')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
