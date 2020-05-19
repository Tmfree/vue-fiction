//获取收藏的文章
const path = require('path')
const dataIO = require('../utils/dataio')
const filterResCode = require('../utils/filterResCode')
async function getCollectBook(data = {}) {
    let { tokenCode } = data
    if (tokenCode !== 0) {
        return filterResCode(-1, '失败', [])
    }
    //数据路径
    let collectFilePath = path.resolve(__dirname, '../mock/collect.json')
    let collectList = await dataIO.find(collectFilePath)
    if (collectList.length > 0) {
        return filterResCode(0, '成功', collectList)
    } else {
        return filterResCode(-1, '失败', [])
    }
}
module.exports = getCollectBook