import * as types from './mutation-types'

const state = {
  count: 0
}

const getters = {
  getCount: state => state.count
}

// actions
const actions = {
  [types.SET_COUNT] ({ commit, state }, action) {
    commit(types.SET_COUNT,action.count)
  }
}

// mutations
const mutations = {
  [types.SET_COUNT] (state, count) {
    state.count = count
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
