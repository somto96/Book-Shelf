import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Reading from "./views/Reading.vue";
import Later from "./views/Later.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "login",
      component: Login
    },
    {
      path: "/register",
      name: "register",
      component: Register
    },
    {
      path: "/home",
      name: "home",
      component: Home
    },
    {
      path: "/reading",
      name: "Reading",
      component: Reading
    },
    {
      path: "/later",
      name: "Later",
      component: Later
    }
  ]
});