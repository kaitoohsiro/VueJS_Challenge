import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import firebase from "firebase";
import store from "./store";

Vue.config.productionTip = false;

// Your web app's Firebase configuration
var firebaseConfig = {
  //firebaseより参照してください。
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
