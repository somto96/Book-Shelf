<template>
  <div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <img :src="imageLinks" :alt="title" style="width:300px;height:300px;" />
      </div>
      <div class="flip-card-back">
        <h4 class="mt-3 mb-3">{{title}}</h4>
        <p v-for="(author, index) in authors" :key="index">{{author}}</p>
        <b-button variant="outline-primary mr-3">Read Later</b-button>
        <b-button variant="outline-primary ml-3">Read Now</b-button>
      </div>
    </div>
  </div>

  <!-- <div id="card"> title="Card Title"
    img-src="https://picsum.photos/600/300/?image=25"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
    <b-card no-body class="overflow-hidden" style="max-width: 100%;">
      <b-row no-gutters>
        <b-col md="6">
          <b-card-img :src="imageLinks" class="rounded-0"></b-card-img>
        </b-col>
        <b-col md="6">
          <b-card-body title>
            <b-card-title>{{title}}</b-card-title>
            <b-card-sub-title
              class="mb-2"
              v-for="(author, index) in authors"
              :key="index"
            >{{author}}</b-card-sub-title>
            <b-card-text>{{description}}...</b-card-text>
            <b-button variant="outline-primary mr-3">Read Later</b-button>
            <b-button variant="outline-primary ml-3">Read Now</b-button>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card> 
  </div>-->
</template>

<script>
export default {
  props: {
    title: String,
    authors: Array,
    description: String,
    imageLinks: String
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

      .btn-outline-primary{
        border-color: #007bff !important;
        color: #007bff;
      }
      .btn-outline-primary:hover{
        border-color: #007bff !important;
        color: #fff;
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