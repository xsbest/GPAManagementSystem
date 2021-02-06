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
    path: '*',
    name: 'home',
    component: home,
    redirect: 'gradeInit',
    children: [{
        path: 'gradeInit',
        name: '学考成绩初始化',
        component: lazyLoading('gradeInit')
      },
      {
        path: 'selfTestInit',
        name: '自测成绩初始化',
        component: lazyLoading('selfTestInit')
      },
      {
        path: 'gradeManage',
        name: '学考成绩管理',
        component: lazyLoading('createClass')
      },
      {
        path: 'selfTestInit',
        name: '自测成绩初始化',
        component: lazyLoading('createClass')
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
  }, {
    path: '/register',
    name: 'register',
    component: lazyLoading('register')
  }
]

const router = new VueRouter({
  routes
})

export default router
