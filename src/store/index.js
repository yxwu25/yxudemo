import album from './modules/album'
import user from './modules/user'

const STORE_USER = 'STORE_USER'
const STORE_ALBUM = 'STORE_ALBUM'

// initial state
const state = {
  //
  title: 'Demo'
}

export default {
  state,
  modules: {
    [STORE_USER]: user,
    [STORE_ALBUM]: album
  }
}
