<template>
  <div class="container">
    <Tabs />
    <div class="row">
      <div class="read-later col-md-4 col-sm-6" v-for="(books, index)  in showReadNow" :key="index">
        <CurrentView :title="books.title" :authors="books.authors" :imageLink="books.imageLink" />
      </div>
    </div>
  </div>
</template>

<script>
import CurrentView from "@/components/CurrentView.vue";
import Tabs from "@/components/Tabs.vue";
import { mapGetters } from "vuex";
export default {
  name: "Reading",
  components: {
    CurrentView,
    Tabs
  },
  computed: {
    ...mapGetters(["showReadNow"])
  }
};
</script>

<style lang="scss" scoped>

button.btn.btn-outline-primary.mr-3,
button.btn.btn-outline-primary.ml-3 {
  display: none !important;
}
</style>