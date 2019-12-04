<template>
  <div class="header">
    <div class="header__container">
      <div class="header__logo">
        <NavLogo/>
      </div>
      <div class="header__selectors">
        <Section/>
        <Sort/>
        <Window v-if="isSectionTop"/>
        <ShowViral v-if="isSectionUser"/>
      </div>
      <Burger @toggle="$emit('sidenavToggle')"/>
    </div>
  </div>
</template>

<script>
  import Section from "./selectors/Section";
  import Sort from "./selectors/Sort";
  import Window from "./selectors/Window";
  import ShowViral from "./selectors/ShowViral";
  import NavLogo from "./nav/NavLogo";
  import Burger from "./nav/Burger";

  export default {
    name: "AppHeader",
    components: {Burger, Window, Sort, Section, ShowViral, NavLogo},
    computed: {
      isSectionTop() {
        return this.$store.getters.params.activeSection === "top";
      },
      isSectionUser() {
        return this.$store.getters.params.activeSection === "user";
      }
    }
  };
</script>

<style lang="scss"></style>
