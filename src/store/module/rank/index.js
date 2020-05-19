import * as Type from './type'
import { getRank, getRankDetail } from "@/request/api"
export default {
    state: {
        rank: [],
        rankDetail:[]
    },
    mutations: {
        [Type.SET_RANK](state, data) {
            state.rank = data;
        },
        [Type.SET_RANK_DETAIL](state, data) {
            state.rankDetail = data;
        }
    },
    actions: {
        async getRank({ commit }, data = {}) {
            let result = await getRank(data);
            commit(Type.SET_RANK, result);
            return result;
        },
        async getRankDetail({ commit }, data = {}) {
            let result = await getRankDetail(data);
            commit(Type.SET_RANK_DETAIL, result);
            return result;
        }
    }
}