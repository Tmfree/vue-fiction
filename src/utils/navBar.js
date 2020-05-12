/** 设置导航的标题
 * @param{vm} context 当前上下文this
 * @param{Boolean} showTitle 是否显示title
 * @param{Boolean} showLeftTitle 是否显示左边title
 * @param{String} leftTitle 左边title内容
 * @return{void} 空
 */
export let siteNavTitle = function (vm, showTitle, showLeftTitle, leftTitle) {
    let type = {
        showTitle,
        showLeftTitle,
        leftTitle,
    }
    vm.$store.commit('SET_NAVBAR_TITLE', type);
}