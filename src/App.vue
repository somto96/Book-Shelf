<template>
  <div id="app">
    <div id="nav">
      <b-nav tabs align="center">
        <b-nav-item active to="/">Search</b-nav-item>
        <b-nav-item>Read now</b-nav-item>
        <b-nav-item>Read Later</b-nav-item>
      </b-nav>
      <!-- <router-link to="/">Search</router-link> -->
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #007bff;
    }
  }
}
</style>
