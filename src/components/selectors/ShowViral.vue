<template>
  <div>
    <p class="helper helper--small">Show Viral</p>
    <div class="selector selector--checkbox">
      <input
        id="is-viral"
        type="checkbox"
        name="isViral"
        :checked="isViral"
        @change="setViral"
      >
      <label for="is-viral"></label>
    </div>
  </div>
</template>

<script>
export default {
  name: "Window",
  computed: {
    isViral() {
      return this.$store.getters.params.showViral;
    }
  },
  methods: {
    setViral() {
      this.$store.dispatch("setViral");
    }
  }
};
</script>
