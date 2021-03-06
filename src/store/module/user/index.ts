import { Iuser } from './interface'
import * as Type from "./type";
import { ActionTree, MutationTree } from 'vuex'
import Ajax from "@/request/api";
import Aes from "@/utils/aes";
import { setToken } from '@/utils/auth'
let state: Iuser = {
    isLogin: false,
    loginInfo: {},
    isCollect: false,
    userInfo: {
        uid: "",
        nickName: "",
        avatar: "",
        isLogin: false
    },
    collectList: [],
    likeList: []
}
let mutations: MutationTree<Iuser> = {
    [Type.SET_LOGIN_STATUS](state, data) {
        state.isLogin = data;
    },
    [Type.SET_LOGIN_INFO](state, data) {
        state.loginInfo = data;
    },
    [Type.SET_USER_INFO](state, data) {
        state.userInfo = data
    },
    [Type.SET_COLLECT_LIST](state, data) {
        state.collectList = data
    },
    [Type.SET_LIKE_LIST](state, data) {
        state.likeList = data
    }
}
let actions: ActionTree<Iuser, any> = {
    async login({ commit }, data = {}) {
        //md5+aes加密
        data.password = Aes.encrypt(data.password);
        let result = await Ajax.login(data);
        if (result.code == 0) {
            setToken('User-Token', result.data.token);
            commit(Type.SET_LOGIN_STATUS, true);
            commit(Type.SET_LOGIN_INFO, result);
        }
        return result;
    },
    async getUserInfo({ commit }, data = {}) {
        let result = await Ajax.getUserInfo(data);
        commit(Type.SET_USER_INFO, result);
        return result;
    },
    async getCollectList({ commit }, data = {}) {
        let result = await Ajax.getCollectList(data);
        commit(Type.SET_COLLECT_LIST, result.data);
        return result;
    },
    async getLikeList({ commit }, data = {}) {
        let result = await Ajax.getLikeList(data);
        commit(Type.SET_LIKE_LIST, result.data);
        return result;
    }
}
export default {
    state,
    mutations,
    actions
}