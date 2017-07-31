import * as types from '../mutation-types'

// initial state
// shape: [{ id, quantity }]
const state = {
  token: {}
}

// getters
const getters = {
  getToken: state => state.token
}

// actions
const actions = {
  [types.SET_LOGIN_TOKEN] ({ commit, state}, action) {
    commit(types.SET_LOGIN_TOKEN, action)
  }
}

// mutations
const mutations = {
  [types.SET_LOGIN_TOKEN] (state, action) {
    state.token = action.token
  }
}

export default {
  //namespaced: true, //暂时没有必要使用，因为 redux 的核心思想就是统一注册统一管理
  state,
  getters,
  actions,
  mutations
}
