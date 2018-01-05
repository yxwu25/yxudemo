import apiAlbum from '@/api/album'
import * as mutationTypes from '@/store/mutationTypes'

// initial state
const state = {
  list: [],
  page: 0,
  pageSize: 10,
  loadEnded: false
}

// getters
const getters = {
  //
}

// actions
const actions = {
  async fetchAlbumList ({ commit, rootState, state }) {
    if (state.loadEnded) {
      return
    }

    const result = await apiAlbum.fetchAlbumList(rootState.STORE_USER.user.id, state.page + 1, state.pageSize)
    if (result && result.length) {
      commit(mutationTypes.FETCH_ALBUM_LIST_SUCCESS, result)
    }
    if (result.length < state.pageSize) {
      commit(mutationTypes.ALBUM_LOAD_ENDED)
    }
  },

  async createAlbum ({ commit, rootState }, data) {
    data.userId = rootState.STORE_USER.user.id
    const result = await apiAlbum.createAlbum(data)
    commit(mutationTypes.CREATE_ALBUM_LIST_SUCCESS, result)
  },

  async deleteAlbums ({ commit }, data) {
    await Promise.all(data.map(id => apiAlbum.deleteAlbum(id)))
    commit(mutationTypes.DELETE_ALBUMS_SUCCESS, data)
  }
}

// mutations
const mutations = {
  // append the album list data
  [mutationTypes.FETCH_ALBUM_LIST_SUCCESS] (state, payload) {
    state.list = [...payload, ...state.list]
    state.page += 1
  },

  [mutationTypes.CREATE_ALBUM_LIST_SUCCESS] (state, payload) {
    state.list.splice(0, 0, payload)
  },

  [mutationTypes.ALBUM_LOAD_ENDED] (state, payload) {
    state.loadEnded = true
  },

  [mutationTypes.DELETE_ALBUMS_SUCCESS] (state, payload) {
    payload.forEach(id => {
      const index = state.list.findIndex(item => id === item.id)
      state.list.splice(index, 1)
    })
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
