<template lang="html">
  <div class="">
    <h2>Welcome back, {{ username }}!</h2>
  </div>
</template>

<script>
export default {
  computed: {
    username () {
      if (this.$store.state.user !== null) {
        return this.$store.state.user.username
      }
      return ''
    }
  },
  created () {
    if (this.$store.state.user === null) {
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="css">
</style>
