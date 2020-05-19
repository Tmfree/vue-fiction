/** 设置导航的标题
 * @param{vm} context 当前上下文this
 * @param{Boolean} showTitle 是否显示title
 * @param{Boolean} showLeftTitle 是否显示左边title
 * @param{String} leftTitle 左边title内容
 * @param{String} back 返回路由
 * @return{void} 空
 */
export function siteNavTitle(vm, showTitle, showLeftTitle, leftTitle, back='') {
    let type = {
        back,
        showTitle,
        showLeftTitle,
        leftTitle
    }
    vm.$store.commit('SET_NAVBAR_TITLE', type);
}
//防抖
export function debounce(fn, wait) {
    let timeout = null;
    return function (...args) {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            fn.call(this, ...args)
        }, wait)
    }
}
//节流
export function throttle(func, delay) {
    var timer = null;
    return function () {
        var context = this;
        var args = arguments;
        if (!timer) {
            timer = setTimeout(function () {
                func.apply(context, args);
                timer = null;
            }, delay);
        }
    }
}