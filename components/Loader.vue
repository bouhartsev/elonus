<template>
  <v-progress-circular
      :size="50"
      color="primary"
      indeterminate
      v-if="!data || Array.isArray(data)&&!data.length || JSON.stringify(data)=='{}'"
      class="mx-auto my-10"
    ></v-progress-circular>
</template>

<script>
export default {
    props: ['data']
}
</script>

<style>

</style>