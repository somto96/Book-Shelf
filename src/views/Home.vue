<template>
  <div class="home">
    <Tabs />
    <div class="container">
      <div class="row">
        <div class="col-md-12 mb-3 mt-3 text-center">
          <b-form @submit.prevent="onSubmit" inline>
            <b-input
              id="inline-form-input-name"
              class="mb-2 mr-sm-2 mb-sm-0 input-field"
              placeholder="Search for books"
              v-model="form.query"
            ></b-input>
            <!-- <b-button variant="primary" type="submit">Search</b-button> -->
          </b-form>
          <!-- <div>
         
          </div>-->
        </div>
      </div>
      <!-- {{allBooks}} -->
      <div class="row">
        <div class="col-md-4" v-for="book  in allBooks.items" :key="book.id">
          <Cards
            :title="book.volumeInfo.title"
            :authors="book.volumeInfo.authors"
            :imageLink="book.volumeInfo.imageLinks.thumbnail"
            :id="book.id"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
// import Form from "@/components/Form.vue";
import Cards from "@/components/Cards.vue";
import Tabs from "@/components/Tabs.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "home",
  components: {
    Cards,
    Tabs
  },

  data() {
    return {
      index: 0,
      form: {
        query: ""
      }
    };
  },

  computed: {
    ...mapGetters(["allBooks"])
  },
  methods: {
    ...mapActions(["getBooks"]),
    onSubmit() {
      console.log(this.form);
      let payload = {
        query: this.form.query
      };
      this.getBooks(payload);
    }
  }
};
</script>

<style lang="scss" scoped>
.input-field {
  width: 100% !important;
  border-radius: 0;
  outline: none;
}
#modal-content .modal-dialog .modal-content .modal-header {
  border-bottom: none !important;
}
</style>