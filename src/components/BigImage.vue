<template>
  <div
    v-if="propData.isVisible"
    class="big-image__background">

    <fa
      class="close"
      :icon="['fas', 'times']"
      @click="unsetSelectedPic"
    />
    <div class="big-image__cover">
      <div
        class="big-image"
        @click="unsetSelectedPic"
      >
        <div
          v-if="propData.type === 'image'"
          class="big-image__media"
        >
          <img
            :src="propData.src"
            :alt="propData.description ? propData.description : propData.title"
          >
        </div>
        <div
          v-if="propData.type === 'video'"
          class="big-image__media"
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
      </div>
      <div class="big-image__data">
        <div class="big-image__data-part data__heading">
          <h2 class="data__heading-title" v-text="propData.title"></h2>
          <p class="data__heading-description" v-text="propData.description"></p>
        </div>
        <div class="big-image__data-part data__score">Score: {{ propData.score }}</div>
        <div class="big-image__data-part data__votes">
          <div class="data__votes--with-icon-left data__votes-up">
            <fa
              :icon="['fas', 'arrow-up']"
              class="icon data__votes-up-icon"
            />
            <p class="data__votes-up-text">
              {{ propData.ups }}
            </p>
          </div>
          <div class="data__votes--with-icon-left data__votes-down">
            <fa
              :icon="['fas', 'arrow-down']"
              class="icon data__votes-down-icon"
            />
            <p class="data__votes-down-text">
              {{ propData.downs }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "BigImage",
    props: {
      data: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        propData: this.data
      };
    },
    methods: {
      unsetSelectedPic() {
        this.propData = {
          isVisible: false
        };
        this.$emit("unsetSelectedPic", this.propData);
      }
    }
  };
</script>

<style scoped lang="scss">
  .big-image {
    &__cover {
      position: fixed;
      overflow: hidden;
      width: auto;
      top: 50%;
      left: 50%;
      max-height: 80vh;
      max-width: 90%;
      transform: translate(-50%, -50%);
      cursor: pointer;
      z-index: 2001;
      border-radius: 8px;
    }

    &__background {
      background-color: rgba(0, 0, 0, .8);
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 2000;

      .close {
        font-size: 40px;
        color: #fff;
        right: 20px;
        top: 20px;
        position: absolute;
        cursor: pointer;
      }
    }

    &__data {
      height: auto;
      background-color: rgba(255,255,255, .8);
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 15px;
      &-part {
        padding: 10px 0;
      }

      .data__heading {

      }

      .data__score {
        font-size: 20px;

      }

      .data__votes {
        display: flex;
        &--with-icon-left {
          display: flex;
          align-items: center;
          &:not(:last-of-type) {
            margin-right: 20px;
          }

          & .icon {
            margin-right: 5px;
          }
        }
      }
    }
  }
</style>
