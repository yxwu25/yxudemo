<template>
  <div id="app">
    <div class="nav-bar">
      <router-link to="/account">My account</router-link>
      <router-link to="/">Home</router-link>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
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
  padding: 0 15px;
  margin-bottom: 100px;
}

.nav-bar > a {
  line-height: 50px;
  float: right;
  margin-left: 15px;
  color: #888888;
}

.content {
  text-align: center;
}
</style>
