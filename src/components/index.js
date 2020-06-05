import Pagination from './pagination'
const Echart = () => import(/* webpackChunkName: "echarts" */ './global/echart')

export default {
  install (Vue) {
    Vue.component('el-echart', Echart)
    Vue.component('page-box', Pagination)
  }
}
