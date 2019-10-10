<template>
  <div>
    <b-button variant="outline-primary mr-3" @click="later">Read Later</b-button>
    <b-button variant="outline-primary ml-3" @click="now">Read Now</b-button>
  </div>
</template>

<script>
export default {
    name:"Buttons",
    methods:{
        later(){
            this.$emit('read-later')
        },
        now(){
            this.$emit('read-now')
        },
    }
}
</script>