import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    component: () => import("../views/Layout.vue"),
    children: [
      {
        path: '',
        component: () => import("../views/Home.vue"),
        meta: {
          isShowNav: true,
          isCloseRefresh: false,
          isStartLoadMore: false,
          keepAlive:true
        }
      },
      {
        path: 'category',
        component: () => import("../views/Category.vue"),
        meta: {
          isShowNav: true,
          isCloseRefresh: true,
          isStartLoadMore: false,
          keepAlive:true
        }
      },
      {
        path: 'category/detail',
        name:"catDetail",
        component: () => import("../views/CatDetail.vue"),
        meta: {
          isShowNav: true,
          isCloseRefresh: false,
          isStartLoadMore: true,
          keepAlive:false
        }
      },
      {
        path: "rank",
        component: () => import("../views/Rank.vue"),
        meta: {
          isShowNav: true,
          isCloseRefresh: true,
          isStartLoadMore: false,
          keepAlive:true
        }
      },
      {
        path: "rank/:id",
        component: () => import("../views/RankDetail.vue"),
        meta: {
          isShowNav: true,
          isCloseRefresh: false,
          isStartLoadMore: true,
          keepAlive:false
        }
      },
      {
        path: "book/:id",
        name: "Book",
        component: () => import("../views/BookInfo.vue"),
        meta: {
          isShowNav: true,
          isCloseRefresh: false,
          isStartLoadMore: false,
          keepAlive:false
        }
      },
      {
        path: "search",
        component: () => import("../views/Search.vue"),
        meta: {
          isShowNav: false,
          isCloseRefresh: true,
          isStartLoadMore: true,
          keepAlive:false
        }
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
