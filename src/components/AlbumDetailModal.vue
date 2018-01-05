<template lang="html">
  <modal v-if="show" class="album-detail-modal">
    <div slot="body">
      <img src="http://via.placeholder.com/450x720" alt="">
      <button class="button-close" type="button" name="button" @click="close">Close</button>
    </div>
    <div class="footer" slot="footer">
      {{ album && album.title }}
    </div>
  </modal>
</template>

<script>
import Modal from '@/components/Modal.vue'

export default {
  components: {
    Modal
  },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    album: {
      type: Object,
      default: null
    }
  },
  methods: {
    close () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="css">
  .album-detail-modal .modal-container {
    width: 450px;
  }
  .album-detail-modal .modal-header {
    display: none;
  }
  .album-detail-modal .modal-body {
    padding: 0;
    position: relative;
  }
  .button-close {
    position: absolute;
    top: 0;
    right: 0;
    display: block;
    background: #174C84;
    border: none;
    color: #ffffff;
    font-size: 12px;
    padding: 2px 6px;
    outline: none;
    cursor: pointer;
  }
  .footer {
    font-size: 18px;
    padding: 15px;
  }
</style>
