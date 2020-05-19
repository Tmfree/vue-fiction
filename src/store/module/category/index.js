import * as Type from './type'
import { getCategory, getCategoryDetail } from "@/request/api"
export default {
    state: {
        categoryList: [],
        categoryDetail: []
    },
    mutations: {
        [Type.SET_CATEGORY](state, data) {
            state.categoryList = data;
        },
        [Type.STE_CATEGORY_DETAIL](state, data) {
            state.categoryDetail = data;
        }
    },
    actions: {
        async getCategory({ commit }, data = {}) {
            let result = await getCategory(data);
            commit(Type.SET_CATEGORY, result);
            return result;
        },
        async getCategoryDetail({ commit }, data = {}) {
            let result = await getCategoryDetail(data);
            commit(Type.STE_CATEGORY_DETAIL, result.data);
            return result.data;
        }
    }
}