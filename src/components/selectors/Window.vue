<template>
  <div>
    <v-select
      class="selector"
      label="window"
      :options="$store.getters.params.window"
      :value="$store.getters.params.activeWindow"
      @input="setActiveWindow"
    />
  </div>
</template>

<script>
  export default {
    name: "Window",
    computed: {
      store() {
        return this.$store.state
      }
    },
    methods: {
      setActiveWindow(val) {
        this.$store.dispatch('setActiveWindow', val)
      }
    }
  }
</script>

<style scoped>
  .selector {
    width: 20%;
  }
</style>
