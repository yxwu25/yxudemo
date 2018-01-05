<template>
  <div id="app">
    <div class="nav-bar">
      <router-link active-class="active" to="/login" v-if="!currentUser">Login</router-link>
      <a href="" @click="doLogout" v-if="currentUser">Logout</a>
      <router-link active-class="active" to="/account" v-if="currentUser">My account</router-link>
      <router-link active-class="active" to="/albums" v-if="currentUser">My albums</router-link>
      <router-link to="/">Home</router-link>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import token from '@/common/token'

export default {
  name: 'app',
  computed: {
    ...mapState({
      currentUser: state => state.STORE_USER.user
    })
  },
  methods: {
    doLogout () {
      token.setToken('')
      this.$router.push('/login')
    }
  }
}
</script>

<style>
body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #174c82;
  font-size: 14px;
  padding: 0;
  margin: 0;
}

* {
  box-sizing: border-box;
}

h1, h2 {
  font-weight: normal;
}

.nav-bar {
  height: 50px;
  border-bottom: solid 1px #dddddd;
}

.nav-bar > a {
  line-height: 50px;
  padding: 0 20px;
  float: right;
  color: #888888;
  text-decoration: none;
}

.nav-bar > a:hover {
  color: #ffffff;
  background-color: #a7c4e2;
}

.nav-bar > a.active {
  color: #ffffff;
  background-color: #5183b7;
}

.content {
}

.button {
  display: block;
  background: #fffff;
  border: solid 1px #dddddd;
  line-height: 2;
  text-align: center;
  padding: 0 10px;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
}
</style>
