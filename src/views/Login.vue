<template lang="html">
  <div class="login-container">
    <div class="login-form">
      <div class="login-form-item">
        <input type="text" v-model="username" placeholder="username" />
      </div>
      <div class="login-form-item">
        <input type="password" v-model="password" placeholder="password" />
      </div>
      <button type="button" class="login-button" @click="doLogin">
        Login
      </button>
      <button type="button" class="login-button facebook-login-button" @click="doLoginWithFacebook">
        Continue with Facebook
      </button>
    </div>
  </div>
</template>

<script>

import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions(['login', 'loginWithFacebook']),
    async doLogin () {
      if (!this.username.trim()) {
        window.alert('Plz enter username')
        return
      }
      if (!this.password) {
        window.alert('Plz enter password')
        return
      }
      try {
        await this.login({
          username: this.username
        })
      } catch (e) {
        window.alert(e.message)
      }
      this.$router.push('/account')
    },
    doLoginWithFacebook () {
      const loginParams = {
        scope: 'public_profile,email'
      }
      window.FB.login(response => {
        if (response.status === 'connected') {
          const facebookUserId = response.authResponse.userID
          window.FB.api('/me', response => {
            this.validFacebookUser({
              username: response.name,
              facebookUserId
            })
          })
        }
      }, loginParams)
    },
    async validFacebookUser (data) {
      try {
        await this.loginWithFacebook(data)
        this.$router.push('/account')
      } catch (e) {
        window.alert(e.message)
      }
    }
  },
  data () {
    return {
      username: 'demo1',
      password: '1'
    }
  },
  mounted () {
    console.log(this.$store)
  }
}
</script>

<style lang="css" scoped>
.login-container {
  margin-top: 100px;
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
