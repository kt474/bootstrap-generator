<template>
  <div class="sidebar">
    <div class="py-3 px-5">
      <h4 id="sidebar-no-header-title" class="mb-2">Bootstrap Generator</h4>
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
          <p>Accordian</p>
          <p>Alerts</p>
          <p>Badge</p>
          <p>Buttons</p>
          <p>Button group</p>
          <p>Card</p>
        </b-nav>
        <div class="divider"></div>
      </nav>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style scoped>
.sidebar {
  height: 100%;
  background-color: #fff;
}
.divider {
  width: 100%;
  height: 2px;
  background-color: #91a6ff;
}
.nav-list h5,
p {
  color: #4b5563;
}
</style>
