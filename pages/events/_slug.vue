<template>
  <div>Test slug</div>
</template>

<script>
export default {
  created() {
    this.$store.commit("SET_TITLE", "TITLE HERE");
  },
};
</script>

<style>
</style>