<template>
  <div>
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
          <!-- <b-nav-item-dropdown text="Settings" class="nav-bar-text" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown> -->
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
  background-color: #ef4444;
  padding-bottom: 12rem;
}
.nav-bar-text-bold {
  color: #fff !important;
  font-weight: bold;
}
.nav-bar-text a {
  color: #fff !important;
}
</style>
