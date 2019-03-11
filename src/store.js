import Vue from "vue";
import Vuex from "vuex";

import anotherStore from "./anotherStore";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    anotherStore
  }
});

export default store;
