import Vue from "vue";
import Vuex from "vuex";
import getters from './getter'
import rankModule from './module/rank';
import generalModule from './module/common';
import bookModule from './module/book';
import categoryModule from './module/category';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    "aa":1
  },
  mutations: {},
  actions: {},
  modules: {
    bookModule,
    rankModule,
    generalModule,
    categoryModule,
  },
  getters
});
