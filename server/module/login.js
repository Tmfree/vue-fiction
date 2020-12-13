//登录
const UserCtrl = require('../controler/userControler')
const { HttpSuccess, HttpError } = require('../utils/httpwithjson')
const userToken = require('../utils/userToken')
async function login(params = {}) {
    try {
        let { account, password } = params
        let { uId, uAccount, uPassword } = await UserCtrl.getUser(params)
        // 判断用户名密码是否匹配
        let checkUser = account == uAccount && password == uPassword
        if (checkUser) {
            let payload = { uId, uAccount, uPassword }
            let token = userToken.addToken(payload, '1h')
            return new HttpSuccess('登录成功', { token, uId })
        } else {
            return new HttpError(4000, '账号或密码错误')
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = login