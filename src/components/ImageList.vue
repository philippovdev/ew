<template>
  <div class="grid">
    <div
      v-if="selectedPic.isVisible"
      class="selected-pic"
      @click="unsetSelectedPic"
    >
      <div
        v-if="selectedPic.type === 'image'"
        class="selected-pic__media">
        <img
          :src="selectedPic.src"
          :alt="selectedPic.description ? selectedPic.description : selectedPic.title">
      </div>
      <div
        v-if="selectedPic.type === 'video'"
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
            :src="selectedPic.src"
            :alt="selectedPic.description ? selectedPic.description : selectedPic.title"
          >
        </video>
      </div>
      <div class="selected-pic__body">
        <div class="heading">
          <div class="heading__title">Title</div>
          <div class="heading__description">Description</div>
        </div>
        <div class="score">Score</div>
        <div class="votes">
          <div class="votes__up">
            <fa :icon="['fas', 'arrow-up']" class="votes__up-icon"></fa>
            <p class="votes__up-text">Votes Up Text</p>
          </div>
          <div class="votes__down">
            <fa :icon="['fas', 'arrow-down']" class="votes__down-icon"></fa>
            <p class="votes__down-text">Votes Down Text</p>
          </div>
        </div>
      </div>
      <fa
        @click="unsetSelectedPic"
        :icon="['fas', 'times']"></fa>
    </div>
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
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'

  export default {
    name: "ImageList",
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
        this.selectedPic.isVisible = true;
        if ($event.target.src) {
          this.selectedPic.type = 'image';
          this.selectedPic.src = $event.target.src;
        } else {
          this.selectedPic.type = 'video';
          this.selectedPic.src = $event.target.querySelector('source').src;
        }
      },
      unsetSelectedPic() {
        this.selectedPic = {
          isVisible: false
        }
      }
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
    }

    &__description {
      background-color: white;
      width: 100%;
      flex-grow: 1;
      padding: 15px;
    }
  }
  .selected-pic {
    position: fixed;
    max-height: 80vh;
    overflow: hidden;
    width: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

</style>
