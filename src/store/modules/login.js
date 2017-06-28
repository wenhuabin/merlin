import * as types from '../mutation-types'

// initial state
// shape: [{ id, quantity }]
const state = {
  token: ''
}

// getters
const getters = {
  getToken: state => state.token
}

// actions
const actions = {
  login ({ commit, state }, token) {
    commit(types.SET_LOGIN_TOKEN, {token})
  }
}

// mutations
const mutations = {
  [types.SET_LOGIN_TOKEN] (state, { token }) {
    state.token = token
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
