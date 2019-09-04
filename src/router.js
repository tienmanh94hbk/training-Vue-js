import Vue from "vue";
import Router from "vue-router";
import ListPost from "./views/ListPost.vue";
import PostDetail from "./views/PostDetail.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'ListPost',
      component: ListPost
    },
    {
      path: '/PostDetail/:id',
      name: 'PostDetail',
      component: PostDetail
    }
  ]
});
