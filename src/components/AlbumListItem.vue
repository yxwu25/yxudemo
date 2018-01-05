<template lang="html">
  <div class="album-list-item" @click="clickHandler">
    <div class="album-poster">
      <img src="http://via.placeholder.com/150x180" alt="">
    </div>
    <div class="album-title">
      {{ album.title }}
    </div>
    <div v-if="showSelectedIcon" class="icon-selected">
      <svg class="icon" style="width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="879">
        <path d="M876.981333 262.24a32.021333 32.021333 0 0 0-45.237333 1.194667L422.976 694.464 191.605333 464.288a32 32 0 1 0-45.141333 45.376l252.864 251.562667a31.914667 31.914667 0 0 0 22.570667 9.312c0.554667 0 1.109333-0.138667 1.653333-0.16 0.576 0.032 1.141333 0.16 1.728 0.16 8.469333 0 16.928-3.338667 23.221333-9.984l429.664-453.088a31.968 31.968 0 0 0-1.184-45.226667z" p-id="880"></path>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    album: {
      type: Object,
      default: null
    },
    selectMode: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    clickHandler () {
      if (this.selectMode) {
        this.selected = !this.selected
        this.$emit('toggle-selected', this.album, this.selected)
      } else {
        this.$emit('show-album', this.album)
      }
    }
  },
  data () {
    return {
      selected: false
    }
  },
  computed: {
    showSelectedIcon () {
      return this.selectMode && this.selected
    }
  }
}
</script>

<style lang="css" scoped="">
  .album-list-item {
    width: 150px;
    margin: 20px;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, .1);
    position: relative;
    transition: all .3s ease;
    cursor: pointer;
  }
  .album-list-item:hover {
    box-shadow: 1px 1px 15px rgba(0, 0, 0, .3);
  }
  .album-poster {
    width: 150px;
    height: 180px;
    overflow: hidden;
  }
  .album-poster < img {
    display: inline;
  }
  .album-title {
    line-height: 30px;
    padding: 0 5px;
    word-break: break-all;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .icon-selected {
    position: absolute;
    left: 55px;
    top: 30px;
    font-size: 40px;
  }
</style>
