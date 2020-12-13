const UserCtrl = require('../controler/userControler')
const { HttpSuccess, HttpError } = require('../utils/httpwithjson')
async function userInfo(params = {}) {
    try {
        let { tokenCode } = params
        if (tokenCode == 2000) {
            let result = await UserCtrl.getUserInfo(params)
            return new HttpSuccess('获取成功', result)
        } else {
            return new HttpSuccess('请登录')
        }
    } catch (error) {
        console.log(error)
    }
}
module.exports = userInfo