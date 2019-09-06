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

Vue.directive('numericOnly', {
    bind: function (el, binding, vnode) {
        el.addEventListener('keydown', (e) => {
            if ([46, 8, 9, 27, 13, 110, 190].indexOf(e.keyCode) !== -1 ||
                (e.keyCode === 65 && e.ctrlKey === true) ||
                (e.keyCode === 67 && e.ctrlKey === true) ||
                (e.keyCode === 88 && e.ctrlKey === true) ||
                (e.keyCode >= 35 && e.keyCode <= 39)) {
                return
            }
            if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
                e.preventDefault()
            }
        });
    }
});

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
