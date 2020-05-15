import * as Type from "./type";
import { postLogin, postCollect } from "@/request/api";
import Aes from "@/utils/aes";
import { setToken } from '@/utils/auth'
export default {
    state: {
        isLogin:false,
        loginInfo: null,
        isCollect: false
    },
    mutations: {
        [Type.SET_LOGIN_STATUS](state, data) {
            state.isLogin = data;
        },
        [Type.SET_LOGIN_INFO](state, data) {
            state.loginInfo = data;
        },
        [Type.SET_COLLECT](state, data) {
            state.isCollect = data.isCollect;
        }
    },
    actions: {
        async login({ commit }, data = {}) {
            //md5+aes加密
            data.password = Aes.encrypt(data.password);
            let result = await postLogin(data);
            if (result.data.code == 0){
                setToken(result.data.token);
                commit(Type.SET_LOGIN_STATUS, true);
                commit(Type.SET_LOGIN_INFO, result.data);
            }
            return result.data;
        },
        async collect({ commit }, data = {}) {
            let result = await postCollect(data);
            commit(Type.SET_COLLECT, result.data);
            return result.data;
        }
    }
}