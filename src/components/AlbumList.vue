<template lang="html">
  <div class="album-list-wrapper">
    <div class="toolbar">
      <button class="button" type="button" :disabled="selectMode" @click="createHandler">Create album</button>
      <button class="button" type="button" :disabled="!selectMode" @click="deleteSelectedHandler">Delete selected</button>
      <label><input type="checkbox" v-model="selectMode">Select mode</label>
    </div>
    <div class="album-list">
      <album-list-item
        class="album-list-item"
        v-for="album in albums"
        :album="album"
        :key="album.id"
        :select-mode="selectMode"
        @toggle-selected="toggleSelected"
        @show-album="showAlbum"
      >
      </album-list-item>
    </div>
    <div class="load-status">
      <span class="load-ended-tip" v-if="loadEnded">Load completed!</span>
      <button v-else type="button" class="button" @click="fetchAlbumList">Load more...</button>
    </div>
    <create-album-modal :show="showModal" @submit="submitHandler" @close="showModal=false"></create-album-modal>
    <album-detail-modal :show="showAlbumModal" :album="currentAlbum" @close="showAlbumModal=false"></album-detail-modal>
  </div>

</template>

<script>
import AlbumListItem from './AlbumListItem.vue'
import CreateAlbumModal from './CreateAlbumModal.vue'
import AlbumDetailModal from './AlbumDetailModal.vue'

import { mapState, mapActions } from 'vuex'

export default {
  components: {
    AlbumListItem,
    CreateAlbumModal,
    AlbumDetailModal
  },
  methods: {
    ...mapActions(['fetchAlbumList', 'createAlbum', 'deleteAlbums']),
    createHandler () {
      this.showModal = true
    },
    async submitHandler (data) {
      await this.createAlbum(data)
      this.showModal = false
    },
    async deleteSelectedHandler () {
      if (!this.selectedAlbums.length) {
        window.alert('No album selected!')
        return
      }
      await this.deleteAlbums(this.selectedAlbums)
      this.selectedAlbums = []
    },
    toggleSelected (album, selected) {
      if (selected) {
        this.selectedAlbums.push(album.id)
      } else {
        const index = this.selectedAlbums.indexOf(album.id)
        if (index > 0) {
          this.selectedAlbums.splice(index, 1)
        }
      }
    },

    showAlbum (album) {
      this.currentAlbum = album
      this.showAlbumModal = true
    }
  },
  created () {
    this.fetchAlbumList()
  },
  computed: {
    ...mapState({
      albums: state => state.STORE_ALBUM.list,
      loadEnded: state => state.STORE_ALBUM.loadEnded
    })
  },
  data () {
    return {
      currentAlbum: null,
      selectMode: false,
      showModal: false,
      showAlbumModal: false,
      selectedAlbums: []
    }
  }
}
</script>

<style lang="css" scoped>
  .album-list-wrapper {
    max-width: 960px;
    margin: auto;
  }
  .album-list {
    overflow: hidden;
  }
  .toolbar {
    padding: 10px 20px;
  }
  .toolbar button {
    display: inline-block;
    margin-right: 10px;
  }
  .album-list-item {
    float: left;
  }
  .load-status {
    text-align: center;
  }

  .load-status button {
    display: inline-block;
    padding: 10px 30px;
  }

  .load-ended-tip {
    color: #999999;
  }
</style>
