<template>
  <div class="home container">
    <div class="row">
      <div class="col-md-4 offset-md-4 mb-3">
        <b-form @submit.prevent="onSubmit" inline>
          <label class="sr-only" for="inline-form-input-name">Name</label>
          <b-input
            id="inline-form-input-name"
            class="mb-2 mr-sm-2 mb-sm-0"
            placeholder="Search for books"
            v-model="form.query"
          ></b-input>
          <b-button variant="primary" type="submit">Search</b-button>
        </b-form>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 offset-md-3 mt-3">
        <b-card no-body class="overflow-hidden" style="max-width: 540px;">
          <b-row no-gutters>
            <b-col md="6">
              <b-card-img src="https://picsum.photos/400/400/?image=20" class="rounded-0"></b-card-img>
            </b-col>
            <b-col md="6">
              <b-card-body title="Horizontal Card">
                <b-card-title
                  v-for="(bookTitle, index) in books.volumeInfo"
                  :key="index"
                >{{bookTitle}}</b-card-title>
                <b-card-sub-title class="mb-2">Card Sub Title</b-card-sub-title>
                <b-card-text>
                  This is a wider card with supporting text as a natural lead-in to additional content.
                  This content is a little bit longer.
                </b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
// import Form from "@/components/Form.vue";
export default {
  name: "home",
  data() {
    return {
      books: [],
      bookTitle: {},
      bookAuthors: [],
      bookDescription: {},
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
        for (var i = 0; i < result.data.items.length; i++) {
          this.books = result.data.items[i];
          this.bookTitle = this.books.volumeInfo.title;
          this.bookAuthors = this.books.volumeInfo.authors;
          this.bookDescription = this.books.volumeInfo.description;
          // console.log(this.bookDescription);
          return this.books;
        }

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
