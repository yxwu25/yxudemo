import apiUser from '@/api/user'
import * as mutationTypes from '@/store/mutationTypes'
import token from '@/common/token'

// initial state
const state = {
  user: null
}

const tokenValue = token.getToken()

if (tokenValue) {
  state.user = {
    id: tokenValue
  }
}

// getters
const getters = {
  //
}

// actions
const actions = {
  async login ({ commit }, data) {
    const result = await apiUser.login(data)
    if (result && result.length) {
      commit(mutationTypes.USER_LOGIN_SUCCESS, result[0])
      token.setToken(result[0].id)
    } else {
      throw new Error('Invalid username or password')
    }
  },

  async loginWithFacebook ({ commit }, data) {
    let result = await apiUser.loginWithFacebook(data)
    if (result && result.length) {
      commit(mutationTypes.USER_LOGIN_SUCCESS, result[0])
      token.setToken(result[0].id)
    } else {
      result = await apiUser.createUser(data)
      commit(mutationTypes.USER_LOGIN_SUCCESS, result)
      token.setToken(result.id)
    }
  }
}

// mutations
const mutations = {
  // append the user data
  [mutationTypes.USER_LOGIN_SUCCESS] (state, payload) {
    state.user = payload
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
