const Home = () => import(
  /* webpackChunkName: "home" */
  '@/views/Home.vue'
)

const Login = () => import(
  /* webpackChunkName: "login" */
  '@/views/Login.vue'
)

const Account = () => import(
  /* webpackChunkName: "account" */
  '@/views/Account.vue'
)

const Albums = () => import(
  /* webpackChunkName: "albums" */
  '@/views/Albums.vue'
)

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/account', component: Account },
  { path: '/albums', component: Albums }
]

export default {
  routes
}
