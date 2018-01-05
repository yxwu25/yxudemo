import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import storeDef from '@/store'
import routerDef from '@/router'
import token from '@/common/token'
import * as mutationTypes from '@/store/mutationTypes'
import apiUser from '@/api/user'
import App from '@/App.vue'

Vue.use(VueRouter)
Vue.use(Vuex)

// create router intance
const router = new VueRouter(routerDef)

// create vuex store intance
const store = new Vuex.Store(storeDef)

const tokenValue = token.getToken()

async function startup() {
  if (tokenValue) {
    try {
      const data = await apiUser.fetchUserInfoById(tokenValue)
      store.commit(mutationTypes.USER_LOGIN_SUCCESS, data)
    } catch (e) {
      console.log(e)
    } finally {
      initApp()
    }
  } else {
    initApp()
  }
}

function initApp() {
  new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
  })
}

startup()
