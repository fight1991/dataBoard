import Vuex from 'vuex'
export default new Vuex.Store({
  state: {
    lang: 'zh',
    pagination: {
      pageSize: 10,
      currentPage: 1,
      total: 0
    },
    successCode: 0
  },
  mutations: {},
  actions: {},
  modules: {}
})
