<template>
  <div class="sidebar">
    <div class="py-3 px-4">
      <h4 id="sidebar-no-header-title" class="mb-2 main-title">
        Bootstrap Generator
      </h4>
      <nav class="my-4">
        <b-nav vertical class="nav-list">
          <h5 class="mb-3">Template</h5>
          <p>Link 1</p>
          <p>Link 2</p>
          <p>Link 3</p>
          <p>Link 4</p>
        </b-nav>
        <div class="divider"></div>
        <b-nav vertical class="nav-list">
          <h5 class="my-3">Components</h5>
          <draggable
            v-model="components"
            :group="{
              name: 'people',
              pull: 'clone',
              put: false,
            }"
            :options="{ sort: false }"
          >
            <p
              v-for="component in components"
              :key="component.id"
              class="component-text"
            >
              {{ component.name }}
            </p>
          </draggable>
        </b-nav>
        <div class="divider"></div>
      </nav>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  computed: {
    components: {
      get() {
        return this.$store.state.bootstrapComponents
      },
      set(value) {},
    },
  },
}
</script>
<style scoped>
.component-text {
  cursor: pointer;
}
.sidebar {
  height: 100vh;
  overflow: auto;
  background-color: #fff;
}
.divider {
  width: 100%;
  height: 2px;
  background-color: #d30c7b;
}
.nav-list h5,
p {
  color: #4b5563;
}
.main-title {
  color: #5e72e4;
}
</style>
