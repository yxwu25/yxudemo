<template lang="html">
  <div class="login-container">
    <div class="login-form">
      <div class="login-form-item">
        <input type="text" v-model="username" placeholder="username" />
      </div>
      <div class="login-form-item">
        <input type="password" v-model="password" placeholder="password" />
      </div>
      <button type="button" class="login-button" @click="login">
        Login
      </button>
      <button type="button" class="login-button facebook-login-button" @click="loginWithFacebook">
        Continue with Facebook
      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    login () {
      if (!this.username.trim()) {
        window.alert('Plz enter username')
        return
      }
      if (!this.password) {
        window.alert('Plz enter password')
        return
      }
      this.$store.commit('setUser', {
        username: this.username
      })
      this.$router.push('/account')
    },
    loginWithFacebook () {
      const loginParams = {
        scope: 'public_profile,email'
      }
      window.FB.login(response => {
        if (response.status === 'connected') {
          window.FB.api('/me', response => {
            this.$store.commit('setUser', {
              username: response.name
            })
            this.$router.push('/account')
          })
        }
      }, loginParams)
    }
  },
  data () {
    return {
      username: '',
      password: ''
    }
  },
  mounted () {
    console.log(this.$store)
  }
}
</script>

<style lang="css" scoped>
.login-container {

}
.login-form {
  width: 300px;
  margin: auto;
}
.login-form-item {
  margin-bottom: 15px;
}
.login-form-item > input {
  display: block;
  width: 100%;
  border: solid 1px #ddd;
  padding: 0 10px;
  line-height: 28px;
  border-radius: 3px;
  outline: 0;
}
.login-button {
  background: #4cba78;
  border: none;
  display: block;
  width: 100%;
  line-height: 28px;
  border-radius: 3px;
  font-size: 12px;
  outline: 0;
  margin-bottom: 10px;
  color: #fff;
}
.facebook-login-button {
  background-color: #4c69ba;
}
</style>
