import * as Type from './type'
import { getBookInfo, getArticle } from "@/request/api"
export default {
    state: {
        bookInfo: {},
        articleContent: {}
    },
    mutations: {
        [Type.SET_BOOK_INFO](state, data) {
            state.bookInfo = data;
        },
        [Type.SET_ARTICLE](state, data) {
            state.articleContent = data;
        },
    },
    actions: {
        async getBookInfo({ commit }, data = {}) {
            let result = await getBookInfo(data);
            commit(Type.SET_BOOK_INFO, result.data);
        },
        async getArticle({ commit }, data = {}) {
            let result = await getArticle(data);
            commit(Type.SET_ARTICLE, result.data);
        }
    }
}