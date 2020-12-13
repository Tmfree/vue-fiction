const BookCntl = require('../controler/bookControler')
async function getBookModule(params = {}) {
    let { tokenCode } = params
    //已登录
    if (tokenCode == 0) {
    }
    let result = await BookCntl.getBookDetail(params)
    //未登录
    return result
}

module.exports = getBookModule