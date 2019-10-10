<template>
  <div class="flip-card">
    <b-alert
      :show="dismissCountDown"
      dismissible
      variant="primary"
      @dismissed="dismissCountDown=0"
      @dismiss-count-down="countDownChanged"
    >
      <p>{{title}} has been added to your library</p>
      <b-progress variant="primary" :max="dismissSecs" :value="dismissCountDown" height="4px"></b-progress>
    </b-alert>
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <img :src="imageLink" :alt="title" style="width:300px;height:300px;" />
      </div>
      <div class="flip-card-back">
        <h4 class="mt-3 mb-3">{{title}}</h4>
        <p v-for="(author, index) in authors" :key="index">{{author}}</p>
        <!-- <b-button variant="outline-primary mr-3" @click="saveLater()">Read Later</b-button>
        <b-button variant="outline-primary ml-3" @click="readNow()">Read Now</b-button>-->
        <Buttons @read-later="saveLater" @read-now="readNow" />

        <!-- {{readLater}} -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Buttons from "../components/Buttons";
export default {
  components: {
    Buttons
  },
  data() {
    return {
      dismissSecs: 3,
      dismissCountDown: 0,
     
    };
  },
  props: {
    title: String,
    authors: Array,
    imageLink: String,
    id: String
    // currentCard: Object
  },
  computed: {
    ...mapGetters(["allBooks"])
  },
  methods: {
    ...mapActions(["saveBook", "readBook", "removeBook"]),
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    saveLater() {
      // console.log(this.currentCard)
      let payload = {
        title: this.title,
        authors: this.authors,
        imageLink: this.imageLink,
        // id: this.id
      };
      this.saveBook(payload);
      this.dismissCountDown = this.dismissSecs;
    },
    readNow() {
      // console.log(this.currentCard)
      let payload = {
        title: this.title,
        authors: this.authors,
        imageLink: this.imageLink,
        id: this.id
      };
     
      this.readBook(payload);
      this.dismissCountDown = this.dismissSecs;
      this.removeBook(payload)
    }
    
  }
};
</script>

<style lang="scss" scoped>
.flip-card {
  background-color: transparent;
  width: 300px;
  height: 300px;
  margin: 20px 20px;
  border: 1px solid #f1f1f1;
  perspective: 1000px; /* Remove this if you don't want the 3D effect */

  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;

    .flip-card-front {
      background-color: #bbb;
      color: black;
    }
    .flip-card-back {
      background-color: #fff;
      color: #000;
      transform: rotateY(180deg);
      padding: 10px 10px;

      .btn-outline-primary {
        border-color: #007bff !important;
        color: #007bff;
      }
      .btn-outline-primary:hover {
        border-color: #007bff !important;
        color: #fff;
        font-weight: 600;
      }
    }

    .flip-card-front,
    .flip-card-back {
      position: absolute;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
    }
  }
}
.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}
</style>