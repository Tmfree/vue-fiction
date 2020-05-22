//获取收藏的文章
const path = require('path')
const dataIO = require('../utils/dataio')
const filterResCode = require('../utils/filterResCode')
async function getCollectBook(data = {}) {
    let { tokenCode } = data
    if (tokenCode !== 0) {
        return filterResCode(-1, '未登录', [])
    }
    //数据路径
    let collectFilePath = path.resolve(__dirname, '../mock/collect.json')
    let collectList = await dataIO.find(collectFilePath)
    return filterResCode(0, '成功', collectList)

}
module.exports = getCollectBook