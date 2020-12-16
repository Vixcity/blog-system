import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'layout',
    redirect: '/homePage',
    component: () => import('../views/layout/index'),
    children: [
      {
        path: 'homePage',
        name: 'homePage',
        meta: {
          breadList: [{path: '/homePage', name: '首页'}]
        },
        component: () => import('@/views/homePage/homePage')
      },
      {
        path: 'archives',
        name: 'archives',
        meta: {
          breadList: [{path: '/archives', name: '归档'}]
        },
        component: () => import('@/views/archives/archives')
      },
      {
        path: 'categories',
        name: 'categories',
        meta: {
          breadList: [{path: '/categories', name: '分类'}]
        },
        component: () => import('@/views/categories/categories')
      },
      {
        path: 'tags',
        name: 'tags',
        meta: {
          breadList: [{path: '/tags', name: '标签'}]
        },
        component: () => import('@/views/tags/tags')
      },
      {
        path: 'journey',
        name: 'journey',
        meta: {
          breadList: [{path: '/journey', name: '旅行'}]
        },
        component: () => import('@/views/journey/journey')
      },
      {
        path: 'photography',
        name: 'photography',
        meta: {
          breadList: [{path: '/photography', name: '摄影'}]
        },
        component: () => import('@/views/photography/photography')
      },
      {
        path: 'docs',
        name: 'docs',
        meta: {
          breadList: [{path: '/docs', name: '文档'}]
        },
        component: () => import('@/views/docs/docs')
      },
      {
        path: 'amusement',
        name: 'amusement',
        meta: {
          breadList: [{path: '/amusement', name: '娱乐'}]
        },
        component: () => import('@/views/amusement/amusement')
      },
      {
        path: 'friendLink',
        name: 'friendLink',
        meta: {
          breadList: [{path: '/friendLink', name: '友链'}]
        },
        component: () => import('@/views/friendLink/friendLink')
      },
      {
        path: 'messageBoard',
        name: 'messageBoard',
        meta: {
          breadList: [{path: '/messageBoard', name: '留言板'}]
        },
        component: () => import('@/views/messageBoard/messageBoard')
      },
      {
        path: 'aboutMe',
        name: 'aboutMe',
        meta: {
          breadList: [{path: '/aboutMe', name: '关于我'}]
        },
        component: () => import('@/views/aboutMe/aboutMe')
      },
      {
        path: 'talkToMyself',
        name: 'talkToMyself',
        meta: {
          breadList: [{path: '/talkToMyself', name: '自言自语'}]
        },
        component: () => import('@/views/talkToMyself/talkToMyself')
      },
      {
        path: 'moreDemo',
        name: 'moreDemo',
        meta: {
          breadList: [{path: '/moreDemo', name: '更多示例'}]
        },
        component: () => import('@/views/moreDemo/moreDemo')
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
