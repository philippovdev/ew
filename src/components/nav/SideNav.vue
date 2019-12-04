<template>
  <div class="sidenav-container">
    <div
      v-if="show"
      class="sidenav-backdrop"
      @click="$emit('close')"></div>
    <transition name="slide-side">
      <div
        v-if="show"
        class="sidenav">
        <Section/>
        <Sort/>
        <Window v-if="isSectionTop"/>
        <ShowViral v-if="isSectionUser"/>
        <fa
          :icon="['fas', 'times']"
          @click="$emit('close')"
          class="close"
        ></fa>
      </div>
    </transition>
  </div>
</template>

<script>
  import Section from "../selectors/Section";
  import Sort from "../selectors/Sort";
  import Window from "../selectors/Window";
  import ShowViral from "../selectors/ShowViral";

  export default {
    name: "SideNav",
    components: {Window, Sort, Section, ShowViral},
    props: {
      show: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      isSectionTop() {
        return this.$store.getters.params.activeSection === "top";
      },
      isSectionUser() {
        return this.$store.getters.params.activeSection === "user";
      }
    }
  }
</script>

<style scoped>
  .close {
    position: absolute;
    top: 15px;
    right: 15px;
  }
  .sidenav-container {
    height: 100%;
    width: 100%;
  }

  .sidenav-backdrop {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 1000;
    position: fixed;
    top: 0;
    right: 0;
  }

  .sidenav {
    height: 100%;
    width: 300px;
    background-color: white;
    z-index: 10000;
    position: fixed;
    top: 0;
    right: 0;
    box-sizing: border-box;
    padding: 30px;
  }

  .nav-item a {
    text-decoration: none;
    color: black;
    font-size: 1.5rem;
  }

  .nav-item a:hover,
  .nav-item a:active {
    color: red;
  }
</style>
