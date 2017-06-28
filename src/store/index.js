import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import login from './modules/login'
import createLogger from '../utils/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    login
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
