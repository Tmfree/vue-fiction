import { base } from "./interface";
import * as Type from './type';
import { ActionTree, MutationTree } from "vuex";

let state: base = {
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
};
let mutations: MutationTree<base> = {
    [Type.SET_NAVBAR_TITLE](state, data) {
        state.navBar = data
    },
    [Type.SET_SEARCHKW](state, data) {
        state.searchKW = data
    }
}
let actions: ActionTree<base, any> = {
}
export default { state, mutations, actions }