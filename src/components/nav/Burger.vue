<template>
  <div
    role="button"
    class="burger"
    @click="$emit('toggle')"
  >
    <div class="burger__bar" />
    <div class="burger__bar" />
    <div class="burger__bar" />
  </div>
</template>

<script>
  export default {
    name: "Burger"
  }
</script>

<style scoped lang="scss"></style>
