import Vue from "vue";
import Router from "vue-router";
import Unchecked from "./views/Unchecked.vue";
import All from "./views/All.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "unchecked",
      component: Unchecked
    },
    {
      path: "/all",
      name: "all",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: All
    }
  ]
});
