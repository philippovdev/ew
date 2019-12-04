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
        class="card grid__item"
        :title="card.title"
      >
        <div
          v-if="!card.images && !card.mp4"
          class="card__media"
          @click="showFullPic(card, $event)"
        >
          <img
            :src="card.link"
            :alt="card.description ? card.description : card.title"
          >
        </div>
        <div
          v-else-if="!card.images && card.mp4"
          class="card__media"
          @click="showFullPic(card, $event)"
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
          @click="showFullPic(card, $event)"
        >
          <img
            :src="card.images[0].link"
            :alt="card.description ? card.description : card.title"
          >
        </div>
        <div
          v-else
          class="card__media"
          @click="showFullPic(card, $event)"
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
          <h3 v-text="limitText((card.description ? card.description : card.title), 50)"></h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapActions, mapGetters} from "vuex";
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
      };
    },
    computed: mapGetters(["allCards"]),
    mounted() {
      console.log('scroll');
      this.scroll();
    },
    created() {
      this.fetchImages();
    },
    methods: {
      ...mapActions(["fetchImages"]),
      showFullPic(data, $event) {
        this.selectedPic.isVisible = true;
        if ($event.target.src) {
          this.selectedPic.type = "image";
          this.selectedPic.src = $event.target.src;
        } else {
          this.selectedPic.type = "video";
          this.selectedPic.src = $event.target.querySelector("source").src;
        }
      },
      unsetSelectedPic() {
        this.selectedPic = {
          isVisible: false
        };
      },
      limitText(text, limit = 20) {
        const newText = [];
        if (text.length > limit) {
          text.split(' ').reduce((acc, cur) => {
            if (acc + cur.length <= limit) {
              newText.push(cur);
            }
            return acc += cur.length
          }, 0);
          return `${newText.join(' ')} ...`;
        }
        return text;
      },
      scroll() {
        window.onscroll = () => {
          const rootElHeight = document.querySelector('.grid').offsetHeight + 60;
          let bottomOfWindow = ((document.documentElement.scrollTop + window.innerHeight + 1) >= rootElHeight);
          if (bottomOfWindow) {
            this.loadNewPosts()
          }
        }
      },
      loadNewPosts() {
        this.$store.dispatch('setNewPage', this.$store.getters.params.page);
      },
    }
  }
</script>
