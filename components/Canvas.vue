<template>
  <div class="canvas-main">
    <draggable v-model="myList" class="list-group" group="people">
      <div
        v-for="(element, index) in myList"
        :key="index"
        class="list-group-item"
      >
        {{ element.name }}
      </div>
    </draggable>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  computed: {
    myList: {
      get() {
        return this.$store.state.currentCanvas
      },
      set(value) {
        this.$store.commit('updateCanvas', value)
      },
    },
  },
  methods: {},
}
</script>

<style scoped>
.canvas-main {
  margin: 2rem 3rem 1rem 2.25rem;
  background: #fff;
  height: 80vh;
  -webkit-border-radius: 12px;
  -moz-border-radius: 12px;
  border-radius: 12px;
}
</style>
