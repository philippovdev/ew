<template>
  <div>
    <Section />
    <Sort />
    <Window v-show="$store.getters.params.activeSection === 'top'" />
    <ShowViral v-show="$store.getters.params.activeSection === 'user'" />
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
  };
</script>

<style lang="scss">
  .horizontal {
    display: flex;
  }
</style>
