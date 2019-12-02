<template>
  <div>
<!--    <v-select :options="params.section"></v-select>-->
  </div>
</template>

<script>

  export default {
    name: "AppHeader",
    data() {
      return {
        params: {
          section: ['hot', 'top', 'user'],
          sort: ['viral', 'top', 'time', 'rising'],
          window: ['day', 'week', 'month', 'year', 'all']
        }
      }
    },
    methods: {
      setNewParams() {
        const sectionVAl = {
          section: this.$refs.section.value
        }
        this.$store.dispatch('setParams', sectionVAl);
        console.log(this.$store.state.urlParams.section)
      }
    }
  };
</script>

<style lang="scss">
  .horizontal {
    display: flex;
  }
</style>
