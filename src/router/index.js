import Vue from 'vue'
import VueRouter from 'vue-router'
import '@/assets/css/global.css'
import ElementUI from 'element-ui'
import home from '@/views/home'
import 'element-ui/lib/theme-chalk/index.css'
const lazyLoading = name => resolve => require([`@/components/${name}/${name}`], resolve)
Vue.use(ElementUI)
Vue.use(VueRouter)
const routes = [{
    // 主页
    path: '/',
    name: 'first',
    component: home,
    redirect: '/home'
  },
  {
    // 主页
    path: '/home',
    name: 'home',
    component: home,
    redirect: '/userInit',
    children: [{
        path: '/studentSelfTest',
        name: 'studentSelfTest',
        component: lazyLoading('studentSelfTest')
      }, {
        path: '/projCreate',
        name: 'projCreate',
        component: lazyLoading('projCreate')
      },
      {
        path: '/projJudge',
        name: 'projJudge',
        component: lazyLoading('projJudge')
      },
      {
        path: '/rightManage',
        name: 'rightManage',
        component: lazyLoading('rightManage')
      },
      {
        path: '/userInit',
        name: 'userInit',
        component: lazyLoading('userInit')
      }

    ]
  },
  {
    // 登录页
    path: '/login',
    name: 'login',
    component: lazyLoading('login')

  }, {
    path: '/createClass',
    name: 'createClass',
    component: lazyLoading('createClass')
  },
  {
    path: '/register',
    name: 'register',
    component: lazyLoading('register')
  }
]

const router = new VueRouter({
  routes
})

export default router
