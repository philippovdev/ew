<template>
  <div>
    <svg
      v-if="isDesktop"
      class="svg__logo"
      viewBox="0 0 100 20"
    >
      <!-- Symbol-->
      <symbol id="s-text">
        <text
          text-anchor=""
          x="0"
          y="50%"
          dy=".35em"
          class="text"
        >EuroWings App</text>
      </symbol>
      <!-- Duplicate symbols-->
      <use
        xlink:href="#s-text"
        class="text"
      />
      <use
        xlink:href="#s-text"
        class="text"
      />
    </svg>
    <svg
      v-else
      class="svg__logo"
      viewBox="0 0 100 20"
    >
      <!-- Symbol-->
      <symbol id="s-text">
        <text
          text-anchor=""
          x="0"
          y="50%"
          dy=".35em"
          class="text"
        >EW</text>
      </symbol>
      <!-- Duplicate symbols-->
      <use
        xlink:href="#s-text"
        class="text"
      />
      <use
        xlink:href="#s-text"
        class="text"
      />
    </svg>
  </div>
</template>

<script>
  export default {
    name: 'Logo',
    data() {
      return {
        isDesktop: null
      }
    },
    mounted() {
      ['resize', 'DOMContentLoaded'].forEach(event => {
        window.addEventListener(event, () => {
          if (window.innerWidth > 780) {
            this.isDesktop = true;
          } else {
            this.isDesktop = false
          }
        })
      })
    }
  }
</script>
<style>
  .svg__logo {
    width: 200px;
    height: 40px;
  }
</style>
