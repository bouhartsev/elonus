<template>
  <div>Страницы не было в задании, но я её делаю. Не бейте, пожалуйста, если не успею до проверки. Зато будет красиво.</div>
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