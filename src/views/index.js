export default {
  path: '/screen/dataView',
  name: 'dataView',
  component: () => import(/* webpackChunkName: "dataView" */ './dashBoard'),
  meta: {
    requiresAuth: false
  }
}
