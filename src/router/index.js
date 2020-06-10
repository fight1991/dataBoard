import VueRouter from 'vue-router'
import Error from '@/views/error'
import DataView from '@/views/pages'
import { getUrlBack, base64 } from '@/util'

const routes = [
  {
    path: '/',
    redirect: '/screen/dataView'
  },
  {
    path: '*',
    redirect: {
      name: 'error-404'
    }
  }
]

routes.push(...Error)
routes.push(DataView)
const router = new VueRouter({
  mode: 'history',
  routes
})
// 登录校验、放行 注意: 有些cdn路由版本 地址栏输入路由地址时会加载2次
router.beforeEach((to, from, next) => {
  if (to.query.token) {
    localStorage.setItem('token', base64.decode(to.query.token))
    next()
  } else {
    if (!localStorage.getItem('token')) { // 本地不存在token
      console.log(getUrlBack())
      window.open(decodeURIComponent(getUrlBack()), '_self')
    } else {
      next()
    }
  }
})
// 路由跳转之后
router.afterEach((to, from) => {
  document.title = to.meta.title || 'FoxESS'
})
export default router
