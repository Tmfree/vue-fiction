//收藏
const UserCtrl = require('../controler/userControler')
const { HttpSuccess, HttpError } = require('../utils/httpwithjson')
async function getCollectList(params = {}) {
    try {
        let { tokenCode } = params
        if (tokenCode == 4001) {
            return new HttpError(tokenCode, '请登录')
        } else {
            await UserCtrl.delCollect(params)
            return new HttpSuccess('取消关注')
        }
    } catch (error) {
        console.log(error)
    }

}
module.exports = getCollectList