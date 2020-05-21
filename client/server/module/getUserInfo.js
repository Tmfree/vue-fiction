const path = require('path')
const tool = require('../utils/tool')
const dataIO = require('../utils/dataio')
const filterResCode = require('../utils/filterResCode')
async function userInfo(data = {}) {
    let { token, tokenCode } = data
    if (tokenCode !== 0) {
        return filterResCode(-1, '失败', { isLogin: false })
    }
    let tokenFilePath = path.resolve(__dirname, '../mock/token.json')
    let tokenList = await dataIO.find(tokenFilePath, { token })
    let tokenInfo = tokenList.length > 0 ? tokenList[0] : {}
    if (tool.isEmptyObj(tokenInfo)) {
        let { uid } = tokenInfo
        let userFilePath = path.resolve(__dirname, '../mock/user.json')
        let userList = await dataIO.find(userFilePath, { uid })
        let user = userList.length > 0 ? userList[0] : {}
        if (tool.isEmptyObj(user)) {
            user.isLogin = true
            return filterResCode(0, '成功', user)
        } else {
            return filterResCode(-1, '用户不存在', null)
        }
    }else{
        return filterResCode(-1, '失败', { isLogin: false })
    }
}
module.exports = userInfo