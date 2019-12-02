<template>
  <div>
    <Section />
    <Sort />
    <Window v-if="isSectionTop" />
    <ShowViral v-if="isSectionUser" />
  </div>
</template>

<script>
  import Section from "./selectors/Section";
  import Sort from "./selectors/Sort";
  import Window from "./selectors/Window";
  import ShowViral from "./selectors/ShowViral";
  export default {
    name: "AppHeader",
    components: {Window, Sort, Section, ShowViral},
    computed: {
      isSectionTop() {
        return this.$store.getters.params.activeSection === 'top'
      },
      isSectionUser() {
        return this.$store.getters.params.activeSection === 'user'
      }
    }
  };
</script>

<style lang="scss">
</style>
