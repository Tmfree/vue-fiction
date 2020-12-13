import { Icategory } from './interface'
import * as Type from './type'
import { ActionTree, MutationTree } from "vuex";
import Ajax from "@/request/api"
let state: Icategory = {
    categoryList: [],
    categoryDetail: []
}
let mutations: MutationTree<Icategory> = {
    [Type.SET_CATEGORY](state, data) {
        state.categoryList = data;
    },
    [Type.STE_CATEGORY_DETAIL](state, data) {
        state.categoryDetail = data;
    }
}
let actions: ActionTree<Icategory, any> = {
    async getCategory({ commit }, data = {}) {
        let result = await Ajax.getCategory(data);
        commit(Type.SET_CATEGORY, result);
        return result;
    },
    async getCategoryDetail({ commit }, data = {}) {
        let result = await Ajax.getCategoryList(data);
        commit(Type.STE_CATEGORY_DETAIL, result.data);
        return result.data;
    }
}
export default {
    state,
    mutations,
    actions
}