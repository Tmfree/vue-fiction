//获取收藏的文章
const path = require('path')
const dataIO = require('../utils/dataio')
const filterResCode = require('../utils/filterResCode')
async function getLikeBook(data = {}) {
    let { tokenCode } = data
    if (tokenCode !== 0) {
        return filterResCode(-1, '失败', [])
    }
    //数据路径
    let likeFilePath = path.resolve(__dirname, '../mock/like.json')
    let likeList = await dataIO.find(likeFilePath)
    if (likeList.length > 0) {
        return filterResCode(0, '成功', likeList)
    } else {
        return filterResCode(-1, '失败', [])
    }
}
module.exports = getLikeBook