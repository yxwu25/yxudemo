import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import App from './App.vue'

Vue.use(VueRouter)
Vue.use(Vuex)

const Home = () => import(
  /* webpackChunkName: "home" */
  './Home.vue'
)

const Login = () => import(
  /* webpackChunkName: "login" */
  './Login.vue'
)

const Account = () => import(
  /* webpackChunkName: "account" */
  './Account.vue'
)

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/account', component: Account }
]

const router = new VueRouter({
  routes
})

const store = new Vuex.Store({
  state: {
    user: null
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    }
  }
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
