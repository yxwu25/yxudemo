<template lang="html">
  <div class="page-albums">
    <album-list></album-list>
  </div>
</template>

<script>
import AlbumList from '@/components/AlbumList.vue'

export default {
  components: {
    AlbumList
  }
}
</script>

<style lang="css" scoped>
  .page-albums {
    padding: 15px;
  }
</style>
