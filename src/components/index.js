import Pagination from './pagination'
const Echart = () => import(/* webpackChunkName: "echarts" */ './echart')

export default {
  install (Vue) {
    Vue.component('el-echart', Echart)
    Vue.component('page-box', Pagination)
  }
}
