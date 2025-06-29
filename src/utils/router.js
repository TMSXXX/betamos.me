import { createRouter, createWebHashHistory } from "vue-router"
import Home from "../components/pages/Home.vue"
import Post from "../components/pages/PostPage.vue"

const router = createRouter({
  history: createWebHashHistory(),
  routes:[
    {
      path:"/",
      component: Home
    },
    {
      path:"/post/:postId",
      component: Post,
      props: true
    },
  ]
});

export default router;
