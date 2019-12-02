<template>
  <div>
    <v-select
      class="selector"
      label="sort"
      :options="$store.getters.params.sort"
      :value="$store.getters.params.activeSort"
      @input="setActiveSort"
    />
  </div>
</template>

<script>
  export default {
    name: "Sort",
    computed: {
      store() {
        return this.$store.state
      }
    },
    methods: {
      setActiveSort(val) {
        this.$store.dispatch('setActiveSort', val)
      }
    }
  }
</script>

<style scoped>
  .selector {
    width: 20%;
  }
</style>
