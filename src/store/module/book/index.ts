import { book } from './interface'
import * as Type from './type'
import { ActionTree, MutationTree } from 'vuex'
import { getBookInfo, getArticle, getBookCatalog } from "@/request/api"
let state: book = {
    bookInfo: {},
    bookCatalog: {},
    articleContent: {}
}
let mutations: MutationTree<book> = {
    [Type.SET_BOOK_INFO](state, data) {
        state.bookInfo = data;
    },
    [Type.SET_BOOK_CATALOG](state, data) {
        state.bookCatalog = data;
    },
    [Type.SET_ARTICLE](state, data) {
        state.articleContent = data;
    },
}
let actions: ActionTree<book, any> = {
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
export default {
    state,
    mutations,
    actions
}