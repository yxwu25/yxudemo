<template lang="html">
  <div class="hello-text">
    <h1>{{ helloText }}</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      helloText: 'Hello, this is just a demonstration.'
    }
  }
}
</script>

<style lang="css">
  .hello-text {
    text-align: center;
    margin-top: 100px;
  }
</style>
