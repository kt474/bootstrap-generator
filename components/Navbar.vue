<template>
  <div class="main">
    <b-navbar toggleable="lg" class="nav-bar">
      <b-navbar-brand href="#" class="nav-bar-text-bold">NavBar</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#" class="nav-bar-text">Link 1</b-nav-item>
          <b-nav-item href="#" class="nav-bar-text">Link 2</b-nav-item>
          <b-nav-item href="#" class="nav-bar-text">Link 3</b-nav-item>
        </b-navbar-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-navbar-nav>
            <b-nav-item href="#" class="nav-bar-text">Settings</b-nav-item>
          </b-navbar-nav>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
export default {}
</script>
<style scoped>
.nav-bar {
  background-color: #5e72e4;
  /* padding-bottom: 1rem; */
}
.nav-bar-text-bold {
  color: #fff !important;
  font-weight: bold;
}
.nav-bar-text a {
  color: #fff !important;
}
.main {
  width: 100%;
}
</style>
