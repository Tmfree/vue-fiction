import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import { getToken } from '@/utils/auth'
Vue.use(VueRouter);
const routes: Array<RouteConfig> = [
  {
    path: "/",
    component: () => import("../views/Layout.vue"),
    children: [
      {
        path: '',
        component: () => import("../views/home/index.vue"),
        meta: {
          isShowNav: true,
          isCloseRefresh: true,
          isStartLoadMore: false,
          isLogin: false
        }
      },
      {
        path: '/book/list/:id',
        component: () => import("../views/booklist/index.vue"),
        meta: {
          isShowNav: true,
          isCloseRefresh: true,
          isStartLoadMore: true,
          isLogin: false
        }
      },
      {
        path: 'category',
        component: () => import("../views/category/index.vue"),
        meta: {
          isShowNav: true,
          isCloseRefresh: true,
          isStartLoadMore: false,
          isLogin: false
        }
      },
      {
        path: 'category/:bname',
        name: "catDetail",
        component: () => import("../views/category/detail.vue"),
        meta: {
          isShowNav: true,
          isCloseRefresh: false,
          isStartLoadMore: true,
          isLogin: false
        }
      },
      {
        path: "rank",
        component: () => import("../views/rank/index.vue"),
        meta: {
          isShowNav: true,
          isCloseRefresh: true,
          isStartLoadMore: false,
          isLogin: false
        }
      },
      {
        path: "rank/:bname",
        component: () => import("../views/rank/detail.vue"),
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
        component: () => import("../views/book/index.vue"),
        meta: {
          isShowNav: true,
          isCloseRefresh: true,
          isStartLoadMore: false,
          isLogin: false
        }
      },
      {
        path: "search",
        component: () => import("../views/search/index.vue"),
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
    name: 'login',
    component: () => import("../views/login/index.vue"),
    meta: {
      isLogin: false
    }
  },
  {
    path: '/user',
    component: () => import("../views/person/index.vue"),
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
    const hasToken = getToken('User-Token');
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
