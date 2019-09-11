import Vue from "vue";
import Router from "vue-router";
import ListPost from "./views/ListPost.vue";
import PostDetail from "./views/PostDetail.vue";
import NewPost from "./views/NewPost";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'ListPost',
      component: ListPost,
      props: true,
    },
    {
      path: '/PostDetail',
      name: 'PostDetail',
      component: PostDetail
    },
    {
      path: '/NewPost',
      name: 'NewPost',
      component: NewPost,
      props: true,
    },
  ]
});
