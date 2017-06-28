import * as types from './mutation-types'

export const setLoginToken = ({ commit }, token) => {
    commit(types.SET_LOGIN_TOKEN, {
      token: token
    })
}
