import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules'
import root from './root'
import createLogger from '../utils/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  ...root,
  modules,
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
