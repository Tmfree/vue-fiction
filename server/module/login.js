//登录
const path = require('path');
const tool = require('../utils/tool')
const userToken = require('../utils/userToken')
const dataIO = require('../utils/dataio')
const filterResCode = require('../utils/filterResCode')
async function login(data = {}) {
    let { username, password, token, tokenCode } = data
    //获取账号
    let accountFilePath = path.resolve(__dirname, '../mock/account.json')
    let accountList = await dataIO.find(accountFilePath, { username })
    let user = accountList.length > 0 ? accountList[0] : {}
    //判断账号是否存在
    if (!tool.isEmptyObj(user)) {
        return filterResCode(-1, '用户名不存在', null)
    }
    //判断密码是否正确
    if (user.password === password) {
        //jwt生成加密token，uid是公文，密钥是“secret”，1小时后过期
        let { uid } = user
        let payload = { uid } //负载信息
        //从数据里拿token
        let tokenFilePath = path.resolve(__dirname, '../mock/token.json')
        let tokenList = await dataIO.find(tokenFilePath, { uid })
        if (tokenList.length > 0) {
            //验证token是否还有效
            let tokenCode = await userToken.verifyToken(tokenList[0].token);
            if (tokenCode !== 0) {
                //更新token
                token = userToken.addToken(payload, { expiresIn: 60 * 60 * 1 })
                dataIO.update(tokenFilePath, { uid }, { token })
            }
            //token还在有效期
            token = tokenList[0].token
        } else {
            token = userToken.addToken(payload, { expiresIn: 60 * 60 * 1 })
            dataIO.insert(tokenFilePath, { uid, token })
        }
        return filterResCode(0, '登录成功', { token })
    } else {
        return filterResCode(-1, '密码错误', null)
    }
}

module.exports = login