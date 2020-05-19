import * as Type from './type';
import { getLunbo, getHotFiction, getFreeFiction, getNewFiction, getCategoryDetail, getSearch } from "@/request/api"
export default {
    state: {
        lunboList: [],
        hotFictionList: [],
        freeFictionList: [],
        newFictionList: [],
        qingFictionList: [],
        searchList: [],
        navBar: {
            showTitle: true,
            showLeftTitle: true,
            leftTitle: ""
        },
        searchKW: ""
    },
    mutations: {
        [Type.SET_LUNBO_LIST](state, data) {
            state.lunboList = data
        },
        [Type.SET_HOTFICTION_LIST](state, data) {
            state.hotFictionList = data
        },
        [Type.SET_FREEFICTION_LIST](state, data) {
            state.freeFictionList = data
        },
        [Type.SET_NEWFICTION_LIST](state, data) {
            state.newFictionList = data
        },
        [Type.SET_QINGFICTION_LIST](state, data) {
            state.qingFictionList = data
        },
        [Type.SET_NAVBAR_TITLE](state, data) {
            state.navBar = data
        },
        [Type.SET_SEARCH](state, data) {
            state.searchList = data
        },
        [Type.SET_SEARCHKW](state, data) {
            state.searchKW = data
        },
    },
    actions: {
        async getLunbo({ commit }, data = {}) {
            let result = await getLunbo(data);
            commit(Type.SET_LUNBO_LIST, result)
            return result
        },
        async getHotFiction({ commit }, data = {}) {
            let result = await getHotFiction(data)
            commit(Type.SET_HOTFICTION_LIST, result)
            return result
        },
        async getFreeFiction({ commit }, data = {}) {
            let result = await getFreeFiction(data);
            commit(Type.SET_FREEFICTION_LIST, result)
            return result
        },
        async getNewFiction({ commit }, data = {}) {
            let result = await getNewFiction(data);
            commit(Type.SET_NEWFICTION_LIST, result.data.records)
            return result.data.records
        },
        async getQingFiction({ commit }, data = {}) {
            let result = await getCategoryDetail(data);
            commit(Type.SET_QINGFICTION_LIST, result.data.records)
            return result.data.records
        },
        async getSearch({ commit }, data = {}) {
            let result = await getSearch(data)
            commit(Type.SET_SEARCH, result)
            return result
        },
    }
}