<template>
  <div class="container-fluid main">
    <div class="row main-row">
      <Sidebar class="col-sm-3 main-col" />
      <Navbar class="col-sm-9 main-col" />
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
  height: 100vh;
  background-color: #f3f4f6;
}
.main-row {
  height: 100%;
}
.main-col {
  padding: 0;
}
</style>
