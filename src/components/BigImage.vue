<template>
  <div
    v-if="propData.isVisible"
    class="big-image"
    @click="unsetSelectedPic"
  >
    <div
      v-if="propData.type === 'image'"
      class="selected-pic__media"
    >
      <img
        :src="propData.src"
        :alt="propData.description ? propData.description : propData.title"
      >
    </div>
    <div
      v-if="propData.type === 'video'"
      class="selected-pic__media"
    >
      <video
        draggable="false"
        playsinline
        loop
        autoplay
        muted
      >
        <source
          :src="propData.src"
          :alt="propData.description ? propData.description : propData.title"
        >
      </video>
    </div>
    <div class="selected-pic__body">
      <div class="heading">
        <div class="heading__title">
          Title
        </div>
        <div class="heading__description">
          Description
        </div>
      </div>
      <div class="score">
        Score
      </div>
      <div class="votes">
        <div class="votes__up">
          <fa
            :icon="['fas', 'arrow-up']"
            class="votes__up-icon"
          />
          <p class="votes__up-text">
            Votes Up Text
          </p>
        </div>
        <div class="votes__down">
          <fa
            :icon="['fas', 'arrow-down']"
            class="votes__down-icon"
          />
          <p class="votes__down-text">
            Votes Down Text
          </p>
        </div>
      </div>
    </div>
    <fa
      :icon="['fas', 'times']"
      @click="unsetSelectedPic"
    />
  </div>
</template>

<script>
  export default {
    name: "BigImage",
    props: {
      data: {
        type: Object,
        required: true
      },
    },
    data() {
      return {
        propData: this.data
      }
    },
    methods: {
      unsetSelectedPic() {
        this.propData = {
          isVisible: false
        };
        this.$emit('unsetSelectedPic', this.propData);
      },
    }
  }
</script>

<style scoped>
  .big-image {
    position: fixed;
    overflow: hidden;
    width: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
  }
</style>
