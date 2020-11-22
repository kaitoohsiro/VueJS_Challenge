import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    counter: 0,
    cartItems: ["お肉"]
  },
  mutations: {
    increment(state) {
      state.counter++;
    }
  },
  getters: {
    cartItemsCount(state) {
      return state.cartItems.length;
    }
  },
  actions: {
    increment(context) {
      setTimeout(() => {
        context.commit("increment");
      }, 1000);
    }
  },
  modules: {}
});
