import VueRouter from 'vue-router'
import Error from '@/views/error'
import DataView from '@/views/pages'
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
router.beforeEach(async (to, from, next) => {
  next()
})
// 路由跳转之后
router.afterEach((to, from) => {
  document.title = to.meta.title || 'FoxESS'
})
export default router
