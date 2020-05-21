import { rank } from './interface'
import * as Type from './type'
import { ActionTree, MutationTree } from 'vuex'
import { getRank, getRankDetail } from "@/request/api"
let state: rank = {
    rank: [],
    rankDetail: []
}
let mutations: MutationTree<rank> = {
    [Type.SET_RANK](state, data) {
        state.rank = data;
    },
    [Type.SET_RANK_DETAIL](state, data) {
        state.rankDetail = data;
    }
}
let actions: ActionTree<rank, any> = {
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
export default {
    state,
    mutations,
    actions
}