<template>
  <div class="container-fluid main">
    <div class="row">
      <Sidebar class="col-sm-2" />
      <div class="col-sm-10">
        <div class="row">
          <Navbar class="col" />
        </div>
        <div class="row">
          <Canvas class="col" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>

<style scoped>
.main {
  padding: 0;
  background-color: #f3f4f6;
}
</style>
