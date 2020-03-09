
<template>
  <!-- <b-nav tabs align="center">
    <b-nav-item to="/home">Search</b-nav-item>
    <b-nav-item to="/reading">Read now</b-nav-item>
    <b-nav-item to="/later">Read Later</b-nav-item>
  </b-nav>-->

  <div>
    <b-navbar toggleable="lg" type="light" variant="default">
      <div class="container">
        <b-navbar-brand to="/home">
          <img
            src="../assets/bookshelf.svg"
            class="landing-image"
            alt="bookshelf"
            style="width:50px;height:50px;"
          />
          <span class="ml-2" style="color: #007bff; font-weight:bold">Bookshelf</span>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- <b-navbar-nav>
          <b-nav-item href="#">Link</b-nav-item>
          <b-nav-item href="#" disabled>Disabled</b-nav-item>
          </b-navbar-nav>-->

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto tabs">
            <!-- <b-nav-item v-if="user.loggedIn" to="#">Welcome {{user.data.displayName}}</b-nav-item> -->
            <b-nav-item class="tab" to="/home">Search</b-nav-item>
            <b-nav-item class="tab" to="/reading">Read now</b-nav-item>
            <b-nav-item class="tab" to="/later">Read Later</b-nav-item>
            <b-nav-item v-if="user.loggedIn" class="tab" to="/">Log Out</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  /* eslint-disable */
  name: "tabs",
  computed: {
    // map `this.user` to `this.$store.getters.user`
    ...mapGetters({
      user: "user"
    })
  }
};
</script>

<style lang="scss" scoped>
.container {
  #nav-collapse {
    .tabs {
      .nav-link.active,
      .nav-link:focus,
      .nav-link:hover {
        color: #007bff;
      }
    }
  }
}
</style>