<template lang="html">
  <div class="page-account">
    <h2>Welcome back, {{ username }}!</h2>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      currentUser: state => state.STORE_USER.user
    }),
    username () {
      return this.currentUser && this.currentUser.username
    }
  },
  created () {
    if (this.currentUser === null) {
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="css">
  .page-account {
    text-align: center;
    margin-top: 100px;
  }
</style>
