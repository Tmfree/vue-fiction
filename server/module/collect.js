//收藏
const path = require('path')
const dataIO = require('../utils/dataio')
const filterResCode = require('../utils/filterResCode')
async function postCollect(data = {}) {
    let { bid, collect, tokenCode } = data
    if (tokenCode !== 0) {
        return filterResCode(tokenCode, '失败', null)
    }
    //数据路径
    let collectFilePath = path.resolve(__dirname, '../mock/collect.json')
    if (collect) {
        return dataIO.insert(collectFilePath, { bid }) ? filterResCode(0, '成功', null) : filterResCode(-1, '失败', null)
    } else {
        return dataIO.del(collectFilePath, { bid }) ? filterResCode(0, '成功', null) : filterResCode(-1, '失败', null)
    }
}
module.exports = postCollect