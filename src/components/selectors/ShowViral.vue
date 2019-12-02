<template>
  <div>
    <label for="is-viral">Show Viral
      <input
        id="is-viral"
        type="checkbox"
        name="isViral"
        :checked="isViral"
        @change="setViral"
      >
    </label>
  </div>
</template>

<script>
  export default {
    name: "Window",
    computed: {
      isViral() {
        return this.$store.getters.showViral
      }
    },
    methods: {
      setViral() {
        this.$store.dispatch('setViral')
      }
    }
  }
</script>

<style scoped>
  .selector {
    width: 20%;
  }
</style>
