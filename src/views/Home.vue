<template>
  <div class="home container">
    <div class="row">
      <div class="col-md-4 offset-md-4">
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
      form: {
        query: ""
      }
    };
  },
  methods: {
    onSubmit() {
      console.log(this.form);
      const baseURI = "https://www.googleapis.com/books/v1/volumes?q="+this.form.query ;
      this.$http.get(baseURI).then(result => {
        console.log(result.data.items);
      });
    },

    // getBooks() {
      
    // }
  },
  // created:{},
  // mounted:{
  //   this.getBooks();
  // }
};
</script>
