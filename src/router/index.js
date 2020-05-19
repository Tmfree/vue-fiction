import Vue from "vue";
import store from '@/store';
import VueRouter from "vue-router";
import { getToken } from '@/utils/auth'
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
          isLogin: false
        }
      },
      {
        path: 'category',
        component: () => import("../views/Category.vue"),
        meta: {
          isShowNav: true,
          isCloseRefresh: true,
          isStartLoadMore: false,
          isLogin: false
        }
      },
      {
        path: 'category/detail',
        name: "catDetail",
        component: () => import("../views/CatDetail.vue"),
        meta: {
          isShowNav: true,
          isCloseRefresh: false,
          isStartLoadMore: true,
          isLogin: false
        }
      },
      {
        path: "rank",
        component: () => import("../views/Rank.vue"),
        meta: {
          isShowNav: true,
          isCloseRefresh: true,
          isStartLoadMore: false,
          isLogin: false
        }
      },
      {
        path: "rank/:id",
        component: () => import("../views/RankDetail.vue"),
        meta: {
          isShowNav: true,
          isCloseRefresh: false,
          isStartLoadMore: true,
          isLogin: false
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
          isLogin: false
        }
      },
      {
        path: "search",
        component: () => import("../views/Search.vue"),
        meta: {
          isShowNav: false,
          isCloseRefresh: true,
          isStartLoadMore: true,
          isLogin: false
        }
      }
    ]
  },
  {
    path: '/login',
    name:'login',
    component: () => import("../views/Login.vue"),
    meta: {
      isLogin: false
    }
  },
  {
    path: '/user',
    component: () => import("../views/Personal.vue"),
    meta: {
      isLogin: false
    }
  }
];

const router = new VueRouter({
  routes
});
const whiteList = ['/login'];//不需要重定向
router.beforeEach((to, from, next) => {
  // ...
  let { isLogin } = to.meta;
  if (isLogin) {
    const hasToken = getToken();
    if (hasToken) {
      next();
    } else {
      //不需要token
      if (whiteList.indexOf(to.path) !== -1) {
        next()
      } else {
        // 页面跳转
        next(`/login?redirect=${to.path}`)
      }
    }
  } else {
    next();
  }
})

export default router;
