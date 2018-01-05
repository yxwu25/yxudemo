<template lang="html">
  <modal v-if="show" @close="close">
    <div slot="header">
      Create album
    </div>
    <div slot="body">
      Album title:
      <input class="form-input" type="text" v-model="title">
    </div>
    <div class="footer" slot="footer">
      <button class="button modal-default-button" @click="submit">
        OK
      </button>
      <button class="button modal-default-button" @click="$emit('close')">
        Cancel
      </button>
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
    }
  },
  data () {
    return {
      title: ''
    }
  },
  methods: {
    close () {
      this.$emit('close')
    },
    submit () {
      if (!this.title) {
        window.alert('Plz enter album title')
        return
      }
      this.$emit('submit', {
        title: this.title
      })
    }
  }
}
</script>

<style lang="css" scoped>
  .form-input {
    display: inline-block;
    padding: 0 10px;
    border: solid 1px #dddddd;
    border-radius: 4px;
    width: 300px;
    line-height: 32px;
    margin-left: 5px;
    outline: none;
  }

  .footer button {
    margin-left: 15px;
  }
</style>
