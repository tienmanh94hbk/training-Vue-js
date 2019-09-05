import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueResource from "vue-resource";
import Posts from "./components/Posts";
import Vuelidate from "vuelidate";

Vue.component("app-posts", Posts);
Vue.use(VueResource);
Vue.use(Vuelidate);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
