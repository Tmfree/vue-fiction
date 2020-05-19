import * as Type from './type'
import { getBookInfo, getArticle, getBookCatalog } from "@/request/api"
export default {
    state: {
        bookInfo: {},
        bookCatalog: {},
        articleContent: {}
    },
    mutations: {
        [Type.SET_BOOK_INFO](state, data) {
            state.bookInfo = data;
        },
        [Type.SET_BOOK_CATALOG](state, data) {
            state.bookCatalog = data;
        },
        [Type.SET_ARTICLE](state, data) {
            state.articleContent = data;
        },
    },
    actions: {
        async getBookInfo({ commit }, data = {}) {
            let result = await getBookInfo(data);
            commit(Type.SET_BOOK_INFO, result);
            return result;
        },
        async getBookCatalog({ commit }, data = {}) {
            let result = await getBookCatalog(data);
            commit(Type.SET_BOOK_CATALOG, result);
            return result;
        },
        async getArticle({ commit }, data = {}) {
            let result = await getArticle(data);
            commit(Type.SET_ARTICLE, result);
            return result;
        }
    }
}