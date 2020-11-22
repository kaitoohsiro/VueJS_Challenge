import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    message: "Hello from Vuex!!",
    counter: 0
  },
  mutations: {
    increment(state) {
      state.counter++;
    }
  },
  actions: {},
  modules: {}
});
