/** 设置导航的标题
 * @param{vm} context 当前上下文this
 * @param{Boolean} showTitle 是否显示title
 * @param{Boolean} showLeftTitle 是否显示左边title
 * @param{String} leftTitle 左边title内容
 * @param{String} back 返回路由路径
 * @return{void} 空
 */
export function siteNavTitle(vm: any, showTitle: boolean, showLeftTitle: boolean, leftTitle: string | string[], back: string = ''): void {
    let type = {
        back,
        showTitle,
        showLeftTitle,
        leftTitle
    }
    vm.$store.commit('SET_NAVBAR_TITLE', type);
}
//防抖
export class Debounce {
    private wait: number
    constructor(wait: number) {
        this.wait = wait
    }
    use(fn: Function) {
        let timeout: any = null;
        return (...args: any[]): void => {
            clearTimeout(timeout)
            timeout = setTimeout(() => {
                fn.call(this, ...args)
            }, this.wait)
        }
    }
}
//节流
export class Throttle {
    private delay: number
    constructor(delay: number) {
        this.delay = delay
    }
    use(fn: Function) {
        var timer: any = null;
        return (...args: any[]) => {
            if (!timer) {
                timer = setTimeout(() => {
                    fn.call(this, ...args);
                    timer = null;
                }, this.delay);
            }
        }
    }
}
// //防抖
// export function debounce(fn: Function, wait: number) {
//     let timeout: any = null;
//     return function (this: any, ...args: any[]) {
//         clearTimeout(timeout)
//         timeout = setTimeout(() => {
//             fn.call(this, ...args)
//         }, wait)
//     }
// }
// //节流
// export function throttle(fn: Function, delay: number) {
//     var timer: any = null;
//     return function (this: any, ...args: any[]) {
//         if (!timer) {
//             timer = setTimeout(() => {
//                 fn.apply(this, args);
//                 timer = null;
//             }, delay);
//         }
//     }
// }