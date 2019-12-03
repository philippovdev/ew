<template>
  <div>
    <BigImage
      :data="selectedPic"
      @unsetSelectedPic="selectedPic = $event"
    />
    <div class="grid">
      <div
        v-for="card in allCards"
        :key="card.id"
        class="card"
        :title="card.title"
        @click="showFullPic(card, $event)"
      >
        <div
          v-if="!card.images && !card.mp4"
          class="card__media"
        >
          <img
            :src="card.link"
            :alt="card.description ? card.description : card.title"
          >
        </div>
        <div
          v-else-if="!card.images && card.mp4"
          class="card__media"
        >
          <video
            draggable="false"
            playsinline
            loop
            autoplay
            muted
          >
            <source
              :src="card.mp4"
              :alt="card.description ? card.description : card.title"
            >
          </video>
        </div>
        <div
          v-else-if="!card.images[0].mp4"
          class="card__media"
        >
          <img
            :src="card.images[0].link"
            :alt="card.description ? card.description : card.title"
          >
        </div>
        <div
          v-else
          class="card__media"
        >
          <video
            draggable="false"
            playsinline
            loop
            autoplay
            muted
          >
            <source
              :src="card.images[0].mp4"
              :alt="card.description"
            >
          </video>
        </div>
        <div class="card__description">
          {{ card.description ? card.description : card.title }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'
  import BigImage from "./BigImage";

  export default {
    name: "ImageList",
    components: {BigImage},
    data() {
      return {
        selectedPic: {
          isVisible: false,
          type: null
        }
      }
    },
    computed: mapGetters(['allCards']),
    created() {
      this.fetchImages();
    },
    methods: {
      ...mapActions(['fetchImages']),
      showFullPic(data, $event) {
        if ($event.target.tagName === 'VIDEO' || $event.target.tagName === 'IMG') {
          this.selectedPic.isVisible = true;
          if ($event.target.src) {
            this.selectedPic.type = 'image';
            this.selectedPic.src = $event.target.src;
          } else {
            this.selectedPic.type = 'video';
            this.selectedPic.src = $event.target.querySelector('source').src;
          }
        }
      },
      unsetSelectedPic() {
        this.selectedPic = {
          isVisible: false
        }
      },
    }
  }
</script>

<style scoped lang="scss">

  .card {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex-basis: 25%;
    overflow: hidden;
    padding: 15px;

    &__media {
      max-height: 240px;
      overflow: hidden;
    }

    &__media img,
    &__media video {
      width: auto;
      max-width: 100%;
      cursor: pointer;
    }

    &__description {
      background-color: white;
      width: 100%;
      flex-grow: 1;
      padding: 15px;
    }
  }

</style>
