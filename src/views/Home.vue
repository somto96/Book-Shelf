<template>
  <div class="home container">
    <div class="row">
      <div class="col-md-12 mb-3">
        <b-form @submit.prevent="onSubmit" inline>
          <b-input
            id="inline-form-input-name"
            class="mb-2 mr-sm-2 mb-sm-0 input-field"
            placeholder="Search for books"
            v-model="form.query"
          ></b-input>
          <!-- <b-button variant="primary" type="submit">Search</b-button> -->
        </b-form>
      </div>
    </div>

    <div class="row">
      <div class="col-md-4 col-sm-6" v-for="(book, index) in books" :key="index">
        <Cards
          :title="book.volumeInfo.title"
          :authors="book.volumeInfo.authors"
          :description="book.volumeInfo.description"
          :imageLinks="book.volumeInfo.imageLinks.thumbnail"
        />
      </div> 
      
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
// import Form from "@/components/Form.vue";
import Cards from "@/components/Cards.vue";
export default {
  name: "home",
  components: {
    Cards
  },
  data() {
    return {
      books: [],
      // bookTitle: {},
      // bookAuthors: [],
      // bookDescription: {},
      form: {
        query: ""
      }
    };
  },
  methods: {
    onSubmit() {
      console.log(this.form);
      const baseURI =
        "https://www.googleapis.com/books/v1/volumes?q=" + this.form.query;
      this.$http.get(baseURI).then(result => {
        this.books = result.data.items;
        // this.books.push(items.volumeInfo);
        // this.bookAuthors = this.books.volumeInfo.authors;
        // this.bookDescription = this.books.volumeInfo.description;
        console.log(this.books);
        return this.books;

        // console.log(result.data.items);
      });
    }

    // getBooks() {

    // }
  }
  // created:{},
  // mounted:{
  //   this.getBooks();
  // }
};
</script>

<style lang="scss" scoped>
.input-field {
  width: 100% !important;
  border-radius: 0;
  outline: none;
}
#modal-content .modal-dialog .modal-content .modal-header{
  border-bottom: none !important;
}
</style>