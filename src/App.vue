<template>
  <div>
    <AppHeader @sidenavToggle="displaySidenav = !displaySidenav"/>
    <SideNav
      :show="displaySidenav"
      @close="displaySidenav = false"/>
    <router-view/>
  </div>
</template>
<script>
  import AppHeader from "@/components/AppHeader";
  import SideNav from "@/components/nav/SideNav";

  export default {
    name: "App",
    components: {
      AppHeader,
      SideNav
    },
    data() {
      return {
        displaySidenav: false
      }
    }
  };
</script>
<styles lang="scss">
  @import "@/styles/main.scss"
</styles>
