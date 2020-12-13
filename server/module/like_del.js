//收藏
const UserCtrl = require('../controler/userControler')
const { HttpSuccess, HttpError } = require('../utils/httpwithjson')
async function delLike(params = {}) {
    try {
        let { tokenCode } = params
        if (tokenCode == 4001) {
            return new HttpError(tokenCode, '请登录')
        } else {
            await UserCtrl.delLike(params)
            return new HttpSuccess('取消关注')
        }
    } catch (error) {
        console.log(error)
    }

}
module.exports = delLike