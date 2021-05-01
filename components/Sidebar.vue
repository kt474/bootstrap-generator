<template>
  <div></div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      collapseShow: 'hidden',
    }
  },
  methods: {
    toggleCollapseShow(classes) {
      this.collapseShow = classes
    },
  },
}
</script>
