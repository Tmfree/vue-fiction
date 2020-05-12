import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vant from 'vant';
import VueLazyload from 'vue-lazyload';
import VuePageStack from 'vue-page-stack';
import "normalize.css/normalize.css";
import './utils/vw.css';
import 'vant/lib/index.css';
import './assets/css/reset.scss'

Vue.use(Vant);
Vue.use(VuePageStack, { router }); 
Vue.config.productionTip = false;
Vue.use(VueLazyload, {
  preLoad: 1.3,
  loading: '//qidian.gtimg.com/qdm/img/book-cover.c977e.svg',
  attempt: 1
})
new Vue({
  router,
  store,
  bus:new Vue(),
  render: h => h(App)
}).$mount("#app");
