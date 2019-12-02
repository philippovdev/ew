<template>
  <div>
    <v-select
      class="selector"
      label="section"
      :options="$store.getters.params.section"
      :value="$store.getters.params.activeSection"
      @input="setActiveSection"
    />
  </div>
</template>

<script>
  export default {
    name: "Section",
    computed: {
      store() {
        return this.$store.state
      }
    },
    methods: {
      setActiveSection(val) {
        this.$store.dispatch('setActiveSection', val)
      }
    }
  }
</script>

<style scoped>
  .selector {
    width: 20%;
  }
</style>
